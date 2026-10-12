---
format: open-rules
title: A Square Arrow Ring
setter: Meggen033
source: https://sudokupad.app/an94nqii9y
case: https://sudoku-sleuth.com/cases/a-square-arrow-ring
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c8=5
---

```rules
sudoku 9x9
kropki-1: kropki r8c8-r8c9 colour "white"
kropki-2: kropki r3c9-r4c9 colour "white"
kropki-3: kropki r4c3-r4c4 colour "white"
kropki-4: kropki r3c6-r4c6 colour "white"
kropki-5: kropki r6c6-r7c6 colour "white"
arrow-1: arrow r7c4-r7c5-r7c6 bulb ["r7c3"]
arrow-2: arrow r6c7-r5c7-r4c7 bulb ["r7c7"]
arrow-3: arrow r3c6-r3c5-r3c4 bulb ["r3c7"]
arrow-4: arrow r4c3-r5c3-r6c3 bulb ["r3c3"]
arrow-5: arrow r1c5-r1c4 bulb ["r2c6"]
arrow-6: arrow r9c5-r9c6 bulb ["r8c4"]
arrow-7: arrow r5c6-r4c5 bulb ["r6c5"]
whispers-1: whispers r8c1-r9c1-r9c2 gap 5
whispers-2: whispers r9c8-r9c9-r8c9 gap 5
whispers-3: whispers r1c8-r1c9-r2c9 gap 5
whispers-4: whispers r1c2-r1c1-r2c1 gap 5
whispers-5: whispers r4c9-r5c9-r6c9 gap 5
renban-1: renban r1c8-r2c8-r2c9
renban-2: renban r9c2-r8c2-r8c1
renban-3: renban r4c1-r5c1-r6c1
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	The digits along each arrow must sum to the digit in the circled cell.
•	A white dot between cells indicates cells with consecutive values. Not all dots are given.
