---
format: open-rules
title: N is for Naughty and Nice
setter: EPH
source: https://sudokupad.app/91y8m339k2
case: https://sudoku-sleuth.com/cases/n-is-for-naughty-and-nice
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c8-r5c8 colour "white"
kropki-2: kropki r5c2-r6c2 colour "white"
kropki-3: kropki r3c1-r4c1 colour "white"
kropki-4: kropki r6c9-r7c9 colour "black"
whispers-1: whispers r5c3-r4c3-r4c4-r5c5-r6c6-r6c7-r5c7 gap 5
whispers-2: whispers r1c9-r2c9 gap 5
whispers-3: whispers r8c1-r9c1 gap 5
region-sum-1: region-sum r1c3-r1c4-r2c5-r3c6-r2c7 segments [["r1c3"],["r1c4","r2c5","r3c6"],["r2c7"]]
region-sum-2: region-sum r9c7-r9c6-r8c5-r7c4-r8c3 segments [["r9c7"],["r9c6","r8c5","r7c4"],["r8c3"]]
region-sum-3: region-sum r3c3-r3c4-r4c5-r5c6-r4c7-r3c7-r3c8-r4c8-r5c8-r6c8-r7c8-r7c7-r7c6-r6c5-r5c4-r6c3-r7c3-r7c2-r6c2-r5c2-r4c2-r3c2 segments [["r3c3","r3c2"],["r3c4"],["r4c5","r5c6"],["r4c7"],["r3c7","r3c8"],["r4c8","r5c8","r6c8"],["r7c8","r7c7"],["r7c6"],["r6c5","r5c4"],["r6c3"],["r7c3","r7c2"],["r6c2","r5c2","r4c2"]]
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.
Digits separated by a white dot must be consecutive.
Digits separated by a black dot must be in a 2:1 ratio.  Not all dots are necessarily given.
Adjacent digits on a green line must differ by at least 5.
Box borders separate blue lines into segments. Digits on each segment of the same line sum to the same value.  Different lines may have different segment sums.
