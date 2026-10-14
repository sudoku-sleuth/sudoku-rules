---
format: open-rules
title: Cell Division
setter: Microbiologist Barbie (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/barbie/celldivision
case: https://sudoku-sleuth.com/cases/cell-division
library: https://rules.sudoku-sleuth.com/
status: read
exported: b4ef2ceb164353f8f67c9eca9aac5570
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r5c3 black
kropki-2: kropki r5c7-r6c7 black
kropki-3: kropki r2c2-r2c3 black
kropki-4: kropki r2c6-r2c7 black
kropki-5: kropki r3c1-r3c2 black
kropki-6: kropki r5c1-r6c1 black
kropki-7: kropki r9c4-r9c5 black
modular-1: modular r5c3-r6c3-r7c4-r8c4-r9c4
modular-2: modular r5c4-r6c4-r7c3-r8c3-r9c3
modular-3: modular r3c4-r3c5-r3c6-r4c7-r4c8
modular-4: modular r3c9-r3c8-r3c7-r4c6-r4c5
modular-5: modular r4c1-r3c1-r2c2-r1c3-r1c4-r1c5
modular-6: modular r9c5-r9c6-r9c7-r8c8-r7c9-r6c9
modular-7: modular r1c7-r1c8-r2c9
modular-8: modular r6c1-r7c1-r8c1-r9c2
region-sum-1: region-sum r5c3-r6c3-r7c4-r8c4-r9c4 segments [["r5c3","r6c3"],["r7c4","r8c4","r9c4"]]
region-sum-2: region-sum r5c4-r6c4-r7c3-r8c3-r9c3 segments [["r5c4","r6c4"],["r7c3","r8c3","r9c3"]]
region-sum-3: region-sum r3c4-r3c5-r3c6-r4c7-r4c8 segments [["r3c4","r3c5","r3c6"],["r4c7","r4c8"]]
region-sum-4: region-sum r3c9-r3c8-r3c7-r4c6-r4c5 segments [["r3c9","r3c8","r3c7"],["r4c6","r4c5"]]
region-sum-5: region-sum r4c1-r3c1-r2c2-r1c3-r1c4-r1c5 segments [["r4c1"],["r3c1","r2c2","r1c3"],["r1c4","r1c5"]]
region-sum-6: region-sum r9c5-r9c6-r9c7-r8c8-r7c9-r6c9 segments [["r9c5","r9c6"],["r9c7","r8c8","r7c9"],["r6c9"]]
region-sum-7: region-sum r6c1-r7c1-r8c1-r9c2 segments [["r6c1"],["r7c1","r8c1","r9c2"]]
```

- Normal Sudoku rules apply.
- All pink lines are both modular and region sum lines. Lines continue straight through intersections.
- Every set of three adjacent cells on a modular line contains digits with three different remainders when divided by 3.
- The sum of the digits on a region sum line within a particular region must be the same for all of the regions the line passes through. 
- Digits separated by a solid pink dot are in a 1:2 ratio. Not all possible dots are necessarily given.

You may not solve this puzzle if you are Anish Kapoor or solving on behalf of Anish Kapoor.
