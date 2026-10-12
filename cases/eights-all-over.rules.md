---
format: open-rules
title: Eights all Over
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/z9cfg82zw7
case: https://sudoku-sleuth.com/cases/eights-all-over
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c5=8
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 8 connected true
cage-2: cage r1c5-r2c5-r3c5 total 8 connected true
cage-3: cage r1c7-r2c7-r2c8 total 8 connected true
cage-4: cage r5c7-r5c8-r5c9 total 8 connected true
cage-5: cage r7c7-r7c8-r8c8 total 8 connected true
cage-6: cage r6c4-r7c4-r8c4 total 8 connected true
cage-7: cage r5c2-r5c3 total 8 connected true
cage-8: cage r7c3-r8c3-r9c3 total 8 connected true
cage-9: cage r6c8-r6c9 total 8 connected true
cage-10: cage r4c4-r4c5 total 8 connected true
cage-11: cage r4c1-r5c1 total 8 connected true
cage-12: cage r6c1-r7c1 total 8 connected true
anti-knight
```

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.

Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
