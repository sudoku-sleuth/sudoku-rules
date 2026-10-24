# Evaluate rules

The portable package compiles case declarations and checks assignments against their checked formulas. It resolves library rules, building blocks, exact aliases, bound settings and embedded custom definitions. The host supplies source text and answers; compilation performs no file access or URL loading.

```ts
import {compileCase, evaluate, allowed, checkAnswer, type Cell, type Digit} from '@sudoku-sleuth/open-rules';

const result = compileCase({file: 'example.rules.md', text});
if (!result.value) throw new Error(JSON.stringify(result.diagnostics));
const compiled = result.value;
const rule = compiled.rules[0];
const assignment = {digits: new Map<Cell, Digit>([['r1c1', 1], ['r1c2', 2]])};
const verdict = evaluate(rule, assignment);
const supported = allowed(rule, assignment, new Map());
// Supply every board digit and every required auxiliary answer:
const answer = checkAnswer(compiled, completeAssignment);
```

Use `Map<Cell, Digit>` or a cell-keyed object for `digits`. `Digit` is a face value from the board alphabet. Empty cells are absent. `shading` maps cells to booleans; absent shading is unknown, and false means unshaded. `values` supplies the shared effective channel. Numeric witnesses accept numbers, decimal strings or `{numerator: bigint, denominator: bigint}` fractions. Arithmetic uses reduced exact fractions.

Shared answers use the declaration's name as their key:

- `routeAnswers`: ordered cell arrays; `routeClosures`: booleans.
- `networkAnswers`: arrays of two-cell edges.
- `partitionAnswers`: arrays of cell groups.
- `selectionAnswers`: selected cell arrays.
- `choiceAnswers`: booleans; `assignmentAnswers`: numeric label arrays.
- `valueAnswers`: named maps of cells to numbers; `symbolAnswers`: named maps of cells to digit arrays.

Without a value-binding declaration, effective values default to face digits. A case with Value Modifier, Mapped Values or Liar Cells supplies the same effective values to every valued rule. Private finite witnesses are searched by their owning formula. Shared answers are checked as supplied, including under negation. Owned clues in a clue count resolve their rule definitions and defaults on the same assignment.

## Compilation

`compileCase(file): Result<CompiledCase>` returns diagnostics or `{rules, board}`. Each compiled rule contains `id` and `label` when declared, `name`, `span`, and `scope`. Header givens and extra houses have their own source-linked rules. An unresolved declaration or a missing executable meaning produces a diagnostic. Unsupported finite lowering retains the checked general formula; it does not discard the declaration. Primary regions describe geometry; extra header regions assert distinctness. Decoration has the constant meaning true.

Scope is a safe set of cells a rule can read. Finite lowering supplies local supports for supported houses, pair relations and lines. Cage, Killer and Diagonal Sum (Little Killer) use their declared cell collections; their constant totals do not add board cells. General formulas that use board collections, computed coordinates or shared answers retain a conservative board-wide scope. Treat compiled objects as immutable and compile again after changing declarations.

`not` negates the complete declaration. A condition wraps that result as an implication: `if uniform` activates it when the primary cells have one shading colour; `unless uniform` activates it when they do not. `distinct` reads face digits and `connected` reads orthogonal geometry. An inactive condition holds without evaluating its consequent.

## Verdicts

`evaluate(rule, assignment)` returns `{status: 'holds' | 'broken' | 'undecided', cells?: Cell[]}`. Boolean connectives and quantifiers propagate missing information. Small unknown digit and shading scopes are refined by exhaustive completion when scope size times digit combinations times shading combinations is at most 10,000. Each unknown shade contributes two combinations. A local membership read of `H` needs only that cell’s shade; reading the whole set needs complete shading. Larger scopes use three-valued formula evaluation, so undecided also covers facts requiring further search. Missing auxiliary answers remain undecided.

A broken verdict returns a fresh `cells` array containing assigned digits or shades that witness the conflict. Empty cells are omitted. Distinctness, conjunctions and universal quantifiers collect their failing children or occurrences. Refinement reports the original assigned cells that jointly rule out every completion. Negation uses the cells supporting the positive formula’s truth. A witness need not be a minimum conflict set; a contradiction independent of assignments can have an empty witness.

Sudoku houses, anti-move constraints and supported global relations use decomposed house or pair checks. Evaluation does not solve the whole grid.

`checkAnswer(compiled, answer)` requires every board digit and all auxiliary answers used by the formulas. It returns `{holds, broken: [{rule, cells}]}`. Incomplete digits, out-of-alphabet digits, missing auxiliary answers and computational refusals return `holds: false`. Rules proved broken appear in `broken`; undecided rules prevent a solved answer without being listed as broken. Out-of-alphabet digits produce a broken evaluation with the affected cells.

## Candidate support and bounds

`allowed(rule, assignment, candidates)` returns `Map<Cell, Set<Digit>>` for empty scope cells. Each digit with a satisfying completion of the rule’s scope is retained. When every completion can be decided, the result is exact. An undecided completion also supports its digits, so missing auxiliary answers cannot cause pruning. It ignores other declarations. Missing candidate sets use the board alphabet; an explicitly empty set supplies no candidates.

The Cartesian preflight bound is:

```text
max(1, scope.length) × product(candidate count for each empty scope cell) ≤ 100,000
```

Above it, `allowed` returns the string `'too-large'` before searching. It enumerates only scope cells, never cells outside scope. Missing auxiliary information retains candidate support. Resource refusals return `'too-large'` and discard partial candidate sets.

Each `evaluate` or `allowed` call has one shared budget of 100,000 steps (`ALLOWED_WORK_LIMIT`). Interpreter expressions, finite checks, completion visits, and nested owned-clue or valued-rule calls spend from that budget. Refinement and successive candidate completions do not reset it. Exhaustion returns `undecided` from `evaluate` and `too-large` from `allowed`. These are step bounds, not elapsed-time guarantees. Intervals and cell-list expansions have at most 100,000 members. Finite set domains have at most 16 eligible members; finite record and bounded-list domains have at most 100,000 entries; partitions have at most 8 cells. Hidden cages prune by their required members and use the same step budget. Arrow remainders use positive integer alphabets and totals at most 100,000. Owned-clue and valued-rule calls nest at most 32 times. Boards follow the normal-form board contract: at most 1,024 cells and an alphabet of at most 64 distinct safe integers.

General integer domains, unrestricted list witnesses and arbitrary integer expression equations have no complete finite enumeration. `evaluate` returns `undecided` for those domains; `allowed` returns `too-large`. Specific exact implementations handle divisibility, primality, integer powers, sum partitions and direct letter-equality cage expressions. Compilation retains checked unrestricted formulas; the public APIs return the safe refusal verdicts above. No bounded sample stands in for an unbounded domain.

## Maintain definitions

Run `bun scripts/evaluator-library.ts` after changing rule formulas or contracts. `bun scripts/evaluator-library.ts --check` verifies the portable definition source. It stores formulas and headers without site prose; the existing checker compiles them once on first use. The evaluator tests exercise public examples, partial assignments, auxiliary channels, small-scope candidate properties and browser bundling. Timing tests print per-rule costs on a 9×9 board without a performance threshold.
