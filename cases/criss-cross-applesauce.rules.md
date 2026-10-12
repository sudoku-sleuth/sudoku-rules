---
format: open-rules
title: Criss Cross Applesauce
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/w46v2bbthn
case: https://sudoku-sleuth.com/cases/criss-cross-applesauce
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4-r2c4 total 8 connected true
cage-2: cage r2c3-r3c3-r3c4 total 8 connected true
cage-3: cage r1c6-r1c7-r2c6 total 22 connected true
cage-4: cage r2c7-r3c6-r3c7 total 22 connected true
cage-5: cage r8c7-r9c6-r9c7 total 8 connected true
cage-6: cage r7c6-r7c7-r8c6 total 9 connected true
cage-7: cage r8c3-r9c3-r9c4 total 22 connected true
cage-8: cage r7c3-r7c4-r8c4 total 21 connected true
cage-9: cage r4c6-r4c7-r5c7 total 21 connected true
cage-10: cage r5c3-r6c3-r6c4 total 9 connected true
cage-11: cage r1c1-r2c1 total 5 connected true
cage-12: cage r8c9-r9c9 total 15 connected true
cage-13: cage r1c9-r2c9 total 5 connected true
cage-14: cage r8c1-r9c1 total 12 connected true
cage-15: cage r6c8-r6c9 total 13 connected true
cage-16: cage r4c1-r4c2 total 6 connected true
```

**Sudoku, Cages**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Cages: Digits add to the total in the top left corner of the cage. Digits cannot repeat in cages.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
