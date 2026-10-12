---
format: open-rules
title: Sum Of All Fears
setter: Dr Logic
source: https://sudokupad.app/v06ceczc8w
case: https://sudoku-sleuth.com/cases/sum-of-all-fears
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c5-r8c6 colour "white"
kropki-2: kropki r1c5-r2c5 colour "white"
kropki-3: kropki r6c6-r7c6 colour "black"
kropki-4: kropki r2c9-r3c9 colour "black"
kropki-5: kropki r2c7-r3c7 colour "black"
whispers r3c9-r4c9-r5c8-r6c8 gap 5
region-sum-1: region-sum r7c3-r6c4-r5c5-r4c6-r3c7 segments [["r7c3"],["r6c4","r5c5","r4c6"],["r3c7"]]
region-sum-2: region-sum r7c6-r6c7-r7c8-r8c8-r9c8 segments [["r7c6"],["r6c7"],["r7c8","r8c8","r9c8"]]
region-sum-3: region-sum r3c4-r4c3-r3c2-r2c2-r1c2 segments [["r3c4"],["r4c3"],["r3c2","r2c2","r1c2"]]
region-sum-4: region-sum r8c1-r9c2-r8c3-r7c4 segments [["r8c1","r9c2","r8c3"],["r7c4"]]
region-sum-5: region-sum r3c6-r2c7-r1c7-r1c8 segments [["r3c6"],["r2c7","r1c7","r1c8"]]
```

Normal Sudoku Rules Apply.
The sum of the digits on a Region Sum line is the same for each box it occupies (this value may be different for different lines).
Digits adjacent along a green german whispers line must differ by at least 5.
Digits separated by a black dot must be in a 1:2 ratio.
Digits separated by a white dot must be consecutive.
Not all dots are given
