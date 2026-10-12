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
title: Foggy Balboa
setter: Meggen033
source: https://sudokupad.app/68ii1uwpc3
case: https://sudoku-sleuth.com/cases/foggy-balboa
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r4c5-r4c4 bulb ["r4c6"]
arrow-2: arrow r5c6-r6c6 bulb ["r4c6"]
arrow-3: arrow r5c3-r5c2 bulb ["r6c3"]
arrow-4: arrow r7c5-r8c5 bulb ["r7c4"]
arrow-5: arrow r6c1-r7c1-r7c2-r7c3 bulb ["r5c1"]
arrow-6: arrow r1c3-r1c4 bulb ["r2c3"]
arrow-7: arrow r1c6-r1c7 bulb ["r1c5"]
arrow-8: arrow r8c9-r7c9 bulb ["r8c8"]
whispers-1: whispers r6c4-r5c5-r4c6 gap 5
whispers-2: whispers r5c6-r4c7 gap 5
whispers-3: whispers r4c5-r3c6 gap 5
whispers-4: whispers r5c7-r5c8 gap 5
whispers-5: whispers r6c2-r5c2 gap 5
whispers-6: whispers r3c4-r2c4 gap 5
whispers-7: whispers r1c7-r1c8-r2c8-r2c9 gap 5
renban-1: renban r4c4-r5c4-r6c4-r6c5-r6c6
renban-2: renban r7c6-r8c6-r9c6
renban-3: renban r8c2-r9c2-r9c3
```

•   Normal Sudoku rules apply.  
•   The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•   The digits along each arrow must sum to the digit in the circled cell.
•   Adjacent digits along a green German Whisper line must have a difference of at least 5.
•   Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
