---
format: open-rules
title: Boxed Out
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/oq5uzj4s67
case: https://sudoku-sleuth.com/cases/boxed-out
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 13 connected true
cage-2: cage r7c7-r7c8-r8c7 total 19 connected true
cage-3: cage r2c7-r3c7-r3c8 total 18 connected true
cage-4: cage r4c5-r4c6-r5c6 total 19 connected true
cage-5: cage r5c4-r6c4-r6c5 total 11 connected true
cage-6: cage r7c2-r7c3-r8c3 total 12 connected true
pair-1: pair r5c2-r6c2 sum 10
pair-2: pair r2c4-r2c5 sum 10
pair-3: pair r4c8-r5c8 sum 10
pair-4: pair r8c5-r8c6 sum 10
pair-5: pair r6c7-r6c8 sum 10
pair-6: pair r2c6-r3c6 sum 10
pair-7: pair r4c2-r4c3 sum 10
pair-8: pair r7c4-r8c4 sum 10
pair-9: pair r3c3-r4c3 sum 5
pair-10: pair r3c3-r3c4 sum 5
pair-11: pair r3c6-r3c7 sum 5
pair-12: pair r3c7-r4c7 sum 5
pair-13: pair r6c7-r7c7 sum 5
pair-14: pair r7c6-r7c7 sum 5
pair-15: pair r7c3-r7c4 sum 5
pair-16: pair r6c3-r7c3 sum 5
pair-17: pair r6c2-r6c3 sum 5
pair-18: pair r2c4-r3c4 sum 5
pair-19: pair r4c7-r4c8 sum 5
pair-20: pair r7c6-r8c6 sum 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5. Not all possible Xs and Vs are given.
