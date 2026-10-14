---
format: open-rules
title: Twenty-to-Nine
setter: Meggen033
source: https://sudokupad.app/b4htj4fwjy
case: https://sudoku-sleuth.com/cases/twenty-to-nine
library: https://rules.sudoku-sleuth.com/
status: read
exported: 24e37129d574e89691be9be5447fc9ae
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2-r6c3 total 9 connected true
cage-2: cage r4c7-r4c8-r4c9 total 9 connected true
cage-3: cage r5c4-r5c5-r5c6 total 20 connected true
cage-4: cage r1c4-r2c4-r3c4 total 20 connected true
cage-5: cage r7c6-r8c6-r9c6 total 20 connected true
cage-6: cage r1c2-r2c2-r3c2 total 9 connected true
cage-7: cage r7c8-r8c8-r9c8 total 9 connected true
cage-8: cage r2c7-r2c8-r2c9 total 20 connected true
cage-9: cage r8c1-r8c2-r8c3 total 20 connected true
kropki-1: kropki r5c7-r5c8 black
kropki-2: kropki r1c5-r2c5 black
kropki-3: kropki r2c1-r2c2 black
kropki-4: kropki r8c8-r8c9 black
kropki-5: kropki r6c9-r7c9 black
kropki-6: kropki r6c3-r7c3 black
kropki-7: kropki r5c6-r6c6 white
kropki-8: kropki r8c2-r9c2 white
kropki-9: kropki r1c8-r2c8 white
kropki-10: kropki r3c1-r4c1 white
kropki-11: kropki r1c6-r1c7 white
```

•	Normal Sudoku rules apply. 
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
