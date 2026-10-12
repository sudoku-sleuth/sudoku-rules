---
format: open-rules
title: "Shifter Dots 104: Cold? Hot? Gold dot!"
setter: gUBBLOR
source: https://sudokupad.app/3ukixndpda
case: https://sudoku-sleuth.com/cases/cold-hot-gold-dot
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r3c3-r2c4-r2c5-r2c6-r1c7-r1c8
thermo-2: thermo r9c1-r9c2-r8c1-r7c2-r7c1
thermo-3: thermo r7c8-r8c7-r9c8-r8c9
thermo-4: thermo r4c8-r5c8-r5c7-r6c6-r5c5
thermo-5: thermo r7c4-r6c3-r5c3-r5c2
thermo-6: thermo r9c5-r8c4-r8c5-r9c6
kropki-1: kropki r3c8-r3c9 colour "black"
kropki-2: kropki r2c5-r3c5 colour "black"
kropki-3: kropki r1c1-r2c1 colour "black"
kropki-4: kropki r8c1-r9c1 colour "black"
pair-1: pair r2c4-r2c5 relation {"op":"shift"}
pair-2: pair r2c5-r2c6 relation {"op":"shift"}
pair-3: pair r3c2-r3c3 relation {"op":"shift"}
pair-4: pair r1c7-r1c8 relation {"op":"shift"}
pair-5: pair r7c1-r8c1 relation {"op":"shift"}
pair-6: pair r7c8-r8c8 relation {"op":"shift"}
pair-7: pair r8c7-r8c8 relation {"op":"shift"}
pair-8: pair r8c8-r9c8 relation {"op":"shift"}
pair-9: pair r8c8-r8c9 relation {"op":"shift"}
pair-10: pair r5c7-r5c8 relation {"op":"shift"}
pair-11: pair r6c8-r7c8 relation {"op":"shift"}
pair-12: pair r5c2-r6c2 relation {"op":"shift"}
pair-13: pair r6c2-r6c3 relation {"op":"shift"}
pair-14: pair r5c6-r5c7 relation {"op":"shift"}
pair-15: pair r5c6-r6c6 relation {"op":"shift"}
pair-16: pair r5c1-r5c2 relation {"op":"shift"}
pair-17: pair r6c9-r7c9 relation {"op":"shift"}
pair-18: pair r9c5-r9c6 relation {"op":"shift"}
pair-19: pair r8c5-r9c5 relation {"op":"shift"}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter dots: Digts on different sides of a shifter dot must always share either parity (even/odd) OR polarity (high/low) - never neither, never both. Shifter dots can never have 5 on it.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Thermometers: Digits along each thermometer must increase starting from the bulb end.
