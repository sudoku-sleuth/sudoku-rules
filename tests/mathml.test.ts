import { expect, test } from "bun:test";
import { readFile, readdir } from "node:fs/promises";
import { renderMath } from "../scripts/mathml";
import { renderMarkdown } from "../scripts/content";
import { formulaBlocks, parseFormula } from "../src/index";

test("Dispatch token formatting distinguishes variables, called terms, numbers and operators", () => {
  const html = renderMath("∀cells∈C: distinctAt(cells,D) ∧ |V(r1c4) - V(r1c5)| >= 5");
  expect(html).toContain('<mi mathvariant="italic">cells</mi>');
  expect(html).toContain('<mi mathvariant="normal">distinctAt</mi>');
  expect(html).toContain('<mi mathvariant="italic">r1c4</mi>');
  expect(html).toContain('<mn>5</mn>');
  expect(html).toContain('<mo>−</mo>');
  expect(html).toContain('<mo>≥</mo>');
  expect(html).toContain('aria-label="∀cells∈C: distinctAt(cells,D) ∧ |V(r1c4) - V(r1c5)| &gt;= 5"');
  expect(html).toContain('<summary>Plain-text formula</summary>');
  expect(html).not.toContain('<script');
});

test("AST spans preserve authored grouping, strings, aggregates and multiline formulae", () => {
  const source = 'Σ_{c∈cells} (V(c)+1) >= 3 ∧ axis="column"';
  expect(parseFormula(source).diagnostics).toEqual([]);
  const html = renderMath(source);
  expect(html).toContain('<mo>Σ</mo><mo>_</mo><mo>{</mo>');
  expect(html).toContain('<mo>(</mo><mi mathvariant="italic">V</mi>');
  expect(html).toContain('<mtext>&quot;column&quot;</mtext>');
  expect(html).toContain(source.replaceAll('"', '&quot;').replaceAll('>', '&gt;'));
  const rows = renderMath('x + 1 = 2\ny = 3');
  expect(rows.match(/<mtr>/g)).toHaveLength(2);
  expect(renderMath('[1,N) = [1,N)')).toContain('<math ');
});

test("all public rule formula blocks parse and render with native MathML and a text view", async () => {
  let count = 0;
  for (const file of await readdir("rules")) {
    if (!file.endsWith('.md') || ['predicates.md', 'syntax.md', 'README.md'].includes(file)) continue;
    const text = await readFile(`rules/${file}`, "utf8");
    for (const block of formulaBlocks({ file, text })) {
      if (/^(?:play\s+)?(?:input|primitive|term|type)\s/m.test(block.text)) continue;
      expect(parseFormula(block.text).diagnostics).toEqual([]);
      expect(renderMarkdown("```" + block.language + "\n" + block.text + "\n```")).toContain("<math ");
      const html = renderMath(block.text);
      expect(html).toContain('<math xmlns="http://www.w3.org/1998/Math/MathML"');
      expect(html).toContain('<annotation encoding="text/plain">');
      expect(html).toContain('class="math-plain"');
      count++;
    }
  }
  expect(count).toBe(102);
});

test("unsupported symbols and unbalanced prose math use escaped plain text", () => {
  for (const source of ['x … y', 'f(x']) {
    const html = renderMath(source);
    expect(html).not.toContain('<math ');
    expect(html).not.toContain('<script>');
    expect(html).toContain('class="math-plain"');
  }
  expect(renderMath('<script>alert(1)</script>')).not.toContain('<script>');
});

test("rule lines are labelled code in fences, embedded case examples and prose", () => {
  const line = 'whispers r1c4-r1c5 gap 5';
  for (const source of ['```rules\n'+line+'\n```', '````markdown\n---\ntitle: Example\n---\n\n```rules\n'+line+'\n```\n````', 'Write `'+line+'`.']) {
    const html = renderMarkdown(source, new Set(['whispers']));
    expect(html).toContain('class="code-label">rules</span>');
    expect(html).toContain('class="language-rules"');
    expect(html).toContain('aria-label="Rules" tabindex="0"');
    expect(html).toContain(line);
  }
  const html = renderMarkdown('```rules\n<script>alert(1)</script>\n```');
  expect(html).not.toContain('<script>');
  expect(html).toContain('&lt;script&gt;');
});
