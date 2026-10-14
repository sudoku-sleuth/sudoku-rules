---
format: open-rules
title: Quadtropia
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dfoz9kdjow
case: https://sudoku-sleuth.com/cases/quadtropia
library: https://rules.sudoku-sleuth.com/
status: read
exported: 230966647a62d4e22736bbf242aed304
---

```rules
sudoku 9x9
entropic-1: entropic r3c1-r2c2-r3c3-r2c4-r3c5-r2c6-r3c7-r2c8-r3c9
entropic-2: entropic r7c1-r8c2-r7c3-r8c4-r7c5-r8c6-r7c7-r8c8-r7c9
entropic-3: entropic r4c2-r5c1-r6c2-r5c3-r4c4-r5c5-r6c6-r5c7-r4c8-r5c9-r6c8
quadruple-1: quadruple r2c1-r2c2-r3c1-r3c2 digits [1,2,3,4]
quadruple-2: quadruple r2c2-r2c3-r3c2-r3c3 digits [3,4,6,7]
quadruple-3: quadruple r2c8-r2c9-r3c8-r3c9 digits [5,6,7,8]
quadruple-4: quadruple r7c8-r7c9-r8c8-r8c9 digits [1,2,3,4]
quadruple-5: quadruple r7c7-r7c8-r8c7-r8c8 digits [3,4,6,7]
quadruple-6: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,5,6,9]
quadruple-7: quadruple r7c1-r7c2-r8c1-r8c2 digits [5,7,8,9]
quadruple-8: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,3,5,8]
quadruple-9: quadruple r2c4-r2c5-r3c4-r3c5 digits [2,3,4,5]
quadruple-10: quadruple r2c5-r2c6-r3c5-r3c6 digits [3,4,8,9]
quadruple-11: quadruple r7c4-r7c5-r8c4-r8c5 digits [4,5,8,9]
quadruple-12: quadruple r7c5-r7c6-r8c5-r8c6 digits [2,5,6,8]
quadruple-13: quadruple r5c8-r5c9-r6c8-r6c9 digits [1,4,6,9]
quadruple-14: quadruple r4c2-r4c3-r5c2-r5c3 digits [1,5,6,9]
quadruple-15: quadruple r4c4-r4c5-r5c4-r5c5 digits [1,2,7,8]
quadruple-16: quadruple r5c5-r5c6-r6c5-r6c6 digits [4,5,7,9]
```

**Sudoku, Quads, Entropic Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
