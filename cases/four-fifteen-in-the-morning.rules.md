---
format: open-rules
title: Four-Fifteen in the Morning
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ceiyva37rj
case: https://sudoku-sleuth.com/cases/four-fifteen-in-the-morning
library: https://rules.sudoku-sleuth.com/
status: read
exported: 328e83529e4a72a339329c20de9225b3
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 15 connected true
cage-2: cage r1c8-r1c9-r2c9 total 15 connected true
cage-3: cage r8c9-r9c8-r9c9 total 15 connected true
cage-4: cage r8c1-r9c1-r9c2 total 15 connected true
cage-5: cage r5c1-r5c2-r5c3 total 15 connected true
cage-6: cage r1c5-r2c5-r3c5 total 15 connected true
cage-7: cage r5c7-r5c8-r5c9 total 15 connected true
cage-8: cage r7c5-r8c5-r9c5 total 15 connected true
cage-9: cage r6c3-r7c3-r7c4 total 15 connected true
cage-10: cage r6c7-r7c6-r7c7 total 15 connected true
cage-11: cage r3c6-r3c7-r4c7 total 15 connected true
cage-12: cage r3c3-r3c4-r4c3 total 15 connected true
kropki-1: kropki r1c5-r2c5 white
kropki-2: kropki r9c4-r9c5 white
kropki-3: kropki r6c6-r7c6 white
kropki-4: kropki r7c2-r7c3 white
kropki-5: kropki r2c9-r3c9 white
kropki-6: kropki r2c1-r3c1 black
kropki-7: kropki r1c1-r1c2 black
kropki-8: kropki r1c9-r2c9 black
kropki-9: kropki r9c8-r9c9 black
kropki-10: kropki r8c1-r9c1 black
kropki-11: kropki r6c3-r7c3 black
kropki-12: kropki r7c6-r7c7 black
kropki-13: kropki r3c7-r4c7 black
kropki-14: kropki r3c4-r3c5 black
kropki-15: kropki r5c5-r5c6 black
```

**Sudoku, Cages, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
 - Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
