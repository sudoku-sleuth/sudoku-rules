---
format: open-rules
title: Wheel of Fortune
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/z5fymd5ijb
case: https://sudoku-sleuth.com/cases/wheel-of-fortune
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=6 r1c9=7 r3c3=1 r3c7=2 r7c3=4 r7c7=3 r9c1=9 r9c9=8
exported: 7e75b8d0567111f6b179946ec3e3339b
---

```rules
sudoku 9x9
anti-knight
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
quadruple-1: quadruple r2c7-r2c8-r3c7-r3c8 digits [1]
quadruple-2: quadruple r7c7-r7c8-r8c7-r8c8 digits [2]
quadruple-3: quadruple r7c2-r7c3-r8c2-r8c3 digits [3]
quadruple-4: quadruple r4c4-r4c5-r5c4-r5c5 digits [7]
quadruple-5: quadruple r4c5-r4c6-r5c5-r5c6 digits [8]
quadruple-6: quadruple r5c5-r5c6-r6c5-r6c6 digits [9]
quadruple-7: quadruple r5c4-r5c5-r6c4-r6c5 digits [6]
quadruple-8: quadruple r2c2-r2c3-r3c2-r3c3 digits [4]
quadruple-9: quadruple r5c1-r5c2-r6c1-r6c2 digits [4,9]
quadruple-10: quadruple r4c8-r4c9-r5c8-r5c9 digits [2,7]
quadruple-11: quadruple r1c4-r1c5-r2c4-r2c5 digits [1,6]
quadruple-12: quadruple r8c5-r8c6-r9c5-r9c6 digits [3,8]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Diagonal: Each marked diagonal contains a complete set of the digits 1-9.
- Quadruples: Digits in a Quadruple circle appear at least once in the four cells touching the circle.
