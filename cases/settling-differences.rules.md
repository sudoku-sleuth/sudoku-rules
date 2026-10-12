---
format: open-rules
title: Settling Differences
setter: sujoyku
source: https://sudokupad.app/tbn85ql5jj
case: https://sudoku-sleuth.com/cases/settling-differences
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2-r4c2 total 12 connected true
cage-2: cage r1c3-r2c3-r2c4 total 11 connected true
cage-3: cage r1c2-r2c1-r2c2 total 10 connected true
cage-4: cage r3c3-r3c4-r4c3 total 13 connected true
cage-5: cage r4c4-r4c5-r4c6-r5c4-r6c4 total 15 connected true
cage-6: cage r4c1-r5c1 total 9 connected true
cage-7: cage r1c4-r1c5 total 9 connected true
cage-8: cage r6c5-r7c5-r8c5 total 10 connected true
cage-9: cage r5c6-r5c7-r5c8 total 11 connected true
cage-10: cage r6c3-r7c3 total 6 connected true
cage-11: cage r3c6-r3c7 total 6 connected true
cage-12: cage r8c9-r9c8-r9c9 total 20 connected true
cage-13: cage r1c8-r2c8 total 10 connected true
cage-14: cage r8c1-r8c2 total 10 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage do not repeat and must sum to the clue in the top left.
