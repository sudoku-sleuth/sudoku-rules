---
format: open-rules
title: Equal SumBans
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/equal-sumbans
library: https://rules.sudoku-sleuth.com/
status: read
exported: cc50defb5cfd7db72d166f8be47276eb
---

```rules
sudoku 9x9
region-sum-1: region-sum r3c2-r3c3-r4c4 segments [["r3c2","r3c3"],["r4c4"]]
renban-1: renban r3c2-r3c3-r4c4
region-sum-2: region-sum r2c5-r1c6-r1c7-r1c8-r1c9 segments [["r2c5","r1c6"],["r1c7","r1c8","r1c9"]]
renban-2: renban r2c5-r1c6-r1c7-r1c8-r1c9
region-sum-3: region-sum r3c6-r4c7-r4c8-r3c9-r2c9 segments [["r3c6"],["r4c7","r4c8"],["r3c9","r2c9"]]
renban-3: renban r3c6-r4c7-r4c8-r3c9-r2c9
renban-4: renban r5c7-r6c8
region-sum-4: region-sum r5c9-r6c9-r7c8-r8c9 segments [["r5c9","r6c9"],["r7c8","r8c9"]]
renban-5: renban r5c9-r6c9-r7c8-r8c9
region-sum-5: region-sum r5c6-r6c6-r7c7-r8c6-r7c5-r6c4-r5c4 segments [["r5c6","r6c6"],["r7c7"],["r8c6","r7c5"],["r6c4","r5c4"]]
renban-6: renban r5c6-r6c6-r7c7-r8c6-r7c5-r6c4-r5c4
region-sum-6: region-sum r6c2-r6c3-r7c3-r7c2 segments [["r6c2","r6c3"],["r7c3","r7c2"]]
renban-7: renban r6c2-r6c3-r7c3-r7c2
region-sum-7: region-sum r7c4-r8c4-r8c3-r8c2-r7c1-r6c1-r5c1 segments [["r7c4","r8c4"],["r8c3","r8c2","r7c1"],["r6c1","r5c1"]]
renban-8: renban r7c4-r8c4-r8c3-r8c2-r7c1-r6c1-r5c1
renban-9: renban r4c1-r5c2
```

Normal Sudoku Rules apply.

Digits on a magenta line contain a set of consecutive non-repeating digits in any order.

Magenta lines are also "equal sum lines". ie The sum of the digits on a line within a particular 3x3 box must be the same for all the boxes the line passes through.
