---
format: open-rules
title: Piercing the Bubbles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ktjp6xr3l3
case: https://sudoku-sleuth.com/cases/piercing-the-bubbles
library: https://rules.sudoku-sleuth.com/
status: read
exported: f37f8f05a9552ae5d927d01b9e3e3ff1
---

```rules
sudoku 9x9
arrow-1: arrow r3c1-r4c1-r5c1 bulb ["r2c1"]
arrow-2: arrow r1c3-r1c4-r1c5 bulb ["r1c2"]
arrow-3: arrow r3c2-r3c3-r2c3 bulb ["r2c2"]
arrow-4: arrow r4c3-r5c3-r5c2 bulb ["r4c2"]
arrow-5: arrow r6c4-r5c4-r4c4 bulb ["r6c5"]
arrow-6: arrow r7c6-r6c6-r6c7-r5c7 bulb ["r7c7"]
arrow-7: arrow r9c7-r9c8-r8c8 bulb ["r9c6"]
arrow-8: arrow r8c6-r8c5-r9c5 bulb ["r8c7"]
arrow-9: arrow r7c3-r7c2 bulb ["r8c4"]
arrow-10: arrow r2c6-r2c5 bulb ["r3c6"]
arrow-11: arrow r4c8-r4c9 bulb ["r3c8"]
arrow-12: arrow r9c2-r9c1 bulb ["r8c2"]
arrow-13: arrow r7c9-r7c8 bulb ["r8c9"]
molecules atoms [["r1c1","r1c2","r2c1","r2c2"],["r1c3","r1c4","r2c3","r2c4"],["r3c1","r3c2","r4c1","r4c2"],["r3c4","r3c5","r4c4","r4c5"],["r1c6","r1c7","r2c6","r2c7"],["r4c7","r4c8","r5c7","r5c8"],["r6c3","r6c4","r7c3","r7c4"],["r6c6","r6c7","r7c6","r7c7"],["r6c1","r6c2","r7c1","r7c2"],["r8c2","r8c3","r9c2","r9c3"],["r8c5","r8c6","r9c5","r9c6"],["r8c7","r8c8","r9c7","r9c8"]] sum 8 electronMax 5
```

Normal Sudoku rules apply: Each row, column, and box must contain a complete set of the digits 1-9.
Arrows: Digits along the shaft of an arrow sum to the value shown in the attached circle.
MOLECULES: Cells containing digits from 1-5 are always electrons. Cell containing digits from 6-9 may also be electrons but are not required to be electrons. The digits in electron cells on each atom (pink circle) sum to 8.
