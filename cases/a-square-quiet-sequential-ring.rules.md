---
format: open-rules
title: A Square Quiet Sequential Ring
setter: Meggen033
source: https://sudokupad.app/x25t4j27hq
case: https://sudoku-sleuth.com/cases/a-square-quiet-sequential-ring
library: https://rules.sudoku-sleuth.com/
status: read
exported: e68dfc8d67f2331b28589ceb669f1d5a
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c9 total 7 connected true
cage-2: cage r8c1-r9c1-r9c2 total 23 connected true
cage-3: cage r8c9-r9c8-r9c9 total 8 connected true
cage-4: cage r1c1-r1c2-r2c1 total 21 connected true
cage-5: cage r4c9-r5c9-r6c9 total 18 connected true
cage-6: cage r4c4-r4c5 total 9 connected true
cage-7: cage r1c4-r1c5-r2c4 total 12 connected true
cage-8: cage r2c6-r2c7 total 7 connected true
kropki-1: kropki r7c6-r7c7 black
kropki-2: kropki r3c3-r3c4 black
whispers-1: whispers r3c3-r4c3-r5c3-r6c3-r7c3-r7c4-r7c5-r7c6 gap 5
whispers-2: whispers r2c8-r3c7 gap 5
whispers-3: whispers r4c1-r5c1-r6c1 gap 5
whispers-4: whispers r5c5-r5c6 gap 5
renban-1: renban r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7
renban-2: renban r8c2-r7c3
renban-3: renban r9c4-r9c5-r9c6
renban-4: renban r5c2-r5c3-r5c4
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are given.
