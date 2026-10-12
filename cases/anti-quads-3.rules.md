---
format: open-rules
title: Anti-Quads 3
setter: The Bard
source: https://sudokupad.app/ryyoca0x1z
case: https://sudoku-sleuth.com/cases/anti-quads-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
quadruple-1: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,4]
quadruple-2: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,4]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [6,8]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [6,8]
quadruple-5: quadruple r6c1-r6c2-r7c1-r7c2 digits [3,3,8]
quadruple-6: quadruple r4c6-r4c7-r5c6-r5c7 digits [1,1]
quadruple-7: quadruple r3c3-r3c4-r4c3-r4c4 digits [3,3]
quadruple-8: quadruple r6c8-r6c9-r7c8-r7c9 digits [4,6]
allowed-digits-1: allowed-digits r4c7-r4c8-r5c7-r5c8 digits [1,3,4,5,6,7,9]
allowed-digits-2: allowed-digits r4c2-r4c3-r5c2-r5c3 digits [1,2,3,5,7,8,9]
allowed-digits-3: allowed-digits r7c3-r7c4-r8c3-r8c4 digits [2,3,4,5,6,7,8,9]
allowed-digits-4: allowed-digits r8c3-r8c4-r9c3-r9c4 digits [2,3,4,5,6,7,8,9]
allowed-digits-5: allowed-digits r8c6-r8c7-r9c6-r9c7 digits [1,2,4,5,6,7,8,9]
allowed-digits-6: allowed-digits r7c6-r7c7-r8c6-r8c7 digits [1,2,4,5,6,7,8,9]
allowed-digits-7: allowed-digits r4c4-r4c5-r5c4-r5c5 digits [1,2,3,4,5,6,7,8]
allowed-digits-8: allowed-digits r8c5-r8c6-r9c5-r9c6 digits [1,2,3,4,6,7,8,9]
allowed-digits-9: allowed-digits r7c8-r7c9-r8c8-r8c9 digits [2,3,4,5,6,7,8,9]
allowed-digits-10: allowed-digits r1c5-r1c6-r2c5-r2c6 digits [1,2,3,4,5,7,8,9]
```

```drawing
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"KM","textColor":"#000000","fontSize":15}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Quadruples: Digits in a Quadruple white circle must be placed at least once in the four cells touching that circle. Digits that appear twice in white circles must be placed twice in the cells touching that circle.
Anti-Quadruples: Digits in the PINK circle cannot appear in one of the four surrounding cells.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
