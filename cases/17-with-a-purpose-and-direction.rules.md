---
format: open-rules
title: 17 With a Purpose and Direction
setter: sujoyku
source: https://sudokupad.app/mwa0bd2tqt
case: https://sudoku-sleuth.com/cases/17-with-a-purpose-and-direction
library: https://rules.sudoku-sleuth.com/
status: read
exported: fca15369474ee4cedf44774ddad3dd0e
---

```rules
sudoku 9x9
cage-1: cage r5c4-r6c4-r6c5-r7c5-r8c5 total 17 connected true
cage-2: cage r2c5-r3c5-r4c5-r4c6-r5c6 total 17 connected true
cage-3: cage r5c1-r5c2-r5c3 total 17 connected true
cage-4: cage r5c7-r5c8-r5c9 total 17 connected true
cage-5: cage r8c3-r8c4-r9c4-r9c5 total 17 connected true
cage-6: cage r1c4-r1c5-r2c3-r2c4 total 17 connected true
cage-7: cage r1c1-r1c2-r1c3-r2c1-r3c1 total 17 connected true
cage-8: cage r6c1-r6c2-r7c1-r8c1-r9c1 total 17 connected true
cage-9: cage r1c7-r2c6-r2c7-r3c6 total 17 connected true
cage-10: cage r6c8-r6c9-r7c9-r8c9-r9c9 total 17 connected true
cage-11: cage r8c2-r9c2-r9c3 total 17 connected true
cage-12: cage r8c8-r9c7-r9c8 total 17 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 17.
