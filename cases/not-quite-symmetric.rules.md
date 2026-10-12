---
format: open-rules
title: Not Quite Symmetric
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ung4vgup0n
case: https://sudoku-sleuth.com/cases/not-quite-symmetric
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r3c2-r3c3-r4c2 total 15 connected true
cage-2: cage r2c6-r2c7-r3c7-r3c8-r4c8 total 15 connected true
cage-3: cage r6c2-r7c2-r7c3-r8c3-r8c4 total 35 connected true
cage-4: cage r6c8-r7c7-r7c8-r8c6-r8c7 total 35 connected true
renban-1: renban r6c8-r5c8-r4c8
renban-2: renban r8c4-r8c5-r8c6
renban-3: renban r3c3-r2c2
renban-4: renban r3c2-r4c2-r5c2-r6c2
renban-5: renban r2c3-r2c4-r2c5-r2c6
renban-6: renban r7c7-r6c6
renban-7: renban r3c6-r3c7
renban-8: renban r7c3-r6c3
renban-9: renban r8c8-r9c9
renban-10: renban r3c1-r4c1
renban-11: renban r3c9-r4c9
renban-12: renban r8c3-r9c4
renban-13: renban r1c6-r2c7
```

**Sudoku, Cages, Renban Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
