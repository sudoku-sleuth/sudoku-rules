---
format: open-rules
title: Middly-Wiggly
setter: Meggen033
source: https://sudokupad.app/wzwuzc80w6
case: https://sudoku-sleuth.com/cases/middly-wiggly
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1a91f8c4ddd1846e03a7567aeaba0c6e
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 15 connected true
cage-2: cage r1c3-r2c3 total 7 connected true
cage-3: cage r3c1-r3c2 total 13 connected true
cage-4: cage r3c7-r3c8-r3c9 total 9 connected true
cage-5: cage r7c3-r8c3-r9c3 total 21 connected true
cage-6: cage r8c6-r9c6 total 13 connected true
cage-7: cage r6c8-r6c9 total 7 connected true
cage-8: cage r6c4-r6c5 total 13 connected true
cage-9: cage r4c6-r5c6 total 7 connected true
kropki-1: kropki r6c9-r7c9 white
kropki-2: kropki r1c2-r2c2 black
kropki-3: kropki r4c1-r5c1 black
kropki-4: kropki r1c4-r1c5 black
kropki-5: kropki r4c6-r4c7 black
kropki-6: kropki r9c8-r9c9 black
whispers-1: whispers r5c3-r6c3 gap 5
whispers-2: whispers r3c5-r3c6 gap 5
whispers-3: whispers r3c7-r3c6 gap 5
whispers-4: whispers r4c8-r4c9-r5c9 gap 5
whispers-5: whispers r8c4-r9c4-r9c5 gap 5
renban-1: renban r9c1-r8c1-r8c2-r7c2
renban-2: renban r1c9-r1c8-r2c8-r2c7
renban-3: renban r7c6-r6c6-r6c7
quadruple-1: quadruple r5c1-r5c2-r6c1-r6c2 digits [4,5,6]
quadruple-2: quadruple r1c5-r1c6-r2c5-r2c6 digits [4,5,6]
```

•	Normal Sudoku rules apply. 
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Digits in a white circle must appear at least once in the four surrounding cells.
