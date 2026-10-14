---
format: open-rules
title: Given 24
setter: sujoyku
source: https://sudokupad.app/bb3yfshrxn
case: https://sudoku-sleuth.com/cases/given-24
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=2 r1c8=4
exported: f5a71b43a7707a8cbdde9ca396c680ab
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 24 connected true
cage-2: cage r1c3-r2c2-r2c3-r3c1-r3c2-r4c1 total 24 connected true
cage-3: cage r8c9-r9c8-r9c9 total 24 connected true
cage-4: cage r6c9-r7c8-r7c9-r8c7-r8c8-r9c7 total 24 connected true
cage-5: cage r2c5-r3c3-r3c4-r3c5 total 24 connected true
cage-6: cage r1c4-r1c5-r1c6-r2c4 total 24 connected true
cage-7: cage r3c6-r4c5-r4c6-r5c5 total 24 connected true
cage-8: cage r2c6-r2c7-r2c8-r3c8 total 24 connected true
cage-9: cage r4c7-r4c8-r4c9-r5c7 total 24 connected true
cage-10: cage r6c4-r6c5-r6c6-r6c7-r7c7 total 24 connected true
cage-11: cage r6c1-r6c2-r6c3-r7c2 total 24 connected true
cage-12: cage r7c1-r8c1-r9c1-r9c2-r9c3 total 24 connected true
cage-13: cage r7c4-r7c5-r7c6-r8c6 total 24 connected true
cage-14: cage r8c3-r8c4-r8c5-r9c5 total 24 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 24.
