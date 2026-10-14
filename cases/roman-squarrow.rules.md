---
format: open-rules
title: Roman Squarrow
setter: Tingo
source: https://sudokupad.app/n1knh35nzd
case: https://sudoku-sleuth.com/cases/roman-squarrow
library: https://rules.sudoku-sleuth.com/
status: read
exported: 966192c4021959b147476f85c465e8ea
---

```rules
sudoku 9x9
anti-knight
anti-king
kropki-1: kropki r8c5-r8c6 white
kropki-2: kropki r8c4-r8c5 white
kropki-3: kropki r2c3-r2c4 black
kropki-4: kropki r3c5-r3c6 black
arrow-1: arrow r1c5-r2c6 bulb ["r2c4"]
arrow-2: arrow r5c1-r4c2 bulb ["r6c2"]
arrow-3: arrow r9c5-r8c4 bulb ["r8c6"]
arrow-4: arrow r5c9-r6c8 bulb ["r4c8"]
pair-1: pair r8c5-r9c5 sum 10
pair-2: pair r1c5-r2c5 sum 10
pair-3: pair r5c1-r5c2 sum 5
pair-4: pair r5c8-r5c9 sum 5
```

Normal Sudoku Rules Apply
Cells that are a knight's move (in chess) apart cannot contain the same digit.
Cells that are a king's move (in chess) apart cannot contain the same digit.
Digits along an arrow sum to the value of the digit in the arrow's circle
Cells joined by "V" sum to 5. Cells joined by "X" sum to 10. Not all Xs and Vs are given.
White dots join cells that are consecutive in value. Black dots join cells of 2:1 ratio values. Not all dots are given.
