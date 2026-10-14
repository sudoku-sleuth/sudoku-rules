---
format: open-rules
title: Pretzel
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mfyofcbo3q
case: https://sudoku-sleuth.com/cases/pretzel
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r1c5=6 r1c9=2 r5c2=8 r5c8=7 r9c1=4 r9c5=9 r9c9=3
exported: 285b4b93271fe0aebbef0afe55272710
---

```rules
sudoku 9x9
pair-1: pair r2c2-r3c2 sum 10
pair-2: pair r4c4-r5c4 sum 10
pair-3: pair r4c5-r4c6 sum 10
pair-4: pair r5c6-r6c6 sum 10
pair-5: pair r6c4-r6c5 sum 10
pair-6: pair r2c4-r2c5 sum 10
pair-7: pair r2c7-r2c8 sum 10
pair-8: pair r7c8-r8c8 sum 10
pair-9: pair r8c5-r8c6 sum 10
pair-10: pair r8c2-r8c3 sum 10
pair-11: pair r3c2-r4c2 sum 5
pair-12: pair r2c3-r2c4 sum 5
pair-13: pair r2c6-r2c7 sum 5
pair-14: pair r3c8-r4c8 sum 5
pair-15: pair r6c8-r7c8 sum 5
pair-16: pair r8c6-r8c7 sum 5
pair-17: pair r8c3-r8c4 sum 5
pair-18: pair r6c2-r7c2 sum 5
pair-19: pair r5c3-r5c4 sum 5
pair-20: pair r3c5-r4c5 sum 5
pair-21: pair r5c6-r5c7 sum 5
pair-22: pair r6c5-r7c5 sum 5
```

**Sudoku, XV Pairs**

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
XV pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
