---
format: open-rules
title: Renban X Killer Knights
setter: Meggen033
source: https://sudokupad.app/tbsbh24a0d
case: https://sudoku-sleuth.com/cases/renban-x-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
exported: 353aa0d386eace69697eb10094fafa2a
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2 total 9 connected true
cage-2: cage r2c5-r3c5 total 3 connected true
cage-3: cage r5c2-r5c3 total 4 connected true
cage-4: cage r5c7-r5c8 total 7 connected true
cage-5: cage r2c7-r2c8-r3c8 total 10 connected true
cage-6: cage r7c5-r8c5 total 8 connected true
cage-7: cage r7c2-r8c2-r8c3 total 10 connected true
cage-8: cage r2c4-r3c4 total 9 connected true
cage-9: cage r7c8-r7c9 total 10 connected true
cage-10: cage r7c7-r8c7-r9c7 total 19 connected true
anti-knight
renban r4c4-r5c5-r6c6-r4c6-r6c4
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
