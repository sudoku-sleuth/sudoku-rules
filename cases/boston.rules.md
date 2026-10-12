---
format: open-rules
title: Boston
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ywk15epckl
case: https://sudoku-sleuth.com/cases/boston
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 10 connected true
cage-2: cage r3c6-r3c7-r4c6-r4c7 total 11 connected true
cage-3: cage r6c6-r6c7-r7c6-r7c7 total 10 connected true
cage-4: cage r6c3-r6c4-r7c3-r7c4 total 11 connected true
cage-5: cage r7c2-r8c2-r8c3 total 10 connected true
cage-6: cage r7c8-r8c7-r8c8 total 12 connected true
cage-7: cage r2c7-r2c8-r3c8 total 14 connected true
cage-8: cage r2c2-r2c3-r3c2 total 16 connected true
cage-9: cage r9c3-r9c4 total 13 connected true
cage-10: cage r9c6-r9c7 total 14 connected true
cage-11: cage r6c9-r7c9 total 13 connected true
cage-12: cage r3c9-r4c9 total 9 connected true
cage-13: cage r6c1-r7c1 total 13 connected true
cage-14: cage r3c1-r4c1 total 16 connected true
cage-15: cage r1c3-r1c4 total 14 connected true
kropki-1: kropki r6c2-r7c2 colour "black"
kropki-2: kropki r4c4-r4c5 colour "black"
kropki-3: kropki r5c9-r6c9 colour "black"
```

**Sudoku, Cages, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
