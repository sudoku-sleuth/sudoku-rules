import { markdownFiles, readPage, validateAliases, validatePage } from "./content";
import { stat } from "node:fs/promises";

export async function lintFile(file: string, isCase = file.endsWith(".rules.md")) {
  const { metadata } = await readPage(file);
  if (isCase) {
    if (metadata.format !== "open-rules") throw new Error("format must be open-rules");
    for (const key of ["title", "setter", "source", "case", "library", "status"]) {
      if (typeof metadata[key] !== "string") throw new Error(`${key} must be a string`);
    }
  } else {
    validatePage(metadata, file);
  }
}

export async function lintYaml(root = ".") {
  if ((await stat(root)).isFile()) {
    await lintFile(root);
    return 1;
  }
  const caseFiles = new Set(await markdownFiles(root, "cases", ".rules.md"));
  const files = [...await markdownFiles(root, "rules"), ...caseFiles];
  const errors: string[] = [];
  for (const file of files) {
    try {
      await lintFile(file, caseFiles.has(file));
    } catch (error) { errors.push(`${file}: ${error instanceof Error ? error.message : error}`); }
  }
  if (!errors.length) {
    const pages = await Promise.all((await markdownFiles(root, "rules")).map(async file => { const page = await readPage(file); return {...page, slug: validatePage(page.metadata,file)}; }));
    try { validateAliases(pages); } catch(error) {errors.push(error instanceof Error ? error.message : String(error));}
  }
  if (errors.length) throw new Error(errors.join("\n"));
  return files.length;
}

if (import.meta.main) console.log(`YAML front matter: ${await lintYaml(process.argv[2] ?? ".")} files checked`);
