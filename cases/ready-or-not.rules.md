---
format: open-rules
title: Ready or not
setter: sujoyku
source: https://tinyurl.com/8ky7yvxj
case: https://sudoku-sleuth.com/cases/ready-or-not
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 21 connected true
cage-2: cage r6c3-r7c3-r8c3-r9c3 total 13 connected true
cage-3: cage r3c6-r3c7-r3c8-r3c9 total 12 connected true
cage-4: cage r2c5-r3c5-r4c5 total 15 connected true
cage-5: cage r5c2-r5c3-r5c4 total 15 connected true
cage-6: cage r5c5-r5c6-r6c5-r6c6 total 12 connected true
cage-7: cage r5c7-r5c8-r5c9 total 15 connected true
cage-8: cage r7c5-r8c5-r9c5 total 14 connected true
cage-9: cage r7c1-r7c2-r8c1 total 20 connected true
cage-10: cage r1c7-r1c8-r2c7 total 20 connected true
cage-11: cage r6c9-r7c9-r8c9 total 21 connected true
cage-12: cage r9c6-r9c7-r9c8 total 21 connected true
cage-13: cage r8c6-r8c7 total 7 connected true
cage-14: cage r6c8-r7c8 total 8 connected true
diagonal direction "anti"
```

Normal sudoku rules apply. On the positive main diagonal digits do not repeat. Digits in a cage sum to the clue in the top left.
