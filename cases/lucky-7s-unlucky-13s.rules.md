---
format: open-rules
title: Lucky 7s, Unlucky 13s
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ao3jv6bymg
case: https://sudoku-sleuth.com/cases/lucky-7s-unlucky-13s
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 7 connected true
cage-2: cage r1c4-r1c5 total 7 connected true
cage-3: cage r1c7-r1c8 total 7 connected true
cage-4: cage r9c2-r9c3 total 13 connected true
cage-5: cage r9c5-r9c6 total 13 connected true
cage-6: cage r9c8-r9c9 total 13 connected true
cage-7: cage r6c2-r6c3 total 7 connected true
cage-8: cage r6c7-r6c8 total 7 connected true
pair-1: pair r1c2-r1c3 sum 10
pair-2: pair r1c5-r1c6 sum 10
pair-3: pair r1c8-r1c9 sum 10
pair-4: pair r9c1-r9c2 sum 10
pair-5: pair r9c4-r9c5 sum 10
pair-6: pair r9c7-r9c8 sum 10
pair-7: pair r6c1-r7c1 sum 10
pair-8: pair r6c9-r7c9 sum 10
pair-9: pair r6c1-r6c2 sum 10
pair-10: pair r6c8-r6c9 sum 10
pair-11: pair r3c3-r4c3 sum 10
pair-12: pair r3c7-r4c7 sum 10
pair-13: pair r3c5-r4c5 sum 10
pair-14: pair r8c3-r9c3 sum 10
pair-15: pair r7c9-r8c9 sum 5
pair-16: pair r7c1-r8c1 sum 5
pair-17: pair r4c3-r4c4 sum 5
pair-18: pair r4c6-r4c7 sum 5
pair-19: pair r7c5-r8c5 sum 5
pair-20: pair r2c7-r2c8 sum 5
```

**Standard Sudoku, Cages, XV**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages sum to the value shown in the upper left corner of the cage.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. Not all possible Xs or Vs are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
