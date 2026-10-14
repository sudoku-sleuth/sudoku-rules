---
format: open-rules
title: Pointing the Way
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zqkhz8tw4d
case: https://sudoku-sleuth.com/cases/pointing-the-way
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=6 r6c7=2 r7c6=8 r8c2=7 r9c9=3
exported: d480cbf5fb9fde88b8654763eb173b56
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r3c2-r4c2-r5c2 bulb ["r2c2"]
arrow-3: arrow r5c1-r6c1-r7c1 bulb ["r4c1"]
arrow-4: arrow r6c3-r7c3-r8c3 bulb ["r5c3"]
arrow-5: arrow r9c3-r9c4 bulb ["r9c2"]
arrow-6: arrow r9c6-r9c7 bulb ["r9c5"]
arrow-7: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-8: arrow r5c9-r4c9 bulb ["r6c9"]
arrow-9: arrow r3c8-r3c7-r3c6 bulb ["r3c9"]
arrow-10: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-11: arrow r2c7-r2c6 bulb ["r2c8"]
arrow-12: arrow r4c5-r5c5-r5c4 bulb ["r3c5"]
arrow-13: arrow r6c8-r7c8 bulb ["r5c8"]
arrow-14: arrow r1c5-r2c5-r2c4 bulb ["r1c6"]
```

**Standard Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of the arrow sum to the value in the attached circle.
