import type {Expr} from './language/ast.js';

/** Substitute free names, renaming local binders to avoid capturing arguments. */
export function substituteFormula(expr:Expr,bindings:Map<string,Expr>):Expr {
 const names=new Set<string>();
 const collect=(e:Expr)=>{if(e.kind==='name')names.add(e.value!);for(const b of e.binders??[])names.add(b.name);e.children.forEach(collect);};
 collect(expr);bindings.forEach(collect);
 let serial=0;
 const fresh=()=>{let name:string;do{name=`inlineVar${serial++}`;}while(names.has(name));names.add(name);return name;};
 const walk=(e:Expr,env:Map<string,Expr>):Expr=>{
  if(e.kind==='name')return env.get(e.value!)??e;
  if(!e.binders?.length)return {...e,children:e.children.map(c=>walk(c,env))};
  const local=new Map(env),binders=e.binders.map(b=>{
   local.delete(b.name);
   const name=fresh();local.set(b.name,{kind:'name',value:name,span:b.span,children:[]});
   return {...b,name};
  });
  // Domains and let values precede the scope of their own binders.
  const unboundFirst=e.kind==='let'||e.kind==='comprehension'||e.kind==='image'||e.hasDomain;
  return {...e,binders,children:e.children.map((c,i)=>walk(c,unboundFirst&&i===0?env:local))};
 };
 return walk(expr,bindings);
}

/** Reduce literal choices introduced by substituting a concrete helper argument. */
export function foldFormula(expr:Expr):Expr {
 const folded=new WeakMap<Expr,Expr>();
 const fold=(expr:Expr):Expr=>{
  const cached=folded.get(expr);if(cached)return cached;
  const result=reduce(expr);folded.set(expr,result);return result;
 };
 const reduce=(expr:Expr):Expr=>{
  const children=expr.children.map(fold),e=children.every((c,i)=>c===expr.children[i])?expr:{...expr,children};
  const boolean=(value:boolean):Expr=>({kind:'boolean',value:String(value),span:e.span,children:[]});
  if(e.kind==='binary'){
   const [a,b]=children;
   if(['=','!='].includes(e.value!)&&a.kind===b.kind&&['literal','boolean'].includes(a.kind))return boolean(e.value==='='?a.value===b.value:a.value!==b.value);
   if(e.value==='and'||e.value==='or'){
    if(a.kind==='boolean')return a.value===(e.value==='and'?'true':'false')?b:a;
    if(b.kind==='boolean')return b.value===(e.value==='and'?'true':'false')?a:b;
   }
  }
  if(e.kind==='conditional'&&children[0].kind==='boolean')return children[children[0].value==='true'?1:2];
  if(e.kind==='unary'&&e.value==='not'&&children[0].kind==='boolean')return boolean(children[0].value!=='true');
  return e;
 };
 return fold(expr);
}
