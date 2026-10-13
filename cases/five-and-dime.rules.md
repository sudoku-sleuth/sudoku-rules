---
format: open-rules
title: Five and Dime
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r5m97ptttw
case: https://sudoku-sleuth.com/cases/five-and-dime
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 8 connected true
cage-2: cage r2c7-r2c8 total 6 connected true
cage-3: cage r4c9-r5c9-r6c9 total 8 connected true
cage-4: cage r4c5-r5c5-r6c5 total 22 connected true
cage-5: cage r7c4-r8c4-r9c4 total 12 connected true
cage-6: cage r5c1-r5c2-r5c3 total 8 connected true
cage-7: cage r9c7-r9c8-r9c9 total 8 connected true
cage-8: cage r7c1-r7c2-r7c3 total 8 connected true
pair-1: pair r2c8-r3c8 sum 10
pair-2: pair r3c9-r4c9 sum 10
pair-3: pair r3c6-r3c7 sum 10
pair-4: pair r4c3-r5c3 sum 10
pair-5: pair r5c4-r6c4 sum 10
pair-6: pair r6c5-r6c6 sum 10
pair-7: pair r7c8-r8c8 sum 10
pair-8: pair r1c7-r2c7 sum 5
pair-9: pair r7c1-r7c2 sum 5
pair-10: pair r6c1-r7c1 sum 5
pair-11: pair r7c3-r8c3 sum 5
pair-12: pair r5c2-r6c2 sum 5
```

- Normal sudoku rules apply.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- XV: Cells separated by an X must sum to 10. Cells separated by a V must sum to 5. Not all Xs and Vs are necessarily given (no negative constraint).
