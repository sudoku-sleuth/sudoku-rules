---
format: open-rules
title: Noughts and Doughts
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/noughts-and-doughts
case: https://sudoku-sleuth.com/cases/noughts-and-doughts
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2-r2c3-r3c2 total 16 connected true
cage-2: cage r1c8-r2c7-r2c8-r2c9-r3c8 total 34 connected true
cage-3: cage r1c5-r2c4-r2c5-r2c6-r3c5 total 25 connected true
cage-4: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 16 connected true
cage-5: cage r4c8-r5c7-r5c8-r5c9-r6c8 total 25 connected true
cage-6: cage r4c2-r5c1-r5c2-r5c3-r6c2 total 34 connected true
cage-7: cage r7c2-r8c1-r8c2-r8c3-r9c2 total 25 connected true
cage-8: cage r7c5-r8c4-r8c5-r8c6-r9c5 total 34 connected true
cage-9: cage r7c8-r8c7-r8c8-r8c9-r9c8 total 16 connected true
kropki-1: kropki r6c2-r7c2 colour "white"
kropki-2: kropki r8c6-r8c7 colour "white"
kropki-3: kropki r3c8-r4c8 colour "white"
kropki-4: kropki r2c3-r2c4 colour "white"
kropki-5: kropki r5c3-r5c4 colour "white"
kropki-6: kropki r2c6-r2c7 colour "black"
kropki-7: kropki r3c2-r4c2 colour "black"
kropki-8: kropki r8c3-r8c4 colour "black"
kropki-9: kropki r6c8-r7c8 colour "black"
kropki-10: kropki r5c6-r5c7 colour "black"
```

**Sudoku, Cages, Kropki**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
