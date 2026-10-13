---
format: open-rules
title: "Shifter Dots 102: Flüsternde Punkte (Whispering dots)"
setter: gUBBLOR
source: https://sudokupad.app/063ypj26m8
case: https://sudoku-sleuth.com/cases/shifter-dots-102
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r2c1 colour "black"
kropki-2: kropki r2c1-r3c1 colour "black"
whispers-1: whispers r1c1-r1c2-r2c1-r2c2-r3c1 gap 5
whispers-2: whispers r7c2-r7c1-r8c1-r9c1 gap 5
whispers-3: whispers r2c9-r3c9-r2c8-r3c7-r2c7 gap 5
whispers-4: whispers r1c7-r1c8 gap 5
whispers-5: whispers r8c9-r7c8-r8c7 gap 5
whispers-6: whispers r5c7-r5c6-r6c7 gap 5
whispers-7: whispers r7c3-r8c4 gap 5
whispers-8: whispers r4c8-r4c9 gap 5
whispers-9: whispers r7c5-r8c5 gap 5
whispers-10: whispers r8c6-r9c5 gap 5
whispers-11: whispers r4c3-r5c4-r6c3-r5c2 gap 5 loop true
pair-1: pair r2c1-r2c2 shift
pair-2: pair r2c2-r2c3 shift
pair-3: pair r2c7-r2c8 shift
pair-4: pair r1c8-r1c9 shift
pair-5: pair r7c9-r8c9 shift
pair-6: pair r8c9-r9c9 shift
pair-7: pair r7c8-r7c9 shift
pair-8: pair r1c6-r2c6 shift
pair-9: pair r4c6-r5c6 shift
pair-10: pair r2c4-r3c4 shift
pair-11: pair r8c5-r8c6 shift
pair-12: pair r6c3-r7c3 shift
pair-13: pair r3c3-r4c3 shift
pair-14: pair r4c1-r5c1 shift
pair-15: pair r7c5-r8c5 shift
pair-16: pair r5c3-r5c4 shift
pair-17: pair r5c6-r6c6 shift
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter dots: Digts on different sides of a shifter dot must always share either parity (even/odd) OR polarity (high/low) - never neither, never both. Shifter dots can never have 5 on it.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

German Whispers: Adjacent digits along each German Whisper line must have a difference of at least 5. Digits may repeat on the line.
