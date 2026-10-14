---
format: open-rules
title: Young Guns
setter: sujoyku
source: https://sudokupad.app/5h2ts721l4
case: https://sudoku-sleuth.com/cases/young-guns
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7bc64b71806eb7dfbe1d8293fa7d8e7c
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c3-r2c4 total 12 connected true
cage-2: cage r2c1-r3c1-r3c2-r4c2 total 13 connected true
cage-3: cage r6c3-r7c3-r8c2-r8c3 total 12 connected true
cage-4: cage r5c1-r5c2-r6c1-r7c1 total 13 connected true
cage-5: cage r3c4-r4c3-r4c4 total 11 connected true
cage-6: cage r1c7-r1c8-r2c6-r2c7 total 11 connected true
cage-7: cage r2c9-r3c8-r3c9-r4c8 total 14 connected true
cage-8: cage r6c7-r6c8-r7c7-r8c7 total 14 connected true
cage-9: cage r7c9-r8c9-r9c8-r9c9 total 15 connected true
cage-10: cage r3c6-r4c6-r4c7 total 13 connected true
cage-11: cage r5c4-r6c4-r6c5 total 11 connected true
cage-12: cage r8c5-r9c5-r9c6 total 12 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage do not repeat and must sum to the clue in the top left.
