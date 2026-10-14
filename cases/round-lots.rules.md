---
format: open-rules
title: Round Lots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qcafvtgate
case: https://sudoku-sleuth.com/cases/round-lots
library: https://rules.sudoku-sleuth.com/
status: read
exported: c51dae1517fdd05823b39bae764a3e41
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 white
kropki-2: kropki r1c1-r2c1 white
kropki-3: kropki r1c8-r1c9 white
kropki-4: kropki r1c8-r2c8 white
kropki-5: kropki r8c1-r9c1 white
kropki-6: kropki r9c1-r9c2 white
kropki-7: kropki r9c8-r9c9 white
kropki-8: kropki r8c8-r9c8 white
kropki-9: kropki r1c4-r1c5 white
kropki-10: kropki r1c5-r2c5 white
kropki-11: kropki r9c4-r9c5 white
kropki-12: kropki r3c5-r3c6 black
kropki-13: kropki r7c5-r8c5 black
kropki-14: kropki r6c3-r6c4 black
kropki-15: kropki r3c9-r4c9 black
kropki-16: kropki r7c9-r8c9 black
kropki-17: kropki r5c1-r5c2 black
kropki-18: kropki r5c7-r5c8 black
kropki-19: kropki r5c6-r6c6 black
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2,3]
quadruple-3: quadruple r4c1-r4c2-r5c1-r5c2 digits [4,5,6]
quadruple-4: quadruple r4c8-r4c9-r5c8-r5c9 digits [4,5,6]
quadruple-5: quadruple r8c1-r8c2-r9c1-r9c2 digits [7,8,9]
quadruple-6: quadruple r8c8-r8c9-r9c8-r9c9 digits [7,8,9]
quadruple-7: quadruple r1c4-r1c5-r2c4-r2c5 digits [4,5,6]
quadruple-8: quadruple r8c4-r8c5-r9c4-r9c5 digits [1,2,3]
quadruple-9: quadruple r4c4-r4c5-r5c4-r5c5 digits [7,8,9]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
