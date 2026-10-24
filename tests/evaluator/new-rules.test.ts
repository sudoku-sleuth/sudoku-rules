import {expect,test} from 'bun:test';
import {compileCase,evaluate,type Assignment} from '../../src';
function rule(line:string,board:object={rows:1,cols:4,symbols:[1,2,3,4,5,6,7,8,9]}){
 const result=compileCase({file:'new-rule-example.md',text:`---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\nboard: ${JSON.stringify(board)}\n---\n\`\`\`rules\n${line}\n\`\`\``});
 expect(result.diagnostics).toEqual([]);expect(result.value).toBeDefined();return result.value!.rules[0];
}
const digits={r1c1:1,r1c2:2,r1c3:3,r1c4:4};
const status=(line:string,a:Assignment)=>evaluate(rule(line),a).status;
test('bipolar clues count distinct listed symbols, including repeated occurrences',()=>{
 const line='bipolar-quadruples cells ["r1c1","r1c2","r1c3","r1c4"] digits [1,2,3,4]';
 expect(status(line,{digits:{r1c1:1,r1c2:1,r1c3:1,r1c4:2}})).toBe('holds');
 expect(status(line,{digits:{r1c1:1,r1c2:1,r1c3:5,r1c4:6}})).toBe('broken');
 expect(status(line.replace('[1,2,3,4]','[1,1,3,4]'),{digits})).toBe('broken');
});
test('counting diagonals count containing groups rather than cell occurrences',()=>{
 const r=rule('counting-diagonals groups [["r1c1","r1c2","r1c3"],["r1c4"]]');
 expect(evaluate(r,{digits:{r1c1:2,r1c2:2,r1c3:2,r1c4:2}}).status).toBe('holds');
 expect(evaluate(r,{digits:{r1c1:2,r1c2:2,r1c3:2,r1c4:1}}).status).toBe('broken');
});
test('high-low includes five in either whole-line choice and preserves the 1 to 9 bounds',()=>{
 const line='high-low-lines r1c1-r1c2-r1c3';
 for(const values of [[1,5,3],[9,5,7],[5,5,5]])expect(status(line,{digits:{r1c1:values[0],r1c2:values[1],r1c3:values[2],r1c4:1}})).toBe('holds');
 expect(status(line,{digits:{r1c1:1,r1c2:5,r1c3:9,r1c4:1}})).toBe('broken');
 const r=rule(line,{rows:1,cols:3,symbols:[0,1,5,9,10]});
 for(const n of [0,10])expect(evaluate(r,{digits:{r1c1:n,r1c2:5,r1c3:5}}).status).toBe('broken');
});
test('cage totals read effective values and permit repetitions unless constrained separately',()=>{
 const line='cage-totals cells ["r1c1","r1c2"] totals [4,9]';
 expect(status(line,{digits:{...digits,r1c1:2,r1c2:2}})).toBe('holds');
 expect(status(line,{digits,values:{r1c1:4,r1c2:5}})).toBe('holds');
 expect(status(line,{digits,values:{r1c1:4,r1c2:6}})).toBe('broken');
});
test('minmax cage uses extrema, rejects repeats, and doubles a singleton digit',()=>{
 expect(status('minmax-cages cells ["r1c1"] total 2',{digits})).toBe('holds');
 expect(status('minmax-cages cells ["r1c1"] total 1',{digits})).toBe('broken');
 expect(status('minmax-cages cells ["r1c1","r1c2"] total 2',{digits:{...digits,r1c2:1}})).toBe('broken');
});
test('HDR reads local signed digits even when an unrelated effective channel is supplied',()=>{
 const r=rule('hdr-thermos r1c1-r1c2-r1c3');
 const a={digits:{...digits,r1c1:7,r1c2:3,r1c3:2},values:{r1c1:100,r1c2:-100,r1c3:-200},shading:{r1c1:true,r1c2:true,r1c3:false,r1c4:false}};
 expect(evaluate(r,a).status).toBe('holds');
 expect(evaluate(r,{...a,shading:{...a.shading,r1c2:false}}).status).toBe('broken');
});
test('arrows count through intervening cells of either colour',()=>{
 const r=rule('opposite-colour-arrows clue r1c1 cells ["r1c2","r1c3","r1c4"]');
 expect(evaluate(r,{digits:{...digits,r1c1:2},shading:{r1c1:true,r1c2:false,r1c3:true,r1c4:false}}).status).toBe('holds');
});
test('sum/difference endpoint roles can swap without changing the interior',()=>{
 const r=rule('sum-difference-lines cells ["r1c2","r1c3"] bulbs ["r1c1","r1c4"]');
 for(const [a,b] of [[5,3],[3,5]])expect(evaluate(r,{digits:{r1c1:a,r1c2:1,r1c3:4,r1c4:b}}).status).toBe('holds');
 expect(evaluate(r,{digits:{r1c1:5,r1c2:1,r1c3:4,r1c4:4}}).status).toBe('broken');
});
test('wheel rotations work while reflected order fails',()=>{
 const r=rule('wheels cells ["r1c1","r1c2","r1c3","r1c4"] digits [1,2,3,4]');
 for(let shift=0;shift<4;shift++)expect(evaluate(r,{digits:Object.fromEntries(Object.keys(digits).map((c,i)=>[c,(i+shift)%4+1]))}).status).toBe('holds');
 expect(evaluate(r,{digits:{r1c1:1,r1c2:4,r1c3:3,r1c4:2}}).status).toBe('broken');
});
test('a spanning tree cannot conceal an induced cycle in Domino Trails',()=>{
 const r=rule('domino-trails name "dominoes"',{rows:3,cols:3,symbols:[1]});
 const cells=Array.from({length:9},(_,i)=>`r${Math.floor(i/3)+1}c${i%3+1}`);
 const a={digits:Object.fromEntries(cells.map(c=>[c,1])),shading:Object.fromEntries(cells.map(c=>[c,c==='r2c2'])),partitionAnswers:{dominoes:[['r1c1','r1c2'],['r1c3','r2c3'],['r3c3','r3c2'],['r3c1','r2c1']]}};
 expect(evaluate(r,a).status).toBe('broken');
});
test('island components are maximal, contain one size circle and forbid water squares',()=>{
 const r=rule('islands name "islands" circles ["r1c3"]',{rows:2,cols:3,symbols:[1,2,3]});
 const cells=['r1c1','r1c2','r1c3','r2c1','r2c2','r2c3'];
 const a={digits:{r1c1:1,r1c2:1,r1c3:3,r2c1:1,r2c2:1,r2c3:1},shading:Object.fromEntries(cells.map(c=>[c,['r1c1','r2c1','r2c2'].includes(c)])),partitionAnswers:{islands:[['r1c2','r1c3','r2c3']]}};
 expect(evaluate(r,a).status).toBe('holds');
 expect(evaluate(r,{...a,partitionAnswers:{islands:[['r1c2'],['r1c3','r2c3']]}}).status).toBe('broken');
 const square={...a,digits:{...a.digits,r1c3:2},shading:Object.fromEntries(cells.map(c=>[c,!c.endsWith('c3')])),partitionAnswers:{islands:[['r1c3','r2c3']]}};
 expect(evaluate(r,square).status).toBe('broken');
});
test('Treasures and Shaded Successors have different complete meanings',()=>{
 const board={rows:1,cols:3,symbols:[1,2,3,4,5,6,7,8,9],regions:[['r1c1','r1c2','r1c3']]};
 // Declare a house so the region membership is accompanied by an explicit constraint.
 const successors=rule('shaded-successors cells ["r1c2"]\nregions cells ["r1c1","r1c2","r1c3"]',board);
 const treasures=rule('treasures', {rows:1,cols:3,symbols:[1,2,3,4,5,6,7,8,9]});
 const first={digits:{r1c1:1,r1c2:2,r1c3:3}};
 expect(evaluate(successors,first).status).toBe('broken');expect(evaluate(treasures,first).status).toBe('holds');
 const second={digits:{r1c1:5,r1c2:6,r1c3:8}};
 expect(evaluate(successors,second).status).toBe('holds');expect(evaluate(treasures,second).status).toBe('broken');
});

test('unique primes independently enforce primality, allowed membership and distinct numbers',()=>{
 const line='unique-primes groups [["r1c1","r1c2"],["r1c3","r1c4"]] allowed [13,17,21]';
 const a=(x:number,y:number)=>({digits:{r1c1:Math.floor(x/10),r1c2:x%10,r1c3:Math.floor(y/10),r1c4:y%10}});
 expect(status(line,a(13,17))).toBe('holds');
 for(const [x,y] of [[13,13],[13,21],[13,23]])expect(status(line,a(x,y))).toBe('broken');
 expect(status('unique-primes groups [["r1c1","r1c2"]] allowed [11]',a(11,13))).toBe('holds');
 expect(status('unique-primes groups [[]] allowed [2]',a(13,17))).toBe('broken');
 expect(status('unique-primes groups [["r1c1"]] allowed [2]',{digits:{...digits,r1c1:2}})).toBe('holds');
 const zero=rule('unique-primes groups [["r1c1","r1c2"]] allowed [3]',{rows:1,cols:2,symbols:[0,1,2,3]});
 expect(evaluate(zero,{digits:{r1c1:0,r1c2:3}}).status).toBe('holds');
});
test('stingy comparisons count support, compare every pair, and impose no cage distinctness',()=>{
 const line='stingy-cages groups [["r1c1","r1c2"],["r1c3","r1c4"]]';
 for(const values of [[2,2,2,2],[1,2,3,4],[1,2,2,3]])expect(status(line,{digits:Object.fromEntries(values.map((v,i)=>[`r1c${i+1}`,v]))})).toBe('holds');
 expect(status(line,{digits:{r1c1:1,r1c2:2,r1c3:2,r1c4:1}})).toBe('broken');
 expect(status('stingy-cages groups [[],["r1c1","r1c2"],["r1c3","r1c4"]]',{digits:{r1c1:1,r1c2:2,r1c3:2,r1c4:1}})).toBe('broken');
});
test('ziffer uses absolute differences, requires odd length, and allows a singleton',()=>{
 const line='ziffer-lines r1c1-r1c2-r1c3';
 for(const [x,y] of [[2,7],[7,2]])expect(status(line,{digits:{...digits,r1c1:x,r1c2:5,r1c3:y}})).toBe('holds');
 expect(status(line,{digits:{...digits,r1c1:2,r1c2:5,r1c3:3}})).toBe('broken');
 expect(status('ziffer-lines r1c1-r1c2',{digits})).toBe('broken');
 expect(status('ziffer-lines r1c1',{digits})).toBe('holds');
 const r=rule('ziffer-lines r1c1-r1c2-r1c3-r1c4-r1c5',{rows:1,cols:5,symbols:[1,2,3,4,5,6,7,8,9]});
 expect(evaluate(r,{digits:{r1c1:1,r1c2:2,r1c3:5,r1c4:7,r1c5:6}}).status).toBe('holds');
 expect(evaluate(r,{digits:{r1c1:1,r1c2:2,r1c3:5,r1c4:8,r1c5:6}}).status).toBe('broken');
});
test('number property defaults retain original operand, remainder and reverse meanings',()=>{
 const decimal='number-property operand {"cells":["r1c1","r1c2"],"channel":"D","operation":"decimal","repeats":true} property "prime"';
 expect(status(decimal,{digits:{...digits,r1c1:3,r1c2:2}})).toBe('broken');
 expect(status(decimal+' reverse true',{digits:{...digits,r1c1:3,r1c2:2}})).toBe('holds');
 expect(status(decimal+' reverse true allowed [23]',{digits:{...digits,r1c1:3,r1c2:2}})).toBe('broken');
 expect(status('remainder-cage r1c1-r1c2 modulus 3 remainder 1 distinct false',{digits:{...digits,r1c1:2,r1c2:2}})).toBe('holds');
 expect(status('remainder-cage r1c1-r1c2 modulus 3 remainder 1 distinct true',{digits:{...digits,r1c1:2,r1c2:2}})).toBe('broken');
 expect(status('primality r1c1-r1c2-r1c3 loop false',{digits:{...digits,r1c1:2,r1c2:4,r1c3:1}})).toBe('broken');
});
test('profile defaults retain both equality modes; optional bounds use distinct channel values',()=>{
 const line='profile-relation left ["r1c1","r1c2"] right ["r1c3","r1c4"]';
 const a={digits:{r1c1:2,r1c2:2,r1c3:2,r1c4:3}};
 expect(status(line,a)).toBe('broken');
 expect(status(line+' maximumShared 1',a)).toBe('holds');
 expect(status(line+' maximumShared 0',a)).toBe('broken');
 const repeated='profile-relation left ["r1c1","r1c1","r1c2"] right ["r1c3","r1c4","r1c4"]';
 const b={digits:{r1c1:2,r1c2:3,r1c3:2,r1c4:3}};
 expect(status(repeated,b)).toBe('broken');expect(status(repeated+' multiset false',b)).toBe('holds');
 expect(status(line+' maximumShared 0 channel "V"',{...a,values:{r1c1:4,r1c2:4,r1c3:5,r1c4:5}})).toBe('holds');
});
