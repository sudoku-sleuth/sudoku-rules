---
format: open-rules
title: Anti-Quads 8
setter: The Bard
source: https://sudokupad.app/ucv2hjnuro
case: https://sudoku-sleuth.com/cases/anti-quads-8
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple-1: quadruple r5c8-r5c9-r6c8-r6c9 digits [2,4,8]
quadruple-2: quadruple r5c7-r5c8-r6c7-r6c8 digits [3,6,7]
quadruple-3: quadruple r5c5-r5c6-r6c5-r6c6 digits [2,5,7,8]
quadruple-4: quadruple r7c5-r7c6-r8c5-r8c6 digits [4,7,9]
quadruple-5: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,6,8]
quadruple-6: quadruple r4c1-r4c2-r5c1-r5c2 digits [6,9]
allowed-digits-1: allowed-digits r3c3-r3c4-r4c3-r4c4 digits [1,2,3,4,5,6,9]
allowed-digits-2: allowed-digits r1c2-r1c3-r2c2-r2c3 digits [2,3,4,7,8]
allowed-digits-3: allowed-digits r2c1-r2c2-r3c1-r3c2 digits [1,2,5,7,9]
allowed-digits-4: allowed-digits r5c2-r5c3-r6c2-r6c3 digits [2,3,4,5,6,7,8]
allowed-digits-5: allowed-digits r7c1-r7c2-r8c1-r8c2 digits [1,2,3,7,8,9]
allowed-digits-6: allowed-digits r8c3-r8c4-r9c3-r9c4 digits [1,2,4,5,6,8]
allowed-digits-7: allowed-digits r3c6-r3c7-r4c6-r4c7 digits [1,2,4,7,8,9]
allowed-digits-8: allowed-digits r1c8-r1c9-r2c8-r2c9 digits [1,3,4,6,7,8]
allowed-digits-9: allowed-digits r8c7-r8c8-r9c7-r9c8 digits [1,4,5,6,7,8,9]
allowed-digits-10: allowed-digits r4c4-r4c5-r5c4-r5c5 digits [1,3,4,5,6,7,8,9]
allowed-digits-11: allowed-digits r7c3-r7c4-r8c3-r8c4 digits [1,2,3,4,5,7,8,9]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Quadruples: Digits in the WHITE circle must appear in one of the four surrounding cells.
Anti-Quadruples: Digits in the RED circle cannot appear in one of the four surrounding cells.
