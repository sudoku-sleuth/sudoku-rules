import type {Assignment} from '../../src';
const shade=(cells:string[],selected:string[])=>Object.fromEntries(cells.map(c=>[c,selected.includes(c)]));
const square=['r1c1','r1c2','r2c1','r2c2'];
const across=['r4c1','r4c2','r4c3','r4c4','r5c5','r5c6','r5c7','r5c8','r5c9'];
const down=['r1c5','r2c5','r3c5','r4c5','r5c4','r6c4','r7c4','r8c4','r9c4'];
const pathDigits=Object.fromEntries([...across.map((c,i)=>[c,i+1]),...down.map((c,i)=>[c,i+1])]);
const hdrShading=Object.fromEntries(Array.from({length:81},(_,i)=>{const c=`r${Math.floor(i/9)+1}c${i%9+1}`;return [c,c==='r1c1'||c==='r1c2'];}));
const arrowShading=Object.fromEntries(Array.from({length:81},(_,i)=>{const c=`r${Math.floor(i/9)+1}c${i%9+1}`;return [c,c==='r1c1'||c==='r1c3'];}));
// Auxiliary answer objects described alongside the public examples.
export const newRuleExamples:Record<string,[Partial<Assignment>,Partial<Assignment>]>={
 islands:[0,1].map(()=>({shading:shade(square,['r1c2','r2c1','r2c2']),partitionAnswers:{islands:[['r1c1']]}})) as [Partial<Assignment>,Partial<Assignment>],
 'domino-trails':[0,1].map(()=>({shading:shade(square,['r2c1','r2c2']),partitionAnswers:{dominoes:[['r1c1','r1c2']]}})) as [Partial<Assignment>,Partial<Assignment>],
 'opposite-colour-arrows':[{shading:arrowShading},{shading:arrowShading}],
 'hdr-thermos':[{shading:hdrShading},{shading:hdrShading}],
 'crossed-paths':[{digits:pathDigits,routeAnswers:{across,down}},{digits:{...pathDigits,r5c9:8},routeAnswers:{across,down}}],
};
