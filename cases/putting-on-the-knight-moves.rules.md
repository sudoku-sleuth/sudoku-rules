---
format: open-rules
title: Putting on the Knight Moves
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pe2lgvxqjs
case: https://sudoku-sleuth.com/cases/putting-on-the-knight-moves
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c4=5 r4c8=5 r5c5=4 r6c2=9 r8c6=9
exported: 6d3b82defb8ee0a98125c24ff2c29987
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2-r4c1 total 8 connected true
cage-2: cage r1c3-r1c4-r2c3 total 9 connected true
cage-3: cage r1c6-r1c7-r2c7 total 8 connected true
cage-4: cage r3c8-r3c9-r4c9 total 9 connected true
cage-5: cage r6c1-r7c1-r7c2 total 22 connected true
cage-6: cage r8c3-r9c3-r9c4 total 21 connected true
cage-7: cage r8c7-r9c6-r9c7 total 22 connected true
cage-8: cage r6c9-r7c8-r7c9 total 14 connected true
cage-9: cage r3c4-r4c3-r4c4 total 20 connected true
cage-10: cage r3c6-r4c6-r4c7 total 15 connected true
cage-11: cage r6c6-r6c7-r7c6 total 12 connected true
cage-12: cage r6c3-r6c4-r7c4 total 15 connected true
anti-knight
```

**Sudoku, Antiknight, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Antiknight: Digits in cells a chess knight's move apart must be different.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net
