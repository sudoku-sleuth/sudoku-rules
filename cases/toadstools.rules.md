---
format: open-rules
title: Toadstools
setter: Jobo
source: https://sudokupad.app/9p0pcoszjo
case: https://sudoku-sleuth.com/cases/toadstools
library: https://rules.sudoku-sleuth.com/
status: read
exported: 77d370c28aec3ee3d8c13332781bdc91
---

```rules
sudoku 9x9
between-1: between r4c3-r3c3-r3c2-r3c1-r2c1-r1c2-r1c3-r1c4-r1c5-r2c6-r3c6-r3c5-r3c4-r4c4 ends ["r5c3","r5c4"]
between-2: between r8c6-r7c6-r7c5-r7c4-r6c4-r5c5-r5c6-r5c7-r5c8-r6c9-r7c9-r7c8-r7c7-r8c7 ends ["r9c6","r9c7"]
parity-1: parity r3c3-r3c2-r3c1-r2c1-r1c2-r1c3-r1c4-r1c5-r2c6-r3c6-r3c5-r3c4
parity-2: parity r7c6-r7c5-r7c4-r6c4-r5c5-r5c6-r5c7-r5c8-r6c9-r7c9-r7c8-r7c7
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [1,3]
quadruple-2: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,2]
quadruple-3: quadruple r1c4-r1c5-r2c4-r2c5 digits [4,8]
quadruple-4: quadruple r2c5-r2c6-r3c5-r3c6 digits [6,7]
quadruple-5: quadruple r2c3-r2c4-r3c3-r3c4 digits [3,8]
quadruple-6: quadruple r5c5-r5c6-r6c5-r6c6 digits [2,5]
quadruple-7: quadruple r2c1-r2c2-r3c1-r3c2 digits [4,5]
quadruple-8: quadruple r6c8-r6c9-r7c8-r7c9 digits [7,8]
quadruple-9: quadruple r6c4-r6c5-r7c4-r7c5 digits [4,7]
quadruple-10: quadruple r5c7-r5c8-r6c7-r6c8 digits [3,4]
```

Normal sudoku rules apply.

Adjacent digits along a red line must alternate in parity (odd/even).

Digits on gray between lines must be between the digits in the attached circles (between lines continue uninterrupted underneath red lines).

Digits in a quadruple clue must appear at least once in the four surrounding cells.
