---
format: open-rules
title: Quadromodular
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/z30s400ypk
case: https://sudoku-sleuth.com/cases/quadromodular
library: https://rules.sudoku-sleuth.com/
status: read
exported: f101c1faae1f2361469c3d56c102a17a
---

```rules
sudoku 9x9
modular-1: modular r7c5-r8c5-r9c6-r9c7-r9c8-r8c9-r7c9-r6c9-r5c8-r5c7
modular-2: modular r5c3-r5c2-r4c1-r3c1-r2c1-r1c2-r1c3-r1c4-r2c5-r3c5
modular-3: modular r7c4-r8c4-r9c3-r9c2-r8c1-r7c1-r6c2-r6c3
modular-4: modular r3c6-r2c6-r1c7-r1c8-r2c9-r3c9-r4c8-r4c7
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,5]
quadruple-2: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,5]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [5,8]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [5,8]
quadruple-5: quadruple r4c7-r4c8-r5c7-r5c8 digits [6,9]
quadruple-6: quadruple r3c6-r3c7-r4c6-r4c7 digits [1,2,3]
quadruple-7: quadruple r6c3-r6c4-r7c3-r7c4 digits [6,7,8]
quadruple-8: quadruple r3c3-r3c4-r4c3-r4c4 digits [5,5]
quadruple-9: quadruple r6c6-r6c7-r7c6-r7c7 digits [4,9]
quadruple-10: quadruple r5c2-r5c3-r6c2-r6c3 digits [6,9]
quadruple-11: quadruple r7c4-r7c5-r8c4-r8c5 digits [1,3,6]
quadruple-12: quadruple r2c5-r2c6-r3c5-r3c6 digits [3,6,7]
quadruple-13: quadruple r5c8-r5c9-r6c8-r6c9 digits [1,3]
quadruple-14: quadruple r4c1-r4c2-r5c1-r5c2 digits [2]
quadruple-15: quadruple r1c4-r1c5-r2c4-r2c5 digits [9]
quadruple-16: quadruple r8c5-r8c6-r9c5-r9c6 digits [4]
```

**Sudoku, Modular Lines, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line (usually teal in colour) has three different remainders when divided by 3.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
