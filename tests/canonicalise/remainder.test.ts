import {expect,test} from 'bun:test';
import {canonicalise} from '../../src';
import {board,caseFile} from '../helpers/canonicalise';

test('text outside the changed declarations is byte-identical',()=>{
 const rules=['sudoku 9x9','# a note between rules','a: close-whispers r1c1-r1c2 gap 2 channel "D" # keep this','',
  'not pair r3c3-r3c4 difference 1','  unique r6c1-r6c2   element "x"','not pair r3c4-r4c4 difference 1','not pair r3c3-r4c3 difference 1','not pair r4c3-r4c4 difference 1','parity r8c1-r8c2','parity r8c2-r8c3  ','thermo r9c1-r9c2'].join('\n');
 const file=caseFile(rules,'fog: true\nextra: "kept"\n');
 const result=canonicalise(file,board);
 expect(result.rewrites.map(r=>r.template).sort()).toEqual(['close-whispers {"channel":"D"}','join-line-pieces parity-line','merge-negated-pairs negative']);
 const expected=file.text
  .replace('a: close-whispers r1c1-r1c2 gap 2 channel "D" # keep this','a: close-whispers r1c1-r1c2 gap 2 # keep this')
  .replace('not pair r3c3-r3c4 difference 1','negative relations [{"op":"difference","value":1}] except [] within [r3c3-r3c4-r4c3-r4c4]')
  .replace('not pair r3c4-r4c4 difference 1\nnot pair r3c3-r4c3 difference 1\nnot pair r4c3-r4c4 difference 1\n','')
  .replace('parity r8c1-r8c2\nparity r8c2-r8c3  ','parity r8c1-r8c2-r8c3');
 expect(result.text).toBe(expected);
});

test('line endings and a file with nothing to rewrite pass through unchanged',()=>{
 const crlf=caseFile('parity r1c1-r1c2\nparity r1c2-r1c3\nunique r2c1-r2c2').text.replace(/\n/g,'\r\n');
 const result=canonicalise({file:'case.rules.md',text:crlf},board);
 expect(result.text).toBe(crlf.replace('parity r1c1-r1c2\r\nparity r1c2-r1c3','parity r1c1-r1c2-r1c3'));
 const plain=caseFile('unique r1c1-r1c2\nthermo r2c1-r2c2');
 expect(canonicalise(plain,board)).toEqual({text:plain.text,rewrites:[],kept:[]});
 // A library other than the published one has no templates.
 const other={file:'x.rules.md',text:plain.text.replace('https://rules.sudoku-sleuth.com/','https://example.com/rules/')};
 expect(canonicalise(other,board).text).toBe(other.text);
});
