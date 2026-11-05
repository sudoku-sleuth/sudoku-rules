/** Guards a template may name. Each reads the drawing or the file again on every proof. */
export const templateGuards = ['no-value-binding'] as const;
export type TemplateGuard = typeof templateGuards[number];
/** Group patterns are code in migrate.ts. A page can only name a pattern listed here, on a rule it may write. */
export const groupPatterns: Readonly<Record<string, readonly string[]>> = Object.freeze({
 'join-line-pieces': ['parity-line','whispers'],
 'merge-negated-pairs': ['negative'],
});
/** A published template: what a rule page says it replaces. Only the proof in canonicalise decides a rewrite. */
export interface Template {
 /** The canonical rule, which is the page that lists the template. */
 rule: string;
 /** Spellings of the rule that a declaration may use: the rule and its plain aliases. */
 spellings: string[];
 /** The replaced form: one value per distinct claim, so that two pages cannot claim the same form. */
 form: string;
 pattern?: string;
 /** The declaration kind of the replaced form. It is the rule or one of its spellings unless another rule's form is replaced. */
 kind?: string;
 settings?: Record<string,unknown>;
 omit?: string[];
 guard?: TemplateGuard;
}
const isObject=(v:unknown):v is Record<string,unknown>=>!!v&&typeof v==='object'&&!Array.isArray(v);
/**
 * Read the `replaces` front matter of a rule page.
 * An entry is a settings form (`settings` and the `canonical.omit` that restores the default) or a named group pattern (`pattern`).
 */
export function readTemplates(metadata:Record<string,unknown>,rule:string,aliases:readonly string[]=[]):{templates:Template[];errors:string[]} {
 const errors:string[]=[],templates:Template[]=[];
 const raw=metadata.replaces;
 if(raw===undefined)return {templates,errors};
 if(!Array.isArray(raw)||!raw.length){errors.push('replaces must be a nonempty list of forms');return {templates,errors};}
 const parameters=isObject(metadata.parameters)?metadata.parameters:{};
 raw.forEach((entry,index)=>{
  const at=`replaces entry ${index+1}`;
  if(!isObject(entry)){errors.push(`${at} must be a mapping`);return;}
  const unknown=Object.keys(entry).filter(k=>!['pattern','kind','settings','canonical','guard'].includes(k));
  if(unknown.length){errors.push(`${at} has unknown fields: ${unknown.join(', ')}`);return;}
  let guard:TemplateGuard|undefined;
  if(entry.guard!==undefined){
   if(!templateGuards.includes(entry.guard as TemplateGuard)){errors.push(`${at} names guard ${String(entry.guard)}; choose one of ${templateGuards.join(', ')}`);return;}
   guard=entry.guard as TemplateGuard;
  }
  const spellings=[rule,...aliases];
  if(entry.pattern!==undefined){
   const pattern=String(entry.pattern);
   if(!Object.hasOwn(groupPatterns,pattern)){errors.push(`${at} names group pattern ${pattern}, which does not exist`);return;}
   if(!groupPatterns[pattern].includes(rule)){errors.push(`${at}: group pattern ${pattern} writes ${groupPatterns[pattern].join(' or ')}, not ${rule}`);return;}
   if(entry.settings!==undefined||entry.canonical!==undefined||entry.kind!==undefined){errors.push(`${at}: a group pattern takes no kind, settings or canonical`);return;}
   templates.push({rule,spellings,form:`${pattern} ${rule}`,pattern,...(guard?{guard}:{})});
   return;
  }
  if(!isObject(entry.settings)||!Object.keys(entry.settings).length){errors.push(`${at} needs a pattern or nonempty settings`);return;}
  const kind=entry.kind===undefined?rule:entry.kind;
  if(typeof kind!=='string'||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(kind)){errors.push(`${at}: kind must be a rule name`);return;}
  const omit=isObject(entry.canonical)&&Array.isArray(entry.canonical.omit)?entry.canonical.omit:undefined;
  if(!isObject(entry.canonical)||Object.keys(entry.canonical).some(k=>k!=='omit')||!omit||!omit.length||omit.some(name=>typeof name!=='string')){errors.push(`${at} needs canonical: {omit: [setting names]}`);return;}
  const names=omit as string[];
  for(const name of names){
   const parameter=parameters[name];
   if(!Object.hasOwn(entry.settings,name)){errors.push(`${at} omits ${name}, which its settings do not state`);return;}
   if(!isObject(parameter)||parameter.default===undefined||/^Required\b/.test(String(parameter.default))){errors.push(`${at} omits ${name}, which has no default on this page`);return;}
  }
  if(Object.keys(entry.settings).some(name=>!names.includes(name))){errors.push(`${at}: every setting of the replaced form must be omitted by the canonical form`);return;}
  templates.push({rule,spellings,form:`${kind} ${JSON.stringify(Object.fromEntries(Object.entries(entry.settings).sort(([a],[b])=>a<b?-1:1)))}`,kind,settings:entry.settings,omit:names,...(guard?{guard}:{})});
 });
 return {templates,errors};
}
/** One canonical rule per set: no form may be claimed twice. */
export function duplicateClaims(templates:readonly Template[]):string[] {
 const claimed=new Map<string,string>(),problems:string[]=[];
 for(const t of templates){
  const previous=claimed.get(t.form);
  if(previous!==undefined)problems.push(`The form ${t.form} is claimed by both ${previous} and ${t.rule}; each replaced form has one canonical rule.`);
  else claimed.set(t.form,t.rule);
 }
 return problems;
}
