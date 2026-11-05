import {expect,test} from 'bun:test';
import {compilePublicLibrary,publicPages} from '../helpers/library';
import {duplicateClaims,groupPatternNames,groupPatterns,publishedTemplates,readTemplates} from '../../src';

const parameters={channel:{default:'V',type:'Channel'}};

test('published pages list templates that are read, and only name group patterns that exist',()=>{
 const library=compilePublicLibrary(publicPages).value!;
 expect(library.templates).toEqual(publishedTemplates);
 expect(duplicateClaims(library.templates)).toEqual([]);
 expect(groupPatternNames).toEqual(Object.keys(groupPatterns).sort());
 for(const template of library.templates)if(template.pattern)expect(groupPatterns[template.pattern]).toContain(template.rule);
});

test('a page cannot name a pattern that does not exist, on a rule that cannot write it, or a guard outside the list',()=>{
 expect(readTemplates({replaces:[{pattern:'fold-everything'}]},'negative').errors[0]).toContain('does not exist');
 expect(readTemplates({replaces:[{pattern:'merge-negated-pairs'}]},'thermo').errors[0]).toContain('writes negative');
 expect(readTemplates({replaces:[{pattern:'join-line-pieces',guard:'whenever'}]},'whispers').errors[0]).toContain('guard');
 expect(readTemplates({replaces:[{settings:{channel:'D'},canonical:{omit:['channel']}}]},'thermo').errors[0]).toContain('no default');
 expect(readTemplates({parameters,replaces:[{settings:{channel:'D'},canonical:{omit:['channel']},guard:'no-value-binding'}]},'thermo')).toMatchObject({errors:[],templates:[{rule:'thermo',form:'thermo {"channel":"D"}'}]});
});

test('two pages that claim the same replaced form are refused',()=>{
 const claim={parameters,replaces:[{kind:'thermo',settings:{channel:'D'},canonical:{omit:['channel']}}]};
 const templates=[...readTemplates(claim,'thermo').templates,...readTemplates(claim,'slow-thermo').templates];
 expect(duplicateClaims(templates)).toEqual(['The form thermo {"channel":"D"} is claimed by both thermo and slow-thermo; each replaced form has one canonical rule.']);
});
