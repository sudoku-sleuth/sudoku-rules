---
format: open-rules
title: One Knight's Veneer
setter: Meggen033
source: https://sudokupad.app/znv0823uo7
case: https://sudoku-sleuth.com/cases/one-knight-s-veneer
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c3-r5c2-r5c3-r6c3 total 10 connected true
cage-2: cage r4c7-r5c7-r5c8-r6c7 total 30 connected true
cage-3: cage r3c8-r3c9 total 15 connected true
cage-4: cage r7c8-r7c9 total 15 connected true
cage-5: cage r7c1-r7c2 total 5 connected true
cage-6: cage r3c1-r3c2 total 5 connected true
cage-7: cage r8c5-r8c6 total 5 connected true
cage-8: cage r2c4-r2c5 total 15 connected true
cage-9: cage r9c1-r9c2 total 12 connected true
cage-10: cage r4c1-r5c1 total 15 connected true
cage-11: cage r5c9-r6c9 total 5 connected true
cage-12: cage r1c3-r1c4 total 9 connected true
pair-1: pair r3c3-r4c3 relation {"op":"sum","value":10}
pair-2: pair r6c7-r7c7 relation {"op":"sum","value":10}
pair-3: pair r3c9-r4c9 relation {"op":"sum","value":10}
pair-4: pair r6c1-r7c1 relation {"op":"sum","value":10}
pair-5: pair r4c4-r4c5 relation {"op":"sum","value":10}
pair-6: pair r6c5-r6c6 relation {"op":"sum","value":10}
pair-7: pair r8c6-r8c7 relation {"op":"sum","value":10}
pair-8: pair r2c3-r2c4 relation {"op":"sum","value":10}
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Adjacent cells connected with a X must sum to 10.
