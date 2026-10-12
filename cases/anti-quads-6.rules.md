---
format: open-rules
title: Anti-Quads 6
setter: The Bard
source: https://sudokupad.app/957yp7l53q
case: https://sudoku-sleuth.com/cases/anti-quads-6
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r4c4-r4c5 colour "white"
kropki-2: kropki r8c5-r8c6 colour "white"
kropki-3: kropki r8c3-r8c4 colour "black"
kropki-4: kropki r3c6-r3c7 colour "black"
quadruple-1: quadruple r1c8-r1c9-r2c8-r2c9 digits [3,5,6,8]
quadruple-2: quadruple r3c1-r3c2-r4c1-r4c2 digits [1,2]
quadruple-3: quadruple r5c6-r5c7-r6c6-r6c7 digits [1,1,2,2]
quadruple-4: quadruple r6c2-r6c3-r7c2-r7c3 digits [3,5,6,6]
allowed-digits-1: allowed-digits r8c8-r8c9-r9c8-r9c9 digits [1,2,4,7,9]
allowed-digits-2: allowed-digits r5c7-r5c8-r6c7-r6c8 digits [1,2,4,7,9]
allowed-digits-3: allowed-digits r2c4-r2c5-r3c4-r3c5 digits [1,2,4,7,9]
allowed-digits-4: allowed-digits r1c1-r1c2-r2c1-r2c2 digits [1,2,4,7,9]
allowed-digits-5: allowed-digits r4c2-r4c3-r5c2-r5c3 digits [1,2,4,7,9]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.

Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle. Digits that appear twice in circles must be placed twice in the cells touching that circle.

Anti-Quadruples: Digits in the PINK circle cannot appear in one of the four surrounding cells.

Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
