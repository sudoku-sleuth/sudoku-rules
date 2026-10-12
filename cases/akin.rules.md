---
format: open-rules
title: Akin
setter: sujoyku
source: https://sudokupad.app/ofr8s3pez6
case: https://sudoku-sleuth.com/cases/akin
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r9c2-r9c3 colour "white"
kropki-2: kropki r5c2-r5c3 colour "black"
kropki-3: kropki r5c7-r5c8 colour "black"
kropki-4: kropki r7c3-r8c3 colour "black"
kropki-5: kropki r2c7-r3c7 colour "black"
region-sum-1: region-sum r6c1-r6c2-r6c3-r5c3-r4c3-r3c3-r3c2-r3c1-r4c1-r5c2 segments [["r6c1","r6c2","r6c3","r5c3","r4c3"],["r3c3","r3c2","r3c1"],["r4c1","r5c2"]]
region-sum-2: region-sum r4c9-r4c8-r4c7-r5c7-r6c7-r7c7-r7c8-r7c9-r6c9-r5c8 segments [["r4c9","r4c8","r4c7","r5c7","r6c7"],["r7c7","r7c8","r7c9"],["r6c9","r5c8"]]
region-sum-3: region-sum r8c4-r7c4-r6c4-r5c4-r5c5-r5c6-r4c6-r3c6-r2c6 segments [["r8c4","r7c4"],["r6c4","r5c4","r5c5","r5c6","r4c6"],["r3c6","r2c6"]]
region-sum-4: region-sum r7c1-r8c2-r9c3-r9c4 segments [["r7c1","r8c2","r9c3"],["r9c4"]]
region-sum-5: region-sum r1c6-r1c7-r2c8-r3c9 segments [["r1c6"],["r1c7","r2c8","r3c9"]]
region-sum-6: region-sum r9c7-r8c6-r7c5 segments [["r9c7"],["r8c6","r7c5"]]
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)

- Kropki: Digits joined by a black dot are in a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all black and white dots are necessarily given.)
