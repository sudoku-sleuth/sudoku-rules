# Library integration

12 October 2026. Public library migration on the owner-provided checkout. Files edited only; no Git operations, publication or deployment. Production case source files were read without modification.

This 12 October integration snapshot is superseded for rule meanings by the [13 October review corrections](meaning-review.md).

## Before and after (12 October snapshot)

| Check | Imported state | Current state |
| --- | --- | --- |
| Formula pages | 2/84 accepted | 85/85 accepted, including the Markdown home index |
| Reported formula failures | 172 missing signatures, 70 syntax errors, 49 undefined names | 0 diagnostics |
| Shared definitions | Prose equations without executable signatures | 98 checked declarations in rules/predicates.md |
| Formulas | Legacy notation and implicit names | 82 checked blocks: 80 rule formulas, shared prelude and typed composition |
| Case coverage | Header checks; no reference validation | 3,892 headers/reference lists, 74,837 known references, 0 deferred URLs |
| Site | Alias metadata and index reservation blocked build | 85 raw Markdown files and 85 HTML pages, plus 3,892 raw cases |
| Rejection corpus | 90 language fixtures and repairs | 98 language pairs plus 18 header/reference/alias pairs, exact messages/codes/spans |
| Tests | Existing language/site/skill suite | 278 pass, 0 fail, 4,949 assertions |

The imported 84-page count excluded rules/README.md. It now declares document: home, is checked, and is served at /README.md and /README/. The generated catalogue remains at /. Counts label case header/reference checks separately from full rule-line validation.

## Change groups

1. **Routes and aliases:** scripts/content.ts, scripts/build.ts, scripts/lint-yaml.ts, rules/{killer,whisper,README}.md and tests/site.test.ts. killer explicitly aliases cage; whisper explicitly aliases whispers. Alias pages have their own kind/URL and no duplicate parameters/formula; their targets must be definitions, not aliases. Both raw and HTML routes are served; catalogue shape, meaning and class come from the target. index keeps its kind and /index.md and /index/ routes. Only cases and style remain reserved. Home output /index.html does not collide with /index/index.html.
2. **Typed language and library:** src/language/{ast,parser,checker,diagnostics,wording}.ts, rules/*.md, spec/{grammar.ebnf,types.md}, tests/language/{core,corpus,portable}.test.ts and tests/{invalid,valid}/rules/. Parameters declare concrete types, optional values are guarded/unwrapped, enums use quoted setter choices, and local names/indices are explicitly bound. Mapped sets and ordered/filtered comprehensions replace indexed-family prose. collection<T> accepts sets/lists/paths while retaining ordered-read checks; digits are whole numbers. Guard proofs unfold definitions, combine exact bounds and tighten integer inequalities without rounding rational ones. Searches are bounded; unsafe reads, undefined names, recursion and malformed notation and formulas hidden on the home document remain rejected by the original corpus.
3. **Library/case integration and package:** src/{documents,cli,index}.ts, package.json, scripts/{lint-spec,audit-language}.ts, .github/workflows/ci.yml, tests/language/{cli,integration}.test.ts, tests/{invalid,valid}/integration/, both expectation manifests, README.md, CONTRIBUTING.md and skill references/{checking,new-rule}.md. The CLI compiles the public library once, checks case headers and known references against URLs resolved from each case's library field, and reports foreign references as deferred. Alternate roots have tests. The package includes the public definitions. The old bootstrap vocabulary moved from spec/prelude.md to tests/fixtures/typed-prelude.md; production meanings have one home.

## Meaning review

The supplied shape contracts were read as the reference. Typed formulas retain face digits versus effective values, ordered repetitions, closed windows, shared modifier/shading answers, arithmetic relations, constructed regions and hidden cages. No rule was mapped to a nearby kind. Class labels were corrected to match the checked trees.

The partial-arrow value-channel and Hidden Modular extent rewrites needed correction after review. The corrected partial branch reads digits for every bulb size; Hidden Modular requires a valid extent. Its former universal implication copied a known solver disagreement. Line-choice preserves its vacuous open two-cell modular/entropic choices, unlike standalone kinds. Custom sandwich crusts still select the first two occurrences. Numeric pair operands are optional for operations that do not read them, and guarded when required. Expression primitives declare exact integer evaluation and shared ordered letter bindings; their execution belongs to the evaluator slice.

## Verification

Local elapsed wall time, existing pinned dependencies, steps run serially:

| Step | Seconds | Result |
| --- | ---: | --- |
| YAML lint | 0.520 | pass |
| Spec and cases | 0.769 | pass |
| Skill lint | 0.174 | pass |
| Tests | 1.947 | pass |
| Typecheck | 0.517 | pass |
| Package build | 0.562 | pass |
| Site build | 0.932 | pass |
| actionlint | 0.037 | pass |

All requested commands passed with the ordinary test command, without a marketplace override. The full site test compares every library and case Markdown file byte-for-byte with its output, checks every HTML route and catalogue link, and tests index/alias coexistence. The portable browser bundle checks the public prelude in a realm without Node/DOM/fetch globals. The package was packed locally and its extracted Node CLI checked a case using its bundled definitions: 85 pages, 15 references, no diagnostics. Nothing was published.

The measured steps total 5.458 s, excluding dependency installation. This is local CI evidence, not a hosted-run timing.

## Remaining scope

Full rule-line parameter decoding, board/path/ID validation, custom-definition checking, URL fetching/trust/locks and example evaluation remain their planned slices. The CLI names these pending phases. The AI skill's foreign custom-rule example has one explicitly deferred URL; none of the production case references is deferred. No failed requested check remains. This migration does not claim evaluated examples or solver conformance.
