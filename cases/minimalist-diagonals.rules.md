---
format: open-rules
title: Minimalist diagonals
setter: sujoyku
source: https://tinyurl.com/ykstjk3r
case: https://sudoku-sleuth.com/cases/minimalist-diagonals
library: https://rules.sudoku-sleuth.com/
status: read
exported: 279a7f4ed2b4f52b90749c57c8fb2bc4
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r2c3 white
kropki-2: kropki r5c8-r6c8 white
pair-1: pair r3c2-r3c3 sum 10
pair-2: pair r9c3-r9c4 sum 10
pair-3: pair r9c8-r9c9 sum 10
pair-4: pair r6c3-r7c3 sum 10
pair-5: pair r2c5-r2c6 sum 10
pair-6: pair r4c7-r5c7 sum 10
pair-7: pair r1c8-r1c9 sum 10
pair-8: pair r1c2-r1c3 sum 5
pair-9: pair r9c5-r9c6 sum 5
little-killer-1: little-killer r9c2-r8c1 sum 6
little-killer-2: little-killer r9c4-r8c3-r7c2-r6c1 sum 10
little-killer-3: little-killer r4c1-r3c2-r2c3-r1c4 sum 10
little-killer-4: little-killer r1c6-r2c7-r3c8-r4c9 sum 10
little-killer-5: little-killer r6c9-r7c8-r8c7-r9c6 sum 10
little-killer-6: little-killer r8c1-r7c2-r6c3-r5c4-r4c5-r3c6-r2c7-r1c8 sum 24
little-killer-7: little-killer r2c9-r3c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2 sum 24
little-killer-8: little-killer r8c9-r9c8 sum 6
little-killer-9: little-killer r2c1-r1c2 sum 6
little-killer-10: little-killer r1c8-r2c9 sum 6
```

Normal sudoku rules apply. On a marked diagonal digits sum to the little killer clue outside the grid. (If there is no conflict with other rules, digits on a diagonal may repeat.) Digits joined by a V sum to 5. Digits joined by an X sum to 10. (Not all V and X are given.) Digits joined by a white dot are consecutive. (Not all dots are given.)
