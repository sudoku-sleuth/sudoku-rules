---
format: open-rules
title: Se7en
setter: Meggen033
source: https://sudokupad.app/bacl71210m
case: https://sudoku-sleuth.com/cases/se7en
library: https://rules.sudoku-sleuth.com/
status: read
exported: 56698c81137119deb61b766ae55910d9
---

```rules
sudoku 9x9
cage-1: cage r7c5-r8c5 total 7 connected true
cage-2: cage r5c7-r5c8 total 7 connected true
cage-3: cage r4c5-r5c4-r5c5 total 10 connected true
cage-4: cage r6c1-r6c2 total 7 connected true
cage-5: cage r1c6-r2c6 total 7 connected true
cage-6: cage r2c2-r2c3-r3c2 total 19 connected true
cage-7: cage r2c8-r2c9 total 7 connected true
cage-8: cage r8c2-r9c2 total 7 connected true
cage-9: cage r9c7-r9c8 total 15 connected true
cage-10: cage r7c9-r8c9 total 15 connected true
cage-11: cage r6c4-r7c4 total 12 connected true
cage-12: cage r4c6-r4c7 total 9 connected true
anti-knight
counting-circles r1c1-r1c8-r3c3-r7c7-r7c8-r8c1-r8c7
```

•	Normal Sudoku rules apply. 

•	Cells separated by a knight's move in chess cannot contain the same digit.

•	Circles: A circled digit indicates exactly how many circles contain that digit.

•	Killer cages: Digits in a cage do not repeat and sum to the clue in the top left.
