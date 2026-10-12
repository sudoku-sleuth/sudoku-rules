---
format: open-rules
title: Pass It Along
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/pass-it-along
case: https://sudoku-sleuth.com/cases/pass-it-along
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4 total 6 connected true
cage-2: cage r3c2-r3c3 total 14 connected true
cage-3: cage r1c6-r2c6 total 11 connected true
cage-4: cage r3c8-r3c9-r4c9 total 21 connected true
cage-5: cage r4c7-r5c7-r6c7 total 11 connected true
cage-6: cage r8c7-r9c7 total 14 connected true
cage-7: cage r1c1-r1c2 total 10 connected true
cage-8: cage r4c3-r5c3 total 9 connected true
cage-9: cage r8c4-r9c4 total 9 connected true
cage-10: cage r7c3-r8c3 total 12 connected true
cage-11: cage r6c1-r6c2 total 8 connected true
cage-12: cage r8c1-r9c1 total 11 connected true
region-sum-1: region-sum r1c4-r2c4-r3c4-r3c3-r3c2-r3c1-r4c1-r4c2-r4c3-r5c3 segments [["r1c4","r2c4","r3c4"],["r3c3","r3c2","r3c1"],["r4c1","r4c2","r4c3","r5c3"]]
region-sum-2: region-sum r1c6-r2c6-r3c6-r3c7-r3c8-r3c9-r4c9-r4c8-r4c7-r5c7 segments [["r1c6","r2c6","r3c6"],["r3c7","r3c8","r3c9"],["r4c9","r4c8","r4c7","r5c7"]]
region-sum-3: region-sum r6c7-r6c8-r6c9-r7c9-r8c9-r9c9 segments [["r6c7","r6c8","r6c9"],["r7c9","r8c9","r9c9"]]
region-sum-4: region-sum r6c3-r6c2-r6c1-r7c1-r8c1-r9c1 segments [["r6c3","r6c2","r6c1"],["r7c1","r8c1","r9c1"]]
region-sum-5: region-sum r8c3-r7c3-r7c4-r8c4-r9c4 segments [["r8c3","r7c3"],["r7c4","r8c4","r9c4"]]
region-sum-6: region-sum r8c7-r7c7-r7c6-r8c6-r9c6 segments [["r8c7","r7c7"],["r7c6","r8c6","r9c6"]]
```

**Sudoku, Region Sum Lines, Cages**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value.
- Cages: Digits in may not repeat and must sum to the value in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
