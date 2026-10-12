---
format: open-rules
title: Limited choice
setter: sujoyku
source: https://tinyurl.com/yckkrat6
case: https://sudoku-sleuth.com/cases/limited-choice
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c7-r2c7-r3c7-r3c8-r3c9 total 30 connected true
cage-2: cage r1c3-r2c3-r3c1-r3c2-r3c3 total 18 connected true
cage-3: cage r7c1-r7c2-r7c3-r8c3-r9c3 total 32 connected true
cage-4: cage r8c7-r9c7 total 11 connected true
cage-5: cage r7c8-r7c9 total 10 connected true
cage-6: cage r1c4-r1c5 total 13 connected true
cage-7: cage r2c5-r2c6 total 14 connected true
cage-8: cage r3c4-r3c5-r3c6 total 10 connected true
cage-9: cage r4c3-r5c3-r6c3 total 12 connected true
cage-10: cage r5c1-r6c1 total 13 connected true
cage-11: cage r4c2-r5c2 total 14 connected true
cage-12: cage r7c4-r8c4 total 13 connected true
cage-13: cage r8c5-r9c5 total 15 connected true
cage-14: cage r7c5-r7c6-r8c6 total 8 connected true
cage-15: cage r5c7-r6c7-r6c8 total 9 connected true
cage-16: cage r5c8-r5c9 total 14 connected true
cage-17: cage r4c7-r4c8 total 13 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
