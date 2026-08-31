import { cp, mkdir, mkdtemp, readdir, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { build } from "vite";
import { sites } from "@openai/sites-vite-plugin";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const scratch = await mkdtemp(join(tmpdir(), "cfiw-hosted-review-"));
const dist = join(root, "dist");
const sourceFiles = ["app", "components", "lib", "public", "package.json", "package-lock.json", "tsconfig.json", "tailwind.config.ts", "postcss.config.mjs", "next-env.d.ts", ".eslintrc.json"];

async function findPages(folder, prefix = "") {
  const routes = [];
  for (const item of await readdir(folder, { withFileTypes: true })) {
    if (item.isDirectory()) routes.push(...await findPages(join(folder, item.name), `${prefix}/${item.name}`));
    else if (item.name === "page.tsx") routes.push(prefix || "/");
  }
  return routes;
}

try {
  // Only application files enter this isolated build: no local .env, PDFs or source-control data.
  for (const file of sourceFiles) await cp(join(root, file), join(scratch, file), { recursive: true });
  await symlink(join(root, "node_modules"), join(scratch, "node_modules"), "dir");
  await writeFile(join(scratch, "next.config.mjs"), 'export default { output: "export", trailingSlash: true, images: { unoptimized: true } };\n');
  const next = spawnSync(process.execPath, [join(root, "node_modules/next/dist/bin/next"), "build"], { cwd: scratch, stdio: "inherit", env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" } });
  if (next.status !== 0) throw new Error("The review website build did not complete.");
  const routes = await findPages(join(root, "app"));
  await build({
    root,
    configFile: false,
    publicDir: false,
    plugins: [sites()],
    define: { __REVIEW_ROUTES__: JSON.stringify(routes) },
    build: {
      outDir: dist,
      emptyOutDir: true,
      target: "es2022",
      sourcemap: false,
      lib: { entry: join(root, "scripts/review-worker.mjs"), formats: ["es"], fileName: () => "server/index.js" },
    },
  });
  await mkdir(join(dist, "client"), { recursive: true });
  await cp(join(scratch, "out"), join(dist, "client"), { recursive: true });
  await writeFile(join(dist, "client/robots.txt"), "User-agent: *\nDisallow: /\n");
  console.log(`Hosted review ready: ${routes.length} website pages, with indexing disabled.`);
} finally {
  await rm(scratch, { recursive: true, force: true });
}
