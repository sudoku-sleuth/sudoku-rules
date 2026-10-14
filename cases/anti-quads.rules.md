---
format: open-rules
title: Anti-Quads
setter: The Bard
source: https://sudokupad.app/r68lsifivy
case: https://sudoku-sleuth.com/cases/anti-quads
library: https://rules.sudoku-sleuth.com/
status: read
exported: fe915717fd280751ff1904b846015d9a
---

```rules
sudoku 9x9
quadruple-1: quadruple r7c1-r7c2-r8c1-r8c2 digits [2,4,6,8]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,3,5,9]
quadruple-3: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,7]
quadruple-4: quadruple r1c4-r1c5-r2c4-r2c5 digits [5,6]
quadruple-5: quadruple r5c3-r5c4-r6c3-r6c4 digits [2,2,4,7]
quadruple-6: quadruple r5c6-r5c7-r6c6-r6c7 digits [5,7,9,9]
quadruple-7: quadruple r3c6-r3c7-r4c6-r4c7 digits [5,8]
quadruple-8: quadruple r8c5-r8c6-r9c5-r9c6 digits [4,5,6]
quadruple-9: quadruple r8c7-r8c8-r9c7-r9c8 digits [1,2,3]
allowed-digits-1: allowed-digits r7c4-r7c5-r8c4-r8c5 digits [1,3,5,7,9]
allowed-digits-2: allowed-digits r7c8-r7c9-r8c8-r8c9 digits [1,3,5,7,9]
allowed-digits-3: allowed-digits r2c5-r2c6-r3c5-r3c6 digits [2,4,6,7,8]
allowed-digits-4: allowed-digits r2c2-r2c3-r3c2-r3c3 digits [2,4,6,7,8]
allowed-digits-5: allowed-digits r8c2-r8c3-r9c2-r9c3 digits [2,4,5,6,7,8,9]
allowed-digits-6: allowed-digits r1c8-r1c9-r2c8-r2c9 digits [1,3,4,5,6,8,9]
allowed-digits-7: allowed-digits r3c8-r3c9-r4c8-r4c9 digits [2,4,5,6,7,8,9]
allowed-digits-8: allowed-digits r5c1-r5c2-r6c1-r6c2 digits [1,2,3,4,7,8,9]
allowed-digits-9: allowed-digits r6c2-r6c3-r7c2-r7c3 digits [2,3,4,5,6,7,8,9]
allowed-digits-10: allowed-digits r4c5-r4c6-r5c5-r5c6 digits [1,2,3,4,5,6,9]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Quadruples: digits in the small white circle must appear in one of the four surrounding cells.

Anti-Quadruples: Digits in the small PINK circle cannot appear in one of the four surrounding cells.
