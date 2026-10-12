---
format: open-rules
title: Quadkropter
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xiy4pjf9x6
case: https://sudoku-sleuth.com/cases/quadkropter
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r2c3 colour "white"
kropki-2: kropki r1c9-r2c9 colour "white"
kropki-3: kropki r6c7-r6c8 colour "white"
kropki-4: kropki r6c1-r7c1 colour "white"
kropki-5: kropki r5c2-r6c2 colour "white"
kropki-6: kropki r4c6-r4c7 colour "white"
kropki-7: kropki r6c2-r6c3 colour "white"
kropki-8: kropki r5c5-r5c6 colour "white"
kropki-9: kropki r8c2-r9c2 colour "white"
kropki-10: kropki r1c2-r1c3 colour "black"
kropki-11: kropki r2c9-r3c9 colour "black"
kropki-12: kropki r9c7-r9c8 colour "black"
kropki-13: kropki r7c1-r8c1 colour "black"
kropki-14: kropki r7c3-r7c4 colour "black"
kropki-15: kropki r6c7-r7c7 colour "black"
kropki-16: kropki r3c6-r3c7 colour "black"
kropki-17: kropki r3c4-r4c4 colour "black"
kropki-18: kropki r6c3-r6c4 colour "black"
kropki-19: kropki r5c6-r5c7 colour "black"
kropki-20: kropki r6c6-r7c6 colour "black"
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,6,8]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2,3,4]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,4,6,8]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2,3,8]
```

**Standard Sudoku, Quadruples, Kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
