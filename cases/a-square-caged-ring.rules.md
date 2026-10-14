---
format: open-rules
title: A Square Caged Ring
setter: Meggen033
source: https://sudokupad.app/ctba3w9aif
case: https://sudoku-sleuth.com/cases/a-square-caged-ring
library: https://rules.sudoku-sleuth.com/
status: read
exported: 81efaae8c6bcd20bbc3d5f0984e2b2d5
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5-r3c6-r3c7-r4c3-r4c7-r5c3 total 44 connected true
cage-2: cage r5c7-r6c3-r6c7-r7c3-r7c4-r7c5-r7c6-r7c7 total 44 connected true
cage-3: cage r8c9-r9c8-r9c9 total 10 connected true
cage-4: cage r1c1-r1c2-r2c1 total 9 connected true
cage-5: cage r1c8-r1c9-r2c9 total 16 connected true
cage-6: cage r8c1-r9c1-r9c2 total 21 connected true
cage-7: cage r4c1-r5c1-r6c1 total 16 connected true
cage-8: cage r1c4-r1c5-r1c6 total 17 connected true
cage-9: cage r4c4-r4c5 total 11 connected true
kropki-1: kropki r7c8-r7c9 white
kropki-2: kropki r7c1-r7c2 white
kropki-3: kropki r9c4-r9c5 white
kropki-4: kropki r5c6-r6c6 white
kropki-5: kropki r1c6-r2c6 white
kropki-6: kropki r8c8-r9c8 black
kropki-7: kropki r1c2-r2c2 black
kropki-8: kropki r4c9-r5c9 black
kropki-9: kropki r9c5-r9c6 black
kropki-10: kropki r6c5-r6c6 black
```

•	Normal Sudoku rules apply. 
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
