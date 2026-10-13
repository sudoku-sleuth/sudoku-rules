---
format: open-rules
title: A Square Sum Ring
setter: Meggen033
source: https://sudokupad.app/ppdmvbx51d
case: https://sudoku-sleuth.com/cases/a-square-sum-ring
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 12 connected true
cage-2: cage r8c8-r8c9-r9c8-r9c9 total 12 connected true
cage-3: cage r8c5-r9c5 total 12 connected true
cage-4: cage r5c8-r5c9 total 12 connected true
cage-5: cage r4c5-r5c4-r5c5 total 9 connected true
cage-6: cage r5c3-r6c2-r6c3-r7c2-r8c2 connected true
cage-7: cage r2c6-r2c7-r2c8-r3c5-r3c6 connected true
cage-8: cage r6c6-r6c7-r7c6 connected true
kropki-1: kropki r5c5-r5c6 colour "white"
kropki-2: kropki r4c1-r4c2 colour "white"
kropki-3: kropki r4c3-r5c3 colour "white"
region-sum-1: region-sum r4c3-r5c3-r6c3-r7c4-r7c5-r7c6-r6c7-r5c7-r4c7-r3c6-r3c5-r3c4 segments [["r4c3","r5c3","r6c3"],["r7c4","r7c5","r7c6"],["r6c7","r5c7","r4c7"],["r3c6","r3c5","r3c4"]]
region-sum-2: region-sum r3c2-r2c3-r2c4-r2c5-r2c6 segments [["r3c2","r2c3"],["r2c4","r2c5","r2c6"]]
region-sum-3: region-sum r2c7-r3c8-r4c8-r5c8-r6c8 segments [["r2c7","r3c8"],["r4c8","r5c8","r6c8"]]
region-sum-4: region-sum r7c8-r8c7-r8c6-r8c5-r8c4 segments [["r7c8","r8c7"],["r8c6","r8c5","r8c4"]]
region-sum-5: region-sum r8c3-r7c2-r6c2-r5c2-r4c2 segments [["r8c3","r7c2"],["r6c2","r5c2","r4c2"]]
pair-1: pair r8c1-r9c1 sum 5
pair-2: pair r8c2-r9c2 sum 5
pair-3: pair r1c8-r2c8 sum 5
pair-4: pair r1c9-r2c9 sum 5
parity-cells r3c3-r3c7-r7c7-r7c3 parity "even"
```

•    Normal Sudoku rules apply. 
•    Box borders divide the blue lines into segments of equal sum.  Different lines may have different sums.
•    Digits in a cage do not repeat and sum to the clue in the top left if given.
•    Adjacent cells connected with a V must sum to 5.
•    A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    Cells with a filled grey square must be even.
