---
format: open-rules
title: One Knight's Neighbor
setter: Meggen033
source: https://sudokupad.app/1za6vj1emm
case: https://sudoku-sleuth.com/cases/one-knight-s-neighbor
library: https://rules.sudoku-sleuth.com/
status: read
exported: 29a50c3f782de21e38ad9f07e3f8beab
---

```rules
sudoku 9x9
cage-1: cage r4c3-r4c4 total 15 connected true
cage-2: cage r6c3-r6c4 total 15 connected true
cage-3: cage r4c6-r4c7 total 5 connected true
cage-4: cage r6c6-r6c7 total 5 connected true
cage-5: cage r3c7-r3c8 total 15 connected true
cage-6: cage r7c2-r7c3 total 5 connected true
cage-7: cage r2c4-r2c5 total 10 connected true
cage-8: cage r8c5-r8c6 total 10 connected true
kropki-1: kropki r5c7-r5c8 white
kropki-2: kropki r5c2-r5c3 white
kropki-3: kropki r6c5-r6c6 white
kropki-4: kropki r4c4-r4c5 white
kropki-5: kropki r1c5-r2c5 white
kropki-6: kropki r8c5-r9c5 white
kropki-7: kropki r7c4-r8c4 white
kropki-8: kropki r7c2-r8c2 white
kropki-9: kropki r2c8-r3c8 white
kropki-10: kropki r7c8-r8c8 white
kropki-11: kropki r2c2-r3c2 white
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	A white dot between cells indicates cells with consecutive values. Not all dots are given.
