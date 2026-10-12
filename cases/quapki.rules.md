---
format: open-rules
title: Quapki
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zopzm5bt6y
case: https://sudoku-sleuth.com/cases/quapki
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r3c2 colour "black"
kropki-2: kropki r1c3-r1c4 colour "black"
kropki-3: kropki r1c6-r1c7 colour "black"
kropki-4: kropki r2c8-r3c8 colour "black"
kropki-5: kropki r2c5-r3c5 colour "black"
kropki-6: kropki r7c2-r8c2 colour "black"
kropki-7: kropki r7c8-r8c8 colour "black"
kropki-8: kropki r9c6-r9c7 colour "black"
kropki-9: kropki r9c3-r9c4 colour "black"
kropki-10: kropki r7c5-r8c5 colour "black"
kropki-11: kropki r5c6-r5c7 colour "black"
kropki-12: kropki r5c3-r5c4 colour "black"
kropki-13: kropki r1c2-r2c2 colour "black"
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [2,3,4,6]
quadruple-2: quadruple r1c7-r1c8-r2c7-r2c8 digits [1,2,3,4]
quadruple-3: quadruple r8c2-r8c3-r9c2-r9c3 digits [1,3,4,5]
quadruple-4: quadruple r8c7-r8c8-r9c7-r9c8 digits [2,3,5,8]
quadruple-5: quadruple r6c1-r6c2-r7c1-r7c2 digits [7]
quadruple-6: quadruple r6c8-r6c9-r7c8-r7c9 digits [9]
quadruple-7: quadruple r3c7-r3c8-r4c7-r4c8 digits [9]
quadruple-8: quadruple r3c2-r3c3-r4c2-r4c3 digits [5]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Kropki pairs: Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are given.
