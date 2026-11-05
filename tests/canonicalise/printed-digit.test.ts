import {expect,test} from 'bun:test';
import {canonicalise,type Template} from '../../src';
import {board,caseFile,run,rulesOf} from '../helpers/canonicalise';

const digit='close-whispers {"channel":"D"}';

test('a printed-digit setting equal to the default is dropped when the proof holds',()=>{
 const result=run('close-whispers r1c1-r1c2 gap 2 channel "D"\nunique r2c1-r2c2');
 expect(rulesOf(result.text)).toBe('close-whispers r1c1-r1c2 gap 2\nunique r2c1-r2c2');
 expect(result.rewrites).toEqual([{template:digit,replaced:['close-whispers r1c1-r1c2 gap 2 channel "D"'],written:['close-whispers r1c1-r1c2 gap 2']}]);
 expect(result.kept).toEqual([]);
});

test('a setting that is not the default is a near miss and the proof refuses it',()=>{
 // Channel V is a different reading of a rule that defaults to D, so dropping it would change the meaning.
 const template:Template={rule:'close-whispers',spellings:['close-whispers'],form:'close-whispers {"channel":"V"}',kind:'close-whispers',settings:{channel:'V'},omit:['channel'],guard:'no-value-binding'};
 const file=caseFile('close-whispers r1c1-r1c2 gap 2 channel "V"');
 const result=canonicalise(file,board,[template]);
 expect(result.text).toBe(file.text);
 expect(result.rewrites).toEqual([]);
 expect(result.kept).toHaveLength(1);
 expect(result.kept[0].declarations).toEqual(['close-whispers r1c1-r1c2 gap 2 channel "V"']);
 expect(result.kept[0].reason).toContain('not proven');
});

test('the guard refuses while the file binds a value, and reads the file again each time',()=>{
 const bound='close-whispers r1c1-r1c2 gap 2 channel "D"\nvalue-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [["r1c1"]] distinct false';
 const refused=run(bound);
 expect(rulesOf(refused.text)).toBe(bound);
 expect(refused.rewrites).toEqual([]);
 expect(refused.kept).toEqual([{template:digit,declarations:['close-whispers r1c1-r1c2 gap 2 channel "D"'],reason:expect.stringContaining('binds')}]);
 // Without the binding the same declaration is rewritten.
 expect(run('close-whispers r1c1-r1c2 gap 2 channel "D"').rewrites).toHaveLength(1);
});

test('canonical output is unchanged by another pass',()=>{
 const first=run('close-whispers r1c1-r1c2 gap 2 channel "D"\nclose-whispers r2c1-r2c2 gap 3 channel "D"');
 const second=canonicalise({file:'case.rules.md',text:first.text},board);
 expect(second.text).toBe(first.text);
 expect(second.rewrites).toEqual([]);
});

test('slow-thermo drops its printed-digit setting, and identical declarations are each rewritten',()=>{
 const result=run('slow-thermo r1c1-r1c2 channel "D"');
 expect(rulesOf(result.text)).toBe('slow-thermo r1c1-r1c2');
 expect(result.rewrites).toHaveLength(1);
 const twice='close-whispers r1c1-r1c2 gap 2 channel "D"\nclose-whispers r1c1-r1c2 gap 2 channel "D"';
 const both=run(twice);
 expect(rulesOf(both.text)).toBe('close-whispers r1c1-r1c2 gap 2\nclose-whispers r1c1-r1c2 gap 2');
 expect(both.rewrites).toHaveLength(2);
 const refused=run(twice+'\n'+'value-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [["r1c1"]] distinct false');
 expect(refused.rewrites).toEqual([]);
 expect(refused.kept).toHaveLength(2);
});

test('a declaration that cannot be read makes the guard refuse',()=>{
 const rules='close-whispers r1c1-r1c2 gap 2 channel "D"\nthermo r9c9-r9c8 channel';
 const result=run(rules);
 expect(rulesOf(result.text)).toBe(rules);
 expect(result.kept).toHaveLength(1);
 expect(result.kept[0].reason).toContain('cannot be read');
});
