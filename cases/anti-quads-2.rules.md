---
format: open-rules
title: Anti-Quads 2
setter: The Bard
source: https://sudokupad.app/dfqz993faz
case: https://sudoku-sleuth.com/cases/anti-quads-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple-1: quadruple r2c1-r2c2-r3c1-r3c2 digits [1,2,3,4]
quadruple-2: quadruple r7c3-r7c4-r8c3-r8c4 digits [1,2,3,4]
quadruple-3: quadruple r5c7-r5c8-r6c7-r6c8 digits [1,2,3,4]
quadruple-4: quadruple r8c8-r8c9-r9c8-r9c9 digits [6,7]
quadruple-5: quadruple r1c1-r1c2-r2c1-r2c2 digits [8,9]
quadruple-6: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,4,8]
quadruple-7: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,4,6]
quadruple-8: quadruple r4c6-r4c7-r5c6-r5c7 digits [8]
quadruple-9: quadruple r1c4-r1c5-r2c4-r2c5 digits [3]
quadruple-10: quadruple r3c2-r3c3-r4c2-r4c3 digits [1,3]
quadruple-11: quadruple r4c5-r4c6-r5c5-r5c6 digits [4,9]
allowed-digits-1: allowed-digits r4c1-r4c2-r5c1-r5c2 digits [5,6,7,8,9]
allowed-digits-2: allowed-digits r7c6-r7c7-r8c6-r8c7 digits [5,6,7,8,9]
allowed-digits-3: allowed-digits r2c7-r2c8-r3c7-r3c8 digits [5,6,7,8,9]
allowed-digits-4: allowed-digits r2c4-r2c5-r3c4-r3c5 digits [5,6,7,8,9]
allowed-digits-5: allowed-digits r7c5-r7c6-r8c5-r8c6 digits [2,3,4,7,8,9]
allowed-digits-6: allowed-digits r5c8-r5c9-r6c8-r6c9 digits [1,2,3,4,5,9]
allowed-digits-7: allowed-digits r8c3-r8c4-r9c3-r9c4 digits [1,2,3,4,5,8,9]
allowed-digits-8: allowed-digits r8c1-r8c2-r9c1-r9c2 digits [1,3,4,5,6,7,8,9]
allowed-digits-9: allowed-digits r7c1-r7c2-r8c1-r8c2 digits [1,2,4,5,6,7,8,9]
allowed-digits-10: allowed-digits r6c2-r6c3-r7c2-r7c3 digits [1,2,3,4,5,7,8,9]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Quadruples: digits in the white circle must appear in one of the four surrounding cells.

Anti-Quadruples: Digits in the small PINK circle cannot appear in one of the four surrounding cells.
