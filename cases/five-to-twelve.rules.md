---
format: open-rules
title: Five to Twelve
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/d93d20aq05
case: https://sudoku-sleuth.com/cases/five-to-twelve
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4 total 12 connected true
cage-2: cage r1c9-r2c9-r3c9-r4c9 total 12 connected true
cage-3: cage r9c6-r9c7-r9c8-r9c9 total 12 connected true
cage-4: cage r6c1-r7c1-r8c1-r9c1 total 12 connected true
cage-5: cage r9c4-r9c5 total 10 connected true
cage-6: cage r4c1-r5c1 total 11 connected true
cage-7: cage r1c5-r1c6 total 12 connected true
cage-8: cage r5c9-r6c9 total 13 connected true
cage-9: cage r3c5-r4c5 total 9 connected true
cage-10: cage r6c5-r7c5 total 9 connected true
pair-1: pair r2c2-r3c2 sum 10
pair-2: pair r7c3-r8c3 sum 10
pair-3: pair r1c7-r2c7 sum 10
pair-4: pair r7c8-r8c8 sum 10
pair-5: pair r6c4-r6c5 sum 10
pair-6: pair r5c6-r6c6 sum 10
pair-7: pair r4c5-r4c6 sum 10
pair-8: pair r4c4-r5c4 sum 10
pair-9: pair r3c3-r4c3 sum 10
pair-10: pair r1c2-r1c3 sum 5
pair-11: pair r3c9-r4c9 sum 5
pair-12: pair r6c1-r7c1 sum 5
pair-13: pair r9c6-r9c7 sum 5
```

**Sudoku, Cages, XV**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Within a cage, digits may not repeat and must sum to the value shown in the upper left corner of the cage.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. Not all possible Xs or Vs are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
