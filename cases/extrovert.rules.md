---
format: open-rules
title: eXtroVert
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hn3h16sk0k
case: https://sudoku-sleuth.com/cases/extrovert
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=3 r2c8=5 r5c5=1 r8c2=2 r8c8=8
---

```rules
sudoku 9x9
pair-1: pair r1c2-r1c3 sum 10
pair-2: pair r1c7-r1c8 sum 10
pair-3: pair r2c9-r3c9 sum 10
pair-4: pair r7c9-r8c9 sum 10
pair-5: pair r9c7-r9c8 sum 10
pair-6: pair r9c2-r9c3 sum 10
pair-7: pair r7c1-r8c1 sum 10
pair-8: pair r2c1-r3c1 sum 10
pair-9: pair r4c1-r4c2 sum 10
pair-10: pair r6c8-r6c9 sum 10
pair-11: pair r2c4-r3c4 sum 10
pair-12: pair r7c6-r8c6 sum 10
pair-13: pair r5c4-r6c4 sum 10
pair-14: pair r4c5-r4c6 sum 10
pair-15: pair r1c3-r1c4 sum 5
pair-16: pair r1c6-r1c7 sum 5
pair-17: pair r3c9-r4c9 sum 5
pair-18: pair r6c9-r7c9 sum 5
pair-19: pair r9c6-r9c7 sum 5
pair-20: pair r9c3-r9c4 sum 5
pair-21: pair r6c1-r7c1 sum 5
pair-22: pair r3c1-r4c1 sum 5
pair-23: pair r1c4-r2c4 sum 5
pair-24: pair r8c6-r9c6 sum 5
pair-25: pair r3c1-r3c2 sum 5
pair-26: pair r3c8-r3c9 sum 5
```

**Sudoku, XV Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing.html
