---
format: open-rules
title: Cage Quivers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/x4bawubwgx
case: https://sudoku-sleuth.com/cases/cage-quivers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4-r1c5 total 10 connected true
cage-2: cage r9c5-r9c6-r9c7-r9c8 total 10 connected true
cage-3: cage r5c1-r6c1-r7c1-r8c1 total 10 connected true
cage-4: cage r2c9-r3c9-r4c9-r5c9 total 10 connected true
cage-5: cage r1c8-r2c8-r3c8-r4c8 total 26 connected true
cage-6: cage r6c2-r7c2-r8c2-r9c2 total 26 connected true
cage-7: cage r2c1-r2c2-r2c3-r2c4 total 26 connected true
cage-8: cage r8c6-r8c7-r8c8-r8c9 total 26 connected true
cage-9: cage r3c2-r3c3-r3c4-r3c5 total 16 connected true
cage-10: cage r4c3-r4c4-r4c5-r4c6 total 19 connected true
cage-11: cage r6c6-r6c7-r6c8-r6c9 total 14 connected true
cage-12: cage r5c2-r5c3-r5c4-r5c5 total 22 connected true
arrow-1: arrow r1c3-r1c4 bulb ["r1c2"]
arrow-2: arrow r9c7-r9c6 bulb ["r9c8"]
arrow-3: arrow r7c1-r6c1 bulb ["r8c1"]
arrow-4: arrow r3c9-r4c9 bulb ["r2c9"]
arrow-5: arrow r2c8-r3c8 bulb ["r1c8"]
arrow-6: arrow r8c8-r8c7 bulb ["r8c9"]
arrow-7: arrow r8c2-r7c2 bulb ["r9c2"]
arrow-8: arrow r2c2-r2c3 bulb ["r2c1"]
arrow-9: arrow r3c4-r3c3 bulb ["r3c5"]
arrow-10: arrow r4c4-r4c5 bulb ["r4c3"]
arrow-11: arrow r6c8-r6c7 bulb ["r6c9"]
arrow-12: arrow r5c3-r5c2 bulb ["r5c4"]
```

**Standard Sudoku, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
