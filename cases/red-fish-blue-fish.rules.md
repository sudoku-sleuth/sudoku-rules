---
format: open-rules
title: Red Fish, Blue Fish
setter: Blobz
source: https://sudokupad.app/blobz/red-fish-blue-fish
case: https://sudoku-sleuth.com/cases/red-fish-blue-fish
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=2 r9c1=1
---

```rules
sudoku 9x9
cage-1: cage r8c9-r9c8-r9c9 total 12 connected true
cage-2: cage r4c6-r5c5-r5c6 total 13 connected true
cage-3: cage r8c2-r8c3-r9c2 total 11 connected true
cage-4: cage r1c8-r2c8-r2c9 total 15 connected true
cage-5: cage r6c2-r7c1-r7c2 total 23 connected true
cage-6: cage r3c7-r3c8-r4c7 total 17 connected true
cage-7: cage r4c8-r4c9-r5c9 total 24 connected true
cage-8: cage r1c5-r1c6-r2c6 total 14 connected true
kropki-1: kropki r2c5-r3c5 colour "black"
kropki-2: kropki r6c4-r7c4 colour "black"
kropki-3: kropki r6c3-r7c3 colour "white"
kropki-4: kropki r6c2-r6c3 colour "white"
kropki-5: kropki r5c3-r6c3 colour "white"
kropki-6: kropki r5c2-r5c3 colour "white"
kropki-7: kropki r2c6-r3c6 colour "white"
kropki-8: kropki r2c6-r2c7 colour "white"
kropki-9: kropki r1c6-r2c6 colour "white"
kropki-10: kropki r1c6-r1c7 colour "white"
region-sum r5c8-r6c8-r7c8-r8c8-r7c7-r8c6-r9c5-r8c4-r7c3-r6c4-r5c5-r6c6-r6c7 segments [["r5c8","r6c8","r6c7"],["r7c8","r8c8","r7c7"],["r8c6","r9c5","r8c4"],["r7c3"],["r6c4","r5c5","r6c6"]]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[4.5,0.5],[3.5,1.5],[3.5,2.5],[4.5,3.5],[2.5,5.5],[0.5,3.5],[1.5,2.5],[1.5,1.5],[0.5,0.5]],"color":"#f66a","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. 

Every pair of consecutive cells along the red line must contain an even digit and an odd digit.

Box borders divide blue lines into segments with the same sum.

White dots separate consecutive digits. Black dots separate digits where one is double the other. 

Digits in cages do not repeat, and sum to the given total.
