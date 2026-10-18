export interface MarkdownBlock { language: string; text: string; offset: number; end: number; closed: boolean }
/** Read top-level Markdown fences; fenced examples cannot introduce nested declarations. */
export function markdownBlocks(text: string, offset = 0): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  let open: { fence: string; language: string; offset: number } | undefined;
  let at = offset;
  for (const line of text.slice(offset).match(/[^\n]*(?:\n|$)/g) ?? []) {
    if (!line) continue;
    if (!open) {
      const match = /^ {0,3}(`{3,}|~{3,})([^\r\n]*)/.exec(line);
      if (match) open = { fence: match[1], language: match[2].trim(), offset: at + line.length };
    } else if (new RegExp(`^ {0,3}${open.fence[0]}{${open.fence.length},}\\s*$`).test(line.trimEnd())) {
      blocks.push({ language: open.language, text: text.slice(open.offset, at), offset: open.offset, end: at + line.length, closed: true });
      open = undefined;
    }
    at += line.length;
  }
  if (open) blocks.push({ language: open.language, text: text.slice(open.offset), offset: open.offset, end: at, closed: false });
  return blocks;
}

/** Locate rules declarations with the same fence boundaries as the case checker. */
export function rulesBlocks(text: string, offset = 0): { blocks: { text: string; start: number }[]; unclosed: boolean } {
  const blocks = markdownBlocks(text, offset).filter(block => block.language === "rules");
  return { blocks: blocks.map(block => ({ text: block.text, start: block.offset })), unclosed: blocks.some(block => !block.closed) };
}

/** Read the shared declaration prefix, distinguishing fragment references from comments. */
export function ruleDeclaration(line: string): { instance?: string; reference: string; referenceStart: number; tail: string; negated: boolean } | undefined {
  const match = /^\s*(?:([\p{L}\p{N}_.-]+|"(?:[^"\\]|\\.)*"):\s+)?((?:not\s+)*)([^\s]+)/u.exec(line);
  if (!match || match[3] === "#") return undefined;
  const referenceStart = match[0].length - match[3].length;
  return { instance: match[1], reference: match[3], referenceStart, tail: line.slice(match[0].length), negated: (match[2].match(/not\s+/g)?.length ?? 0) % 2 === 1 };
}
