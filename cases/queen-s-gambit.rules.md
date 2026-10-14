---
format: open-rules
title: Queen's Gambit
setter: Will Power
source: https://f-puzzles.com/?id=ydy2vf7y
case: https://sudoku-sleuth.com/cases/queen-s-gambit
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=2 r2c8=3 r4c4=8 r4c6=9 r6c4=7 r6c6=6 r8c2=1 r8c8=4
exported: b666bb28dc215383d8361b82cc4063f3
---

```rules
sudoku 9x9
pair-1: pair r7c9-r8c9 sum 10
pair-2: pair r2c1-r3c1 sum 10
pair-3: pair r8c5-r8c6 sum 10
pair-4: pair r5c2-r5c3 sum 10
pair-5: pair r2c4-r2c5 sum 10
pair-6: pair r4c9-r5c9 sum 10
pair-7: pair r9c1-r9c2 sum 10
pair-8: pair r1c8-r1c9 sum 10
pair-9: pair r8c3-r9c3 sum 5
pair-10: pair r3c5-r4c5 sum 5
pair-11: pair r6c5-r7c5 sum 5
pair-12: pair r6c1-r6c2 sum 5
pair-13: pair r4c7-r5c7 sum 5
pair-14: pair r1c7-r2c7 sum 5
```

Normal Sudoku rules apply.  For numbers 1, 2, 3 and 4, the same number cannot be a chess QUEEN's move apart (ie: ALL diagonals can have a maximum of one each of numbers 1, 2, 3 and 4).  Numbers with an X between them sum to 10.  Numbers with a V between them sum to 5.  Not all possible X's and V's are shown.
