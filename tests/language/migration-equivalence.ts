import {compilePublicLibrary} from '../helpers/library';
import {expect} from 'bun:test';
import {migrateDeclaration,type PageSource,type Expr} from '../../src';
import {fragmentVerdict,type Fragment} from './finite-fragment';
const snapshot:{pages:PageSource[]}=await Bun.file('tests/fixtures/library-6d9e954.json').json();
const baseline=compilePublicLibrary(snapshot.pages).value!;
export const replayedKinds=new Set<string>();
/** Replay a conformance fragment against the public pin and migrated declaration. */
export function assertMigratedEquivalent(library:NonNullable<ReturnType<typeof compilePublicLibrary>['value']>,kind:string,fragment:Fragment,negated=false){
 if(!baseline.registry.kinds.has(kind))return;
 const before=baseline.rules.get(baseline.aliases.get(kind)??kind)!;
 const oldContract=baseline.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${kind}.md`)!;
 const oldParameters=Object.fromEntries(Object.entries(fragment.parameters).filter(([k])=>Object.hasOwn(oldContract.parameters,k)));
 for(const [name,p]of Object.entries(oldContract.parameters))if(!Object.hasOwn(oldParameters,name)&&Object.hasOwn(p,'default'))oldParameters[name]=p.default;
 if(kind==='value-modifier'&&!Object.hasOwn(oldParameters,'name'))oldParameters.name='doubler';
 if(kind==='index'&&!Object.hasOwn(oldParameters,'strips'))oldParameters.strips=[];
 const migrated=migrateDeclaration({kind,parameters:oldParameters})[0];
 const after=library.rules.get(migrated.kind)!;
 const defaults=Object.fromEntries(Object.entries(library.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${migrated.kind}.md`)!.parameters).filter(([,p])=>Object.hasOwn(p,'default')).map(([n,p])=>[n,p.default]));
 const wrap=(ast:Expr):Expr=>negated?{kind:'unary',value:'not',span:ast.span,children:[ast]}:ast;
 const expected=fragmentVerdict(wrap(before.formulas[0].ast),baseline.prelude,before.parameters,{...fragment,parameters:oldParameters});
 const actual=fragmentVerdict(wrap(after.formulas[0].ast),library.prelude,after.parameters,{...fragment,parameters:{...defaults,...migrated.parameters}});
 expect(actual,`Migration differs for ${kind}`).toBe(expected);replayedKinds.add(kind);
}
