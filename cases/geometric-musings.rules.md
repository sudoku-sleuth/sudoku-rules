---
format: open-rules
title: Geometric Musings
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1183aym61j
case: https://sudoku-sleuth.com/cases/geometric-musings
library: https://rules.sudoku-sleuth.com/
status: read
exported: e9217be025b14bf8306a150e1dedf93a
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c2-r2c3-r2c4-r2c5-r3c4-r3c5 total 43 connected true
cage-2: cage r4c4-r4c5-r5c2-r5c3-r5c4-r5c5-r6c2-r6c3 total 36 connected true
cage-3: cage r5c7-r5c8-r5c9 total 12 connected true
cage-4: cage r2c7-r2c8-r2c9 total 19 connected true
cage-5: cage r3c6-r4c6 total 11 connected true
cage-6: cage r3c1-r4c1 total 6 connected true
cage-7: cage r6c1-r7c1 total 8 connected true
cage-8: cage r7c2-r7c3-r8c2-r8c3-r8c4-r8c5-r9c4-r9c5 total 40 connected true
cage-9: cage r8c7-r8c8-r8c9 total 15 connected true
cage-10: cage r3c9-r4c9 total 11 connected true
cage-11: cage r6c6-r7c6 total 6 connected true
kropki-1: kropki r4c2-r5c2 white
kropki-2: kropki r6c3-r6c4 white
kropki-3: kropki r5c5-r6c5 white
kropki-4: kropki r8c2-r8c3 white
kropki-5: kropki r5c8-r6c8 black
kropki-6: kropki r9c6-r9c7 black
kropki-7: kropki r2c9-r3c9 black
kropki-8: kropki r2c4-r3c4 black
```

**Sudoku, Cages, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki dots: Digits separated by a black dot are in a 2:1 ratio. Digits separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
