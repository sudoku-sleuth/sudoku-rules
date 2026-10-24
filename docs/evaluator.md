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

`compileCase(file): Result<CompiledCase>` returns diagnostics or `{rules, board}`. Each compiled rule contains `id` and `label` when declared, `name`, `span`, and `scope`. Header givens and extra houses have their own source-linked rules. Primary regions describe geometry; extra header regions assert distinctness. Decoration has the constant meaning true.

Scope is a safe set of cells a rule can read. Finite lowering supplies local supports for supported houses, pair relations and lines. General formulas that use board collections, computed coordinates or shared answers retain a conservative board-wide scope. Treat compiled objects as immutable and compile again after changing declarations.

`not` negates the complete declaration. A condition wraps that result as an implication: `if uniform` activates it when the primary cells have one shading colour; `unless uniform` activates it when they do not. `distinct` reads face digits and `connected` reads orthogonal geometry. An inactive condition holds without evaluating its consequent.

## Verdicts

`evaluate(rule, assignment)` returns `{status: 'holds' | 'broken' | 'undecided', cells?: Cell[]}`. Boolean connectives and quantifiers propagate missing information. Small unknown digit scopes are also refined by exhaustive completion when scope size times alphabet combinations is at most 10,000. Larger scopes use three-valued formula evaluation, so undecided also covers facts requiring further search. Missing auxiliary answers remain undecided.

A broken verdict identifies the cells read by its failing formula. Distinctness reports a repeated pair; conjunctions and universal quantifiers retain a failing clause or occurrence. Disjunctions and negated whole formulas can require a larger witness. A witness need not be a globally minimum conflict set.

Sudoku houses, anti-move constraints and supported global relations use decomposed house or pair checks. Evaluation does not solve the whole grid.

`checkAnswer(compiled, answer)` requires every board digit and all auxiliary answers used by the formulas. It returns `{holds, broken: [{rule, cells}]}`. Missing answers throw `MissingValue` or `RangeError`; a computational refusal throws `EvaluationLimit`. These are exported error classes. An incomplete computation never returns a solved answer.

## Candidate support and bounds

`allowed(rule, assignment, candidates)` returns `Map<Cell, Set<Digit>>` for empty scope cells. Each retained digit participates in at least one satisfying completion of that rule's entire scope, using the supplied auxiliary answers. It ignores other declarations. Missing candidate sets use the board alphabet; an explicitly empty set supplies no candidates.

The work bound is:

```text
max(1, scope.length) × product(candidate count for each empty scope cell) ≤ 100,000
```

Above it, `allowed` returns the string `'too-large'` before searching. It enumerates only scope cells, never cells outside scope. Missing auxiliary information throws `MissingValue`. Formula resource refusals return `'too-large'` rather than partial candidate sets.

The interpreter bounds each formula to 2,000,000 expression steps. Intervals and cell-list expansions have at most 100,000 members. Finite set domains have at most 16 eligible members; finite record and bounded-list domains have at most 100,000 entries; partitions have at most 8 cells. Hidden cages prune by their required members and use the same step budget. Arrow remainders use positive integer alphabets and totals at most 100,000. Owned-clue and valued-rule calls nest at most 32 times. Boards follow the normal-form board contract: at most 1,024 cells and an alphabet of at most 64 distinct safe integers.

General integer domains, unrestricted list witnesses and arbitrary integer expression equations have no complete finite enumeration. `evaluate` throws `EvaluationLimit` for those domains. Specific exact implementations handle divisibility, primality, integer powers, sum partitions and direct letter-equality cage expressions. Compilation retains checked unrestricted formulas; callers handle explicit evaluation refusals. No bounded sample stands in for an unbounded domain.

## Maintain definitions

Run `bun scripts/evaluator-library.ts` after changing rule formulas or contracts. `bun scripts/evaluator-library.ts --check` verifies the portable definition source. It stores formulas and headers without site prose; the existing checker compiles them once on first use. The evaluator tests exercise public examples, partial assignments, auxiliary channels, small-scope candidate properties and browser bundling. Timing tests print per-rule costs on a 9×9 board without a performance threshold.
