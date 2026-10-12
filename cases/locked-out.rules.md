---
format: open-rules
title: Locked out
setter: sujoyku
source: https://tinyurl.com/2m5zdsz2
case: https://sudoku-sleuth.com/cases/locked-out
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2 total 13 connected true
cage-2: cage r3c3-r3c4-r4c3 total 12 connected true
cage-3: cage r5c1-r5c2 total 13 connected true
cage-4: cage r6c2-r6c3 total 13 connected true
cage-5: cage r7c8-r8c8 total 10 connected true
cage-6: cage r1c8-r2c8 total 10 connected true
cage-7: cage r4c7-r4c8 total 10 connected true
cage-8: cage r5c8-r5c9 total 10 connected true
cage-9: cage r5c4-r6c4 total 12 connected true
cage-10: cage r4c6-r5c6 total 12 connected true
cage-11: cage r3c5-r4c5-r5c5 total 8 connected true
counting-circles r1c2-r1c5-r1c9-r2c3-r2c4-r2c5-r2c7-r3c1-r3c6-r3c8-r4c2-r4c4-r5c3-r6c1-r6c8-r7c2-r7c4-r7c6-r8c3-r8c5-r8c7-r8c9-r9c1-r9c4-r9c8
```

Normal sudoku rules apply. A circled digit indicates exactly how many circles contain that digit. Digits in a cage do not repeat and sum to the clue in the top left.
