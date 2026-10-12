---
format: open-rules
title: OK...One more dot
setter: Meggen033
source: https://sudokupad.app/cgyr07e8ys
case: https://sudoku-sleuth.com/cases/ok-one-more-dot
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5 total 9 connected true
cage-2: cage r4c3-r5c3 total 9 connected true
cage-3: cage r4c7-r5c7 total 7 connected true
cage-4: cage r4c9-r5c9 total 14 connected true
anti-knight
kropki-1: kropki r8c4-r9c4 colour "white"
kropki-2: kropki r2c2-r3c2 colour "black"
kropki-3: kropki r1c3-r1c4 colour "black"
kropki-4: kropki r1c4-r2c4 colour "black"
kropki-5: kropki r2c4-r3c4 colour "black"
kropki-6: kropki r2c6-r3c6 colour "black"
kropki-7: kropki r2c8-r3c8 colour "black"
kropki-8: kropki r1c8-r2c8 colour "black"
kropki-9: kropki r5c5-r6c5 colour "black"
kropki-10: kropki r8c5-r9c5 colour "black"
kropki-11: kropki r8c8-r9c8 colour "black"
kropki-12: kropki r7c2-r8c2 colour "black"
negative relations [{"op":"ratio","value":2}] except [["r8c4","r9c4"],["r2c2","r3c2"],["r1c3","r1c4"],["r1c4","r2c4"],["r2c4","r3c4"],["r2c6","r3c6"],["r2c8","r3c8"],["r1c8","r2c8"],["r5c5","r6c5"],["r8c5","r9c5"],["r8c8","r9c8"],["r7c2","r8c2"]]
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	A black dot between cells indicates cell values with a 2:1 ratio.  ***ALL BLACK DOTS ARE GIVEN***
•	A white dot between cells indicates cells with consecutive values. Not all white dots are given.
