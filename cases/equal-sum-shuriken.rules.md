---
format: open-rules
title: Equal Sum Shuriken
setter: Blobz
source: https://sudokupad.app/blobz/equal-sum-shuriken
case: https://sudoku-sleuth.com/cases/equal-sum-shuriken
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 15 connected true
cage-2: cage r2c2-r2c3-r3c2 total 19 connected true
cage-3: cage r2c5-r2c6-r3c5 total 18 connected true
cage-4: cage r2c7-r2c8-r3c8 total 16 connected true
cage-5: cage r1c8-r1c9 total 12 connected true
cage-6: cage r5c2-r5c3-r6c3 total 13 connected true
cage-7: cage r4c7-r5c7-r5c8 total 14 connected true
cage-8: cage r7c8-r8c7-r8c8 total 21 connected true
cage-9: cage r7c5-r8c4-r8c5 total 21 connected true
cage-10: cage r7c2-r8c2-r8c3 total 12 connected true
cage-11: cage r9c1-r9c2 total 12 connected true
cage-12: cage r8c9-r9c9 total 7 connected true
kropki-1: kropki r2c3-r3c3 colour "white"
kropki-2: kropki r1c2-r1c3 colour "white"
kropki-3: kropki r5c5-r5c6 colour "white"
kropki-4: kropki r7c7-r8c7 colour "white"
region-sum r2c2-r3c2-r4c2-r5c3-r6c3-r7c3-r8c2-r8c3-r8c4-r8c5-r7c6-r7c7-r8c8-r7c8-r6c8-r5c7-r4c7-r3c7-r2c8-r2c7-r2c6-r2c5-r3c4-r3c3 segments [["r2c2","r3c2","r3c3"],["r4c2","r5c3","r6c3"],["r7c3","r8c2","r8c3"],["r8c4","r8c5","r7c6"],["r7c7","r8c8","r7c8"],["r6c8","r5c7","r4c7"],["r3c7","r2c8","r2c7"],["r2c6","r2c5","r3c4"]]
```

Normal sudoku rules apply.

Box borders divide the blue line into segments with the same sum.

Digits in cages sum to the value shown.

White dots separate consecutive digits.
