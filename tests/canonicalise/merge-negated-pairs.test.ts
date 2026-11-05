import {expect,test} from 'bun:test';
import {run,rulesOf} from '../helpers/canonicalise';

const negative='{"op":"difference","value":1}';
const square=['not pair r1c1-r1c2 difference 1','not pair r1c1-r2c1 difference 1','not pair r2c1-r2c2 difference 1','not pair r1c2-r2c2 difference 1'];

test('one not pair per orthogonal edge becomes one negative limited to those cells',()=>{
 const result=run(square.join('\n'));
 const written=`negative relations [${negative}] except [] within [r1c1-r1c2-r2c1-r2c2]`;
 expect(rulesOf(result.text)).toBe(written);
 expect(result.rewrites).toEqual([{template:'merge-negated-pairs negative',replaced:square,written:[written]}]);
 expect(result.kept).toEqual([]);
});

test('a missing edge is a near miss and the pairs are kept as written',()=>{
 const lines=square.slice(0,3).join('\n');
 const result=run(lines);
 expect(rulesOf(result.text)).toBe(lines);
 expect(result.rewrites).toEqual([]);
 expect(result.kept).toEqual([{template:'merge-negated-pairs negative',declarations:square.slice(0,3),reason:'the pairs do not cover every orthogonal edge between their cells'}]);
});

test('pairs tied to different drawn elements are never merged',()=>{
 const lines=['not pair r1c1-r1c2 difference 1 element "a"','not pair r1c2-r1c3 difference 1 element "b"'].join('\n');
 const result=run(lines);
 expect(rulesOf(result.text)).toBe(lines);
 expect(result.kept[0].reason).toBe('the pairs are tied to different drawn elements');
});

test('the guard refuses while the file binds a value',()=>{
 const lines=[...square,'value-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [["r1c1"]] distinct false'].join('\n');
 const result=run(lines);
 expect(rulesOf(result.text)).toBe(lines);
 expect(result.rewrites).toEqual([]);
 expect(result.kept).toHaveLength(1);
 expect(result.kept[0].reason).toContain('binds');
});

test('a label read elsewhere keeps its declaration, and an unread label goes with its pairs',()=>{
 const pairs=['a: not pair r1c1-r1c2 difference 1','b: not pair r1c2-r1c3 difference 1'];
 const read=run([...pairs,'decoration r2c1 note "see b"'].join('\n'));
 expect(read.rewrites).toEqual([]);
 expect(read.kept[0].reason).toBe('the label b is used elsewhere in the file');
 const unread=run([...pairs,'decoration r2c1 note "grey"'].join('\n'));
 expect(rulesOf(unread.text)).toBe(`a: negative relations [${negative}] except [] within [r1c1-r1c2-r1c3]\ndecoration r2c1 note "grey"`);
});

test('canonical output is unchanged by another pass',()=>{
 const first=run(square.join('\n'));
 const second=run(rulesOf(first.text));
 expect(second.text).toBe(first.text);
 expect(second.rewrites).toEqual([]);
});
