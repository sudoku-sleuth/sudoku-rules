---
format: open-rules
title: Superman
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/superman
library: https://rules.sudoku-sleuth.com/
status: read
exported: 77fc76ad8ab102ddbac28a0324bf6379
---

```rules
sudoku 9x9
whispers-1: whispers r5c1-r4c1-r3c2-r2c3-r2c4-r2c5-r2c6-r2c7-r3c8-r4c9-r5c9-r6c8-r7c7-r8c6-r9c5-r8c4-r7c3-r6c2 gap 5
whispers-2: whispers r7c4-r7c5-r7c6-r6c7-r5c7-r5c6-r5c5-r5c4-r5c3-r4c2-r3c3-r3c4-r3c5-r3c6 gap 5
pair-1: pair r5c4-r5c5 sum 10
pair-2: pair r4c4-r4c5 sum 10
pair-3: pair r5c6-r6c6 sum 10
pair-4: pair r3c8-r4c8 sum 10
pair-5: pair r1c3-r2c3 sum 5
pair-6: pair r1c7-r2c7 sum 5
pair-7: pair r7c6-r8c6 sum 5
pair-8: pair r7c4-r8c4 sum 5
pair-9: pair r9c8-r9c9 sum 5
pair-10: pair r9c1-r9c2 sum 5
pair-11: pair r4c8-r4c9 sum 5
```

Normal Sudoku rules apply. numbers on lines are at least 5 apart from their neighbors on the line. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all X and V are given.
