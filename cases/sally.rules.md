---
format: open-rules
title: Sally
setter: gUBBLOR
source: https://sudokupad.app/cvb5h3qg9e
case: https://sudoku-sleuth.com/cases/sally
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo r3c9-r4c8-r5c8-r6c9-r7c9-r8c8-r9c7-r9c6
kropki-1: kropki r4c3-r4c4 colour "black"
kropki-2: kropki r4c5-r4c6 colour "black"
kropki-3: kropki r2c8-r2c9 colour "black"
kropki-4: kropki r1c6-r1c7 colour "black"
whispers-1: whispers r9c5-r9c4-r9c3-r8c2-r7c2-r6c3-r5c3-r5c4 gap 5
whispers-2: whispers r5c3-r4c2-r3c3-r2c4-r3c4-r3c5-r2c6-r3c6-r4c7-r5c6-r6c6-r7c7-r8c7-r9c6 gap 5
whispers-3: whispers r5c6-r5c5 gap 5
pair-1: pair r5c4-r5c5 sum 10
pair-2: pair r6c8-r7c8 sum 10
pair-3: pair r9c8-r9c9 sum 10
pair-4: pair r5c1-r6c1 sum 5
pair-5: pair r1c2-r2c2 sum 5
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

German Whispers: Adjacent digits along each German Whisper line must have a difference of at least 5. Digits may repeat on the line.

Thermometers: Digits along each thermometer must increase starting from the bulb end.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.
