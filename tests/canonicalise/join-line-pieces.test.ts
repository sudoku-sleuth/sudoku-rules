import {expect,test} from 'bun:test';
import {run,rulesOf,caseFile,board} from '../helpers/canonicalise';
import {canonicalise} from '../../src';
import {declarationLibrary} from '../../src/declaration-library';

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

test('pieces that branch join into one network, and pieces that close a loop are refused',()=>{
 const branch=['parity r1c1-r1c2','parity r1c2-r1c3','parity r1c2-r2c2'].join('\n');
 const branched=run(branch);
 expect(rulesOf(branched.text)).toBe('parity line [] edges [["r1c1","r1c2"],["r1c2","r1c3"],["r1c2","r2c2"]]');
 expect(branched.rewrites.map(r=>r.template)).toEqual(['join-line-pieces parity-line']);
 expect(branched.kept).toEqual([]);
 const ring=['parity r1c1-r1c2','parity r1c2-r2c2','parity r2c2-r2c1','parity r2c1-r1c1'].join('\n');
 expect(run(ring).kept[0].reason).toBe('the pieces close a loop');
});

test('whisper pieces that meet at a middle cell join into one network',()=>{
 const result=run(['whispers r1c1-r1c2-r1c3 gap 5 loop false','whispers r2c2-r1c2 gap 5 loop false'].join('\n'));
 expect(rulesOf(result.text)).toBe('whispers line [] edges [["r1c1","r1c2"],["r1c2","r1c3"],["r2c2","r1c2"]] gap 5 loop false');
 expect(result.kept).toEqual([]);
});

test('two pieces that cross at a middle cell join into one network',()=>{
 const result=run(['parity r2c1-r2c2-r2c3','parity r1c2-r2c2-r3c2'].join('\n'));
 expect(rulesOf(result.text)).toBe('parity line [] edges [["r2c1","r2c2"],["r2c2","r2c3"],["r1c2","r2c2"],["r2c2","r3c2"]]');
 expect(result.rewrites.map(r=>r.template)).toEqual(['join-line-pieces parity-line']);
 expect(result.kept).toEqual([]);
});

test('a repeated edge, in either direction, is refused with its own reason',()=>{
 for(const again of ['parity r1c2-r1c3','parity r1c3-r1c2']){
  const lines=['parity r1c1-r1c2','parity r1c2-r1c3','parity r1c2-r2c2',again].join('\n');
  const result=run(lines);
  expect(rulesOf(result.text)).toBe(lines);
  expect(result.rewrites).toEqual([]);
  expect(result.kept[0].reason).toBe('the pieces repeat an edge');
 }
 const twice=run('parity r1c1-r1c2\nparity r1c2-r1c1');
 expect(twice.kept[0].reason).toBe('the pieces repeat an edge');
});

test('pieces written as a line setting join into a network, keeping the setting form',()=>{
 const result=run(['parity line ["r1c1","r1c2"]','parity line ["r1c2","r1c3"]','parity line ["r1c2","r2c2"]'].join('\n'));
 expect(rulesOf(result.text)).toBe('parity line [] edges [["r1c1","r1c2"],["r1c2","r1c3"],["r1c2","r2c2"]]');
 expect(result.kept).toEqual([]);
});

test('branched pieces with different gaps or drawn elements stay apart',()=>{
 const gaps=['whispers r1c1-r1c2 gap 4 loop false','whispers r1c2-r1c3 gap 4 loop false','whispers r1c2-r2c2 gap 5 loop false'].join('\n');
 const apart=run(gaps);
 // The two gap-4 pieces are a line of their own; the gap-5 piece is another line.
 expect(rulesOf(apart.text)).toBe('whispers r1c1-r1c2-r1c3 gap 4 loop false\nwhispers r1c2-r2c2 gap 5 loop false');
 const elements=['whispers r1c1-r1c2 gap 4 loop false element "a"','whispers r1c2-r1c3 gap 4 loop false element "a"','whispers r1c2-r2c2 gap 4 loop false element "b"'].join('\n');
 const other=run(elements);
 expect(rulesOf(other.text)).toContain('element "b"');
 expect(other.text).not.toContain('edges');
});

test('a rule without an edges parameter keeps the old refusal for branches and crossings',()=>{
 const contract=declarationLibrary.parameters!.get('https://rules.sudoku-sleuth.com/whispers.md')!;
 const edges=contract.parameters.edges;
 delete contract.parameters.edges;
 try{
  for(const lines of [['whispers r1c1-r1c2 gap 4 loop false','whispers r1c2-r1c3 gap 4 loop false','whispers r1c2-r2c2 gap 4 loop false'],['whispers r2c1-r2c2-r2c3 gap 4 loop false','whispers r1c2-r2c2-r3c2 gap 4 loop false']]){
   const result=run(lines.join('\n'));
   expect(rulesOf(result.text)).toBe(lines.join('\n'));
   expect(result.rewrites).toEqual([]);
   expect(result.kept[0].reason).toBe('the pieces branch, cross or repeat a cell');
  }
 }finally{contract.parameters.edges=edges;}
});

test('branched pieces sharing a gap and an element join, and the piece that differs stays apart',()=>{
 const lines=['whispers r1c1-r1c2 gap 4 loop false element "a"','whispers r1c2-r1c3 gap 4 loop false element "a"','whispers r1c2-r2c2 gap 4 loop false element "a"','whispers r5c5-r5c6 gap 5 loop false element "b"'];
 const result=run(lines.join('\n'));
 expect(rulesOf(result.text)).toBe(['whispers line [] edges [["r1c1","r1c2"],["r1c2","r1c3"],["r1c2","r2c2"]] gap 4 loop false element "a"',lines[3]].join('\n'));
 expect(result.kept).toEqual([]);
 expect(result.rewrites.map(r=>r.template)).toEqual(['join-line-pieces whispers']);
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

test('a piece with a trailing comment is kept with a reason, not dropped',()=>{
 const lines='parity r1c1-r1c2 # the first stretch\nparity r1c2-r1c3';
 const result=run(lines);
 expect(rulesOf(result.text)).toBe(lines);
 expect(result.kept).toHaveLength(1);
 expect(result.kept[0].reason).toBe('a piece carries a comment that a join would lose');
});

test('canonical output is unchanged by another pass',()=>{
 const first=run('parity r1c1-r1c2\nparity r1c2-r1c3');
 const second=run(rulesOf(first.text));
 expect(second.text).toBe(first.text);
 expect(second.rewrites).toEqual([]);
});

const refusals:[string,string,string][]=[
 ['join-line-pieces whispers','whispers r1c1-r1c2 gap 4 loop false\nwhispers r1c2-r1c3 gap 4 loop false','whispers r1c1-r1c2-r1c3 gap 4 loop false'],
 ['printed-digit channel','a: close-whispers r1c1-r1c2 gap 2 channel "D"','a: close-whispers r1c1-r1c2 gap 2'],
 ['merge-negated-pairs negative',['not pair r1c1-r1c2 difference 1','not pair r1c1-r2c1 difference 1','not pair r2c1-r2c2 difference 1','not pair r1c2-r2c2 difference 1'].join('\n'),'negative relations [{"op":"difference","value":1}] except [] within [r1c1-r1c2-r2c1-r2c2]'],
];
for(const [name,rules,written] of refusals)test(`${name}: an undeclared unknown header leaves the rewrite unproven; a declared one proves it`,()=>{
 const page=caseFile(rules,'notes: free text\n');
 const plain=canonicalise(page,board);
 expect(plain.rewrites).toEqual([]);
 expect(plain.text).toBe(page.text);
 expect(plain.kept[0].reason).toContain('not proven');
 const declared=canonicalise(page,board,undefined,{metadataHeaders:['notes']});
 expect(declared.kept).toEqual([]);
 expect(rulesOf(declared.text)).toBe(written);
});

test('a header the spec defines cannot be declared, nor a non-array list',()=>{
 const page=caseFile('parity r1c1-r1c2','notes: x\n');
 expect(()=>canonicalise(page,board,undefined,{metadataHeaders:['givens']})).toThrow('cannot be declared');
 expect(()=>canonicalise(page,board,undefined,{metadataHeaders:'notes' as never})).toThrow('array of header names');
});

test('whisper pieces written with the line setting join and keep that form',()=>{
 const pieces=['"w-1": whispers loop false line ["r1c1","r1c2"] gap 4','"w-2": whispers loop false line ["r1c3","r1c2"] gap 4'];
 const result=run(pieces.join('\n'));
 expect(rulesOf(result.text)).toBe('"w-1": whispers loop false line ["r1c1","r1c2","r1c3"] gap 4');
 expect(result.rewrites).toHaveLength(1);
 expect(result.kept).toEqual([]);
});

test('lines written with the line setting that do not touch are left as written',()=>{
 const lines='whispers loop false line ["r1c1","r1c2"] gap 4\nwhispers loop false line ["r5c5","r5c6"] gap 4\nparity line ["r8c1","r8c2"]';
 const result=run(lines);
 expect(rulesOf(result.text)).toBe(lines);
 expect(result).toMatchObject({rewrites:[],kept:[]});
});

test('a positional piece and a setting piece are kept apart with a reason',()=>{
 const lines='whispers r1c1-r1c2 gap 4 loop false\nwhispers loop false line ["r1c2","r1c3"] gap 4';
 const result=run(lines);
 expect(rulesOf(result.text)).toBe(lines);
 expect(result.rewrites).toEqual([]);
 expect(result.kept).toHaveLength(1);
 expect(result.kept[0].reason).toBe('the pieces write their cells in different forms, positional and as a setting');
});

test('a file mixing positional and setting forms across every template does not throw',()=>{
 const lines=[
  'whispers loop false line ["r1c1","r1c2"] gap 4','whispers r1c2-r1c3 gap 4 loop false','whispers line [] edges [["r2c1","r2c2"]] gap 4',
  'parity line ["r3c1","r3c2"]','parity line ["r3c2","r3c3"]','parity r4c1-r4c2','parity r4c2-r4c3',
  'not pair r5c1-r5c2 relation "difference"','not pair r5c2-r5c3 relation "difference"','pair r6c1-r6c2',
 ].join('\n');
 expect(()=>run(lines)).not.toThrow();
 expect(()=>run(lines.split('\n').reverse().join('\n'))).not.toThrow();
});
