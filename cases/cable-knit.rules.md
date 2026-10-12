---
format: open-rules
title: Cable Knit
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/sxqjid3dh1
case: https://sudoku-sleuth.com/cases/cable-knit
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4-r1c5 total 11 connected true
cage-2: cage r4c3-r4c4-r4c5 total 19 connected true
cage-3: cage r6c4-r7c3-r7c4 total 11 connected true
cage-4: cage r5c7-r6c6-r6c7 total 16 connected true
cage-5: cage r2c8-r3c8 total 8 connected true
cage-6: cage r7c8-r8c8 total 12 connected true
cage-7: cage r5c3-r5c4-r6c3 total 12 connected true
cage-8: cage r8c3-r8c4 total 9 connected true
cage-9: cage r7c1-r8c1 total 9 connected true
renban-1: renban r1c1-r1c2-r1c3-r2c4-r2c5-r2c6
renban-2: renban r4c1-r4c2-r4c3-r5c4-r5c5-r5c6
renban-3: renban r7c1-r7c2-r7c3-r8c4-r8c5-r8c6
renban-4: renban r1c4-r1c5-r1c6-r2c7-r2c8-r2c9
renban-5: renban r4c4-r4c5-r4c6-r5c7-r5c8-r5c9
renban-6: renban r7c4-r7c5-r7c6-r8c7-r8c8-r8c9
renban-7: renban r9c6-r9c7-r9c8
renban-8: renban r9c2-r9c3-r9c4
renban-9: renban r3c2-r3c3
renban-10: renban r3c7-r3c8
```

- Normal sudoku rules apply.
- Cages: Digits within cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Renban lines: Digits along Renban lines form a non-repeating set of consecutive digits in some order.
