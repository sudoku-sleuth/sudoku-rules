---
format: open-rules
title: "Oxbridge: Quads or Courts?"
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fnvew86pr4
case: https://sudoku-sleuth.com/cases/oxbridge-quads-or-courts
library: https://rules.sudoku-sleuth.com/
status: read
exported: 35aaa058b5878e0455426342d1b90476
---

```rules
sudoku 9x9
anti-knight
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,2,3,4]
quadruple-2: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,3,4,5]
quadruple-3: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,3,4,5]
quadruple-4: quadruple r6c3-r6c4-r7c3-r7c4 digits [1,6,7,8]
quadruple-5: quadruple r7c1-r7c2-r8c1-r8c2 digits [2,3,6,9]
quadruple-6: quadruple r2c8-r2c9-r3c8-r3c9 digits [1,5,6,9]
quadruple-7: quadruple r8c7-r8c8-r9c7-r9c8 digits [3,6,7,9]
quadruple-8: quadruple r1c2-r1c3-r2c2-r2c3 digits [1,3,5,9]
quadruple-9: quadruple r4c1-r4c2-r5c1-r5c2 digits [1,2,5,7]
quadruple-10: quadruple r5c8-r5c9-r6c8-r6c9 digits [3,5,7,8]
```

- Normal sudoku rules apply.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
