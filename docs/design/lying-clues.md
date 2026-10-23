# Lying clues

[Liar Cells](../../rules/liar-cells.md) assigns independent real values, counts liar cells in supplied groups and controls face-digit and real-value distinctness separately. Every value-based clue reads that same assignment.

[Lying Clues](../../rules/clue-count.md) counts false complete meanings in an explicit list of owned clues. Choose exactly, at-least or at-most. Supply a separate list for each stated line, box or whole-grid scope. Whole marks and individual segments are different counting units.

Nested clues keep the referenced rule's contract, defaults and private witnesses. Distinct clue IDs count separately even when their meanings are equal. A counted clue is owned by the count; declaring it separately also asserts it positively. Negation complements the complete count.

Both meanings have their own named rule formulas. Existing countWhere and allDifferent express their counts and distinctness. The clause type records id, rule and named args; clueHolds evaluates that complete rule on the owner's answer and shared channels.
