---
format: open-rules
title: The Odd Knight
setter: Meggen033
source: https://sudokupad.app/gdnkjg1jf2
case: https://sudoku-sleuth.com/cases/the-odd-knight
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r8c8-r8c9 total 12 connected true
anti-knight
renban-1: renban r4c3-r5c4-r6c3
renban-2: renban r4c4-r3c5-r2c5
renban-3: renban r5c6-r4c7-r4c6
pair-1: pair r1c3-r2c3 relation {"op":"sum","value":10}
pair-2: pair r9c6-r9c7 relation {"op":"sum","value":10}
quadruple-1: quadruple r3c2-r3c3-r4c2-r4c3 digits [2,4,6,8]
quadruple-2: quadruple r2c4-r2c5-r3c4-r3c5 digits [2,4,6,8]
quadruple-3: quadruple r6c7-r6c8-r7c7-r7c8 digits [2,4,6,8]
quadruple-4: quadruple r7c5-r7c6-r8c5-r8c6 digits [2,4,6,8]
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit. 
•	Digits in a white circle must appear at least once in the four surrounding cells.
•	Digits along a megenta Renban line form a set of consecutive non-repeating digits in any order.
•	Adjacent cells connected with an X must sum to 10.
•	Digits in a cage do not repeat and sum to the clue in the top left.
