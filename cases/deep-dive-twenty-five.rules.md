---
format: open-rules
title: Deep Dive Twenty-Five
setter: sujoyku
source: https://sudokupad.app/6l12354mb8
case: https://sudoku-sleuth.com/cases/deep-dive-twenty-five
library: https://rules.sudoku-sleuth.com/
status: read
exported: c495e5871026d4f7d28e610f71a54b44
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6-r4c5 total 25 connected true
cage-2: cage r7c1-r8c1-r8c2-r9c1 total 25 connected true
cage-3: cage r3c1-r4c1-r5c1-r6c1 total 25 connected true
cage-4: cage r3c9-r4c8-r4c9-r5c9 total 25 connected true
cage-5: cage r6c9-r7c9-r8c9-r9c9 total 25 connected true
cage-6: cage r1c5-r1c6-r1c7-r2c7-r3c7-r4c7 total 25 connected true
cage-7: cage r5c2-r6c2-r6c3-r7c2 total 25 connected true
cage-8: cage r1c2-r2c1-r2c2-r2c3-r3c2 total 25 connected true
cage-9: cage r5c4-r6c4-r6c5-r6c6 total 25 connected true
cage-10: cage r9c2-r9c3-r9c4-r9c5 total 25 connected true
cage-11: cage r5c7-r5c8-r6c8-r7c7-r7c8 total 25 connected true
cage-12: cage r7c6-r8c5-r8c6-r8c7-r9c6 total 25 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 25.
