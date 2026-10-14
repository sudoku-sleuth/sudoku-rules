---
format: open-rules
title: Dun Roamin'
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0oai68zqg4
case: https://sudoku-sleuth.com/cases/dun-roamin
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=8 r5c5=6 r8c8=2
exported: 162f69f78a2c7e200692e2e7e541459e
---

```rules
sudoku 9x9
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r1c8-r1c9 sum 10
pair-3: pair r3c3-r3c4 sum 10
pair-4: pair r2c3-r2c4 sum 10
pair-5: pair r2c6-r2c7 sum 10
pair-6: pair r3c6-r3c7 sum 10
pair-7: pair r9c2-r9c3 sum 10
pair-8: pair r9c7-r9c8 sum 10
pair-9: pair r6c3-r6c4 sum 10
pair-10: pair r6c6-r6c7 sum 10
pair-11: pair r3c5-r4c5 sum 10
pair-12: pair r1c2-r1c3 sum 5
pair-13: pair r1c7-r1c8 sum 5
pair-14: pair r2c1-r3c1 sum 5
pair-15: pair r2c9-r3c9 sum 5
pair-16: pair r9c1-r9c2 sum 5
pair-17: pair r9c8-r9c9 sum 5
pair-18: pair r5c3-r5c4 sum 5
pair-19: pair r5c6-r5c7 sum 5
pair-20: pair r6c5-r7c5 sum 5
```

**Sudoku, XV Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. Not all possible Xs or Vs are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
