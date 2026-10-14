---
format: open-rules
title: Anti-Quads 7
setter: The Bard
source: https://sudokupad.app/y5sm1xrokw
case: https://sudoku-sleuth.com/cases/anti-quads-7
library: https://rules.sudoku-sleuth.com/
status: read
exported: 11e63b1b98687bf79871d329e178f2c0
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":1}] except []
allowed-digits-1: allowed-digits r3c8-r3c9-r4c8-r4c9 digits [1,2,5,6,7,8,9]
allowed-digits-2: allowed-digits r6c8-r6c9-r7c8-r7c9 digits [1,2,5,6,7,8,9]
allowed-digits-3: allowed-digits r5c6-r5c7-r6c6-r6c7 digits [1,2,5,6,7,8,9]
allowed-digits-4: allowed-digits r5c3-r5c4-r6c3-r6c4 digits [1,2,5,6,7,8,9]
allowed-digits-5: allowed-digits r5c4-r5c5-r6c4-r6c5 digits [1,3,4,6,7,8,9]
allowed-digits-6: allowed-digits r8c6-r8c7-r9c6-r9c7 digits [1,2,3,6,7,8,9]
allowed-digits-7: allowed-digits r7c3-r7c4-r8c3-r8c4 digits [1,2,3,6,7,8,9]
allowed-digits-8: allowed-digits r4c8-r4c9-r5c8-r5c9 digits [1,3,4,6,7,8,9]
allowed-digits-9: allowed-digits r1c5-r1c6-r2c5-r2c6 digits [1,4,5,6,7,8,9]
allowed-digits-10: allowed-digits r1c3-r1c4-r2c3-r2c4 digits [1,2,4,6,7,8,9]
allowed-digits-11: allowed-digits r3c4-r3c5-r4c4-r4c5 digits [1,3,4,7,8,9]
allowed-digits-12: allowed-digits r4c2-r4c3-r5c2-r5c3 digits [1,3,4,6,8]
allowed-digits-13: allowed-digits r1c1-r1c2-r2c1-r2c2 digits [1,2,3,4,5,6,8,9]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Non-Consecutive: Digits in orthogonally adjacent cells may not be consecutive.

Anti-Quadruples: Digits in the RED circle cannot appear in one of the four surrounding cells.
