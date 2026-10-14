---
format: open-rules
title: This Way Out
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f6y6zcjye1
case: https://sudoku-sleuth.com/cases/this-way-out
library: https://rules.sudoku-sleuth.com/
status: read
exported: 33d35238ab6b52856a05baeb7f81eaf5
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 8 connected true
cage-2: cage r1c1-r2c1-r3c1 total 12 connected true
cage-3: cage r7c2-r8c2 total 6 connected true
cage-4: cage r2c7-r2c8 total 7 connected true
cage-5: cage r4c3-r5c3 total 5 connected true
cage-6: cage r5c4-r6c3-r6c4 total 9 connected true
cage-7: cage r2c5-r3c5 total 13 connected true
cage-8: cage r4c5-r5c5 total 11 connected true
cage-9: cage r6c5-r7c5 total 12 connected true
cage-10: cage r4c7-r5c7 total 10 connected true
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r1c8-r1c7-r2c7 bulb ["r1c9"]
arrow-3: arrow r8c1-r7c1-r7c2 bulb ["r9c1"]
arrow-4: arrow r3c8-r4c7 bulb ["r2c8"]
arrow-5: arrow r9c3-r9c4 bulb ["r8c2"]
arrow-6: arrow r4c3-r5c3-r5c4 bulb ["r3c3"]
arrow-7: arrow r8c5-r9c6 bulb ["r7c5"]
arrow-8: arrow r6c6-r7c6 bulb ["r5c7"]
arrow-9: arrow r7c8 bulb ["r6c9"]
```

**Sudoku, Cages, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Within a cage, digits may not repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
