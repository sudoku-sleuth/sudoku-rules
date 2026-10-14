---
format: open-rules
title: Tight Fit 4
setter: The Bard
source: https://sudokupad.app/y1935ns7pq
case: https://sudoku-sleuth.com/cases/tight-fit-4
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0e04d41c94645842df9d7073ff91d49e
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6 total 12 connected true
cage-2: cage r8c8-r9c8 total 12 connected true
cage-3: cage r8c9-r9c9 total 15 connected true
cage-4: cage r1c1-r2c1 total 15 connected true
cage-5: cage r1c2-r2c2 total 12 connected true
cage-6: cage r8c1-r9c1 total 15 connected true
cage-7: cage r8c2-r9c2 total 15 connected true
cage-8: cage r1c9-r2c9 total 10 connected true
cage-9: cage r1c8-r2c8 total 15 connected true
cage-10: cage r4c1-r5c1-r6c1 total 12 connected true
cage-11: cage r9c4-r9c5-r9c6 total 12 connected true
cage-12: cage r4c9-r5c9-r6c9 total 12 connected true
kropki-1: kropki r4c4-r4c5 white
kropki-2: kropki r5c5-r5c6 white
kropki-3: kropki r5c4-r5c5 white
kropki-4: kropki r5c9-r6c9 white
kropki-5: kropki r1c4-r1c5 white
kropki-6: kropki r8c4-r8c5 white
kropki-7: kropki r3c4-r3c5 white
kropki-8: kropki r5c3-r6c3 white
kropki-9: kropki r3c2-r3c3 white
kropki-10: kropki r7c9-r8c9 white
kropki-11: kropki r2c8-r2c9 white
kropki-12: kropki r5c8-r6c8 white
kropki-13: kropki r4c5-r5c5 black
kropki-14: kropki r6c4-r6c5 black
region-sum-1: region-sum r2c3-r2c4-r2c5-r2c6-r2c7-r3c8-r4c8-r5c8-r6c8-r7c8-r8c7-r8c6-r8c5-r8c4-r8c3-r7c2-r6c2-r5c2-r4c2-r3c2 segments [["r2c3","r3c2"],["r2c4","r2c5","r2c6"],["r2c7","r3c8"],["r4c8","r5c8","r6c8"],["r7c8","r8c7"],["r8c6","r8c5","r8c4"],["r8c3","r7c2"],["r6c2","r5c2","r4c2"]]
region-sum-2: region-sum r3c4-r3c5-r3c6-r4c7-r5c7-r6c7-r7c6-r7c5-r7c4-r6c3-r5c3-r4c3 segments [["r3c4","r3c5","r3c6"],["r4c7","r5c7","r6c7"],["r7c6","r7c5","r7c4"],["r6c3","r5c3","r4c3"]]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Killer: Digits in cages must sum to the number in the top left corner of the cage.
Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
Region Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. Different lines may have different values.
