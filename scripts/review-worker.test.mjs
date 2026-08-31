import assert from "node:assert/strict";
import test from "node:test";
import { makeReviewHandler } from "./review-worker.mjs";

const worker = makeReviewHandler(["/", "/book"]);
const env = { ASSETS: { fetch: async (request) => new Response(request.method === "HEAD" ? null : "Website", { headers: { "Content-Type": "text/html" } }) } };
const request = (path, method = "GET") => new Request(`https://review.example${path}`, { method });

test("serves pages with review-only security headers", async () => {
  const result = await worker.fetch(request("/"), env);
  assert.equal(result.status, 200);
  assert.equal(await result.text(), "Website");
  assert.equal(result.headers.get("X-Robots-Tag"), "noindex, nofollow, noarchive");
  assert.equal(result.headers.get("X-Content-Type-Options"), "nosniff");
});
test("normalizes page links without losing programme query", async () => {
  const result = await worker.fetch(request("/book?programme=meditation"), env);
  assert.equal(result.status, 308);
  assert.equal(result.headers.get("Location"), "https://review.example/book/?programme=meditation");
});
test("blocks hidden files and malformed paths", async () => {
  for (const path of ["/.env", "/.git/config", "/.openai/hosting.json"]) assert.equal((await worker.fetch(request(path), env)).status, 404);
  assert.equal((await worker.fetch(request("/%FF"), env)).status, 400);
});
test("does not accept server-side form submissions", async () => {
  const result = await worker.fetch(request("/book/", "POST"), env);
  assert.equal(result.status, 405);
  assert.equal(result.headers.get("Allow"), "GET, HEAD");
});
test("robots discourages indexing and HEAD has no body", async () => {
  assert.equal(await (await worker.fetch(request("/robots.txt"), env)).text(), "User-agent: *\nDisallow: /\n");
  assert.equal(await (await worker.fetch(request("/robots.txt", "HEAD"), env)).text(), "");
});
test("unknown routes return the branded 404 with a real 404 status", async () => {
  const assets = { ASSETS: { fetch: async (req) => new URL(req.url).pathname === "/404.html" ? new Response("CFIW page not found") : new Response(null, { status: 404 }) } };
  const result = await worker.fetch(request("/missing/"), assets);
  assert.equal(result.status, 404);
  assert.equal(await result.text(), "CFIW page not found");
});
test("missing asset binding fails closed", async () => {
  assert.equal((await worker.fetch(request("/"), {})).status, 503);
});
