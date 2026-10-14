---
format: open-rules
title: Quattydods
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hpscxrlzlx
case: https://sudoku-sleuth.com/cases/quattydods
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7bacaf8f0763b687f4a3c7df0e2f0d19
---

```rules
sudoku 9x9
kropki-1: kropki r3c8-r4c8 black
kropki-2: kropki r6c2-r7c2 black
kropki-3: kropki r3c5-r3c6 black
kropki-4: kropki r3c4-r3c5 black
kropki-5: kropki r5c1-r6c1 black
kropki-6: kropki r1c6-r2c6 black
kropki-7: kropki r1c2-r1c3 black
kropki-8: kropki r2c1-r3c1 black
kropki-9: kropki r6c7-r6c8 black
kropki-10: kropki r4c2-r4c3 black
kropki-11: kropki r5c4-r5c5 black
kropki-12: kropki r6c4-r7c4 black
kropki-13: kropki r9c7-r9c8 black
kropki-14: kropki r8c4-r9c4 black
kropki-15: kropki r8c1-r9c1 black
kropki-16: kropki r7c5-r7c6 black
kropki-17: kropki r7c9-r8c9 black
kropki-18: kropki r1c9-r2c9 black
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [5,7]
quadruple-2: quadruple r6c6-r6c7-r7c6-r7c7 digits [5,7]
quadruple-3: quadruple r7c1-r7c2-r8c1-r8c2 digits [5,7]
quadruple-4: quadruple r2c8-r2c9-r3c8-r3c9 digits [5,7]
quadruple-5: quadruple r8c8-r8c9-r9c8-r9c9 digits [3,5]
quadruple-6: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,7]
quadruple-7: quadruple r5c4-r5c5-r6c4-r6c5 digits [2,4]
quadruple-8: quadruple r4c5-r4c6-r5c5-r5c6 digits [6,8]
quadruple-9: quadruple r8c2-r8c3-r9c2-r9c3 digits [4,6]
quadruple-10: quadruple r1c7-r1c8-r2c7-r2c8 digits [3,4]
```

**Standard Sudoku, Quadruples, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Ratio Pairs: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
