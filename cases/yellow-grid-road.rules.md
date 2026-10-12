---
format: open-rules
title: Yellow Grid Road
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/j1e0q70ufc
case: https://sudoku-sleuth.com/cases/yellow-grid-road
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 3 connected true
cage-2: cage r3c1-r4c1 total 8 connected true
cage-3: cage r5c1-r6c1 total 11 connected true
cage-4: cage r7c1-r8c1 total 15 connected true
cage-5: cage r9c1-r9c2 total 9 connected true
cage-6: cage r9c3-r9c4 total 6 connected true
cage-7: cage r9c5-r9c6 total 8 connected true
cage-8: cage r9c7-r9c8 total 15 connected true
cage-9: cage r8c9-r9c9 total 10 connected true
cage-10: cage r6c9-r7c9 total 5 connected true
cage-11: cage r4c9-r5c9 total 8 connected true
cage-12: cage r2c9-r3c9 total 13 connected true
cage-13: cage r1c8-r1c9 total 10 connected true
cage-14: cage r1c6-r1c7 total 8 connected true
cage-15: cage r1c4-r1c5 total 13 connected true
cage-16: cage r1c3-r2c3 total 9 connected true
cage-17: cage r3c3-r4c3 total 14 connected true
cage-18: cage r5c3-r6c3 total 10 connected true
cage-19: cage r7c3-r7c4 total 11 connected true
cage-20: cage r7c5-r7c6 total 13 connected true
cage-21: cage r6c7-r7c7 total 6 connected true
cage-22: cage r4c7-r5c7 total 15 connected true
cage-23: cage r3c6-r3c7 total 10 connected true
cage-24: cage r3c5-r4c5-r5c5 total 13 connected true
```

**Sudoku, Cages**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Cages: Digits in cages sum to the value in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
