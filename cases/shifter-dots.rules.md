---
format: open-rules
title: "Shifter Dots 101: Introduction to Shifter Dots"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/shifter-dots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c8-r8c8 colour "black"
kropki-2: kropki r9c7-r9c8 colour "black"
kropki-3: kropki r9c4-r9c5 colour "black"
kropki-4: kropki r1c8-r2c8 colour "black"
kropki-5: kropki r5c7-r5c8 colour "black"
kropki-6: kropki r3c6-r3c7 colour "black"
kropki-7: kropki r6c2-r7c2 colour "white"
kropki-8: kropki r1c7-r2c7 colour "white"
kropki-9: kropki r1c6-r2c6 colour "white"
kropki-10: kropki r4c1-r4c2 colour "white"
kropki-11: kropki r4c8-r4c9 colour "white"
pair-1: pair r8c6-r8c7 relation {"op":"sum","value":10}
pair-2: pair r9c6-r9c7 relation {"op":"sum","value":10}
pair-3: pair r2c7-r3c7 relation {"op":"sum","value":10}
pair-4: pair r5c2-r6c2 relation {"op":"sum","value":10}
pair-5: pair r1c8-r1c9 relation {"op":"sum","value":10}
pair-6: pair r1c1-r2c1 relation {"op":"sum","value":10}
pair-7: pair r6c3-r6c4 relation {"op":"sum","value":10}
pair-8: pair r3c4-r4c4 relation {"op":"sum","value":10}
pair-9: pair r8c8-r8c9 relation {"op":"sum","value":5}
pair-10: pair r9c8-r9c9 relation {"op":"sum","value":5}
pair-11: pair r1c1-r1c2 relation {"op":"sum","value":5}
pair-12: pair r7c8-r7c9 relation {"op":"shift"}
pair-13: pair r8c7-r9c7 relation {"op":"shift"}
pair-14: pair r8c7-r8c8 relation {"op":"shift"}
pair-15: pair r7c1-r7c2 relation {"op":"shift"}
pair-16: pair r7c2-r7c3 relation {"op":"shift"}
pair-17: pair r7c1-r8c1 relation {"op":"shift"}
pair-18: pair r7c5-r8c5 relation {"op":"shift"}
pair-19: pair r2c8-r3c8 relation {"op":"shift"}
pair-20: pair r2c7-r2c8 relation {"op":"shift"}
pair-21: pair r1c2-r1c3 relation {"op":"shift"}
pair-22: pair r1c2-r2c2 relation {"op":"shift"}
pair-23: pair r4c2-r5c2 relation {"op":"shift"}
pair-24: pair r2c1-r2c2 relation {"op":"shift"}
pair-25: pair r2c2-r2c3 relation {"op":"shift"}
pair-26: pair r2c3-r3c3 relation {"op":"shift"}
pair-27: pair r2c6-r3c6 relation {"op":"shift"}
pair-28: pair r4c5-r5c5 relation {"op":"shift"}
pair-29: pair r3c2-r3c3 relation {"op":"shift"}
pair-30: pair r2c2-r3c2 relation {"op":"shift"}
pair-31: pair r1c5-r2c5 relation {"op":"shift"}
pair-32: pair r3c5-r3c6 relation {"op":"shift"}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter dots: Digts on different sides of a shifter dot must always share either parity (even/odd) OR polarity (high/low) - never neither, never both. Shifter dots can never have 5 on it.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.
