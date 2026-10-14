---
format: open-rules
title: Quadular Lines
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fd1yp6f37v
case: https://sudoku-sleuth.com/cases/quadular-lines
library: https://rules.sudoku-sleuth.com/
status: read
exported: bfb87121b8fca6f9850904bcd5187a2d
---

```rules
sudoku 9x9
modular-1: modular r4c1-r4c2-r3c2-r3c1-r2c1-r2c2-r1c2-r1c3-r2c3-r2c4-r1c4
modular-2: modular r1c6-r2c6-r2c7-r1c7-r1c8-r2c8-r2c9-r3c9-r3c8-r4c8-r4c9
modular-3: modular r6c1-r6c2-r7c2-r7c1-r8c1-r8c2-r9c2-r9c3-r8c3-r8c4-r9c4
modular-4: modular r9c6-r8c6-r8c7-r9c7-r9c8-r8c8-r8c9-r7c9-r7c8-r6c8-r6c9
modular-5: modular r5c4-r4c4-r4c5
modular-6: modular r6c5-r6c6-r5c6
modular-7: modular r3c6-r3c7-r4c7
modular-8: modular r6c3-r7c3-r7c4
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,3,6]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,4,7]
quadruple-3: quadruple r7c7-r7c8-r8c7-r8c8 digits [3,8]
quadruple-4: quadruple r4c1-r4c2-r5c1-r5c2 digits [5,6]
quadruple-5: quadruple r5c8-r5c9-r6c8-r6c9 digits [1,3]
quadruple-6: quadruple r1c5-r1c6-r2c5-r2c6 digits [2,5]
quadruple-7: quadruple r8c4-r8c5-r9c4-r9c5 digits [4,7]
quadruple-8: quadruple r3c4-r3c5-r4c4-r4c5 digits [9]
quadruple-9: quadruple r6c5-r6c6-r7c5-r7c6 digits [3]
quadruple-10: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,4,5]
quadruple-11: quadruple r5c3-r5c4-r6c3-r6c4 digits [1]
quadruple-12: quadruple r4c6-r4c7-r5c6-r5c7 digits [8]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line (usually teal in colour) has three different remainders when divided by 3.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
