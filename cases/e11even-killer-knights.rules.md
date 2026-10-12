---
format: open-rules
title: E11even Killer Knights
setter: Meggen033
source: https://sudokupad.app/99kb77t9w0
case: https://sudoku-sleuth.com/cases/e11even-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c3-r5c4 total 7 connected true
cage-2: cage r5c6-r5c7 total 13 connected true
cage-3: cage r4c8-r5c8-r5c9 total 21 connected true
cage-4: cage r5c1-r5c2-r6c2 total 9 connected true
cage-5: cage r6c8-r7c8 total 12 connected true
cage-6: cage r3c2-r4c2 total 8 connected true
cage-7: cage r2c6-r3c6 total 13 connected true
cage-8: cage r7c4-r8c4 total 7 connected true
cage-9: cage r2c4-r3c4 total 7 connected true
cage-10: cage r7c6-r8c6 total 13 connected true
cage-11: cage r8c1-r8c2 total 6 connected true
anti-knight
```

•        Normal Sudoku rules apply.
•        Cells separated by a knight's move in chess cannot contain the same digit.
•        Digits in a cage do not repeat and sum to the clue in the top left.
