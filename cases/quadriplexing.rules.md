---
format: open-rules
title: Quadriplexing
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qd8sics5tx
case: https://sudoku-sleuth.com/cases/quadriplexing
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [4,5,6]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [4,5,6]
quadruple-3: quadruple r7c7-r7c8-r8c7-r8c8 digits [4,5,6]
quadruple-4: quadruple r7c2-r7c3-r8c2-r8c3 digits [6,7,8]
quadruple-5: quadruple r6c3-r6c4-r7c3-r7c4 digits [1,5]
quadruple-6: quadruple r6c6-r6c7-r7c6-r7c7 digits [2,4]
quadruple-7: quadruple r3c6-r3c7-r4c6-r4c7 digits [7,9]
quadruple-8: quadruple r3c3-r3c4-r4c3-r4c4 digits [2,8]
quadruple-9: quadruple r4c4-r4c5-r5c4-r5c5 digits [2]
quadruple-10: quadruple r5c5-r5c6-r6c5-r6c6 digits [5]
quadruple-11: quadruple r5c4-r5c5-r6c4-r6c5 digits [6]
quadruple-12: quadruple r4c5-r4c6-r5c5-r5c6 digits [3]
quadruple-13: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,4,5,9]
quadruple-14: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3,8]
quadruple-15: quadruple r1c8-r1c9-r2c8-r2c9 digits [4,7,8,9]
quadruple-16: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,2,3,7]
quadruple-17: quadruple r4c2-r4c3-r5c2-r5c3 digits [1,4]
quadruple-18: quadruple r5c8-r5c9-r6c8-r6c9 digits [2,6]
```

- Normal sudoku rules apply.
- Antiknight: Digits a chess knight's move apart must be different.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
