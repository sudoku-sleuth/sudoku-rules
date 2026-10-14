---
format: open-rules
title: Cable Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ozk5eges4t
case: https://sudoku-sleuth.com/cases/cable-knight
library: https://rules.sudoku-sleuth.com/
status: read
exported: af0880bacbafc34e9a3b639121abadf4
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3-r2c4 total 15 connected true
cage-2: cage r1c6-r1c7-r2c7 total 15 connected true
cage-3: cage r4c3-r5c3-r5c4 total 15 connected true
cage-4: cage r4c6-r4c7-r5c7 total 15 connected true
cage-5: cage r7c3-r8c3-r8c4 total 15 connected true
cage-6: cage r7c6-r7c7-r8c7 total 15 connected true
cage-7: cage r1c5-r2c5 total 8 connected true
cage-8: cage r7c5-r8c5 total 12 connected true
cage-9: cage r6c2-r7c2 total 8 connected true
cage-10: cage r2c8-r3c8 total 12 connected true
anti-knight
renban-1: renban r1c1-r1c2-r1c3-r2c4-r2c5-r2c6
renban-2: renban r4c1-r4c2-r4c3-r5c4-r5c5-r5c6
renban-3: renban r7c1-r7c2-r7c3-r8c4-r8c5-r8c6
renban-4: renban r1c4-r1c5-r1c6-r2c7-r2c8-r2c9
renban-5: renban r4c4-r4c5-r4c6-r5c7-r5c8-r5c9
renban-6: renban r7c4-r7c5-r7c6-r8c7-r8c8-r8c9
```

- Normal sudoku rules apply.
- Antiknight: Digits a chess knight's move apart must be different.
- Cages: Digits within cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Renban lines: Digits along Renban lines form a non-repeating set of consecutive digits in some order.
