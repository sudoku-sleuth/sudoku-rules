---
format: open-rules
title: Conflict Avoidance
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ddlnuka1m5
case: https://sudoku-sleuth.com/cases/conflict-avoidance
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c1=3 r6c9=8 r8c5=4
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-2: arrow r2c1-r3c1 bulb ["r1c1"]
arrow-3: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-4: arrow r5c4-r5c3 bulb ["r5c5"]
arrow-5: arrow r6c5-r7c5 bulb ["r5c5"]
arrow-6: arrow r4c4-r3c3 bulb ["r5c5"]
arrow-7: arrow r6c6-r7c7-r8c8 bulb ["r5c5"]
arrow-8: arrow r6c4-r7c3-r8c2 bulb ["r5c5"]
arrow-9: arrow r4c6-r3c7 bulb ["r5c5"]
arrow-10: arrow r5c6-r6c7 bulb ["r5c5"]
arrow-11: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-12: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-13: arrow r9c8-r9c7 bulb ["r9c9"]
arrow-14: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-15: arrow r9c4-r9c5-r9c6 bulb ["r9c3"]
arrow-16: arrow r3c2-r2c2 bulb ["r4c2"]
```

**Sudoku, Diagonals, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonals: Digits may not repeat along the marked diagonals.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
