---
format: open-rules
title: Gently roasted smoreos
setter: Chip Sounder
source: https://sudokupad.app/c2k2ny16z4
case: https://sudoku-sleuth.com/cases/gently-roasted-smoreos
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r5c5-r6c5-r7c5-r8c5
thermo-2: thermo r6c2-r5c2-r4c2
thermo-3: thermo r5c7-r6c8-r5c8
thermo-4: thermo r3c7-r3c6
pair-1: pair r7c5-r8c5 difference 2
pair-2: pair r5c5-r6c5 difference 2
pair-3: pair r2c5-r3c5 difference 2
pair-4: pair r8c2-r9c2 difference 2
pair-5: pair r7c8-r8c8 difference 2
pair-6: pair r1c2-r2c2 difference 2
pair-7: pair r5c3-r5c4 difference 2
pair-8: pair r5c7-r6c7 difference 2
kropki-1: kropki r7c5-r7c6 colour "black"
kropki-2: kropki r8c4-r8c5 colour "black"
kropki-3: kropki r6c4-r6c5 colour "black"
kropki-4: kropki r5c5-r5c6 colour "black"
kropki-5: kropki r2c5-r2c6 colour "black"
kropki-6: kropki r3c4-r3c5 colour "black"
kropki-7: kropki r9c2-r9c3 colour "black"
kropki-8: kropki r8c1-r8c2 colour "black"
kropki-9: kropki r8c8-r8c9 colour "black"
kropki-10: kropki r7c7-r7c8 colour "black"
kropki-11: kropki r1c1-r1c2 colour "black"
kropki-12: kropki r2c2-r2c3 colour "black"
kropki-13: kropki r2c8-r2c9 colour "black"
kropki-14: kropki r5c3-r6c3 colour "black"
kropki-15: kropki r4c4-r5c4 colour "black"
```

Conflict checker off is requested for this set.
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a king's move (in chess) cannot contain the same digit.
Cells separated by a oreo have a 1:2 ratio (black dot).
Cells separated by a marshmallow have a difference of 2 (white dot).
Digits on a thermometer must rise from the bulb end.
