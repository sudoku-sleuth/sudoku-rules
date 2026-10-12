---
format: open-rules
title: Tight Fit
setter: The Bard
source: ""
case: https://sudoku-sleuth.com/cases/tight-fit
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c1=7
---

```rules
sudoku 9x9
cage-1: cage r3c6-r3c7 total 13 connected true
cage-2: cage r3c3-r3c4-r3c5 total 22 connected true
cage-3: cage r4c3-r5c3-r6c3 total 24 connected true
cage-4: cage r7c3-r7c4-r7c5 total 21 connected true
cage-5: cage r7c6-r7c7 total 14 connected true
cage-6: cage r4c7-r5c7-r6c7 total 24 connected true
kropki-1: kropki r6c4-r6c5 colour "white"
kropki-2: kropki r4c7-r5c7 colour "white"
kropki-3: kropki r4c1-r5c1 colour "white"
kropki-4: kropki r8c8-r9c8 colour "white"
kropki-5: kropki r1c1-r1c2 colour "white"
region-sum-1: region-sum r3c5-r4c4-r5c3 segments [["r3c5"],["r4c4"],["r5c3"]]
region-sum-2: region-sum r5c5-r6c6-r7c7-r8c7-r9c6-r9c5-r8c4-r8c3-r7c2-r6c2-r5c1-r4c2-r3c3-r2c3-r1c4-r1c5-r2c6-r3c7-r4c8-r5c9-r6c8 segments [["r5c5","r6c6"],["r7c7","r8c7"],["r9c6","r9c5","r8c4"],["r8c3","r7c2"],["r6c2","r5c1","r4c2"],["r3c3","r2c3"],["r1c4","r1c5","r2c6"],["r3c7"],["r4c8","r5c9","r6c8"]]
```

Normal Sudoku Rules Apply. Place each digit 1-9 into each row, column, and box.
Killer Cages: Digits in cages add up to the value in the corner.
Kropki Dots: Digits separated by a white dot have a difference of one.
Region Sum Lines: Digits in each box along the marked lines add up to the same value. Different lines may have different values.
