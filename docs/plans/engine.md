# Open Rules engine

**Owner review · 12 October 2026. Plan only.**

The public specification owns rule meanings. A case references definitions and supplies parameters. Publish `@sudoku-sleuth/open-rules`, with command-line checker `openrules lint <file-or-directory> --json`, for CI, setters, the AI skill and the browser editor. Sudoku Sleuth uses a git submodule (a pinned checkout inside its repo); releases identify their source commit and specification fingerprint.

## Goal 1: complete spec, linter and tools

Each slice ships independently with its tests. [Acceptance details](engine-checks.md#detailed-slice-contracts) retain the full function contracts, file layout, migration evidence and risks.

1. **Formula language.** `parseFormula` and `compileLibrary` parse both rules and shared definitions into a typed tree: a structured formula with checked input/result types. Cover quantifiers (“every”/“some”), connectives (“and”/“or”), arithmetic, absolute value/size, sums/counts/products, sets, indexing and predicate calls. Types distinguish cells, digits/values, positions, numbers, paths, cell sets and true/false values. Every name must be declared or bound; reject undefined `partial`, wrong argument counts/types and unsafe operations with exact source locations. Test all formulas and failures; replace prose definitions with formal ones.

2. **Rule lines.** `parseCaseEnvelope` collects references; `parseCase` checks arguments after resolution. Derive syntax, types, defaults, aliases and conditions from rule-page declarations, never per-kind guard code. Preserve coordinates, order and setter wording. Check board membership, declared path connections, parameters and IDs: numbered only for repeated kinds. Flags require a flagged case. Test the full 3,887-case collection, invalid counterparts and alternate library roots.

3. **Loader and compiled model.** `resolveCase` fetches/checks every referenced definition and declared shared dependency; `compileCase` builds portable puzzle constraints. Short kinds resolve against the case’s `library:`; full URLs select any host. No built-in URL or trusted host. The host supplies trusted libraries; Sudoku Sleuth configures its own. Inject fetching so Node, Workers and browsers share the loader. Cache by URL and exact-byte fingerprint (hash). Persist a lock record listing URLs, redirects, dependencies, hashes and compiler version; retain URL/hash history. A changed hash at the same URL is an error; new meanings require new kinds. Test unreachable/non-rule pages, cycles, limits, deadlines, cache corruption and redirects.

   External and embedded custom rules pass identical checks, remain unverified, and cannot replace or shadow library definitions or terms. Customs can be proposed for promotion. Unverified rules get only generated checking/candidate filtering, never hand-written techniques or their premises. Trust follows actual pages and dependencies, not a redirect’s starting URL.

4. **Evaluator and examples.** `evaluate` checks partly filled grids and shared typed choices, such as modifier cells, regions and letters. Return true, false, unknown or invalid input; missing answers and exhausted budgets never imply success. True holds for every remaining completion; false has no satisfying completion. Require Satisfies=true and Breaks=false. Generate explanations from evaluated values; preserve setter wording separately. Test contradictory examples, incomplete choices, negative numbers and exact arithmetic.

Compile once at import/settle and persist the checked model atomically, including definitions, bindings, trust and lock. Never resolve on a page request. The editor resolves live while editing, cancels stale requests and caches results. Cross-origin browser access means permission to read another website: verify deployed Markdown/prelude response headers before editor release. The 12 October probe failed DNS; CORS remains unverified. Configure fetching limits and network policy separately from trust. CLI options: `--trusted-library` (repeatable), `--lock`, `--offline`; CI uses frozen responses without network.

## Goal 2: our engine and product integration — later

5. **Generated checkers.** `generate` compiles checked definition trees into portable TypeScript without server/browser-specific APIs (Node/DOM) or dynamic execution. Solver and Desk consume the versioned compiled model, never Markdown. Test reproducible output, browser use and agreement with the evaluator and existing checkers; settle known disagreements against the spec. Nothing is generated solely from a case file.

6. **Candidate filtering and proof.** `propagate` removes candidates only after proving no supporting assignment within the rule’s scope. `verifyTechnique` checks hand-written Watson techniques against generated constraints. A contradicting completion disproves a deduction; exhaustive failure to find one proves it; timeout means unknown. Test small boards exhaustively, replayable evidence and order-independent closure. Finish cheap deductions before speculation; keep the shared hint ledger. Larger proof runs are separate.

## Completeness

Every diagnostic in every slice carries a stable code, file line/column/span and a plain-language message naming the setter’s own terms; optional `detail` holds technical paths, and invalid fixtures assert exact message text.

Invalid source remains writable/saveable, then lint rejects it. CI asserts exact codes, locations and messages, not error substrings. Every check needs a rejecting fixture and repaired accepting counterpart; rejecting scenarios must equal or exceed accepting ones.

| Check group | Required rejection coverage |
| --- | --- |
| Documents/formulas | Headers, names, arguments, types, scope |
| Cases | Kinds, parameters, boards, paths, IDs, flags |
| Loader/trust | Fetch failures, limits, changed hashes, collisions |
| Examples | Wrong verdicts, conflicting values/text, missing choices |

The [full check-by-fixture inventory](engine-checks.md#complete-check-by-fixture-inventory) specifies each fixture, code/location and CI coverage gate, including every declared rule condition.

**Friday 16 October:** slices 1–3, npm/CLI, CI, invalid corpus and AI skill integration; aim for slice 4, otherwise complete it immediately after Friday without claiming verified examples. Finish goal 1 before goal 2.

**CI budget: 58 s = 10+20+5+10+5+8 s for slices 1–6**, including the full library, 3,887 cases and rejection checks; cached browser edits target 100 ms, network loading separately.

## Owner decisions

1. **Should the public repo own the spec, with private docs pointing here?** Recommend yes: one definition serves every consumer.
2. **Should published meanings and URL fingerprints stay fixed?** Recommend yes: changed meanings need new kinds; retain receipts to detect changes.
3. **Should numbers use exact arithmetic?** Recommend yes: rounding must not change whether a rule passes.
4. **Should old path/default/ID behaviour be preserved through migration?** Recommend yes, unless explicitly corrected: importing must not silently change puzzles.
5. **Should Sudoku Sleuth trust only explicitly configured libraries?** Recommend yes, with bounded fetching: setters can use other hosts without granting them solver techniques.
6. **May Friday ship without verified examples?** Recommend yes only if slice 4 slips: finish it next and describe Friday’s checks accurately.
7. **Should hand-written techniques require proof before engine adoption?** Recommend yes: agreed supported boards need proof; unknown results cannot authorise deductions.
