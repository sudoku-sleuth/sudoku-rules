---
format: open-rules
title: HBD 2024, MaFC
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xrzu0bvi53
case: https://sudoku-sleuth.com/cases/hbd-2024-mafc
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r1c4=6 r1c5=3 r2c2=9 r3c7=3 r6c3=1 r7c4=9 r8c5=6 r9c6=1
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9 total 5 connected true
cage-2: cage r8c9-r9c9 total 3 connected true
cage-3: cage r7c1-r8c1-r9c1 total 15 connected true
cage-4: cage r5c9-r6c9-r7c9 total 14 connected true
cage-5: cage r3c3-r3c4-r3c5 total 14 connected true
cage-6: cage r2c9-r3c9 total 15 connected true
anti-knight
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
