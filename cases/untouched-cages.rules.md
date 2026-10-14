---
format: open-rules
title: Untouched Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/13g6lehjxg
case: https://sudoku-sleuth.com/cases/untouched-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: f3f34e0872262b263ce6670d418b6e44
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 8 connected true
cage-2: cage r3c6-r3c7-r4c7 total 22 connected true
cage-3: cage r2c2-r2c3-r3c2 total 9 connected true
cage-4: cage r1c1-r1c2 total 13 connected true
cage-5: cage r8c9-r9c9 total 15 connected true
cage-6: cage r1c7-r1c8-r1c9 total 9 connected true
cage-7: cage r8c2-r9c2 total 7 connected true
cage-8: cage r4c5-r4c6 total 9 connected true
cage-9: cage r8c6-r9c5-r9c6 total 8 connected true
cage-10: cage r7c4-r7c5 total 8 connected true
negative relations [{"op":"difference","value":1}] except []
```

**Sudoku, Nonconsecutive, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Nonconsecutive: Digits in orthogonally adjacent cells cannot be consecutive.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
