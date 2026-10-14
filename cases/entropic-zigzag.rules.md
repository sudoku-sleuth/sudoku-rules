---
format: open-rules
title: Entropic Zigzag
setter: sujoyku
source: https://tinyurl.com/4vdu3y7u
case: https://sudoku-sleuth.com/cases/entropic-zigzag
library: https://rules.sudoku-sleuth.com/
status: read
exported: 056ca3f90fa471818fb190b1aa783194
---

```rules
sudoku 9x9
entropic-1: entropic r5c4-r4c4-r4c5-r5c5-r5c6-r6c6-r7c6-r7c5-r6c5
entropic-2: entropic r4c9-r4c8-r3c8-r2c8-r1c8-r2c7-r2c6-r1c6-r1c5-r1c4-r2c3-r1c2-r2c1-r3c2-r4c1-r5c1-r6c1-r6c2-r7c2-r7c3-r8c3-r9c4-r8c5-r8c6-r9c6-r8c7-r9c8-r8c9-r7c8-r6c9
pair-1: pair r4c5-r5c5 sum 10
pair-2: pair r3c4-r3c5 sum 10
pair-3: pair r4c3-r5c3 sum 10
little-killer-1: little-killer r9c6-r8c7-r7c8-r6c9 sum 17
little-killer-2: little-killer r1c4-r2c3-r3c2-r4c1 sum 23
little-killer-3: little-killer r6c1-r7c2-r8c3-r9c4 sum 19
little-killer-4: little-killer r4c9-r3c8-r2c7-r1c6 sum 21
```

Normal Sudoku rules apply. The orange lines are entropy lines, that is, any set of three consecutive digits on such a line must contain a low digit (1, 2 or 3), a medium digit (4, 5 or 6) and a high digit (7, 8 or 9). Digits on a marked diagonal sum to the clue next to the arrow. (If there is no conflict with other rules, digits may repeat on a diagonal.) Digits connected by an X sum to 10. (Not all Xs are given)
