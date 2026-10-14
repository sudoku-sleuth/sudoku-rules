---
format: open-rules
title: Rollout
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/rollout
case: https://sudoku-sleuth.com/cases/rollout
library: https://rules.sudoku-sleuth.com/
status: read
givens: 6.........5.....37....5....8.4............2..1....9......1......3............2..4
exported: 815f6eb22e57689e4a29ad4ce8194320
---

```rules
sudoku 9x9
greek-carpet-1: greek-carpet r3c1-r3c2-r3c3-r4c3-r5c3-r5c2-r5c1-r4c1-r4c2 unrolled ["r3c1","r3c2","r3c3","r3c4","r3c5","r3c6","r3c7","r3c8","r3c9"]
greek-carpet-2: greek-carpet r1c6-r2c6-r3c6-r3c5-r3c4-r2c4-r1c4-r1c5-r2c5 unrolled ["r1c6","r2c6","r3c6","r4c6","r5c6","r6c6","r7c6","r8c6","r9c6"]
greek-carpet-3: greek-carpet r8c9-r8c8-r8c7-r7c7-r6c7-r6c8-r6c9-r7c9-r7c8 unrolled ["r8c9","r8c8","r8c7","r8c6","r8c5","r8c4","r8c3","r8c2","r8c1"]
```

**Sudoku, Greek Carpets**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Greek Carpets: Each spiral is a greek carpet. When rolled out from the end, the resulting straight line contains the same numbers in the same order as when rolled up.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
