---
format: open-rules
title: Trickle Down Arrownomics
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/oistcjnlkn
case: https://sudoku-sleuth.com/cases/trickle-down-arrownomics
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=9 r2c8=3 r4c3=7 r4c6=5 r5c9=6 r7c5=4 r8c2=2 r8c8=1
exported: 1807d40ebdac54b3308a8b92773ef7c3
---

```rules
sudoku 9x9
arrow-1: arrow r2c4-r3c5-r4c6 bulb ["r1c3"]
arrow-2: arrow r4c2-r5c3-r6c4 bulb ["r3c1"]
arrow-3: arrow r8c4-r7c5-r6c6 bulb ["r9c3"]
arrow-4: arrow r8c7-r7c8-r6c9 bulb ["r9c6"]
arrow-5: arrow r1c7-r1c8-r1c9 bulb ["r1c6"]
arrow-6: arrow r7c1-r8c1-r9c1 bulb ["r6c1"]
arrow-7: arrow r3c8-r4c7 bulb ["r2c9"]
arrow-8: arrow r6c7-r7c6 bulb ["r5c8"]
```

**Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
