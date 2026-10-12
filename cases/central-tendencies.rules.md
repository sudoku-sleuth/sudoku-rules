---
format: open-rules
title: Central Tendencies
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/y66zzoslco
case: https://sudoku-sleuth.com/cases/central-tendencies
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6 r2c6=1 r3c1=5 r4c8=7 r5c3=2 r7c3=3 r7c5=9 r9c7=4
---

```rules
sudoku 9x9
arrow-1: arrow r3c3-r4c4-r4c5 bulb ["r2c2"]
arrow-2: arrow r3c7-r4c6-r5c6 bulb ["r2c8"]
arrow-3: arrow r7c7-r6c6-r6c5 bulb ["r8c8"]
arrow-4: arrow r6c4-r7c3 bulb ["r5c4"]
arrow-5: arrow r9c4-r9c5-r8c6 bulb ["r9c3"]
arrow-6: arrow r6c1-r5c1-r4c2 bulb ["r7c1"]
arrow-7: arrow r1c6-r1c5-r2c4 bulb ["r1c7"]
arrow-8: arrow r4c9-r5c9-r6c8 bulb ["r3c9"]
```

**Standard Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of the arrow sum to the value in the attached circle.
