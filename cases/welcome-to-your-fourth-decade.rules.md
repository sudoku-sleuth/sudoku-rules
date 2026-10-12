---
format: open-rules
title: Welcome to Your Fourth Decade!
setter: Timotab
source: https://sudokupad.app/5zm21d3n6h
case: https://sudoku-sleuth.com/cases/welcome-to-your-fourth-decade
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2 total 3 connected true
cage-2: cage r3c3-r4c3 total 14 connected true
cage-3: cage r3c9-r4c9 total 14 connected true
cage-4: cage r5c3-r5c4 total 3 connected true
cage-5: cage r5c5-r5c6-r5c7 total 14 connected true
cage-6: cage r9c5-r9c6 total 3 connected true
cage-7: cage r8c2-r8c3-r8c4 total 14 connected true
cage-8: cage r4c8-r5c8 total 14 connected true
cage-9: cage r6c6-r7c6 total 14 connected true
cage-10: cage r9c3-r9c4 total 14 connected true
cage-11: cage r8c7-r8c8 total 14 connected true
kropki-1: kropki r3c5-r3c6 colour "white"
kropki-2: kropki r8c9-r9c9 colour "white"
kropki-3: kropki r1c3-r1c4 colour "white"
kropki-4: kropki r4c6-r4c7 colour "black"
quadruple-1: quadruple r1c7-r1c8-r2c7-r2c8 digits [1,3,4]
quadruple-2: quadruple r1c2-r1c3-r2c2-r2c3 digits [1,3,4]
quadruple-3: quadruple r5c2-r5c3-r6c2-r6c3 digits [1,3,4]
quadruple-4: quadruple r5c7-r5c8-r6c7-r6c8 digits [1,3,4]
parity-cells r3c6-r9c9 parity "even"
```

• Normal Sudoku rules apply. Place the digits 1-9 in every row, column, and box, without repetition.
• Digits in a circle must appear at least one in the four surrounding cells.
• Digits in cages sum to the value in the top left corner of the cage.
• Digits in cells with a shaded square must be even.
• Where digits are separated by a white dot, they are consecutive. Where digits are separated by a black dot, one is double the other. Not all dots are necessarily given.
