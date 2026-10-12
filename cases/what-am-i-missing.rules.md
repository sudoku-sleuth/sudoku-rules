---
format: open-rules
title: What am I missing?
setter: sujoyku
source: https://tinyurl.com/ax38c28f
case: https://sudoku-sleuth.com/cases/what-am-i-missing
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 14 connected true
cage-2: cage r2c1-r2c2-r2c3 total 14 connected true
cage-3: cage r3c1-r3c2 total 14 connected true
cage-4: cage r1c7-r2c7 total 11 connected true
cage-5: cage r1c8-r2c8-r3c8 total 11 connected true
cage-6: cage r1c9-r2c9 total 11 connected true
cage-7: cage r7c8-r7c9 total 12 connected true
cage-8: cage r8c7-r8c8-r8c9 total 12 connected true
cage-9: cage r9c8-r9c9 total 12 connected true
cage-10: cage r8c1-r9c1 total 13 connected true
cage-11: cage r7c2-r8c2-r9c2 total 13 connected true
cage-12: cage r8c3-r9c3 total 13 connected true
cage-13: cage r1c3-r1c4-r1c5-r1c6 total 22 connected true
cage-14: cage r4c1-r5c1-r6c1-r7c1 total 16 connected true
cage-15: cage r3c9-r4c9-r5c9-r6c9 total 26 connected true
cage-16: cage r9c4-r9c5-r9c6-r9c7 total 21 connected true
cage-17: cage r4c2-r4c3 total 12 connected true
cage-18: cage r7c4-r8c4 total 10 connected true
cage-19: cage r6c7-r6c8 total 8 connected true
cage-20: cage r2c6-r3c6 total 6 connected true
cage-21: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 19 connected true
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. Digits in a cage sum to the clue in the top left.
