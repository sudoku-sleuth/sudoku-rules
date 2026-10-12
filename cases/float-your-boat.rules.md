---
format: open-rules
title: Float Your Boat
setter: sujoyku
source: https://sudokupad.app/9rb38qftm0
case: https://sudoku-sleuth.com/cases/float-your-boat
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c3-r7c3-r7c4 total 23 connected true
cage-2: cage r3c3-r3c4-r4c3 total 20 connected true
cage-3: cage r7c1-r8c1-r9c1-r9c2 total 12 connected true
cage-4: cage r1c7-r1c8-r1c9-r2c9 total 12 connected true
cage-5: cage r3c6-r3c7-r4c7 total 24 connected true
cage-6: cage r4c4-r4c5-r5c4 total 22 connected true
cage-7: cage r1c1-r1c2-r2c1 total 18 connected true
cage-8: cage r6c5-r7c5-r8c5 total 9 connected true
cage-9: cage r5c6-r5c7-r5c8 total 9 connected true
cage-10: cage r7c6-r8c6-r8c7 total 18 connected true
cage-11: cage r6c7-r6c8-r7c8 total 12 connected true
cage-12: cage r7c9-r8c9 total 12 connected true
cage-13: cage r9c7-r9c8 total 12 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to the clue in the top left.
