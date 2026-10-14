---
format: open-rules
title: The Power Of Killer Knights
setter: Tingo
source: https://tinyurl.com/powerofthekillerknightssudoku
case: https://sudoku-sleuth.com/cases/the-power-of-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
exported: c73ad23f484b15cda5bb526de2f6bcac
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5 connected true
cage-2: cage r4c5-r5c5-r6c5-r6c6 connected true
cage-3: cage r8c4-r8c5-r8c6 connected true
cage-4: cage r7c7-r7c8-r8c8-r8c9-r9c7-r9c8 connected true
cage-5: cage r1c3-r2c3-r3c1-r3c2-r3c3 connected true
anti-knight
kropki-1: kropki r3c5-r4c5 white
kropki-2: kropki r1c4-r1c5 white
kropki-3: kropki r1c3-r1c4 white
kropki-4: kropki r3c4-r3c5 white
kropki-5: kropki r3c3-r3c4 white
kropki-6: kropki r4c2-r4c3 white
kropki-7: kropki r4c8-r5c8 white
kropki-8: kropki r7c8-r8c8 white
kropki-9: kropki r8c4-r9c4 white
kropki-10: kropki r3c1-r3c2 white
pair-1: pair r1c4-r2c4 sum 10
pair-2: pair r3c5-r3c6 sum 10
pair-3: pair r3c6-r4c6 sum 10
```

Normal Sudoku Rules Apply
Cells separated by a knight's move (in chess) cannot contain the same digit.
Cells separated by white dots are consecutive in value. Not all white dots are given.
Cells separated by Xs sum to 10. Not all Xs are given.
Each cage represents a "knight". Each "knight" has a rank of 2,3,4,5 or 6. The rank of the knight is designated by the number of cells within the cage. The cage total is equal to the rank of the knight squared. E.G. digits in a 4 cell cage must sum to 4^2 or 16. Digits cannot repeat within cages.
