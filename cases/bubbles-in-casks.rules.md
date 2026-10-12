---
format: open-rules
title: Bubbles in Casks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8p3yj7zub9
case: https://sudoku-sleuth.com/cases/bubbles-in-casks
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c6-r1c7-r1c8-r2c6 total 12 connected true
cage-2: cage r1c2-r1c3-r1c4-r2c4 total 13 connected true
cage-3: cage r8c6-r9c6-r9c7-r9c8 total 12 connected true
cage-4: cage r8c4-r9c2-r9c3-r9c4 total 13 connected true
cage-5: cage r3c1-r3c2-r4c1-r5c1 total 12 connected true
cage-6: cage r3c8-r3c9-r4c9-r5c9 total 13 connected true
cage-7: cage r6c8-r6c9-r7c9-r8c9 total 14 connected true
cage-8: cage r6c1-r6c2-r7c1-r8c1 total 14 connected true
cage-9: cage r3c3-r4c3-r4c4-r5c4 total 28 connected true
cage-10: cage r3c7-r4c6-r4c7-r5c6 total 27 connected true
kropki-1: kropki r6c9-r7c9 colour "white"
kropki-2: kropki r8c3-r8c4 colour "white"
kropki-3: kropki r1c2-r1c3 colour "white"
kropki-4: kropki r1c6-r1c7 colour "white"
kropki-5: kropki r1c7-r2c7 colour "white"
kropki-6: kropki r6c1-r7c1 colour "black"
kropki-7: kropki r8c1-r8c2 colour "black"
kropki-8: kropki r6c8-r6c9 colour "black"
kropki-9: kropki r9c7-r9c8 colour "black"
kropki-10: kropki r4c4-r5c4 colour "black"
kropki-11: kropki r5c3-r5c4 colour "black"
kropki-12: kropki r7c5-r7c6 colour "black"
kropki-13: kropki r9c4-r9c5 colour "black"
```

**Sudoku, Cages, Kropki Pairs**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Cages: Digits add to the total in the top left corner of the cage. Digits cannot repeat in cages.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
