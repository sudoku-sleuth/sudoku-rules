import {expect, test} from 'bun:test';
import {checkCaseReferences, compare, migrateCase, normalise, printDeclaration, type BoardContext, type Cell, type Formula} from '../../src';
import {declarationLibrary} from '../../src/declaration-library';
import {readSemanticFile} from '../../src/semantics/reader';

const file = (rules: string) => ({file: 'marks.rules.md', text: `---\nformat: open-rules\ntitle: Marks\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n\`\`\`rules\n${rules}\n\`\`\`\n`});
const board: BoardContext = {rows:9,cols:9,alphabet:[1,2,3,4,5,6,7,8,9],activeCells:Array.from({length:81},(_,i)=>`r${Math.floor(i/9)+1}c${i%9+1}` as Cell)};
const norm = (rules: string, context = board) => normalise(file(rules),context);
const negative = (op: string, value: number, except: string[][] = []) => `negative relations ${JSON.stringify([{op,value}])} except ${JSON.stringify(except)}`;
function evaluate(f: Formula, a: Record<string,number>): boolean {
  switch(f.op) {
    case 'All': return f.children.every(c=>evaluate(c,a));
    case 'Any': return f.children.some(c=>evaluate(c,a));
    case 'Not': return !evaluate(f.child,a);
    case 'Pair': return f.table.some(([x,y])=>x===a[f.cells[0]]&&y===a[f.cells[1]]);
    case 'Allowed': return f.values.includes(a[f.cell]);
    default: throw Error(`Unexpected primitive ${f.op}`);
  }
}

test('repeated unlabelled shapes retain positional provenance and print without labels',()=>{
  const lines = [
    'sudoku 9x9',
    'arrow line ["r1c2","r1c3"] bulb ["r1c1"]',
    'arrow line ["r2c1","r3c1"] bulb ["r1c1"]',
    'cage r2c2-r2c3', 'cage r3c2-r3c3', 'cage r4c2-r4c3',
    'xv r5c1-r5c2 x', 'xv r6c1-r6c2 v', 'xv r7c1-r7c2 x',
  ];
  const page=file(lines.join('\n'));
  const checked=checkCaseReferences(page,declarationLibrary);
  expect(checked.diagnostics).toEqual([]);
  const reading=readSemanticFile(page);
  expect(reading.issues).toEqual([]);
  expect(reading.instances.map(i=>i.source.position)).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(readSemanticFile(page)).toEqual(reading);
  const written=checked.value!.declarations.map(ast=>printDeclaration(ast));
  expect(written.every(line=>!line.includes(':'))).toBe(true);
  expect(readSemanticFile(file(written.join('\n'))).issues).toEqual([]);
  const result=normalise(page,board);
  expect(result.status).toBe('partial'); // Arrow remains outside finite lowering.
  expect(result.normalForm!.coverage).toHaveLength(9);
  expect(result.normalForm!.coverage.filter(c=>c.kind==='arrow').every(c=>c.status==='unsupported')).toBe(true);
  expect(result.normalForm!.coverage.filter(c=>c.kind!=='arrow').every(c=>c.status==='lowered')).toBe(true);
  expect(compare(norm(lines.slice(3).join('\n')),norm(written.slice(3).join('\n'))).status).toBe('equivalent');
  const mixed=readSemanticFile(file('"@2": unique r1c1\n```\n\n```rules\nunique r1c2\nunique r1c2'),{rows:9,cols:9,symbols:board.alphabet,standard:true});
  expect(mixed.issues).toEqual([]);
  expect(mixed.instances.map(i=>[i.source.instance,i.source.position])).toEqual([['@2',undefined],[undefined,2],[undefined,3]]);
  expect(norm('same: unique r1c1\nsame: unique r1c2').status).toBe('invalid');
});

test('19 X and 8 V marks plus independent negatives compare equivalent after migration',()=>{
  const edges=board.activeCells.filter(c=>!c.endsWith('c9')).map(c=>{const [r,col]=c.slice(1).split('c');return [c,`r${r}c${Number(col)+1}`];});
  const x=edges.slice(0,19),v=edges.slice(19,27);
  const old=file(['sudoku 9x9',...x.map(p=>`pair ${p.join('-')} sum 10`),...v.map(p=>`pair ${p.join('-')} sum 5`),negative('sum',10,x),negative('sum',5,v)].join('\n'));
  const migrated=migrateCase(old);
  expect(migrated.diagnostics).toEqual([]);
  expect(migrated.value!.text).toContain('allGiven ["x","v"]');
  const before=normalise(old,board),after=normalise(migrated.value!,board);
  expect(before.status).toBe('complete');expect(after.status).toBe('complete');
  expect(compare(before,after).status).toBe('equivalent');
});

for(const number of [2,13])test(`Colorado ${number} fixture has equivalent semantic lowering after migration`,async()=>{
  const base=`tests/fixtures/migration-all-given/colorado-${number}`;
  const input=await Bun.file(`${base}.input.md`).text(), expected=await Bun.file(`${base}.expected.md`).text();
  const page=(text:string)=>({...file(''),text:file('').text.replace(/```rules[\s\S]*?```/,text.trim())});
  const before=normalise(page(input),board),after=normalise(page(expected),board);
  // These full fixtures also contain arrows or little killers outside this fragment.
  expect(compare(before,after).covered).toBe('equal');
  expect(compare(before,after).status).toBe('unresolved');
  const marksOnly=(text:string)=>page(text.split('\n').filter(line=>!/^((?:[\w-]+: )?(?:arrow|little-killer|diagonal-sum)) /.test(line)).join('\n'));
  expect(compare(normalise(marksOnly(input),board),normalise(marksOnly(expected),board)).status).toBe('equivalent');
});

for(const [kind,op,value,family] of [['x','sum',10,'xv'],['v','sum',5,'xv'],['white','difference',1,'kropki'],['black','ratio',2,'kropki']] as const) {
  test(`${kind} grouped, single and migrated pairs share exact independent negative lowering`,()=>{
    const pair=['r1c1','r1c2'];
    const old=file(`pair ${pair.join('-')} ${op} ${value}\n${negative(op,value,[pair])}`);
    const migrated=migrateCase(old);
    expect(migrated.diagnostics).toEqual([]);
    expect(compare(normalise(old,board),normalise(migrated.value!,board)).status).toBe('equivalent');
    const grouped=`${family} ${kind} [r1c1-r1c2] allGiven ["${kind}"]`;
    const single=`${family} r1c1-r1c2 ${kind} allGiven ["${kind}"]`;
    expect(compare(norm(grouped),norm(single)).status).toBe('equivalent');
    expect(compare(norm(`${family} allGiven ["${kind}"]`),norm(negative(op,value))).status).toBe('equivalent');
    expect(compare(norm(`not ${grouped}`),norm(`not ${single}`)).status).toBe('equivalent');
  });
}

test('combined negative exceptions do not compare equivalent to an independent global nonconsecutive rule',()=>{
  const old=`pair r1c1-r1c2 sum 5\nnegative relations [{"op":"sum","value":5},{"op":"difference","value":1}] except [["r1c1","r1c2"]]`;
  const independent=`xv v [r1c1-r1c2] allGiven ["v"]\n${negative('difference',1)}`;
  const context: BoardContext={rows:1,cols:2,alphabet:[1,2,3,4,5],activeCells:['r1c1','r1c2']};
  const a=norm(old,context),b=norm(independent,context);
  expect(a.status).toBe('complete');expect(b.status).toBe('complete');
  expect(compare(a,b).status).toBe('unresolved');
  expect(compare(a,b).covered).toBe('structural-difference');
  expect(evaluate(a.normalForm!.solution,{r1c1:2,r1c2:3})).toBe(true);
  expect(evaluate(b.normalForm!.solution,{r1c1:2,r1c2:3})).toBe(false);
});

test('Kropki kinds exempt only their own marks and never marks from another declaration',()=>{
  const context: BoardContext={rows:1,cols:2,alphabet:[0,1,2,3,4,6],activeCells:['r1c1','r1c2']};
  for(const [rule,accepted] of [
    ['kropki white [r1c1-r1c2] allGiven ["black"]',false],
    ['kropki black [r1c1-r1c2] allGiven ["white"]',false],
    ['kropki white [r1c1-r1c2] black [r1c2-r1c1] allGiven ["white","black"]',true],
    ['kropki white [r1c1-r1c2]\nkropki allGiven ["white"]',false],
  ] as const) {
    const form=norm(rule,context);expect(form.status).toBe('complete');
    expect(evaluate(form.normalForm!.solution,{r1c1:1,r1c2:2})).toBe(accepted);
  }
});

test('mixed all-given lowering matches independent relation truth over small complete assignments',()=>{
  const context: BoardContext={rows:1,cols:3,alphabet:[0,1,2,3,4,5,6,10],activeCells:['r1c1','r1c2','r1c3']};
  const rules='marked-pairs v [r1c1-r1c2] black [r1c2-r1c3] allGiven ["x","v","white","black"]';
  const form=norm(rules,context),neg=norm(`not ${rules}`,context);
  expect(form.status).toBe('complete');expect(neg.status).toBe('complete');
  for(const a of context.alphabet) for(const b of context.alphabet) for(const c of context.alphabet) {
    const expected=a+b===5 && (b===2*c||c===2*b) &&
      a+b!==10 && b+c!==10 && b+c!==5 &&
      Math.abs(a-b)!==1 && Math.abs(b-c)!==1 && !(a===2*b||b===2*a);
    const answer={r1c1:a,r1c2:b,r1c3:c};
    expect(evaluate(form.normalForm!.solution,answer)).toBe(expected);
    expect(evaluate(neg.normalForm!.solution,answer)).toBe(!expected);
  }
});

test('all-given declarations validate complete mark lists and retain whole-instance coverage',()=>{
  for(const rule of ['xv x [["r1c1"]]', 'xv v [["r1c1","r10c1"]]', 'kropki black [["r1c1","r1c2","r1c3"]]', 'xv allGiven ["white"]']) {
    expect(norm(`not ${rule}`).status).toBe('invalid');
  }
  const modifier='value-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [["r1c1"]] distinct false';
  for(const rule of ['xv x [r1c1-r1c2] allGiven ["x"]','kropki black [r1c1-r1c2] allGiven ["black"]','marked-pairs v [r1c1-r1c2] allGiven ["white"]']) {
    const result=norm(`${modifier}\n${rule}`);
    expect(result.status).toBe('partial');
    expect(result.normalForm!.coverage.every(c=>c.status==='unsupported')).toBe(true);
  }
  const context: BoardContext={rows:1,cols:256,alphabet:Array.from({length:64},(_,i)=>i),activeCells:Array.from({length:256},(_,i)=>`r1c${i+1}` as Cell)};
  const bounded=norm('xv allGiven ["x","v"]',context);
  expect(bounded.status).toBe('partial');
  expect(bounded.normalForm!.coverage[0].reason).toContain('expansion');
  expect(bounded.normalForm!.solution).toEqual({op:'All',children:[]});
});
