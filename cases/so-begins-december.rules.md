---
format: open-rules
title: So Begins December
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o262jr9prk
case: https://sudoku-sleuth.com/cases/so-begins-december
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8fff6f5338a6f70cdd352bbfd1b8e185
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4-r2c4 total 8 connected true
cage-2: cage r1c6-r1c7-r2c6 total 8 connected true
cage-3: cage r8c6-r9c6-r9c7 total 8 connected true
cage-4: cage r8c4-r9c3-r9c4 total 8 connected true
cage-5: cage r3c1-r4c1-r4c2 total 9 connected true
cage-6: cage r3c9-r4c8-r4c9 total 9 connected true
cage-7: cage r6c8-r6c9-r7c9 total 9 connected true
cage-8: cage r6c1-r6c2-r7c1 total 9 connected true
cage-9: cage r3c4-r4c3-r4c4 total 22 connected true
cage-10: cage r6c6-r6c7-r7c6 total 22 connected true
cage-11: cage r6c3-r6c4-r7c4 total 19 connected true
cage-12: cage r3c6-r4c6-r4c7 total 24 connected true
kropki-1: kropki r1c8-r2c8 white
kropki-2: kropki r8c4-r8c5 white
kropki-3: kropki r1c8-r1c9 white
kropki-4: kropki r8c1-r9c1 white
kropki-5: kropki r3c4-r3c5 black
kropki-6: kropki r1c3-r2c3 black
kropki-7: kropki r1c6-r1c7 black
kropki-8: kropki r7c2-r8c2 black
kropki-9: kropki r8c7-r9c7 black
kropki-10: kropki r2c8-r3c8 black
kropki-11: kropki r9c5-r9c6 black
kropki-12: kropki r4c1-r5c1 black
```

**Sudoku, Cages, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
 - Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
