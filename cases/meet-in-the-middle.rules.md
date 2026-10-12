---
format: open-rules
title: Meet in the Middle
setter: Meggen033
source: https://f-puzzles.com/?id=2ggv9cku
case: https://sudoku-sleuth.com/cases/meet-in-the-middle
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r4c1-r3c1-r2c2-r1c3-r1c4 segments [["r4c1"],["r3c1","r2c2","r1c3"],["r1c4"]]
region-sum-2: region-sum r6c9-r7c9-r8c8-r9c7-r9c6 segments [["r6c9"],["r7c9","r8c8","r9c7"],["r9c6"]]
region-sum-3: region-sum r4c2-r3c2-r2c3-r2c4 segments [["r4c2"],["r3c2","r2c3"],["r2c4"]]
region-sum-4: region-sum r6c8-r7c8-r8c7-r8c6 segments [["r6c8"],["r7c8","r8c7"],["r8c6"]]
region-sum-5: region-sum r7c3-r6c4-r5c5-r4c6-r3c7 segments [["r7c3"],["r6c4","r5c5","r4c6"],["r3c7"]]
region-sum-6: region-sum r6c1-r7c1-r7c2 segments [["r6c1"],["r7c1","r7c2"]]
region-sum-7: region-sum r4c5-r3c6 segments [["r4c5"],["r3c6"]]
region-sum-8: region-sum r5c4-r6c3 segments [["r5c4"],["r6c3"]]
region-sum-9: region-sum r9c3-r8c4-r7c5 segments [["r9c3"],["r8c4","r7c5"]]
region-sum-10: region-sum r5c8-r4c8-r3c8 segments [["r5c8","r4c8"],["r3c8"]]
```

Normal Sudoku rules apply.

Grey lines are "equal sum lines". ie The sum of the digits on a line within a particular 3x3 box must be the same for all the boxes the line passes through.
