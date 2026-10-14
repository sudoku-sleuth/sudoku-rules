---
format: open-rules
title: Wandering Entropy
setter: EPH
source: https://sudokupad.app/0sl8lhlj7u
case: https://sudoku-sleuth.com/cases/wandering-entropy
library: https://rules.sudoku-sleuth.com/
status: read
exported: 00330a5c60c9eaa41362a92e51662f56
---

```rules
sudoku 9x9
entropic-1: entropic r2c6-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r6c2
entropic-2: entropic r2c4-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r2c9
entropic-3: entropic r4c2-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r9c2
entropic-4: entropic r6c4-r5c4-r4c4-r4c5-r4c6
entropic-5: entropic r7c9-r8c9-r9c9-r9c8-r9c7
entropic-6: entropic r2c6-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r6c2
entropic-7: entropic r2c4-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r2c9
entropic-8: entropic r4c2-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r9c2
entropic-9: entropic r6c4-r5c4-r4c4-r4c5-r4c6
entropic-10: entropic r7c9-r8c9-r9c9-r9c8-r9c7
region-sum-1: region-sum r2c6-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r6c2 segments [["r2c6","r1c6","r1c5","r1c4"],["r1c3","r1c2","r1c1","r2c1","r3c1"],["r4c1","r5c1","r6c1","r6c2"]]
region-sum-2: region-sum r2c4-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r2c9 segments [["r2c4","r3c4","r3c5","r3c6"],["r3c7","r3c8","r3c9","r2c9"]]
region-sum-3: region-sum r4c2-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r9c2 segments [["r4c2","r4c3","r5c3","r6c3"],["r7c3","r8c3","r9c3","r9c2"]]
pair-1: pair r2c7-r2c8 sum 10
pair-2: pair r7c2-r8c2 sum 10
pair-3: pair r6c4-r7c4 sum 10
pair-4: pair r4c6-r4c7 sum 10
pair-5: pair r8c5-r9c5 sum 10
pair-6: pair r2c6-r2c7 sum 5
```

Standard sudoku rules: each row, column, and 3x3 box must contain all the digits from 1 to 9.
Digits in cells separated by V or X must sum to 5 or 10 respectively.
All lines are both entropic and sum lines:
Any three adjacent cells along a line must contain a digit from (123), a digit from (456), and a digit from (789).
The sum of the digits on a line within a box must be the same for all boxes the line passes through.  Different lines may have different totals.
