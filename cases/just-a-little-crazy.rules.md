---
format: open-rules
title: Just a Little Crazy
setter: sujoyku
source: https://sudokupad.app/junsuofcqy
case: https://sudoku-sleuth.com/cases/just-a-little-crazy
library: https://rules.sudoku-sleuth.com/
status: read
exported: fdd0ba78d10e709e1efbde579ad32dfd
---

```rules
sudoku 9x9
cage-1: cage r8c2-r9c1-r9c2 total 7 connected true
cage-2: cage r9c3-r9c4 total 7 connected true
cage-3: cage r7c7-r7c8-r7c9-r8c9 total 24 connected true
cage-4: cage r7c4-r7c5 total 8 connected true
cage-5: cage r7c6-r8c6 total 5 connected true
cage-6: cage r3c5-r3c6 total 5 connected true
cage-7: cage r2c4-r3c4 total 8 connected true
cage-8: cage r1c6-r1c7 total 9 connected true
cage-9: cage r1c8-r1c9-r2c8 total 9 connected true
cage-10: cage r2c1-r3c1-r3c2-r3c3 total 28 connected true
cage-11: cage r4c3-r5c3 total 14 connected true
cage-12: cage r5c7-r6c7 total 6 connected true
cage-13: cage r6c1-r7c1 total 10 connected true
cage-14: cage r3c9-r4c9 total 10 connected true
cage-15: cage r4c8-r5c8 total 12 connected true
cage-16: cage r5c2-r6c2 total 8 connected true
cage-17: cage r5c4-r6c4 total 12 connected true
cage-18: cage r4c6-r5c6 total 12 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage must sum to the clue in the top left.
