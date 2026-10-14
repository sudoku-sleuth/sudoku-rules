---
format: open-rules
title: Quadriplex
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hl1h0btfae
case: https://sudoku-sleuth.com/cases/quadriplex
library: https://rules.sudoku-sleuth.com/
status: read
exported: d10a1a532e8ce1c781f0cbc16a95fb31
---

```rules
sudoku 9x9
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,1,2,2]
quadruple-2: quadruple r3c6-r3c7-r4c6-r4c7 digits [3,3,4,4]
quadruple-3: quadruple r6c6-r6c7-r7c6-r7c7 digits [5,5,6,6]
quadruple-4: quadruple r6c3-r6c4-r7c3-r7c4 digits [7,7,8,8]
quadruple-5: quadruple r1c1-r1c2-r2c1-r2c2 digits [3,4,5]
quadruple-6: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,6]
quadruple-7: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,6,3]
quadruple-8: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,4]
quadruple-9: quadruple r4c2-r4c3-r5c2-r5c3 digits [5,9]
quadruple-10: quadruple r2c5-r2c6-r3c5-r3c6 digits [2,7]
quadruple-11: quadruple r5c7-r5c8-r6c7-r6c8 digits [1,5]
quadruple-12: quadruple r7c4-r7c5-r8c4-r8c5 digits [1,8]
quadruple-13: quadruple r8c6-r8c7-r9c6-r9c7 digits [8]
quadruple-14: quadruple r1c3-r1c4-r2c3-r2c4 digits [3]
quadruple-15: quadruple r7c7-r7c8-r8c7-r8c8 digits [7,9]
```

- Normal sudoku rules apply.
- Quadruples: Each digit appearing in a Quadruples circle must appear at least once in the four cells touching that circle.
