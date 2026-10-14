---
format: open-rules
title: Diagon Alley
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/diagon-alley
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9db5d16c76e6a3a88d14db2be41eafe9
---

```rules
sudoku 9x9
pair-1: pair r3c5-r4c5 sum 10
pair-2: pair r4c5-r4c6 sum 10
pair-3: pair r5c6-r5c7 sum 10
pair-4: pair r5c7-r6c7 sum 10
pair-5: pair r6c8-r7c8 sum 10
pair-6: pair r7c8-r7c9 sum 10
pair-7: pair r3c1-r3c2 sum 10
pair-8: pair r3c2-r4c2 sum 10
pair-9: pair r4c3-r5c3 sum 10
pair-10: pair r5c3-r5c4 sum 10
pair-11: pair r6c5-r7c5 sum 10
pair-12: pair r5c4-r6c4 sum 10
pair-13: pair r2c1-r3c1 sum 5
pair-14: pair r4c2-r4c3 sum 5
pair-15: pair r7c5-r7c6 sum 5
pair-16: pair r8c7-r9c7 sum 5
pair-17: pair r7c9-r8c9 sum 5
pair-18: pair r6c7-r6c8 sum 5
pair-19: pair r4c6-r5c6 sum 5
pair-20: pair r3c4-r3c5 sum 5
pair-21: pair r1c3-r2c3 sum 5
little-killer-1: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 20
little-killer-2: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 28
little-killer-3: little-killer r6c1-r7c2-r8c3-r9c4 sum 12
little-killer-4: little-killer r1c6-r2c7-r3c8-r4c9 sum 17
```

Normal Sudoku rules apply. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible X and V are given. Clues outside the grid equal the sum of the indicated diagonal.
