---
format: open-rules
title: be vewy vewy quiet
setter: Chip Sounder
source: https://sudokupad.app/nx3ktrz946
case: https://sudoku-sleuth.com/cases/be-vewy-vewy-quiet
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 6 connected true
cage-2: cage r8c9-r9c8-r9c9 total 24 connected true
cage-3: cage r1c4-r1c5 total 10 connected true
cage-4: cage r7c4-r8c4 total 11 connected true
cage-5: cage r5c8-r5c9 total 11 connected true
cage-6: cage r6c6-r6c7-r7c6 connected true
kropki-1: kropki r5c2-r5c3 colour "white"
kropki-2: kropki r5c3-r5c4 colour "white"
kropki-3: kropki r5c4-r5c5 colour "white"
kropki-4: kropki r7c1-r8c1 colour "white"
kropki-5: kropki r2c5-r2c6 colour "white"
kropki-6: kropki r4c4-r5c4 colour "black"
pair r4c2-r5c2 relation {"op":"sum","value":5}
negative relations [{"op":"sum","value":5}] except [["r4c2","r5c2"],["r5c2","r5c3"],["r5c3","r5c4"],["r5c4","r5c5"],["r7c1","r8c1"],["r2c5","r2c6"],["r4c4","r5c4"]]
little-killer-1: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 25
little-killer-2: little-killer r1c3-r2c2-r3c1 sum 17
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 13
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[0.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[4.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,6.5],[4.5,6.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.
Digits on a green line must differ by at least 5.
Clues outside the grid sum the digits in the indicated diagonal, digits may repeat.
Digits in a dotted cage sum to the total given in the top left corner of the cage(if given) without repeats.
Cells separated by a black dot are a 1:2 ratio.
Cells separated by a white dot are consecutive.
Cells separated by a V sum to 5, All Vs are given.
