---
format: open-rules
title: Noder Runner
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/noder-runner
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r1c3 colour "white"
kropki-2: kropki r7c3-r8c3 colour "white"
kropki-3: kropki r7c7-r8c7 colour "white"
kropki-4: kropki r7c5-r7c6 colour "white"
kropki-5: kropki r9c8-r9c9 colour "white"
kropki-6: kropki r3c7-r3c8 colour "black"
kropki-7: kropki r3c1-r3c2 colour "black"
kropki-8: kropki r1c5-r2c5 colour "black"
kropki-9: kropki r5c5-r6c5 colour "black"
kropki-10: kropki r7c1-r8c1 colour "black"
kropki-11: kropki r7c9-r8c9 colour "black"
arrow-1: arrow r3c1-r3c2 bulb ["r4c1"]
arrow-2: arrow r3c8-r3c7 bulb ["r4c9"]
arrow-3: arrow r5c5-r6c5 bulb ["r4c5"]
arrow-4: arrow r6c3-r5c4 bulb ["r6c2"]
arrow-5: arrow r6c7-r5c6 bulb ["r6c8"]
arrow-6: arrow r7c3-r8c3 bulb ["r6c4"]
arrow-7: arrow r7c7-r8c7 bulb ["r6c6"]
quadruple-1: quadruple r1c3-r1c4-r2c3-r2c4 digits [2]
quadruple-2: quadruple r1c6-r1c7-r2c6-r2c7 digits [1]
```

Normal Sudoku rules apply.

The digits along each arrow must sum to the digit in the circled cell. Digits may repeat along an arrow if permitted by other rules.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Circled digits where four cells meet must be present as values in those four cells.

Exported from sudokulab.net
