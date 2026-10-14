---
format: open-rules
title: For the Love of Xs & Vs
setter: The Bard
source: https://sudokupad.app/bky4w9dhyr
case: https://sudoku-sleuth.com/cases/for-the-love-of-xs-vs
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2599e49d3cb8c109b6b54a1411942fda
---

```rules
sudoku 9x9
anti-knight
pair-1: pair r5c6-r6c6 sum 10
pair-2: pair r5c7-r6c7 sum 10
pair-3: pair r4c5-r5c5 sum 10
pair-4: pair r4c8-r5c8 sum 10
pair-5: pair r2c9-r3c9 sum 10
pair-6: pair r2c7-r2c8 sum 10
pair-7: pair r7c2-r8c2 sum 10
pair-8: pair r8c3-r9c3 sum 10
pair-9: pair r9c3-r9c4 sum 10
pair-10: pair r8c4-r8c5 sum 10
pair-11: pair r8c8-r9c8 sum 10
pair-12: pair r5c9-r6c9 sum 5
pair-13: pair r5c4-r6c4 sum 5
pair-14: pair r2c5-r2c6 sum 5
pair-15: pair r2c4-r3c4 sum 5
pair-16: pair r3c3-r3c4 sum 5
pair-17: pair r8c2-r9c2 sum 5
pair-18: pair r8c5-r8c6 sum 5
pair-19: pair r7c5-r7c6 sum 5
pair-20: pair r7c7-r7c8 sum 5
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r5c6","r6c6"],["r5c7","r6c7"],["r5c9","r6c9"],["r5c4","r6c4"],["r4c5","r5c5"],["r4c8","r5c8"],["r2c9","r3c9"],["r2c7","r2c8"],["r2c5","r2c6"],["r2c4","r3c4"],["r3c3","r3c4"],["r7c2","r8c2"],["r8c2","r9c2"],["r8c3","r9c3"],["r9c3","r9c4"],["r8c4","r8c5"],["r8c5","r8c6"],["r7c5","r7c6"],["r7c7","r7c8"],["r8c8","r9c8"]]
quadruple-1: quadruple r1c3-r1c4-r2c3-r2c4 digits [7]
quadruple-2: quadruple r8c1-r8c2-r9c1-r9c2 digits [4]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
XV: Digits separated by an X sum to 10. Digits separated by a V sum to 5. All Xs and Vs are given.
