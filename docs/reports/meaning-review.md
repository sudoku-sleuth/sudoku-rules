# Formula meaning review corrections

13 October 2026. Files edited only; no Git operations, PR messages, push or deployment. The supplied specification was read as the meaning reference; solver disagreements were kept separate.

## Corrections

1. **Hidden Modular:** restored existential selection of a valid extent followed by its triple constraints. Missing endpoints, empty cells and invalid first-x extents make the rule false. Removed the universal implication and the lenient acceptance claim copied from the solver disagreement.
2. **Arrow:** every partial arrow uses sum_D(line) ≤ B, including a one-cell bulb. Complete one-cell arrows retain valueSum/V; complete multi-cell arrows read digits. Updated the reading beside the formula.
3. **Value Modifier:** restored ∃M:set<cell>: M⊆C inside the rule and Class: existential. Removed M, modifierFactor and modifierOffset from prelude inputs. V reads the effective-value channel constrained by the modifier formula, rather than a preselected global M. Updated the shared definitions and syntax prose to preserve witnesses inside their owning rules, including under negation.
4. **Distinctness:** added distinctAt over distinct list positions and restricted distinct_f/distinct_D/distinct_V to sets. Converted every typed list/path argument found in the checked rule trees: modular, entropic, Hidden Modular, diagonal windows, all relevant line-choice options, Renban and Magic Square. Cell-set uses remain set-based. Updated the condition-keyword description for ordered versus set arguments.
5. **Shift:** retained the integer guard because the reference predicates page explicitly states that shift parity equivalence is for integer values. Added one-line domain statements to predicates, pair, cage-pair and negative. A fractional difference relation still passes its regression fragment; the guard applies only to shift.
6. **Letter answers:** reworded the prelude to refer to the list passed to defined/eval, whose signatures declare it. The cage-expressions page continues to bind letterValues explicitly inside its formula.

## Files and fixtures

- rules/{arrow,hidden-modular,value-modifier,predicates,diagonal-lines,entropic,line-choice,magic-square,modular,renban,pair,cage-pair,negative,syntax}.md.
- tests/fixtures/meaning-review.json, tests/language/{meaning-review.test,finite-fragment}.ts: 27 concrete acceptance/rejection fragments and two quantifier/scope tests. They evaluate the actual checked formulas through a bounded test-only interpreter using the core's exact arithmetic. The helper is not shipped or exposed as the future public evaluator.
- tests/{invalid,valid}/rules/{list-distinct-requires-positions,set-distinct-rejects-list,modifier-witness-must-be-bound,letter-answers-must-be-bound,shift-parity-integer-domain}.md; tests/invalid/expected.json and tests/language/corpus.test.ts: five additional rejection/repair pairs against the public prelude, asserting exact codes, messages and full source spans. There are now 103 language pairs plus 18 integration pairs.
- docs/reports/library-integration.md: marked the earlier snapshot and replaced the incorrect lenient-extent claim with the review correction.

## Verification

| Step | Seconds | Result |
| --- | ---: | --- |
| YAML lint | 1.083 | pass |
| Spec lint | 1.096 | pass |
| Skill lint | 0.239 | pass |
| Tests | 3.486 | pass |
| Typecheck | 0.697 | pass |
| Package build | 0.681 | pass |
| Site build | 1.434 | pass |
| actionlint | 0.117 | pass |

317 tests pass with 5,004 assertions. Spec lint accepts all 85 pages and 82 formula blocks. It checks headers and 74,879 known references across all 3,892 current case files, with no deferred production URLs. The case sources were not edited. The site builds 85 raw/HTML pages and 3,892 case files; byte-preservation and route tests pass. Full case parameters, URL fetching and example evaluation remain explicitly pending in the CLI.
