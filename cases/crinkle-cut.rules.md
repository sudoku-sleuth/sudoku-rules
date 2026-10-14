---
format: open-rules
title: Crinkle Cut
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/a0inco0hhc
case: https://sudoku-sleuth.com/cases/crinkle-cut
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3c86adbb2cad0662e38ea4701719de9e
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 10 connected true
cage-2: cage r1c8-r1c9-r2c9 total 10 connected true
cage-3: cage r8c1-r9c1-r9c2 total 20 connected true
cage-4: cage r8c9-r9c8-r9c9 total 20 connected true
cage-5: cage r3c3-r3c4-r4c3 total 10 connected true
cage-6: cage r3c6-r3c7-r4c7 total 14 connected true
cage-7: cage r6c7-r7c6-r7c7 total 14 connected true
cage-8: cage r6c3-r7c3-r7c4 total 12 connected true
cage-9: cage r5c1-r5c2-r5c3 total 13 connected true
cage-10: cage r5c7-r5c8-r5c9 total 19 connected true
cage-11: cage r8c4-r8c5-r8c6 total 15 connected true
cage-12: cage r1c5-r2c5-r3c5 total 20 connected true
kropki-1: kropki r9c1-r9c2 white
kropki-2: kropki r9c8-r9c9 white
kropki-3: kropki r7c1-r8c1 white
kropki-4: kropki r7c9-r8c9 white
kropki-5: kropki r2c1-r3c1 white
kropki-6: kropki r2c9-r3c9 white
kropki-7: kropki r5c3-r6c3 white
kropki-8: kropki r3c5-r3c6 white
kropki-9: kropki r5c7-r6c7 white
kropki-10: kropki r6c5-r7c5 white
kropki-11: kropki r3c5-r4c5 white
kropki-12: kropki r4c9-r5c9 white
kropki-13: kropki r4c1-r5c1 white
kropki-14: kropki r1c1-r1c2 black
kropki-15: kropki r1c8-r1c9 black
kropki-16: kropki r3c3-r4c3 black
kropki-17: kropki r7c3-r7c4 black
kropki-18: kropki r6c7-r7c7 black
kropki-19: kropki r3c6-r3c7 black
```

**Sudoku, Cages, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki dots: Digits separated by a black dot are in a 2:1 ratio. Digits separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
