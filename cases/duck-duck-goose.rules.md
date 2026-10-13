---
format: open-rules
title: Duck-Duck-Goose
setter: Meggen033
source: https://sudokupad.app/h063jqwe5x
case: https://sudoku-sleuth.com/cases/duck-duck-goose
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 9 connected true
cage-2: cage r7c4-r8c4 total 3 connected true
cage-3: cage r4c7-r4c8 total 4 connected true
cage-4: cage r7c1-r8c1 total 5 connected true
cage-5: cage r7c7-r7c8-r8c7 total 14 connected true
cage-6: cage r1c7-r1c8 total 8 connected true
cage-7: cage r2c8-r2c9 total 15 connected true
cage-8: cage r8c2-r9c2 total 15 connected true
cage-9: cage r8c9-r9c8-r9c9 total 19 connected true
cage-10: cage r5c5-r5c6-r6c5 total 10 connected true
kropki-1: kropki r3c3-r4c3 colour "white"
kropki-2: kropki r3c3-r3c4 colour "white"
kropki-3: kropki r7c3-r8c3 colour "black"
kropki-4: kropki r3c7-r3c8 colour "black"
kropki-5: kropki r9c3-r9c4 colour "black"
kropki-6: kropki r3c9-r4c9 colour "black"
pair-1: pair r4c3-r5c3 sum 10
pair-2: pair r3c4-r3c5 sum 10
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

•	Normal Sudoku rules apply. 
•	Disjoint Set: Cells in the same relative position in different boxes cannot contain the same digits.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
•	Adjacent cells connected with a X must sum to 10.
