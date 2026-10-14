---
format: open-rules
title: Smoke and Mirrors
setter: Meggen033
source: https://f-puzzles.com/?id=2lnxwvnk
case: https://sudoku-sleuth.com/cases/smoke-and-mirrors
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c4=8
exported: d64b5e9f3e58c0ad5d691268bd550c07
---

```rules
sudoku 9x9
region-sum-1: region-sum r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5 segments [["r5c1","r4c1"],["r3c1","r2c2","r1c3"],["r1c4","r1c5"]]
renban-1: renban r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5
region-sum-2: region-sum r9c5-r9c6-r9c7-r8c8-r7c9-r6c9-r5c9 segments [["r9c5","r9c6"],["r9c7","r8c8","r7c9"],["r6c9","r5c9"]]
renban-2: renban r9c5-r9c6-r9c7-r8c8-r7c9-r6c9-r5c9
region-sum-3: region-sum r7c5-r7c4-r7c3-r6c3-r5c3-r5c4-r5c5 segments [["r7c5","r7c4"],["r7c3"],["r6c3","r5c3"],["r5c4","r5c5"]]
renban-3: renban r7c5-r7c4-r7c3-r6c3-r5c3-r5c4-r5c5
region-sum-4: region-sum r8c5-r8c4-r8c3-r7c2-r6c2-r5c2 segments [["r8c5","r8c4"],["r8c3","r7c2"],["r6c2","r5c2"]]
renban-4: renban r8c5-r8c4-r8c3-r7c2-r6c2-r5c2
region-sum-5: region-sum r5c8-r4c7-r4c6-r4c5 segments [["r5c8","r4c7"],["r4c6","r4c5"]]
renban-5: renban r5c8-r4c7-r4c6-r4c5
renban-6: renban r6c7-r6c8
renban-7: renban r2c5-r3c5
renban-8: renban r9c1-r8c2
renban-9: renban r8c7-r7c8
renban-10: renban r2c8-r1c9
```

Normal Sudoku Rules apply.

Digits on a magenta line contain a set of consecutive non-repeating digits in any order.

Magenta lines are also "equal sum lines". ie The sum of the digits on a line within a particular 3x3 box must be the same for all the boxes the line passes through.
