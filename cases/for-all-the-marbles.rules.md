---
format: open-rules
title: For all the marbles
setter: sujoyku
source: https://tinyurl.com/3ysdd6j4
case: https://sudoku-sleuth.com/cases/for-all-the-marbles
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4a9b9773c9ca37f37663112df3cc5edc
---

```rules
sudoku 9x9
cage-1: cage r5c2-r6c1-r6c2 total 14 connected true
cage-2: cage r6c7-r6c8-r7c7 total 8 connected true
cage-3: cage r8c5-r9c4-r9c5 total 21 connected true
cage-4: cage r2c6-r3c5-r3c6 total 9 connected true
cage-5: cage r4c9-r5c8-r5c9 total 12 connected true
cage-6: cage r8c8-r8c9-r9c7-r9c8 total 12 connected true
cage-7: cage r1c7-r1c8-r2c7 total 14 connected true
cage-8: cage r1c3-r2c2-r2c3-r3c2 total 11 connected true
cage-9: cage r7c3-r8c2-r8c3 total 18 connected true
counting-circles r1c2-r1c5-r1c6-r2c1-r2c4-r2c5-r2c9-r3c3-r3c4-r3c7-r4c1-r4c2-r4c3-r4c6-r4c8-r5c1-r5c5-r5c7-r6c3-r6c9-r7c2-r7c4-r7c5-r7c6-r7c8-r8c1-r8c4-r8c6-r8c7-r9c3-r9c6
```

Normal sudoku rules apply. A circled digit indicates exactly how many circles contain that digit. Digits in a cage do not repeat and sum to the clue in the top left.
