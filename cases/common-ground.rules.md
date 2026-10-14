---
format: open-rules
title: Common Ground
setter: sujoyku
source: https://sudokupad.app/7wqd8je4di
case: https://sudoku-sleuth.com/cases/common-ground
library: https://rules.sudoku-sleuth.com/
status: read
exported: e0ae32d30f52347ac6bcb201e0a12dae
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c1-r4c2 total 12 connected true
cage-2: cage r5c2-r6c2-r6c3 total 8 connected true
cage-3: cage r9c2-r9c3-r9c4 total 8 connected true
cage-4: cage r7c1-r8c1-r9c1 total 22 connected true
cage-5: cage r8c6-r8c7-r9c6 total 22 connected true
cage-6: cage r7c5-r8c4-r8c5 total 18 connected true
cage-7: cage r3c5-r3c6-r3c7-r4c5-r4c7 total 15 connected true
cage-8: cage r5c5-r5c7-r6c5-r6c6-r6c7 total 35 connected true
cage-9: cage r1c4-r2c4 total 10 connected true
cage-10: cage r1c6-r2c6 total 6 connected true
cage-11: cage r1c8-r1c9-r2c9 total 14 connected true
cage-12: cage r1c1-r1c2 total 13 connected true
cage-13: cage r8c9-r9c9 total 11 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage do not repeat and must sum to the clue in the top left.
