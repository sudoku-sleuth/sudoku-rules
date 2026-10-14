---
format: open-rules
title: An Odd Square Ring
setter: Meggen033
source: https://sudokupad.app/p8fx8ki1bk
case: https://sudoku-sleuth.com/cases/an-odd-square-ring
library: https://rules.sudoku-sleuth.com/
status: read
exported: 409065ec0b71c8dadd237d7b84d406f8
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 21 connected true
cage-2: cage r6c7-r7c6-r7c7 total 21 connected true
cage-3: cage r3c6-r3c7-r4c7 total 9 connected true
cage-4: cage r6c3-r7c3-r7c4 total 9 connected true
cage-5: cage r9c6-r9c7 total 14 connected true
cage-6: cage r1c3-r1c4 total 6 connected true
cage-7: cage r4c9-r5c9 total 7 connected true
cage-8: cage r5c1-r6c1 total 13 connected true
whispers-1: whispers r5c3-r5c4-r4c5-r3c5 gap 5
whispers-2: whispers r4c5-r5c6-r5c7 gap 5
whispers-3: whispers r5c6-r6c5-r7c5 gap 5
whispers-4: whispers r6c5-r5c4 gap 5
whispers-5: whispers r4c3-r3c4 gap 5
whispers-6: whispers r3c6-r4c7 gap 5
whispers-7: whispers r5c9-r6c9 gap 5
whispers-8: whispers r5c1-r4c1 gap 5
whispers-9: whispers r1c6-r1c7-r1c8 gap 5
renban-1: renban r8c1-r9c1-r9c2-r8c2
renban-2: renban r8c8-r8c9-r9c9-r9c8
renban-3: renban r2c8-r1c8-r1c9-r2c9
renban-4: renban r2c2-r2c1-r1c1-r1c2
parity-cells r5c3-r3c5-r5c7-r7c5 parity "odd"
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Cells with a filled circle must be odd.
