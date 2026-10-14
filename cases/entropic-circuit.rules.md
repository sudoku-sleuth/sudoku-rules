---
format: open-rules
title: Entropic Circuit
setter: sujoyku
source: https://sudokupad.app/xptwp3czsq
case: https://sudoku-sleuth.com/cases/entropic-circuit
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
exported: e16dc40cdb30d4d9f5b19a575e3b6189
---

```rules
sudoku 9x9
entropic-1: entropic r4c9-r3c9-r2c9-r1c8-r1c7-r1c6-r1c5-r1c4-r2c3-r3c2-r4c1-r5c1-r6c1-r7c1-r8c1-r9c2-r9c3-r9c4-r9c5-r9c6-r8c7-r7c8-r6c9
entropic-2: entropic r2c4-r3c3-r4c3-r5c3-r6c4-r7c5-r8c6-r7c7-r6c8-r5c7-r5c6-r4c6-r3c6-r2c6-r2c5 loop true
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,8,9]
quadruple-2: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,3,4,5]
quadruple-3: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,4,6,8]
quadruple-4: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,3,5,7]
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Entropic lines:  Every set of three adjacent digits on an orange line must include a low digit (1, 2, 3), a medium digit (4, 5, 6), and a high digit (7, 8, 9).

- Quadruple: A digit in a circle must appear in one of the four surrounding cells.
