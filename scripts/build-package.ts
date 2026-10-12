import { chmod, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
const declarations = Bun.spawn(["bun", "x", "--no-install", "tsc", "--emitDeclarationOnly"], { stdout: "inherit", stderr: "inherit" });
if (await declarations.exited !== 0) process.exit(1);
for (const [entrypoint, target] of [["src/index.ts", "browser"], ["src/cli.ts", "node"]] as const) {
  const result = await Bun.build({ entrypoints: [entrypoint], outdir: "dist", target, format: "esm", sourcemap: "external" });
  if (!result.success) { console.error(result.logs); process.exit(1); }
}
await chmod("dist/cli.js", 0o755);
console.log("Built portable package and openrules CLI → dist/");
