---
format: open-rules
title: Cable King 11
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ls1nu987fb
case: https://sudoku-sleuth.com/cases/cable-king-11
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0fcf832084485ddc3f692ef115002a29
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c4 total 11 connected true
cage-2: cage r5c6-r6c6 total 11 connected true
cage-3: cage r7c7-r8c7 total 11 connected true
cage-4: cage r6c3-r7c3 total 11 connected true
cage-5: cage r4c8-r5c8 total 11 connected true
cage-6: cage r6c9-r7c9 total 11 connected true
cage-7: cage r8c2-r9c2 total 11 connected true
cage-8: cage r3c9-r4c9 total 11 connected true
cage-9: cage r2c1-r3c1 total 11 connected true
cage-10: cage r3c2-r4c2 total 11 connected true
cage-11: cage r3c7-r4c7 total 11 connected true
cage-12: cage r4c5-r4c6-r5c5 total 11 connected true
cage-13: cage r6c5-r7c5-r7c6 total 11 connected true
cage-14: cage r1c6-r2c6 total 11 connected true
cage-15: cage r1c3-r1c4-r2c3 total 11 connected true
anti-king
renban-1: renban r1c1-r1c2-r1c3-r2c4-r2c5-r2c6
renban-2: renban r4c1-r4c2-r4c3-r5c4-r5c5-r5c6
renban-3: renban r7c1-r7c2-r7c3-r8c4-r8c5-r8c6
renban-4: renban r1c4-r1c5-r1c6-r2c7-r2c8-r2c9
renban-5: renban r4c4-r4c5-r4c6-r5c7-r5c8-r5c9
renban-6: renban r7c4-r7c5-r7c6-r8c7-r8c8-r8c9
```

- Normal sudoku rules apply.
- Antiking: Digits a chess king's move apart must be different.
- Cages: Digits within cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Renban lines: Digits along Renban lines form a non-repeating set of consecutive digits in some order.
