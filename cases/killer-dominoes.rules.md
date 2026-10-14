---
format: open-rules
title: Killer dominoes
setter: sujoyku
source: https://tinyurl.com/y2xnmu34
case: https://sudoku-sleuth.com/cases/killer-dominoes
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8fd1b61c72391b91855f259e0d4d71bc
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1 total 15 connected true
cage-2: cage r4c2-r5c2 total 14 connected true
cage-3: cage r5c3-r6c3 total 13 connected true
cage-4: cage r6c1-r7c1 total 12 connected true
cage-5: cage r7c2-r8c2 total 11 connected true
cage-6: cage r8c3-r9c3 total 10 connected true
cage-7: cage r7c4-r7c5 total 11 connected true
cage-8: cage r6c6-r6c7 total 12 connected true
cage-9: cage r4c8-r5c8 total 9 connected true
cage-10: cage r3c3-r3c4 total 5 connected true
cage-11: cage r2c4-r2c5 total 6 connected true
cage-12: cage r1c5-r1c6 total 7 connected true
cage-13: cage r3c6-r3c7 total 8 connected true
cage-14: cage r2c7-r2c8 total 9 connected true
cage-15: cage r1c8-r1c9 total 10 connected true
diagonal direction "anti"
```

Normal sudoku rules apply. Digits in a cage sum to the clue in the top left. On the positive diagonal digits do not repeat.
