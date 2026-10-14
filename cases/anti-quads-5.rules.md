---
format: open-rules
title: Anti-Quads 5
setter: The Bard
source: https://sudokupad.app/cvbidfrb5l
case: https://sudoku-sleuth.com/cases/anti-quads-5
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3f679108415ff4691dfd830bbf49ea58
---

```rules
sudoku 9x9
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [8,9]
quadruple-2: quadruple r4c8-r4c9-r5c8-r5c9 digits [1,2,3,4]
quadruple-3: quadruple r4c2-r4c3-r5c2-r5c3 digits [2,8]
quadruple-4: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,2]
quadruple-5: quadruple r7c7-r7c8-r8c7-r8c8 digits [3,4]
quadruple-6: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,3]
quadruple-7: quadruple r8c7-r8c8-r9c7-r9c8 digits [8]
quadruple-8: quadruple r7c1-r7c2-r8c1-r8c2 digits [7]
allowed-digits-1: allowed-digits r8c8-r8c9-r9c8-r9c9 digits [5,6,7,8,9]
allowed-digits-2: allowed-digits r6c6-r6c7-r7c6-r7c7 digits [1,2,3,4,8,9]
allowed-digits-3: allowed-digits r3c6-r3c7-r4c6-r4c7 digits [1,2,3,4,5,7]
allowed-digits-4: allowed-digits r1c8-r1c9-r2c8-r2c9 digits [5,6,7,8,9]
allowed-digits-5: allowed-digits r3c3-r3c4-r4c3-r4c4 digits [1,2,3,4,8,9]
allowed-digits-6: allowed-digits r1c1-r1c2-r2c1-r2c2 digits [5,6,7,8,9]
allowed-digits-7: allowed-digits r6c3-r6c4-r7c3-r7c4 digits [1,2,3,4,5,6]
allowed-digits-8: allowed-digits r8c1-r8c2-r9c1-r9c2 digits [5,6,7,8,9]
allowed-digits-9: allowed-digits r5c5-r5c6-r6c5-r6c6 digits [2,3,5,6,7,9]
allowed-digits-10: allowed-digits r1c4-r1c5-r2c4-r2c5 digits [1,3,4,5,6,7,8,9]
allowed-digits-11: allowed-digits r7c5-r7c6-r8c5-r8c6 digits [1,2,3,5,7,8,9]
allowed-digits-12: allowed-digits r1c5-r1c6-r2c5-r2c6 digits [1,2,3,4,5,6,7,9]
allowed-digits-13: allowed-digits r2c8-r2c9-r3c8-r3c9 digits [1,2,3,4,6,7,8,9]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle. 
Anti-Quadruples: Digits in the PINK circle cannot appear in one of the four surrounding cells.
