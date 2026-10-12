---
format: open-rules
title: ¡Dame Quince!
setter: sujoyku
source: https://sudokupad.app/q60rv7rvfk
case: https://sudoku-sleuth.com/cases/dame-quince
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r3c2-r4c2-r4c3 total 15 connected true
cage-2: cage r6c3-r7c3 total 15 connected true
cage-3: cage r1c4-r1c5 total 15 connected true
cage-4: cage r7c2-r8c2-r8c3-r9c3-r9c4 total 15 connected true
cage-5: cage r7c1-r8c1-r9c1 total 15 connected true
cage-6: cage r9c5-r9c6 total 15 connected true
cage-7: cage r8c6-r8c7-r9c7-r9c8-r9c9 total 15 connected true
cage-8: cage r6c7-r7c6-r7c7-r7c8 total 15 connected true
cage-9: cage r2c7-r3c7-r4c6-r4c7 total 15 connected true
cage-10: cage r1c6-r1c7-r2c5-r2c6 total 15 connected true
cage-11: cage r3c9-r4c9 total 15 connected true
cage-12: cage r2c8-r2c9-r3c8 total 15 connected true
cage-13: cage r4c1-r5c1-r5c2 total 15 connected true
cage-14: cage r5c5-r6c4-r6c5-r7c5 total 15 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage do not repeat and must sum to 15.
