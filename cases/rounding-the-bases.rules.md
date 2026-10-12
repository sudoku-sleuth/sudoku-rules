---
format: open-rules
title: Rounding the Bases
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3drc943fyp
case: https://sudoku-sleuth.com/cases/rounding-the-bases
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4 total 10 connected true
cage-2: cage r1c6-r1c7-r1c8 total 18 connected true
cage-3: cage r9c6-r9c7-r9c8 total 10 connected true
cage-4: cage r9c2-r9c3-r9c4 total 20 connected true
cage-5: cage r7c1-r8c1 total 7 connected true
cage-6: cage r2c1-r3c1 total 5 connected true
cage-7: cage r2c9-r3c9 total 8 connected true
cage-8: cage r7c9-r8c9 total 10 connected true
cage-9: cage r6c3-r7c3-r7c4 total 6 connected true
cage-10: cage r3c6-r3c7-r4c7 total 11 connected true
cage-11: cage r6c6-r6c7-r7c6 total 8 connected true
cage-12: cage r3c4-r4c3-r4c4 total 8 connected true
cage-13: cage r5c1-r5c2 total 11 connected true
cage-14: cage r5c8-r5c9 total 8 connected true
arrow-1: arrow r1c2-r1c1-r2c1 bulb ["r1c3"]
arrow-2: arrow r1c8-r1c9-r2c9 bulb ["r1c7"]
arrow-3: arrow r9c2-r9c1-r8c1 bulb ["r9c3"]
arrow-4: arrow r9c8-r9c9-r8c9 bulb ["r9c7"]
arrow-5: arrow r4c3-r3c4 bulb ["r5c2"]
arrow-6: arrow r6c3-r7c4 bulb ["r5c2"]
arrow-7: arrow r4c7-r3c6 bulb ["r5c8"]
arrow-8: arrow r6c7-r7c6 bulb ["r5c8"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
