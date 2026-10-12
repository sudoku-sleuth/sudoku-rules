---
format: open-rules
title: A Square Green Ring
setter: Meggen033
source: https://sudokupad.app/1iktti60u5
case: https://sudoku-sleuth.com/cases/a-square-green-ring
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r1c1-r1c2 bulb ["r2c2"]
arrow-2: arrow r1c8-r1c9-r2c9 bulb ["r2c8"]
arrow-3: arrow r8c9-r9c9-r9c8 bulb ["r8c8"]
arrow-4: arrow r9c2-r9c1-r8c1 bulb ["r8c2"]
whispers-1: whispers r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7 gap 5
whispers-2: whispers r7c6-r7c5-r7c4-r7c3-r6c3-r5c3-r4c3 gap 5
renban-1: renban r4c9-r5c9-r6c9
renban-2: renban r9c6-r9c5-r9c4-r8c4
renban-3: renban r5c4-r6c4-r6c5
renban-4: renban r1c5-r1c6-r2c6
renban-5: renban r5c2-r5c1-r4c1-r4c2
```

•	Normal Sudoku rules apply. 
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	The digits along each arrow must sum to the digit in the circled cell.
