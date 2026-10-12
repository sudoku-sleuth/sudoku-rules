---
format: open-rules
title: Football Post and In Routes
setter: Will Power
source: https://sudokupad.app/khvgw85nsk
case: https://sudoku-sleuth.com/cases/football-post-and-in-routes
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 colour "white"
kropki-2: kropki r5c8-r5c9 colour "white"
kropki-3: kropki r7c3-r7c4 colour "white"
kropki-4: kropki r7c5-r7c6 colour "black"
arrow-1: arrow r6c3 bulb ["r7c4"]
arrow-2: arrow r6c4 bulb ["r7c3"]
arrow-3: arrow r6c5-r5c6 bulb ["r7c5"]
arrow-4: arrow r6c7 bulb ["r7c6"]
arrow-5: arrow r6c6 bulb ["r7c7"]
arrow-6: arrow r7c2-r6c2 bulb ["r8c2"]
arrow-7: arrow r6c9-r5c9-r5c8 bulb ["r7c9"]
arrow-8: arrow r6c1-r5c2-r4c3-r3c4 bulb ["r7c1"]
arrow-9: arrow r9c5-r9c6 bulb ["r8c5"]
arrow-10: arrow r8c7-r7c8 bulb ["r9c7"]
parity-cells-1: parity-cells r6c7-r6c6-r6c4 parity "odd"
parity-cells-2: parity-cells r6c5-r6c3 parity "even"
extremum r2c7-r2c4-r4c5-r4c8-r3c2 type "max" exhaustive false
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. ODD/EVEN- Cells with a gray shaded circle are odd. Cells with a gray shaded square are even. MAXIMUMS- Fully shaded cells with arrows pointing outward are greater than all 4 orthogonally adjacent cells. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
