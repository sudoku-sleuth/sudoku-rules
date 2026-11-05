import {expect,test} from 'bun:test';
import {run,rulesOf} from '../helpers/canonicalise';

test('touching whisper pieces of one drawn line become one line, whichever way a piece is written',()=>{
 const pieces=['whispers r1c1-r1c2 gap 4 loop false element "a"','whispers r1c2-r1c3 gap 4 loop false element "a"','whispers r1c4-r1c3 gap 4 loop false element "a"'];
 const result=run(pieces.join('\n'));
 const written='whispers r1c1-r1c2-r1c3-r1c4 gap 4 loop false element "a"';
 expect(rulesOf(result.text)).toBe(written);
 expect(result.rewrites).toEqual([{template:'join-line-pieces whispers',replaced:pieces,written:[written]}]);
 expect(result.kept).toEqual([]);
});

test('touching parity pieces join, and a spelling of the rule is kept as written',()=>{
 const result=run('parity r1c1-r1c2\nparity r1c2-r1c3\nunique r4c4-r4c5');
 expect(rulesOf(result.text)).toBe('parity r1c1-r1c2-r1c3\nunique r4c4-r4c5');
 expect(result.rewrites.map(r=>r.template)).toEqual(['join-line-pieces parity-line']);
});

test('pieces tied to different drawn elements are never merged',()=>{
 const lines=['whispers r1c1-r1c2 gap 4 loop false element "a"','whispers r1c2-r1c3 gap 4 loop false element "b"'].join('\n');
 const result=run(lines);
 expect(rulesOf(result.text)).toBe(lines);
 expect(result.kept).toHaveLength(1);
 expect(result.kept[0].reason).toBe('the pieces are tied to different drawn elements');
});

test('pieces that branch, or close a loop, are refused',()=>{
 const branch=['parity r1c1-r1c2','parity r1c2-r1c3','parity r1c2-r2c2'].join('\n');
 const branched=run(branch);
 expect(rulesOf(branched.text)).toBe(branch);
 expect(branched.kept[0].reason).toBe('the pieces branch, cross or repeat a cell');
 const ring=['parity r1c1-r1c2','parity r1c2-r2c2','parity r2c2-r2c1','parity r2c1-r1c1'].join('\n');
 expect(run(ring).kept[0].reason).toBe('the pieces close a loop');
});

test('pieces with different settings are different lines and stay apart',()=>{
 const lines='whispers r1c1-r1c2 gap 4 loop false\nwhispers r1c2-r1c3 gap 5 loop false';
 const result=run(lines);
 expect(rulesOf(result.text)).toBe(lines);
 expect(result).toMatchObject({rewrites:[],kept:[]});
});

test('a value binding leaves the proof unable to rewrite whisper pieces',()=>{
 const lines='whispers r1c1-r1c2 gap 4 loop false\nwhispers r1c2-r1c3 gap 4 loop false\nvalue-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [["r1c1"]] distinct false';
 const result=run(lines);
 expect(rulesOf(result.text)).toBe(lines);
 expect(result.rewrites).toEqual([]);
 expect(result.kept[0].reason).toContain('not proven');
});

test('canonical output is unchanged by another pass',()=>{
 const first=run('parity r1c1-r1c2\nparity r1c2-r1c3');
 const second=run(rulesOf(first.text));
 expect(second.text).toBe(first.text);
 expect(second.rewrites).toEqual([]);
});
