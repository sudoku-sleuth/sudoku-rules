---
format: open-rules
title: Round of Sixteen
setter: sujoyku
source: https://sudokupad.app/8mlp26z3f8
case: https://sudoku-sleuth.com/cases/round-of-sixteen
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r3c2-r4c1 total 16 connected true
cage-2: cage r2c2-r2c3-r3c3 total 16 connected true
cage-3: cage r1c1-r1c2-r1c3-r1c4 total 16 connected true
cage-4: cage r4c4-r4c5-r4c6-r5c4-r6c4 total 16 connected true
cage-5: cage r7c4-r8c4-r9c4 total 16 connected true
cage-6: cage r4c7-r4c8-r4c9 total 16 connected true
cage-7: cage r1c5-r1c6-r2c4-r2c5 total 16 connected true
cage-8: cage r4c2-r5c1-r5c2-r6c1 total 16 connected true
cage-9: cage r8c1-r9c1-r9c2 total 16 connected true
cage-10: cage r1c8-r1c9-r2c9 total 16 connected true
cage-11: cage r6c5-r6c6-r7c6-r7c7 total 16 connected true
cage-12: cage r5c6-r5c7-r6c7-r6c8 total 16 connected true
cage-13: cage r6c9-r7c8-r7c9-r8c8 total 16 connected true
cage-14: cage r8c5-r8c6-r9c6 total 16 connected true
cage-15: cage r7c3-r8c2-r8c3-r9c3 total 16 connected true
cage-16: cage r3c6-r3c7-r3c8 total 16 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 16.
