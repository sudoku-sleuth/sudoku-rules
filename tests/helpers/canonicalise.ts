import type {BoardContext,Cell} from '../../src';
import {canonicalise} from '../../src';

/** The standard 9x9 board the proofs run on, with the case header declaring it. */
export const cells=(n=9):Cell[]=>Array.from({length:n*n},(_,i)=>`r${Math.floor(i/n)+1}c${i%n+1}` as Cell);
export const board:BoardContext={rows:9,cols:9,alphabet:[1,2,3,4,5,6,7,8,9],activeCells:cells()};
export const caseFile=(rules:string,extra='')=>({file:'case.rules.md',text:`---\nformat: open-rules\ntitle: Canonical rewrite\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\nboard: {rows: 9, cols: 9, symbols: [1,2,3,4,5,6,7,8,9]}\n${extra}---\n\nSome notes before the rules.\n\n\`\`\`rules\n${rules}\n\`\`\`\n\nClosing words after the rules.\n`});
export const run=(rules:string,extra='')=>canonicalise(caseFile(rules,extra),board);
export const rulesOf=(text:string)=>/```rules\n([\s\S]*?)```/.exec(text)![1].trimEnd();
