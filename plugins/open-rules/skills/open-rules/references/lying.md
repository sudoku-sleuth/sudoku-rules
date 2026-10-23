# Cells and clues that lie

Read the whole scope and count before choosing declarations. Ask whether a
statement concerns written digits, effective values, or truth of whole clues.
Never pick the liar cells, the false clues, or the kinds from a drawing or solve.

For independent real values use `liar-cells`; its defaults mean one liar in each
standard house, distinct liar digits and distinct liar values in 1–9. Declare
`sudoku 9x9` separately. Whispers, Kropki, pair sums (X is sum 10) and region sums
already read V. Preserve both D and V in a worked answer. Affine changes such as
doublers still use `value-modifier`. On other boards supply groups and values.

When every named clue must be false, [F3](reading-input.md#negate-each-named-instance-f3)
still applies: `not` each complete rule. When only k of n clues are false, use
`clue-count clues [...] comparison "exactly" count k` (or `"at-least"` /
`"at-most"`). Each record has `id`, `rule` and named `args`. These are owned
clues, not additional positive assertions. Supply a separate count for each
stated line or box, or one complete list for the whole grid. Count whole marks
or their explicitly stated segments; never choose the false clues from a solve.
See [Lying Clues](https://rules.sudoku-sleuth.com/clue-count.md).

Per-mark alternative kinds remain unimplemented. Either Cage or Look And Say
does not mean both; ask when the source leaves its meanings unsettled. Liar-cell
puzzles such as German Whisper Lies and Region Sum Lies constrain values;
their titles alone do not say that a number of drawn clues must fail.

Decorative marks carry no condition (`true`). A false clue must fail its entire
predicate and therefore is not decoration. `element` identifies a drawing only;
it is independent of instance IDs and supplies no truth or choice semantics.
