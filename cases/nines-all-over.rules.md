---
format: open-rules
title: Nines All Over
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/rvnyliuubi
case: https://sudoku-sleuth.com/cases/nines-all-over
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=8 r2c5=2 r2c8=9 r5c2=4 r5c5=6 r5c8=3 r8c2=1 r8c5=5
exported: 2e4b3a37243e4a3234d7385413211bd7
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 9 connected true
cage-2: cage r1c6-r2c6-r3c6 total 9 connected true
cage-3: cage r6c4-r6c5-r6c6 total 9 connected true
cage-4: cage r4c1-r5c1-r6c1 total 9 connected true
cage-5: cage r1c7-r1c8 total 9 connected true
cage-6: cage r7c1-r8c1 total 9 connected true
cage-7: cage r3c3-r3c4-r4c3-r4c4 total 14 connected true
cage-8: cage r6c7-r7c6-r7c7 total 19 connected true
cage-9: cage r7c8-r8c7-r8c8 total 12 connected true
cage-10: cage r8c9-r9c8-r9c9 total 14 connected true
anti-knight
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
