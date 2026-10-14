# Play state

The formula language has two domains over the same finite board C. Every rule is first-order logic; expanded, everything here is too.

| Domain | Contents | Who may use it |
| --- | --- | --- |
| Solution | The answer grid, read through D and V; the givens; board shape and regions | Every page |
| Play | The player's entries; what is known of the answer; predicates defined from them, such as `visible` | Setup features only |

Fog is the first play-state feature. It is first-order over the entries and not over the solution grid, because it describes what a player sees and does not constrain which grids solve the puzzle.

## Entries

E is a partial function from cells to symbols: E(c) is the symbol the player typed in c, or undefined. In formulas `entry(c)` is the optional symbol and `entered(c)` its value.

- A given is not an entry. A symbol typed over a given is an entry in that cell, so a cell can be a given and placed at once. `given(c)` is case data; `placed(c)` is `present(entry(c))`.
- Erasing makes E(c) undefined. Every play predicate is a function of the current E; history is not part of the state.
- Pencil marks, colours and pen marks are not in E and make nothing visible. A feature that needs them adds a further `play` primitive beside `entry`.
- The answer is the solution grid: `answer(c)` is D(c). The prelude uses S as a local name for a cell group, so the vocabulary does not.
- `answered` is true when the host holds a reference solution; `known(c)` when that solution covers c. They define both cases as SudokuPad 0.611.0 behaves (`feature-fog.js`): with a solution, a symbol counts only if it equals the solution's symbol in c, and nothing counts in a cell whose solution symbol is unknown; with no solution, any symbol counts.
- `correct(c) = placed(c) ∧ (given(c) → entered(c)=givenValue(c)) ∧ (answered → known(c) ∧ entered(c)=answer(c))`. A given counts only when the player types its own digit over it. One deliberate difference from SudokuPad: with links, no answer, and a different digit typed over a given, SudokuPad's lamp accepts any entered digit; here that entry is not correct, because a given is correct only with its own digit (as it already is without links). A case's givens agree with the answer: `sudoku.md` states `∀c∈C: given(c) → D(c)=givenValue(c)`.

## Typing

A declaration is solution-domain unless it starts with `play`. A name is play-domain when declared with it.

1. A rule page's formulas may not name a play-domain name, directly or through a term (E_PLAY_DOMAIN). A rule is a statement about solutions and cannot depend on what a player typed.
2. A shared declaration without `play` may not name a play-domain name in its body or `requires` (E_PLAY_DOMAIN).
3. A `document: feature` page with `domain: play-state` may name both. E is an input, never a bound variable.
4. A rule page may name a parameter after a play word, for example skyscraper's `visible`. The parameter wins and rules never see the play name.

The language adds one declaration prefix and no expression forms (`spec/grammar.ebnf`). `play type` is rejected: types carry no domain.

Domain is not a logical class. A page's class measures its formula (`Class: **first-order**.`). A play-state page records the domain in its front matter, `domain: play-state`, and the site generates the `Domain: play-state.` line below the class.

## Visibility

`visible(c)` is the general play predicate: c is shown to the player. It is declared `play primitive` in `rules/predicates.md` and has no meaning of its own. A visibility feature contributes by defining it.

- The page states `defines: visible` and one formula `∀c∈C: visible(c) ↔ φ(c)`. `visible` does not occur in φ, directly or through a term, so visibility is a function of E and never a fixed point: lighting a cell fires nothing by itself. Anything else is E_PLAY_DEFINITION.
- Only predicates listed in the prelude front matter (`feature_predicates`, today `visible`) can be defined. A feature that names `known`, `correct` or any other name is E_PLAY_DEFINITION.
- The page may carry an `openrules` block of its own `play` types and terms, compiled as an extension of the prelude. It may not redeclare a prelude name. Fog-specific words live there.
- Free names in φ are the page's parameters, its own declarations and the prelude.
- A case has at most one feature that defines a given predicate. Two is E_FEATURE_CONFLICT. A later composition rule can lift this.
- A case with no visibility feature has `∀c∈C: visible(c)`.
- The initially visible cells are the cells where `visible(c)` holds with no entries. This is derived, not a parameter. Which clue lines a page hides because of them is presentation, not a rule.

## Fog

[fog.md](../rules/fog.md) gives the page text. Parameters: `initiallyLit : set<cell>` and `links : optional<list<FogLink>>`, where a link is `{trigger : set<Spot>, lights : set<cell>}` and a Spot is a board coordinate that may lie off the board. Mode follows presence: `links` omitted is the neighbourhood reveal; `links: []` is links only. The definition:

```text
∀c∈C: visible(c) ↔ (c∈initiallyLit ∨
  (if present(links)
   then ∃k∈unwrap(links): c∈k.lights ∧ fires(k)
   else (given(c) ∧ correct(c)) ∨ ∃a∈C: ¬given(a) ∧ correct(a) ∧ near(a,c)))
```

with `fires(k) = ∀t∈k.trigger: correctAt(t)`, `correctAt(p) = ∃c∈C: row(c)=p.row ∧ col(c)=p.col ∧ correct(c)` and `near(a,b)` the 3×3 around a. Fully expanded, the links branch reads `∃k∈links: c∈k.lights ∧ ∀t∈k.trigger: ∃x∈C: row(x)=t.row ∧ col(x)=t.col ∧ placed(x) ∧ (given(x) → E(x)=g(x)) ∧ (answered → known(x) ∧ E(x)=D(x))`.

Consequences, each a direct reading of the formula:

- The neighbourhood is clamped at the edge because a and c range over C.
- A given shows nothing by itself. It shows itself, and not its 3×3, when the player types its own digit over it.
- With links there is no neighbourhood, including `links: []`.
- A trigger need not be visible. A player can fire a link by entering a correct digit in a hidden cell, and a trigger on a given fires only when its digit is typed over it.
- A trigger off the board is never correct, so its link never fires.
- Erasing an entry hides again what only it showed.
- An empty trigger is rejected by the page's `requires` (E_FEATURE_REQUIRES). The formula alone would fire such a link at once, as SudokuPad does; the format is stricter, because decoders drop such links.

## What a solver may assume

A solver, hint or coach sees what a player sees. For a play state E: a given digit is seen iff `visible(c)`; the player's own entries are seen everywhere, hidden cells included; whether an entry is correct is seen only through what it makes visible. The solution set does not change, so a solver that uses only what it sees is sound and may be incomplete. Placing digits under fog to reveal more is solver policy.

## Checking

Language checks: E_PLAY_DOMAIN (above) and E_PLAY_DEFINITION. Case checks, run when the case header declares a feature block: the block is decoded against the page's parameter types (E_HEADER_TYPE for an unknown field, a wrong type or an unreadable cell), its `requires` formulas are evaluated (E_FEATURE_REQUIRES, with the message the page gives), and a second feature defining the same predicate is E_FEATURE_CONFLICT.

- Cells accept `r1c1`; row-major numbers are accepted when the board size is known, from `sudoku NxN` or a `board` header. A missing set or list parameter is empty and a missing optional is absent.
- `requires` formulas use booleans, parameter names, `present`, `unwrap`, member access, `¬ ∧ ∨ → ↔`, `=`, `≠` and ∀/∃ over a list or set; the page is rejected otherwise.

Rejecting files are in `tests/invalid/rules/` (`play-in-rule`, `play-leak`, `play-fixed-point`) and `tests/invalid/integration/` (`fog-empty-trigger`, `fog-and-haze`), each with a repair under `tests/valid/`; their exact diagnostics are in `tests/invalid/expected.json` and `tests/invalid/integration-expected.json`.

## Conformance

`tests/fog/*.json` state a board size, initially lit cells, links, givens, an answer, and a list of entry sets with the expected visible cells. `tests/fog/fog.test.ts` compiles the library, takes the checked formula of `rules/fog.md` and evaluates it (`tests/fog/evaluate.ts`) over each fixture, so the fixtures test the definition itself. `empty-trigger-is-rejected` is the E_FEATURE_REQUIRES case. An implementation conforms when it shows exactly the stated cells for every step. The fixtures cover the neighbourhood and its clamping, a given lighting nothing or itself, wrong digits, links with one or several triggers, shared triggers, triggers in hidden cells, off-board triggers, chaining and erasing, no answer, and cells of unknown answer.

## History

14 October 2026. Owner decisions: fog is defined in the language because setters can adopt the standard only if it covers what their puzzles do; the domain is a front-matter label and not a class; `answered` and a per-cell `known` follow SudokuPad; hiding clue lines is presentation and not part of the spec; `visible` is general and fog defines it; one visibility feature per case; the reading layer (plain-language templates and the reader) is removed from the library.
