---
format: open-rules
title: Give a Little Bit
setter: sujoyku
source: https://sudokupad.app/wt2a0v595d
case: https://sudoku-sleuth.com/cases/give-a-little-bit
library: https://rules.sudoku-sleuth.com/
status: read
exported: 861d2917286382ccfba0b39a4db96552
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c3-r2c4 total 13 connected true
cage-2: cage r2c1-r3c1-r3c2-r4c2 total 13 connected true
cage-3: cage r5c3-r5c4-r6c4-r6c5 total 12 connected true
cage-4: cage r3c5-r4c5-r4c6-r5c6 total 12 connected true
cage-5: cage r5c1-r6c1-r6c2 total 10 connected true
cage-6: cage r1c5-r1c6-r2c6 total 13 connected true
cage-7: cage r7c3-r8c3 total 13 connected true
cage-8: cage r3c7-r3c8 total 13 connected true
cage-9: cage r7c6-r8c6-r8c7-r9c7 total 13 connected true
cage-10: cage r6c7-r6c8-r7c8-r7c9 total 13 connected true
cage-11: cage r1c9-r2c9 total 6 connected true
cage-12: cage r9c1-r9c2 total 13 connected true
cage-13: cage r4c9-r5c9 total 13 connected true
cage-14: cage r9c4-r9c5 total 13 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to the clue in the top left.
