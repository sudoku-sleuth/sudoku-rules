# Slice 1 implementation record

12 October 2026. Formula language only; stopped before slice 2. No Git operations or publication.

## Files

- `src/language/{ast,parser,checker,exact,diagnostics,wording}.ts`: Unicode/ASCII grammar, typed trees and binders, parsed signatures, scoped resolution, type/arity checking, guarded operations, recursion/work limits and exact rational arithmetic.
- `src/{index,library,cli}.ts`: portable exports, located Markdown formula/parameter extraction, atomic library compilation and the Node file adapter for `openrules lint`.
- `spec/{grammar.ebnf,prelude.md,types.md,logic.md,diagnostics.md}`: canonical grammar, 43 parsed shared declarations and the type/class/diagnostic contract. Missing upstream definitions remain reported errors.
- `tests/language/{core,corpus,cli,portable}.test.ts`; `tests/{invalid,valid}/rules/*.md`; `tests/invalid/expected.json`: 90 rejecting files and 90 repairs, exact ordered diagnostics and a coverage gate for every registered slice-1 check. Portability runs the browser bundle with no Node/DOM/fetch globals.
- `package.json`, `bun.lock`, `tsconfig.json`, `.gitignore`, `scripts/{build-package,lint-spec,audit-language}.ts`, `.github/workflows/ci.yml`: scoped npm package/bin, pinned compiler dependencies, declaration/browser/CLI builds and the stable CI hook.
- `README.md`, `CONTRIBUTING.md`, skill `references/{checking,new-rule}.md`: formula commands/types and the pending case/resolver/example phases. Skill metadata validator passed.
- `docs/reports/slice-1-source-audit.{md,json}`: every audited source file/block, exact hashes and located failures. Source inputs were read only.

## Verification and local elapsed times

Bun 1.2.23; Node 24.20.0; TypeScript 5.9.3. Fresh compiler/CLI processes, existing dependencies. Frozen installation passed using a writable temporary cache and `--backend copyfile`; no dependency versions floated.

| Step | Seconds | Exit/result |
| --- | ---: | --- |
| YAML lint | 0.048 | 0 |
| Formula lint | 0.053 | 0 |
| Skill lint | 0.107 | 0 |
| Typecheck | 0.497 | 0 |
| Slice 1 tests | 0.495 | 0; 202 pass |
| Default suite | 0.629 | 1; 219 pass, 2 missing-manifest failures |
| Suite with staged marketplace | 0.653 | 0; 221 pass |
| Package build | 0.539 | 0 |
| Site build | 0.049 | 0 |
| actionlint | 0.037 | 0 |
| Source audit | 0.100 | 1; migration failures reported |

The default test command and CI remain blocked by the existing missing `.agents/plugins/marketplace.json`. This workspace makes `.agents` read-only. The already staged `codex-marketplace.json` passes those same tests with their existing explicit override:

```sh
OPEN_RULES_CODEX_MARKETPLACE=codex-marketplace.json bun test
```

Package tarball creation and its symlinked `openrules` executable passed with help/valid/invalid statuses 0/0/1; no publication. Node CLI and its packaged prelude run independently of Bun. The static build has zero publishable rule pages/cases because those folders are empty; generator fixtures are exercised by the tests.

## Setter-facing diagnostic contract

All slice 1 diagnostics retain their stable codes and source spans, name the setter’s parameters or formula terms in plain language, and keep technical paths/parser output in optional `detail`. The invalid corpus fixes exact message text as well as locations. A wrong-argument fixture names `targetTotal`; API/CLI tests keep technical details separate from setter messages. The plan records this contract for every later slice. Source audit output was refreshed with the same contract.

## Read-only source audit

Snapshot: 91 pages, 121 formula blocks, 51 parsed blocks, 2 fully compiled pages and 305 diagnostics. The source library gained pages during this task; the report records exact page fingerprints for this snapshot. The source spec still lacks predicates.md and logic.md.

The [failure list](slice-1-source-audit.md) and [full diagnostics](slice-1-source-audit.json) identify every failing page. Missing executable parameter types, undeclared notation, prose bindings and untyped prelude equations are rejected. No English-to-formula inference or exception whitelist makes them pass.

This measures slice 1 and its rejection corpus, not the future full-library acceptance gate or 3,887-case validation. Rule lines, URL loading and worked-example verdicts are explicitly pending.
