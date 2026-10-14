---
format: open-rules
title: Fabricate
setter: Blobz
source: https://sudokupad.app/blobz/fabricate
case: https://sudoku-sleuth.com/cases/fabricate
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0574d7dd7bb970dd1cb4d46b24d00b8a
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1-r9c2 total 10 connected true
cage-2: cage r1c8-r1c9-r2c9 total 10 connected true
cage-3: cage r2c1-r2c2-r2c3 total 12 connected true
cage-4: cage r8c7-r8c8-r8c9 total 16 connected true
cage-5: cage r3c5-r4c5-r4c6 total 16 connected true
cage-6: cage r6c4-r6c5-r7c5 total 22 connected true
cage-7: cage r4c7-r5c7-r5c8 total 9 connected true
cage-8: cage r5c2-r5c3-r6c3 total 12 connected true
cage-9: cage r1c5-r2c5 total 9 connected true
cage-10: cage r8c5-r9c5 total 9 connected true
region-sum-1: region-sum r3c3-r3c2-r4c2-r4c3-r4c4-r5c4-r5c5-r5c6-r6c6-r6c7-r6c8-r7c8-r7c7 segments [["r3c3","r3c2"],["r4c2","r4c3"],["r4c4","r5c4","r5c5","r5c6","r6c6"],["r6c7","r6c8"],["r7c8","r7c7"]]
region-sum-2: region-sum r9c6-r9c7-r9c8-r9c9 segments [["r9c6"],["r9c7","r9c8","r9c9"]]
region-sum-3: region-sum r1c4-r1c3-r1c2-r1c1 segments [["r1c4"],["r1c3","r1c2","r1c1"]]
region-sum-4: region-sum r3c8-r4c8-r4c9-r3c9 segments [["r3c8","r3c9"],["r4c8","r4c9"]]
region-sum-5: region-sum r6c1-r7c1-r7c2-r6c2 segments [["r6c1","r6c2"],["r7c1","r7c2"]]
region-sum-6: region-sum r8c3-r8c4-r9c4-r9c3 segments [["r8c3","r9c3"],["r8c4","r9c4"]]
region-sum-7: region-sum r1c6-r1c7-r2c7-r2c6 segments [["r1c6","r2c6"],["r1c7","r2c7"]]
```

Normal sudoku rules apply. 

Box borders divide blue lines into segments with the same sum. 

Digits in cages do not repeat, and sum to the given total.
