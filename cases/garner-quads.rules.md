---
format: open-rules
title: Garner Quads
setter: Blobz
source: https://sudokupad.app/c9bktqlqdm
case: https://sudoku-sleuth.com/cases/garner-quads
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4a32d694fb9e1afa645d54da3b6c3336
---

```rules
sudoku 9x9
renban r4c3-r4c2-r5c2-r6c2-r6c3-r6c4-r7c4-r7c3-r7c2
region-sum r4c7-r4c6-r5c6-r6c6-r7c6-r7c7-r7c8-r6c8-r6c7 segments [["r4c7"],["r4c6","r5c6","r6c6"],["r7c6"],["r7c7","r7c8"],["r6c8","r6c7"]]
quadruple-1: quadruple r1c4-r1c5-r2c4-r2c5 digits [1,7]
quadruple-2: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,7]
quadruple-3: quadruple r1c7-r1c8-r2c7-r2c8 digits [4,9]
quadruple-4: quadruple r8c7-r8c8-r9c7-r9c8 digits [4,9]
quadruple-5: quadruple r1c2-r1c3-r2c2-r2c3 digits [2,9]
quadruple-6: quadruple r8c2-r8c3-r9c2-r9c3 digits [2,9]
quadruple-7: quadruple r1c5-r1c6-r2c5-r2c6 digits [3,6]
quadruple-8: quadruple r8c4-r8c5-r9c4-r9c5 digits [5,8]
quadruple-9: quadruple r2c8-r2c9-r3c8-r3c9 digits [5,7,8]
quadruple-10: quadruple r7c1-r7c2-r8c1-r8c2 digits [3,8,9]
quadruple-11: quadruple r5c8-r5c9-r6c8-r6c9 digits [7]
quadruple-12: quadruple r5c5-r5c6-r6c5-r6c6 digits [2,8]
quadruple-13: quadruple r4c1-r4c2-r5c1-r5c2 digits [1,2]
quadruple-14: quadruple r7c8-r7c9-r8c8-r8c9 digits [4,5,8]
quadruple-15: quadruple r2c1-r2c2-r3c1-r3c2 digits [3,7,8]
quadruple-16: quadruple r3c3-r3c4-r4c3-r4c4 digits [1]
```

Normal sudoku rules apply.

Digits in circles must appear at least once in the surrounding 2x2 area.

Digits along a pink line form a set of non-repeating, consecutive digits.

Digits along a blue line have an equal sum N within each box it passes through. Where the line passes through the same box more than once, each individual segment sums to N separately.
