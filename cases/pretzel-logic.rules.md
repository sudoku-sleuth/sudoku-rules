---
format: open-rules
title: Pretzel Logic
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/s2778hgmzt
case: https://sudoku-sleuth.com/cases/pretzel-logic
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=4 r1c9=5 r3c6=8 r4c3=4 r5c5=3 r6c7=2 r7c4=9 r9c1=9 r9c9=6
exported: 814fa6cc25261b20600f0281d0d662de
---

```rules
sudoku 9x9
cage-1: cage r4c2-r5c2-r5c3-r6c2 total 11 connected true
cage-2: cage r4c8-r5c7-r5c8-r6c8 total 29 connected true
cage-3: cage r2c4-r2c5-r2c6-r3c5 total 21 connected true
cage-4: cage r7c5-r8c4-r8c5-r8c6 total 19 connected true
cage-5: cage r7c2-r8c2-r8c3 total 15 connected true
cage-6: cage r2c2-r2c3-r3c2 total 15 connected true
cage-7: cage r2c7-r2c8-r3c8 total 15 connected true
cage-8: cage r7c8-r8c7-r8c8 total 15 connected true
cage-9: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 16 connected true
anti-knight
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.

- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
