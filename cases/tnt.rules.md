---
format: open-rules
title: TNT
setter: sujoyku
source: https://sudokupad.app/w1qvluksh8
case: https://sudoku-sleuth.com/cases/tnt
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 20 connected true
cage-2: cage r1c8-r1c9-r2c9 total 22 connected true
cage-3: cage r4c1-r5c1 total 14 connected true
cage-4: cage r4c9-r5c9 total 14 connected true
cage-5: cage r4c3-r5c3-r6c2-r6c3-r6c4 total 19 connected true
cage-6: cage r8c1-r9c1-r9c2 total 21 connected true
cage-7: cage r8c9-r9c8-r9c9 total 20 connected true
cage-8: cage r1c5-r1c6 total 11 connected true
cage-9: cage r9c5-r9c6 total 11 connected true
cage-10: cage r4c6-r5c6-r5c7 total 20 connected true
cage-11: cage r2c4-r3c2-r3c3-r3c4-r4c4 total 19 connected true
cage-12: cage r7c5-r7c6-r7c7 total 15 connected true
cage-13: cage r2c7-r3c7-r4c7 total 15 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage do not repeat and must sum to the clue in the top left.
