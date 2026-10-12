---
fog:
  initiallyLit:
    - 30
    - 31
    - 32
    - 39
    - 40
    - 41
    - 48
    - 49
    - 50
format: open-rules
title: Fogabwe
setter: Meggen033
source: https://sudokupad.app/awrr561ojz
case: https://sudoku-sleuth.com/cases/fogabwe
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r4c5-r5c4 bulb ["r4c6"]
arrow-2: arrow r6c5-r5c6 bulb ["r6c4"]
arrow-3: arrow r4c7-r3c7-r3c6-r3c5 bulb ["r5c7"]
arrow-4: arrow r6c3-r7c3-r7c4-r7c5 bulb ["r5c3"]
arrow-5: arrow r5c1-r4c2 bulb ["r6c2"]
arrow-6: arrow r5c8-r6c8 bulb ["r4c8"]
arrow-7: arrow r7c7-r7c6 bulb ["r7c8"]
arrow-8: arrow r8c8-r8c7 bulb ["r8c9"]
arrow-9: arrow r2c2-r2c1 bulb ["r2c3"]
whispers-1: whispers r6c4-r5c5 gap 5
whispers-2: whispers r5c3-r5c2 gap 5
whispers-3: whispers r5c8-r5c7-r6c7 gap 5
whispers-4: whispers r3c3-r4c3 gap 5
whispers-5: whispers r2c8-r3c8 gap 5
renban-1: renban r4c4-r5c5-r6c6
renban-2: renban r2c6-r2c5-r2c4
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	The digits along each arrow must sum to the digit in the circled cell.  Digits may repeat along an arrow if allowed by other rules.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
