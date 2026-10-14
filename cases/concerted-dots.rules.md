---
format: open-rules
title: Concerted Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zptd8yp6wb
case: https://sudoku-sleuth.com/cases/concerted-dots
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7bf924d291aeaf9a66ceb8cacd8fb279
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2-r4c1 total 8 connected true
cage-2: cage r6c9-r7c8-r7c9 total 7 connected true
cage-3: cage r1c7-r2c6-r2c7 total 18 connected true
cage-4: cage r8c4-r9c3-r9c4 total 12 connected true
cage-5: cage r3c4-r4c3-r4c4 total 10 connected true
cage-6: cage r6c6-r6c7-r7c6 total 12 connected true
cage-7: cage r3c6-r4c6-r4c7 total 23 connected true
cage-8: cage r6c3-r6c4-r7c4 total 15 connected true
cage-9: cage r8c1-r9c1-r9c2 total 16 connected true
cage-10: cage r1c8-r1c9-r2c9 total 21 connected true
kropki-1: kropki r4c1-r5c1 black
kropki-2: kropki r3c2-r3c3 black
kropki-3: kropki r2c1-r3c1 black
kropki-4: kropki r5c9-r6c9 black
kropki-5: kropki r7c9-r8c9 black
kropki-6: kropki r7c7-r7c8 black
kropki-7: kropki r2c5-r2c6 black
kropki-8: kropki r2c7-r3c7 black
kropki-9: kropki r1c6-r1c7 black
kropki-10: kropki r7c4-r8c4 black
kropki-11: kropki r9c4-r9c5 black
kropki-12: kropki r8c3-r9c3 black
kropki-13: kropki r9c3-r9c4 black
kropki-14: kropki r1c7-r2c7 black
```

**Sudoku, Cages, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio dots: Digits separated by a black dot are in a 2:1 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
