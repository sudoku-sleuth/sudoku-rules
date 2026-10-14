---
format: open-rules
title: Roped Into It
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bsh0v44ly5
case: https://sudoku-sleuth.com/cases/roped-into-it
library: https://rules.sudoku-sleuth.com/
status: read
exported: fab1a6bf84c25f15ee84cf38b059cef7
---

```rules
sudoku 9x9
cage-1: cage r1c7-r1c8-r1c9 total 24 connected true
cage-2: cage r1c1-r1c2-r1c3 total 6 connected true
cage-3: cage r2c4-r2c5-r2c6 total 24 connected true
cage-4: cage r3c4-r3c5-r3c6 total 6 connected true
cage-5: cage r3c7-r3c8-r3c9 total 15 connected true
cage-6: cage r5c3-r5c4-r5c5 total 24 connected true
cage-7: cage r5c6-r5c7-r5c8 total 6 connected true
cage-8: cage r8c2-r8c3-r8c4 total 24 connected true
cage-9: cage r8c5-r8c6-r8c7 total 6 connected true
cage-10: cage r7c2-r7c3-r7c4-r7c5-r7c6 total 15 connected true
cage-11: cage r6c3-r6c4-r6c5-r6c6-r6c7 total 15 connected true
cage-12: cage r2c3-r3c3-r4c3 total 19 connected true
cage-13: cage r4c9-r5c9-r6c9 total 12 connected true
cage-14: cage r3c1-r4c1 total 9 connected true
cage-15: cage r9c1-r9c2-r9c3 total 12 connected true
```

Standard sudoku rules: Each row, column, and box must contain a complete set of the digits 1-9.

Cages: Digits within a cage marked by dashed lines cannot repeat within the cage and must sum to the number in the upper left corner.
