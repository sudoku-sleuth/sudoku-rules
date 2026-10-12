---
format: open-rules
title: Launch
setter: Jobo
source: https://sudokupad.app/g1zbo12itv
case: https://sudoku-sleuth.com/cases/launch
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r2c1-r3c1-r4c1-r3c2-r2c3-r1c4-r1c3-r1c2 segments [["r2c1","r3c1"],["r4c1"],["r3c2","r2c3"],["r1c4"],["r1c3","r1c2"]]
region-sum-2: region-sum r1c8-r1c7-r1c6-r2c7-r3c8-r4c9-r3c9-r2c9 segments [["r1c8","r1c7"],["r1c6"],["r2c7","r3c8"],["r4c9"],["r3c9","r2c9"]]
region-sum-3: region-sum r8c9-r7c9-r6c9-r7c8-r8c7-r9c6-r9c7-r9c8 segments [["r8c9","r7c9"],["r6c9"],["r7c8","r8c7"],["r9c6"],["r9c7","r9c8"]]
region-sum-4: region-sum r9c2-r9c3-r9c4-r8c3-r7c2-r6c1-r7c1-r8c1 segments [["r9c2","r9c3"],["r9c4"],["r8c3","r7c2"],["r6c1"],["r7c1","r8c1"]]
renban-1: renban r4c4-r5c5
renban-2: renban r4c6-r4c5-r3c4-r3c3-r4c3-r5c4-r6c4
renban-3: renban r8c6-r7c6-r7c7-r6c7-r6c8
renban-4: renban r5c6-r6c5
renban-5: renban r7c4-r8c5
renban-6: renban r4c7-r5c8
parity-cells r1c9 parity "odd"
```

Normal sudoku rules apply.

Purple lines contain a non-repeating set of consecutive digits in any order.

Box borders divide blue lines into segments with the same sum.

The cell with the grey circle must contain an odd digit.
