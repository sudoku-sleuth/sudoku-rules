---
format: open-rules
title: One Knight's Dilemma
setter: Meggen033
source: https://sudokupad.app/jrcovqhrcu
case: https://sudoku-sleuth.com/cases/one-knight-s-dilemma
library: https://rules.sudoku-sleuth.com/
status: read
exported: 952d409f298ec879bb9f27f9970c335a
---

```rules
sudoku 9x9
cage-1: cage r7c2-r7c3 total 3 connected true
cage-2: cage r5c2-r5c3 total 9 connected true
cage-3: cage r2c7-r3c7 total 17 connected true
cage-4: cage r2c5-r3c5 total 11 connected true
cage-5: cage r1c2-r2c1-r2c2 total 8 connected true
cage-6: cage r9c3-r9c4 total 12 connected true
cage-7: cage r3c9-r4c9 total 5 connected true
anti-knight
arrow-1: arrow r3c5 bulb ["r4c4"]
arrow-2: arrow r5c3 bulb ["r4c4"]
whispers-1: whispers r4c4-r5c5-r6c6-r7c7 gap 5
whispers-2: whispers r8c8-r7c7 gap 5
whispers-3: whispers r5c4-r6c4-r7c4 gap 5
whispers-4: whispers r9c9-r8c8 gap 5
renban-1: renban r4c2-r3c2-r3c3-r2c3-r2c4
renban-2: renban r4c7-r4c6-r5c6
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	The digits along each arrow must sum to the digit in the circled cell.
