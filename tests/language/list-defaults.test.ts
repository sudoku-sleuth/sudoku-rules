import {expect,test} from 'bun:test';
import {stringify} from 'yaml';
import {declaredDefault} from '../../src/case-values';
import {compileCase,evaluate} from '../../src';

const cell={name:'cell'};
const number={name:'number'};
const types={Marks:{name:'list',args:[number]},Alias:{name:'Marks'}};

test('an empty list default survives for list, set and path parameters',()=>{
 for(const name of ['list','set','path']) expect(declaredDefault([],{name,args:[cell]},{})).toEqual({default:[]});
});
test('a named alias of a list resolves to the same default',()=>{
 expect(declaredDefault([],{name:'Marks'},types)).toEqual({default:[]});
 expect(declaredDefault([],{name:'Alias'},types)).toEqual({default:[]});
});
test('an empty array is not a default for other types, and unchecked values are ignored',()=>{
 expect(declaredDefault([],number,{})).toEqual({});
 expect(declaredDefault([],{name:'string'},{})).toEqual({});
 expect(declaredDefault([1],{name:'list',args:[number]},{})).toEqual({});
 expect(declaredDefault({a:1},{name:'list',args:[number]},{})).toEqual({});
 expect(declaredDefault(null,{name:'list',args:[number]},{})).toEqual({});
});
test('string, number and boolean defaults are unchanged',()=>{
 expect(declaredDefault('"H".',{name:'string'},{})).toEqual({default:'H'});
 expect(declaredDefault(3,number,{})).toEqual({default:3});
 expect(declaredDefault(true,{name:'boolean'},{})).toEqual({default:true});
 expect(declaredDefault('Empty list',{name:'list',args:[number]},{})).toEqual({default:[]});
 expect(declaredDefault('[]',{name:'set',args:[cell]},{})).toEqual({default:[]});
 expect(declaredDefault('Required.',{name:'list',args:[number]},{})).toEqual({});
});
test('a custom rule with an empty list default reads and evaluates when the case omits it',()=>{
 const custom='```custom-rules\n'+stringify([{id:'ones',name:'Ones',parameters:{cells:{type:'path<cell>',description:'Ordered cells.'},skips:{type:'list<number>',description:'Digits to skip.',default:[]}},definition:'Every digit is one and nothing is skipped.',maths:'(∀c∈cells:D(c)=1) ∧ |skips|=0',example:'One satisfies and two breaks.'}])+'```';
 const text=`---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\nboard: {rows: 1, cols: 3, symbols: [1,2,3]}\n---\n\n\`\`\`rules\n#ones r1c1-r1c2\n\`\`\`\n${custom}`;
 const result=compileCase({file:'example.md',text});
 expect(result.diagnostics).toEqual([]);
 const rule=result.value!.rules[0];
 expect(evaluate(rule,{digits:{r1c1:1,r1c2:1}}).status).toBe('holds');
 expect(evaluate(rule,{digits:{r1c1:1,r1c2:2}}).status).toBe('broken');
},30000);
