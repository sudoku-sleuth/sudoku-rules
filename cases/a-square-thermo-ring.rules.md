---
format: open-rules
title: A Square Thermo Ring
setter: Meggen033
source: https://sudokupad.app/m1ifyrib3g
case: https://sudoku-sleuth.com/cases/a-square-thermo-ring
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r7c4-r7c5-r7c6-r7c7-r6c7-r5c7-r4c7
thermo-2: thermo r6c3-r5c3-r4c3-r3c3-r3c4-r3c5-r3c6
whispers-1: whispers r8c2-r8c1-r9c1-r9c2 gap 5 loop true
whispers-2: whispers r1c8-r2c8-r2c9-r1c9 gap 5 loop true
whispers-3: whispers r2c4-r1c5 gap 5
whispers-4: whispers r4c8-r5c9 gap 5
whispers-5: whispers r8c6-r9c5 gap 5
whispers-6: whispers r6c2-r5c1 gap 5
pair-1: pair r8c9-r9c9 sum 10
pair-2: pair r1c1-r2c1 sum 10
pair-3: pair r3c7-r4c7 sum 10
pair-4: pair r3c6-r3c7 sum 10
pair-5: pair r6c3-r7c3 sum 10
pair-6: pair r7c3-r7c4 sum 10
pair-7: pair r8c5-r8c6 sum 10
pair-8: pair r4c2-r5c2 sum 10
pair-9: pair r4c5-r4c6 sum 10
pair-10: pair r6c4-r6c5 sum 10
```

•	Normal Sudoku rules apply. 
•	Digits along each thermometer must increase starting from the bulb end.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Adjacent cells connected with an X must sum to 10.
