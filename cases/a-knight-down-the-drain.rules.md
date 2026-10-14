---
format: open-rules
title: A Knight Down The Drain
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/s0hrb5l4b7
case: https://sudoku-sleuth.com/cases/a-knight-down-the-drain
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=2 r2c2=7 r3c5=6 r4c3=9 r6c7=6 r7c9=7 r8c4=7 r9c1=2
exported: 1c5ffc27a4893703a2df2cd7b1b3904c
---

```rules
sudoku 9x9
anti-knight
arrow-1: arrow r1c3-r1c4-r2c5 bulb ["r1c2"]
arrow-2: arrow r3c9-r4c9-r5c8 bulb ["r2c9"]
arrow-3: arrow r9c7-r9c6-r8c5 bulb ["r9c8"]
arrow-4: arrow r7c1-r6c1-r5c2 bulb ["r8c1"]
arrow-5: arrow r4c1-r3c2-r3c3 bulb ["r5c1"]
arrow-6: arrow r6c9-r7c8-r7c7 bulb ["r5c9"]
arrow-7: arrow r6c3-r5c3 bulb ["r7c3"]
arrow-8: arrow r3c7-r4c7 bulb ["r2c6"]
```

-Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
-Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
-Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
