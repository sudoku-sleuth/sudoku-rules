---
fog:
  initiallyLit:
    - 39
    - 40
    - 41
    - 50
format: open-rules
title: Quindecim Obscura
setter: Blobz
source: https://sudokupad.app/blobz/quindecim-obscura
case: https://sudoku-sleuth.com/cases/quindecim-obscura
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 colour "white"
kropki-2: kropki r4c5-r4c6 colour "white"
pair-1: pair r4c4-r5c4 sum 10
pair-2: pair r4c5-r5c5 sum 10
pair-3: pair r5c6-r5c7 sum 10
pair-4: pair r6c6-r7c6 sum 10
pair-5: pair r6c3-r6c4 sum 10
pair-6: pair r6c2-r7c2 sum 10
pair-7: pair r5c1-r6c1 sum 10
pair-8: pair r3c1-r4c1 sum 10
pair-9: pair r4c2-r4c3 sum 10
pair-10: pair r2c3-r2c4 sum 10
pair-11: pair r3c4-r3c5 sum 10
pair-12: pair r1c5-r2c5 sum 10
pair-13: pair r1c6-r2c6 sum 10
pair-14: pair r3c7-r3c8 sum 10
pair-15: pair r3c8-r4c8 sum 10
pair-16: pair r6c9-r7c9 sum 10
pair-17: pair r7c8-r8c8 sum 10
pair-18: pair r8c6-r9c6 sum 10
pair-19: pair r9c3-r9c4 sum 10
pair-20: pair r1c1-r1c2 sum 5
pair-21: pair r7c3-r8c3 sum 5
pair-22: pair r5c4-r6c4 sum 5
pair-23: pair r5c5-r6c5 sum 5
```

Normal sudoku rules apply. 

Digits separated by an X sum to 10. Digits separated by a V sum to 5. Not all possible X's and V's are shown.

Digits separated by a white dot are consecutive. Not all possible dots are shown.

Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
