---
format: open-rules
title: Variations on a Theme
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/y75wo2rtet
case: https://sudoku-sleuth.com/cases/variations-on-a-theme
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0c159f1083505fc2f802fc0b79cf5502
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4 total 9 connected true
cage-2: cage r1c6-r1c7-r1c8 total 12 connected true
cage-3: cage r2c1-r3c1-r4c1 total 12 connected true
cage-4: cage r6c1-r7c1-r8c1 total 9 connected true
cage-5: cage r9c2-r9c3-r9c4 total 12 connected true
cage-6: cage r9c6-r9c7-r9c8 total 9 connected true
cage-7: cage r6c9-r7c9-r8c9 total 12 connected true
cage-8: cage r2c9-r3c9-r4c9 total 9 connected true
cage-9: cage r2c3-r3c2-r3c3 total 23 connected true
cage-10: cage r2c7-r3c7-r3c8 total 21 connected true
cage-11: cage r7c2-r7c3-r8c3 total 21 connected true
cage-12: cage r7c7-r7c8-r8c7 total 23 connected true
cage-13: cage r2c5-r3c5-r4c5 total 10 connected true
cage-14: cage r6c5-r7c5-r8c5 total 12 connected true
cage-15: cage r5c2-r5c3-r5c4 total 9 connected true
cage-16: cage r5c6-r5c7-r5c8 total 13 connected true
cage-17: cage r6c3-r6c4-r7c4 total 11 connected true
cage-18: cage r6c6-r6c7-r7c6 total 9 connected true
cage-19: cage r3c4-r4c3-r4c4 total 20 connected true
cage-20: cage r3c6-r4c6-r4c7 total 11 connected true
kropki-1: kropki r9c2-r9c3 black
kropki-2: kropki r7c8-r8c8 black
kropki-3: kropki r4c5-r5c5 black
kropki-4: kropki r2c1-r3c1 black
```

**Sudoku, Cages, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio dots: Digits separated by a black dot are in a 2:1 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
