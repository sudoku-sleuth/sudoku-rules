---
format: open-rules
title: Flutter-by
setter: Dr Logic
source: https://sudokupad.app/4d971qho3c
case: https://sudoku-sleuth.com/cases/flutter-by
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r4c2 colour "black"
kropki-2: kropki r3c8-r4c8 colour "black"
kropki-3: kropki r2c1-r2c2 colour "black"
kropki-4: kropki r8c9-r9c9 colour "white"
whispers-1: whispers r7c1-r8c1 gap 5
whispers-2: whispers r7c4-r8c5-r7c6 gap 5
whispers-3: whispers r1c5-r2c4-r3c5-r2c6 gap 5 loop true
region-sum-1: region-sum r4c3-r3c3-r2c2-r3c1-r4c1-r5c2-r6c1-r7c2-r8c3-r7c4 segments [["r4c3"],["r3c3","r2c2","r3c1"],["r4c1","r5c2","r6c1"],["r7c2","r8c3"],["r7c4"]]
region-sum-2: region-sum r4c7-r3c7-r2c8-r3c9-r4c9-r5c8-r6c9-r7c8-r8c7-r7c6 segments [["r4c7"],["r3c7","r2c8","r3c9"],["r4c9","r5c8","r6c9"],["r7c8","r8c7"],["r7c6"]]
region-sum-3: region-sum r2c7-r3c6 segments [["r2c7"],["r3c6"]]
region-sum-4: region-sum r2c3-r3c4 segments [["r2c3"],["r3c4"]]
region-sum-5: region-sum r4c5-r5c5-r6c5-r7c5 segments [["r4c5","r5c5","r6c5"],["r7c5"]]
region-sum-6: region-sum r5c4-r6c3 segments [["r5c4"],["r6c3"]]
region-sum-7: region-sum r5c6-r6c7 segments [["r5c6"],["r6c7"]]
renban-1: renban r6c6-r7c7-r6c8-r5c7
renban-2: renban r5c3-r6c2-r7c3-r6c4
```

Normal Sudoku rules apply

All constraints are given as standard:

Region Sum Lines: Along blue lines, box borders divide the line into segments that all sum to the same total. This total is not necessarily the same for different lines.

Renban Lines: Digits along purple lines form a non-repeating consecutive set of digits, in any order.

German Whispers Lines: Adjacent digits along green lines must differ by at least 5.

Ratio kropki: Digits separated by black dots are in a 1:2 ratio.

Consecutive kropki: Digits separated by white dots are consecutive.

No negative constraint on dots.
