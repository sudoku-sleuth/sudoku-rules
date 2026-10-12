---
format: open-rules
title: Circumvention
setter: sujoyku
source: https://tinyurl.com/5ekf2fsd
case: https://sudoku-sleuth.com/cases/circumvention
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 18 connected true
cage-2: cage r2c3-r3c3 total 14 connected true
cage-3: cage r7c1-r8c1 total 14 connected true
cage-4: cage r8c3-r9c2-r9c3 total 18 connected true
cage-5: cage r7c7-r8c7 total 15 connected true
cage-6: cage r8c9-r9c8-r9c9 total 16 connected true
cage-7: cage r2c9-r3c9 total 15 connected true
cage-8: cage r1c7-r1c8-r2c7 total 16 connected true
cage-9: cage r4c8-r5c8-r6c8 total 14 connected true
cage-10: cage r4c2-r5c2-r6c2 total 13 connected true
cage-11: cage r5c6-r5c7-r6c6-r6c7 total 25 connected true
cage-12: cage r2c6-r3c6 total 12 connected true
cage-13: cage r1c4-r1c5 total 12 connected true
cage-14: cage r7c4-r8c4 total 10 connected true
cage-15: cage r9c5-r9c6 total 14 connected true
diagonal direction "main"
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. On the negative main diagonal digits do not repeat.
