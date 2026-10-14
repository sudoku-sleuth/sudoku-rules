---
format: open-rules
title: Happy Birthday Blobz!
setter: Timotab
source: https://sudokupad.app/qs49xl0yyo
case: https://sudoku-sleuth.com/cases/happy-birthday-blobz
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
givens: r1c2=1 r1c4=9 r1c6=6 r1c8=4
exported: f754f529903f0540f7cc13d02d1ed64b
---

```rules
sudoku 9x9
anti-knight
pair-1: pair r4c8-r5c8 sum 10
pair-2: pair r8c4-r8c5 sum 10
pair-3: pair r3c3-r3c4 sum 10
pair-4: pair r4c3-r4c4 sum 10
pair-5: pair r6c6-r6c7 sum 10
pair-6: pair r7c6-r7c7 sum 10
pair-7: pair r5c7-r6c7 sum 10
pair-8: pair r4c3-r5c3 sum 10
pair-9: pair r2c4-r2c5 sum 10
pair-10: pair r4c5-r5c5 sum 10
pair-11: pair r5c8-r5c9 sum 5
pair-12: pair r5c2-r5c3 sum 5
quadruple-1: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,9,6,4]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,9,6,4]
little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 60
```

• Normal Sudoku rules apply: Fill each row, column, and 3x3 box with the digits 1-9 once each.

• Antiknight: Digits a knight's move apart (in chess) cannot be the same digit.

• Little killer clues: Numbers outside the grid give the sum of the digits along the indicated diagonal. These digits can repeat if allowed by other rules.

• Quadruple circles: A digit inside a white circle must appear in one of the four cells surrounding that circle.

• Digits in cells separated by a V sum to 5. Digits in cells separated by an X sum to 10. Not all Xs and Vs are necessarily given.
