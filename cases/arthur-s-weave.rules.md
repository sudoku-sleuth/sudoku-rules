---
format: open-rules
title: Arthur's Weave
setter: Meggen033
source: https://sudokupad.app/pb2ltesayv
case: https://sudoku-sleuth.com/cases/arthur-s-weave
library: https://rules.sudoku-sleuth.com/
status: read
exported: d124fd1c3aad0e35ba67773cf6f92b91
---

```rules
sudoku 9x9
cage-1: cage r3c5-r4c5 total 7 connected true
cage-2: cage r5c3-r5c4 total 7 connected true
cage-3: cage r6c5-r7c5 total 6 connected true
cage-4: cage r5c6-r5c7 total 6 connected true
cage-5: cage r2c3-r3c3 total 9 connected true
cage-6: cage r7c7-r7c8 total 5 connected true
cage-7: cage r2c4-r2c5 total 8 connected true
cage-8: cage r5c8-r6c8 total 9 connected true
cage-9: cage r8c5-r9c5 total 14 connected true
cage-10: cage r5c1-r5c2 total 11 connected true
cage-11: cage r2c1-r2c2 total 17 connected true
cage-12: cage r8c8-r9c8 total 12 connected true
cage-13: cage r2c7-r2c8-r3c8 total 10 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit. 
•	Killer cages: Digits in a cage do not repeat and sum to the clue in the top left.
