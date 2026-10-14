---
format: open-rules
title: Containment
setter: Blobz
source: https://sudokupad.app/blobz/containment
case: https://sudoku-sleuth.com/cases/containment
library: https://rules.sudoku-sleuth.com/
status: read
exported: 970a01b4af5b8b02d0c065f88614552d
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5-r3c3-r3c4-r4c2-r4c3 connected true
cage-2: cage r6c2-r6c3-r7c3-r7c4-r8c4-r8c5 connected true
cage-3: cage r5c3-r5c4-r5c5-r5c6 connected true
cage-4: cage r3c1-r3c2-r4c1-r5c1-r6c1-r7c1-r7c2 connected true
cage-5: cage r6c5-r6c6-r7c6-r8c6 connected true
cage-6: cage r1c6-r1c7-r1c8 connected true
cage-7: cage r9c1-r9c2-r9c3-r9c4 total 14 connected true
cage-8: cage r8c7-r9c6-r9c7 connected true
cage-9: cage r2c6-r3c6-r4c6-r4c7-r4c8-r5c8 connected true
cage-10: cage r2c7-r2c8-r3c8-r3c9-r4c9-r5c9-r6c9 connected true
cage-11: cage r1c1-r1c2-r1c3-r1c4 connected true
kropki-1: kropki r8c2-r8c3 black
kropki-2: kropki r1c4-r2c4 black
region-sum-1: region-sum r4c2-r4c3-r3c3-r3c4-r2c4-r2c5 segments [["r4c2","r4c3"],["r3c3"],["r3c4","r2c4","r2c5"]]
region-sum-2: region-sum r6c2-r6c3-r7c3-r7c4-r8c4-r8c5 segments [["r6c2","r6c3"],["r7c3"],["r7c4","r8c4","r8c5"]]
region-sum-3: region-sum r5c3-r5c4-r5c5-r5c6 segments [["r5c3"],["r5c4","r5c5","r5c6"]]
region-sum-4: region-sum r3c2-r3c1-r4c1-r5c1-r6c1-r7c1-r7c2 segments [["r3c2","r3c1"],["r4c1","r5c1","r6c1"],["r7c1","r7c2"]]
region-sum-5: region-sum r2c6-r3c6-r4c6-r4c7-r4c8-r5c8 segments [["r2c6","r3c6"],["r4c6"],["r4c7","r4c8","r5c8"]]
region-sum-6: region-sum r6c5-r6c6-r7c6-r8c6 segments [["r6c5","r6c6"],["r7c6","r8c6"]]
region-sum-7: region-sum r9c4-r9c3-r9c2-r9c1 segments [["r9c4"],["r9c3","r9c2","r9c1"]]
region-sum-8: region-sum r9c6-r9c7-r8c7 segments [["r9c6"],["r9c7","r8c7"]]
region-sum-9: region-sum r1c6-r1c7-r1c8 segments [["r1c6"],["r1c7","r1c8"]]
region-sum-10: region-sum r2c7-r2c8-r3c8-r3c9-r4c9-r5c9-r6c9 segments [["r2c7","r2c8","r3c8","r3c9"],["r4c9","r5c9","r6c9"]]
region-sum-11: region-sum r1c4-r1c3-r1c2-r1c1 segments [["r1c4"],["r1c3","r1c2","r1c1"]]
```

Normal sudoku rules apply.

Digits in cages do not repeat, and sum to the small clue, if given.

Box borders divide blue lines into segments with the same sum.

Black dots separate digits where one is double the other.
