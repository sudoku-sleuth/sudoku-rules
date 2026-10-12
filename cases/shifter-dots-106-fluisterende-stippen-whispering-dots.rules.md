---
format: open-rules
title: "Shifter Dots 106: Fluisterende stippen (Whispering dots)"
setter: gUBBLOR and Jasura
source: https://sudokupad.app/pwlwzunc0d
case: https://sudoku-sleuth.com/cases/shifter-dots-106-fluisterende-stippen-whispering-dots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 colour "black"
kropki-2: kropki r6c8-r7c8 colour "black"
kropki-3: kropki r7c3-r7c4 colour "black"
whispers-1: whispers r3c7-r3c8 gap 4
whispers-2: whispers r3c1-r4c1-r5c2-r4c2-r3c2 gap 4
whispers-3: whispers r4c5-r5c5 gap 4
whispers-4: whispers r8c1-r8c2-r9c3 gap 4
whispers-5: whispers r8c2-r7c3 gap 4
whispers-6: whispers r7c4-r8c4-r9c4 gap 4
whispers-7: whispers r8c7-r8c8 gap 4
whispers-8: whispers r8c6-r9c5-r9c6 gap 4 loop true
whispers-9: whispers r5c6-r5c7-r6c8-r7c8-r7c7-r6c6 gap 4 loop true
whispers-10: whispers r2c5-r3c5-r4c4-r3c3-r2c3-r1c3-r1c4-r2c4-r3c4-r3c5 gap 4
whispers-11: whispers r2c5-r1c4 gap 4
pair-1: pair r1c4-r2c4 relation {"op":"shift"}
pair-2: pair r3c4-r3c5 relation {"op":"shift"}
pair-3: pair r2c3-r3c3 relation {"op":"shift"}
pair-4: pair r1c2-r2c2 relation {"op":"shift"}
pair-5: pair r3c7-r3c8 relation {"op":"shift"}
pair-6: pair r4c8-r5c8 relation {"op":"shift"}
pair-7: pair r4c5-r5c5 relation {"op":"shift"}
pair-8: pair r5c4-r6c4 relation {"op":"shift"}
pair-9: pair r6c1-r6c2 relation {"op":"shift"}
pair-10: pair r8c1-r8c2 relation {"op":"shift"}
pair-11: pair r5c6-r6c6 relation {"op":"shift"}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter dots: Digts on different sides of a shifter dot must always share either parity (even/odd) OR polarity (high/low) - never neither, never both. Shifter dots can never have 5 on it.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Dutch Whispers: Adjacent digits along each Dutch Whisper line must have a difference of at least 4. Digits may repeat on the line.
