---
format: open-rules
title: Corner killer
setter: sujoyku
source: https://sudokupad.app/9osxdwr2wx
case: https://sudoku-sleuth.com/cases/corner-killer
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c7=9
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r3c1 total 21 connected true
cage-2: cage r1c3-r1c4 total 10 connected true
cage-3: cage r1c5-r1c6 total 9 connected true
cage-4: cage r1c7-r1c8-r1c9-r2c9 total 26 connected true
cage-5: cage r2c6-r2c7-r2c8-r3c8-r4c8 total 23 connected true
cage-6: cage r3c9-r4c9 total 7 connected true
cage-7: cage r2c2-r2c3-r2c4-r3c2-r4c2 total 26 connected true
cage-8: cage r4c1-r5c1 total 11 connected true
cage-9: cage r6c1-r7c1 total 9 connected true
cage-10: cage r6c2-r7c2-r8c2-r8c3-r8c4 total 30 connected true
cage-11: cage r8c1-r9c1-r9c2-r9c3 total 26 connected true
cage-12: cage r9c4-r9c5 total 11 connected true
cage-13: cage r9c6-r9c7 total 8 connected true
cage-14: cage r7c9-r8c9-r9c8-r9c9 total 22 connected true
cage-15: cage r5c9-r6c9 total 13 connected true
cage-16: cage r6c8-r7c8-r8c6-r8c7-r8c8 total 25 connected true
cage-17: cage r5c4-r6c4-r6c5 total 20 connected true
```

Normal sudoku rules apply. Digits in a killer box do not repeat and sum to the hint in the top left.
