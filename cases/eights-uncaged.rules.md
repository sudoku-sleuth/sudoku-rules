---
format: open-rules
title: Eights Uncaged
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fwrhxck7jz
case: https://sudoku-sleuth.com/cases/eights-uncaged
library: https://rules.sudoku-sleuth.com/
status: read
exported: 44324fbca56642914c337ed3a4c7e68b
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 8 connected true
cage-2: cage r3c3-r3c4-r4c3 total 8 connected true
cage-3: cage r3c6-r3c7-r4c7 total 8 connected true
cage-4: cage r1c8-r2c8-r2c9 total 8 connected true
cage-5: cage r8c8-r8c9-r9c8 total 8 connected true
cage-6: cage r6c7-r7c6-r7c7 total 8 connected true
cage-7: cage r6c3-r7c3-r7c4 total 8 connected true
cage-8: cage r8c1-r8c2-r9c2 total 8 connected true
cage-9: cage r5c1-r5c2 total 8 connected true
cage-10: cage r5c8-r5c9 total 8 connected true
cage-11: cage r1c5-r2c5 total 8 connected true
cage-12: cage r8c5-r9c5 total 8 connected true
kropki-1: kropki r5c2-r5c3 white
kropki-2: kropki r1c4-r1c5 white
kropki-3: kropki r1c7-r2c7 white
kropki-4: kropki r7c7-r8c7 white
kropki-5: kropki r2c5-r3c5 black
kropki-6: kropki r9c4-r9c5 black
kropki-7: kropki r5c1-r6c1 black
kropki-8: kropki r5c8-r6c8 black
```

**Standard Sudoku, Cages, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
