---
format: open-rules
title: Quadding along the parity line
setter: Chip Sounder
source: https://sudokupad.app/squdx5k1a5
case: https://sudoku-sleuth.com/cases/quadding-along-the-parity-line
library: https://rules.sudoku-sleuth.com/
status: read
exported: 272a91e9c10719aaf38a67fe4ba9e1ba
---

```rules
sudoku 9x9
parity-1: parity r9c1-r9c2-r9c3-r8c4-r8c5-r8c6-r7c7-r7c8-r7c9-r6c9-r6c8-r6c7-r5c6-r5c5-r5c4-r4c3-r4c2-r4c1-r3c1-r3c2-r3c3-r3c4-r2c4-r2c5-r2c6-r2c7
parity-2: parity r2c1-r1c1-r2c2-r1c2-r2c3-r1c3
parity-3: parity r9c9-r8c9-r9c8-r8c8-r9c7-r8c7
parity-4: parity r3c8-r3c9
parity-5: parity r8c3-r7c2-r8c1
parity-6: parity r7c5-r6c5-r6c4
quadruple-1: quadruple r4c8-r4c9-r5c8-r5c9 digits [6]
quadruple-2: quadruple r3c4-r3c5-r4c4-r4c5 digits [8]
quadruple-3: quadruple r4c1-r4c2-r5c1-r5c2 digits [6,8]
quadruple-4: quadruple r4c5-r4c6-r5c5-r5c6 digits [5,7,9]
quadruple-5: quadruple r5c3-r5c4-r6c3-r6c4 digits [5,7,3]
quadruple-6: quadruple r7c5-r7c6-r8c5-r8c6 digits [4]
quadruple-7: quadruple r6c7-r6c8-r7c7-r7c8 digits [1,6]
quadruple-8: quadruple r2c8-r2c9-r3c8-r3c9 digits [3]
quadruple-9: quadruple r6c4-r6c5-r7c4-r7c5 digits [3,3]
quadruple-10: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,4,5]
quadruple-11: quadruple r3c6-r3c7-r4c6-r4c7 digits [5,5]
quadruple-12: quadruple r7c2-r7c3-r8c2-r8c3 digits [5,8,9]
quadruple-13: quadruple r7c1-r7c2-r8c1-r8c2 digits [4]
quadruple-14: quadruple r8c8-r8c9-r9c8-r9c9 digits [3,4]
quadruple-15: quadruple r1c8-r1c9-r2c8-r2c9 digits [9]
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Adjacent cells along a red parity line must  alternate between odd and even.
Every digit in a circle has to be assigned to one of the surrounding cells.
