---
format: open-rules
title: A Slow Walk Around the Quad
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/q5spa9ydxu
case: https://sudoku-sleuth.com/cases/a-slow-walk-around-the-quad
library: https://rules.sudoku-sleuth.com/
status: read
exported: d348bd21424dccb0f50d64ca00e7a311
---

```rules
sudoku 9x9
slow-thermo-1: slow-thermo r3c3-r4c4-r5c3-r6c4-r7c3
slow-thermo-2: slow-thermo r7c7-r6c6-r5c7-r4c6-r3c7
slow-thermo-3: slow-thermo r9c3-r8c4-r7c4-r6c5
slow-thermo-4: slow-thermo r1c7-r2c6-r3c6-r4c5
slow-thermo-5: slow-thermo r1c1-r2c1-r2c2-r2c3-r2c4-r1c4
slow-thermo-6: slow-thermo r9c9-r8c9-r8c8-r8c7-r8c6-r9c6
quadruple-1: quadruple r6c3-r6c4-r7c3-r7c4 digits [6,6]
quadruple-2: quadruple r3c6-r3c7-r4c6-r4c7 digits [6,6]
quadruple-3: quadruple r3c5-r3c6-r4c5-r4c6 digits [4,4]
quadruple-4: quadruple r6c4-r6c5-r7c4-r7c5 digits [3,3]
quadruple-5: quadruple r1c3-r1c4-r2c3-r2c4 digits [7,7]
quadruple-6: quadruple r8c6-r8c7-r9c6-r9c7 digits [8,8]
quadruple-7: quadruple r6c1-r6c2-r7c1-r7c2 digits [1,2,2,7]
quadruple-8: quadruple r3c8-r3c9-r4c8-r4c9 digits [7,7]
quadruple-9: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,1]
quadruple-10: quadruple r6c7-r6c8-r7c7-r7c8 digits [4,4]
quadruple-11: quadruple r3c1-r3c2-r4c1-r4c2 digits [9,9]
```

- Normal sudoku rules apply.
- Slow thermos: Digits along slow thermos may not decrease from bulb to tip.
- Quads: Digits in quadruple circles must appear at least once in the four surrounding circles for each time they appear in the quadruple.
