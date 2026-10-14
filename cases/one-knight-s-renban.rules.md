---
format: open-rules
title: One Knight's Renban
setter: Meggen033
source: https://sudokupad.app/rsfg2xbh71
case: https://sudoku-sleuth.com/cases/one-knight-s-renban
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2710385bc79cc2fe7e9c51589c26d767
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c2 total 15 connected true
cage-2: cage r1c8-r2c8 total 13 connected true
cage-3: cage r5c8-r6c8 total 7 connected true
cage-4: cage r4c2-r5c2 total 9 connected true
anti-knight
kropki-1: kropki r4c7-r4c8 white
kropki-2: kropki r2c5-r3c5 black
kropki-3: kropki r5c6-r6c6 black
kropki-4: kropki r4c4-r5c4 black
whispers r5c4-r4c5-r5c6-r6c5 gap 5 loop true
renban-1: renban r1c4-r2c4-r2c3-r3c3
renban-2: renban r1c6-r2c6-r2c7-r3c7
renban-3: renban r9c5-r9c6-r8c6-r7c6
renban-4: renban r7c5-r7c4-r8c4-r9c4
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
