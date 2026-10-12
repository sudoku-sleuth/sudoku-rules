---
format: open-rules
title: Speckled
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/licuc2745s
case: https://sudoku-sleuth.com/cases/speckled
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r3c3-r3c4 total 15 connected true
cage-2: cage r2c6-r2c7-r3c6-r3c7 total 16 connected true
cage-3: cage r6c3-r6c4-r7c3-r7c4 total 16 connected true
cage-4: cage r6c6-r6c7-r7c6-r7c7 total 15 connected true
cage-5: cage r1c8-r1c9-r2c9 total 15 connected true
cage-6: cage r8c1-r9c1-r9c2 total 14 connected true
cage-7: cage r8c9-r9c8-r9c9 total 7 connected true
cage-8: cage r1c1-r1c2-r2c1 total 17 connected true
kropki-1: kropki r3c2-r3c3 colour "black"
kropki-2: kropki r3c4-r4c4 colour "black"
kropki-3: kropki r2c4-r2c5 colour "black"
kropki-4: kropki r1c3-r2c3 colour "black"
kropki-5: kropki r1c6-r2c6 colour "black"
kropki-6: kropki r2c7-r2c8 colour "black"
kropki-7: kropki r3c7-r4c7 colour "black"
kropki-8: kropki r5c6-r6c6 colour "black"
kropki-9: kropki r6c7-r6c8 colour "black"
kropki-10: kropki r7c2-r7c3 colour "black"
kropki-11: kropki r5c3-r6c3 colour "black"
kropki-12: kropki r7c4-r7c5 colour "black"
kropki-13: kropki r7c6-r8c6 colour "black"
kropki-14: kropki r8c1-r9c1 colour "black"
kropki-15: kropki r9c8-r9c9 colour "black"
kropki-16: kropki r7c9-r8c9 colour "black"
kropki-17: kropki r1c1-r1c2 colour "black"
```

**Sudoku, Cages, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits within a cage may not repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio pairs: Cells separated by a black dot are in a 2:1 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing
