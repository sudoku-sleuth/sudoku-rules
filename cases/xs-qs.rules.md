---
format: open-rules
title: Xs & Qs
setter: The Bard
source: https://sudokupad.app/uhlvr53s9q
case: https://sudoku-sleuth.com/cases/xs-qs
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair-1: pair r8c7-r8c8 sum 10
pair-2: pair r8c2-r8c3 sum 10
pair-3: pair r2c7-r2c8 sum 10
pair-4: pair r2c2-r2c3 sum 10
pair-5: pair r4c5-r4c6 sum 10
pair-6: pair r6c4-r6c5 sum 10
pair-7: pair r1c7-r1c8 sum 10
pair-8: pair r9c6-r9c7 sum 10
pair-9: pair r8c1-r9c1 sum 10
pair-10: pair r1c1-r1c2 sum 10
pair-11: pair r2c5-r3c5 sum 10
pair-12: pair r3c7-r4c7 sum 10
pair-13: pair r4c8-r5c8 sum 5
pair-14: pair r5c2-r6c2 sum 5
pair-15: pair r1c4-r1c5 sum 5
pair-16: pair r8c5-r8c6 sum 5
pair-17: pair r7c7-r8c7 sum 5
quadruple-1: quadruple r4c8-r4c9-r5c8-r5c9 digits [2,3]
quadruple-2: quadruple r5c1-r5c2-r6c1-r6c2 digits [1,4]
quadruple-3: quadruple r1c4-r1c5-r2c4-r2c5 digits [2,3]
quadruple-4: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,4]
quadruple-5: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,4]
quadruple-6: quadruple r3c3-r3c4-r4c3-r4c4 digits [2]
quadruple-7: quadruple r6c3-r6c4-r7c3-r7c4 digits [1]
quadruple-8: quadruple r6c2-r6c3-r7c2-r7c3 digits [2]
quadruple-9: quadruple r6c6-r6c7-r7c6-r7c7 digits [2]
quadruple-10: quadruple r2c1-r2c2-r3c1-r3c2 digits [1]
quadruple-11: quadruple r4c4-r4c5-r5c4-r5c5 digits [3]
quadruple-12: quadruple r7c8-r7c9-r8c8-r8c9 digits [4]
quadruple-13: quadruple r3c6-r3c7-r4c6-r4c7 digits [9]
quadruple-14: quadruple r3c1-r3c2-r4c1-r4c2 digits [7]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.

Quadruples: Digits in a Quadruple circle must be placed ONLY ONCE in one of the four cells touching that circle.

XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
