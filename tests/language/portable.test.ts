import { expect, test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

test("the browser bundle parses and checks in a realm with no Node, DOM or fetch globals", async () => {
  const directory = await mkdtemp(join(tmpdir(), "open-rules-portable-"));
  try {
    const built = await Bun.build({ entrypoints: ["src/index.ts"], target: "browser", format: "esm" });
    expect(built.success).toBe(true);
    const code = await built.outputs[0].text();
    expect(code).not.toMatch(/(?:from|import)\s*[( ]\s*["']node:/);
    const bundle = join(directory, "core.js");
    await writeFile(bundle, code);
    const prelude = await readFile("rules/predicates.md", "utf8");
    const script = `
      import { readFileSync } from 'node:fs';
      import { createContext, SourceTextModule } from 'node:vm';
      const core = new SourceTextModule(readFileSync(process.argv[1], 'utf8'), {context:createContext({URL})});
      await core.link(() => {throw new Error('Unexpected import')});
      await core.evaluate();
      const prelude = core.namespace.compilePrelude({file:'prelude.md',text:${JSON.stringify(prelude)}});
      if (prelude.diagnostics.length) throw new Error(JSON.stringify(prelude.diagnostics));
      const parsed = core.namespace.parseFormula('forall c in C: D(c)>0');
      const checked = core.namespace.checkFormula(parsed.value, prelude.value.environment);
      if (checked.diagnostics.length) throw new Error(JSON.stringify(checked.diagnostics));
      const compiled = core.namespace.compileCase({file:'example.md',text:'---\\nformat: open-rules\\ntitle: Example\\nsetter: Example\\nsource: ""\\ncase: ""\\nlibrary: https://rules.sudoku-sleuth.com/\\nstatus: read\\nboard: {rows: 1, cols: 2, symbols: [1,2]}\\n---\\n' + String.fromCharCode(96).repeat(3)+'rules\\nthermo r1c1-r1c2\\n'+String.fromCharCode(96).repeat(3)});
      if (!compiled.value) throw new Error(JSON.stringify(compiled.diagnostics));
      const rule=compiled.value.rules[0];
      if(core.namespace.evaluate(rule,{digits:new Map([['r1c1',1],['r1c2',2]])}).status!=='holds')throw new Error('Browser evaluation failed');
      const candidates=core.namespace.allowed(rule,{digits:{}},new Map());
      if(candidates.get('r1c1').size!==1||!candidates.get('r1c1').has(1))throw new Error('Browser candidate support failed');
      console.log(core.namespace.printExact(core.namespace.arithmetic('+',core.namespace.exact('0.1'),core.namespace.exact('0.2'))));
    `;
    const process = Bun.spawn(["node", "--no-warnings", "--experimental-vm-modules", "--input-type=module", "-e", script, bundle], { stdout: "pipe", stderr: "pipe" });
    const [stdout, stderr] = await Promise.all([new Response(process.stdout).text(), new Response(process.stderr).text()]);
    expect(stderr).toBe("");
    expect(await process.exited).toBe(0);
    expect(stdout.trim()).toBe("3/10");
  } finally { await rm(directory, { recursive: true, force: true }); }
});
