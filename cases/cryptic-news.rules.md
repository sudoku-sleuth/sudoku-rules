---
format: open-rules
title: Cryptic News
setter: sujoyku
source: https://sudokupad.app/o10r51lypt
case: https://sudoku-sleuth.com/cases/cryptic-news
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r2c9-r3c9-r4c9 connected true
cage-2: cage r6c9-r7c9-r8c7-r8c8-r8c9 connected true
equal-sums-1: equal-sums groups [["r2c7","r2c8","r2c9","r3c9","r4c9"],["r6c9","r7c9","r8c7","r8c8","r8c9"],["r1c2","r2c1"]]
cage-3: cage r1c6-r1c7-r1c8 connected true
cage-4: cage r6c1-r7c1-r8c1 connected true
cage-5: cage r3c4-r3c5-r4c3-r4c4-r5c2-r5c3 connected true
equal-sums-2: equal-sums groups [["r1c6","r1c7","r1c8"],["r6c1","r7c1","r8c1"],["r3c4","r3c5","r4c3","r4c4","r5c2","r5c3"],["r1c4","r2c3","r3c2","r4c1"]]
cage-6: cage r3c6-r4c6 connected true
cage-7: cage r4c1-r4c2 connected true
cage-8: cage r5c5 connected true
cage-9: cage r8c2-r9c1-r9c2 connected true
cage-10: cage r9c6-r9c7-r9c8 connected true
cage-11: cage r2c6 connected true
cage-12: cage r6c3 connected true
equal-sums-3: equal-sums groups [["r3c6","r4c6"],["r4c1","r4c2"],["r5c5"],["r8c2","r9c1","r9c2"],["r9c6","r9c7","r9c8"],["r2c6"],["r6c3"],["r1c5","r2c4","r3c3","r4c2","r5c1"]]
cage-13: cage r7c5-r7c6-r8c4-r8c5 connected true
cage-14: cage r3c7-r4c7 connected true
equal-sums-4: equal-sums groups [["r7c5","r7c6","r8c4","r8c5"],["r3c7","r4c7"],["r1c3","r2c2","r3c1"]]
```

Happy Birthday, NEWS!
---
- Normal Sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Cryptic Clues: Each of the letters N, E, W and S represents a number to be determined by the solver.

- Killer Cages: Digits in a cage do not repeat and must sum to the clue in the top left.

- Little Killer: Digits on a marked diagonal must sum to the clue outside the grid. (If there is no conflict with other rules, digits on such a diagonal may repeat.)
