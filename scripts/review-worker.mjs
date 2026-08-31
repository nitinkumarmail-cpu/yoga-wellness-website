/** Cloudflare Worker adapter for the existing Next.js site's static review export. */
export function makeReviewHandler(routes) {
  const pages = new Set(routes);
  const secure = (response) => {
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  };
  return {
    async fetch(request, env) {
      const url = new URL(request.url);
      if (!["GET", "HEAD"].includes(request.method)) return secure(new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } }));
      let path;
      try { path = decodeURIComponent(url.pathname); } catch { return secure(new Response(null, { status: 400 })); }
      if (path.split("/").some((part) => part.startsWith("."))) return secure(new Response(null, { status: 404 }));
      if (path === "/robots.txt") return secure(new Response(request.method === "HEAD" ? null : "User-agent: *\nDisallow: /\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } }));
      if (path !== "/" && !path.endsWith("/") && pages.has(path)) {
        url.pathname += "/";
        return secure(new Response(null, { status: 308, headers: { Location: url.href } }));
      }
      if (!env?.ASSETS?.fetch) return secure(new Response("The review site is temporarily unavailable.", { status: 503 }));
      const response = await env.ASSETS.fetch(request);
      if (response.status !== 404) return secure(response);
      const errorUrl = new URL("/404.html", url);
      const notFound = await env.ASSETS.fetch(new Request(errorUrl, { method: request.method }));
      return secure(new Response(notFound.status === 200 ? notFound.body : null, { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }));
    },
  };
}

const routes = typeof __REVIEW_ROUTES__ === "undefined" ? [] : __REVIEW_ROUTES__;
export default makeReviewHandler(routes);
