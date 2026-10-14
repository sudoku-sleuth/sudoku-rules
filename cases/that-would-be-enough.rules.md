---
format: open-rules
title: That Would Be Enough
setter: Eliza Hamilton (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/vmviqbn71h
case: https://sudoku-sleuth.com/cases/that-would-be-enough
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=3 r7c5=5
exported: 7e605f0f292df1fc0008ac0f1e9d6ba6
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 36
little-killer-2: little-killer r1c6-r2c7-r3c8-r4c9 sum 21
little-killer-3: little-killer r1c8-r2c9 sum 16
little-killer-4: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 35
little-killer-5: little-killer r6c9-r7c8-r8c7-r9c6 sum 5
little-killer-6: little-killer r8c9-r9c8 sum 8
little-killer-7: little-killer r9c6-r8c5-r7c4-r6c3-r5c2-r4c1 sum 16
little-killer-8: little-killer r9c4-r8c3-r7c2-r6c1 sum 7
little-killer-9: little-killer r9c2-r8c1 sum 8
little-killer-10: little-killer r6c1-r5c2-r4c3-r3c4-r2c5-r1c6 sum 36
little-killer-11: little-killer r4c1-r3c2-r2c3-r1c4 sum 5
little-killer-12: little-killer r2c1-r1c2 sum 16
```

- Normal Sudoku rules apply.
- A clue outside the grid shows the sum of the digits along the indicated diagonal. Digits can repeat along this diagonal if allowed by the other rules.
