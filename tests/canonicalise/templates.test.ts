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

test('a form claimed twice is refused',()=>{
 const claim={parameters,replaces:[{settings:{channel:'D'},canonical:{omit:['channel']}},{settings:{channel:'D'},canonical:{omit:['channel']}}]};
 expect(duplicateClaims(readTemplates(claim,'thermo').templates)).toEqual(['The form thermo {"channel":"D"} is claimed by both thermo and thermo; each replaced form has one canonical rule.']);
 expect(readTemplates({parameters,replaces:[{kind:'pair',settings:{channel:'D'},canonical:{omit:['channel']}}]},'thermo').errors[0]).toContain('unknown fields');
});
