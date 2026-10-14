---
format: open-rules
title: Enclosed Dotage
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6uchayk8rk
case: https://sudoku-sleuth.com/cases/enclosed-dotage
library: https://rules.sudoku-sleuth.com/
status: read
exported: 20a761ab518b9f14d35fbd4c1cafaaf2
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 10 connected true
cage-2: cage r3c6-r3c7-r4c6-r4c7 total 10 connected true
cage-3: cage r6c3-r6c4-r7c3-r7c4 total 10 connected true
cage-4: cage r6c6-r6c7-r7c6-r7c7 total 10 connected true
cage-5: cage r1c1-r1c2-r2c1 total 6 connected true
cage-6: cage r8c9-r9c8-r9c9 total 7 connected true
cage-7: cage r1c8-r1c9-r2c9 total 9 connected true
cage-8: cage r8c1-r9c1-r9c2 total 11 connected true
kropki-1: kropki r6c1-r6c2 white
kropki-2: kropki r3c9-r4c9 white
kropki-3: kropki r2c6-r2c7 white
kropki-4: kropki r3c4-r3c5 black
kropki-5: kropki r7c5-r7c6 black
kropki-6: kropki r2c8-r3c8 black
kropki-7: kropki r8c1-r8c2 black
kropki-8: kropki r7c7-r7c8 black
kropki-9: kropki r4c1-r5c1 black
kropki-10: kropki r1c5-r1c6 black
kropki-11: kropki r8c2-r8c3 black
```

**Sudoku, Cages, Kropki Pairs**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Cages: Digits add to the total in the top left corner of the cage. Digits cannot repeat in cages.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
