---
format: open-rules
title: Copy and paste
setter: sujoyku
source: https://tinyurl.com/8yhe4355
case: https://sudoku-sleuth.com/cases/copy-and-paste
library: https://rules.sudoku-sleuth.com/
status: read
exported: 68f461990b578135cc3f1c98e94e78e1
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2-r9c3-r9c4 connected true
cage-2: cage r9c5-r9c6 connected true
cage-3: cage r9c7-r9c8 connected true
cage-4: cage r8c9-r9c9 connected true
cage-5: cage r5c9-r6c9-r7c9 connected true
cage-6: cage r3c9-r4c9 connected true
cage-7: cage r1c8-r1c9-r2c9 connected true
cage-8: cage r6c1-r7c1-r8c1 connected true
cage-9: cage r3c1-r4c1-r5c1 connected true
cage-10: cage r1c1-r1c2-r2c1 connected true
cage-11: cage r1c3-r1c4 connected true
cage-12: cage r1c5-r1c6-r1c7 connected true
cage-13: cage r2c5-r3c5-r4c5 connected true
cage-14: cage r5c6-r5c7-r5c8 connected true
cage-15: cage r6c5-r7c5-r8c5 connected true
cage-16: cage r5c2-r5c3-r5c4 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
counting-circles r2c3-r2c4-r5c6-r6c8-r7c7-r8c2-r8c7
equal-sums groups [["r9c1","r9c2","r9c3","r9c4"],["r9c5","r9c6"],["r9c7","r9c8"],["r8c9","r9c9"],["r5c9","r6c9","r7c9"],["r3c9","r4c9"],["r1c8","r1c9","r2c9"],["r6c1","r7c1","r8c1"],["r3c1","r4c1","r5c1"],["r1c1","r1c2","r2c1"],["r1c3","r1c4"],["r1c5","r1c6","r1c7"],["r2c5","r3c5","r4c5"],["r5c6","r5c7","r5c8"],["r6c5","r7c5","r8c5"],["r5c2","r5c3","r5c4"]]
```

Normal sudoku rules apply. On the main diagonals digits do not repeat. In ALL cages the digits sum to the same total which has to be determined by the solver. A circled digit indicates exactly how many circles contain that digit.
