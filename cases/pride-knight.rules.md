---
format: open-rules
title: Pride Knight
setter: EPH
source: https://tinyurl.com/bdxsvry6
case: https://sudoku-sleuth.com/cases/pride-knight
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3977bae1e1782a2bb287baf1b5156795
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4-r3c4 total 8 connected true
cage-2: cage r2c7-r2c8-r3c8 total 8 connected true
cage-3: cage r4c7-r4c8-r4c9 total 8 connected true
cage-4: cage r7c6-r8c6-r9c6 total 8 connected true
cage-5: cage r6c1-r6c2-r6c3 total 8 connected true
cage-6: cage r1c6-r2c6-r3c6 total 20 connected true
cage-7: cage r6c7-r6c8-r6c9 total 19 connected true
cage-8: cage r7c4-r8c4-r9c4 total 17 connected true
cage-9: cage r7c2-r8c2-r8c3 total 17 connected true
cage-10: cage r4c1-r4c2-r4c3 total 18 connected true
anti-knight
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits may not repeat in a cage and must sum to the given total.

This is an anti-knight puzzle.  Cells which are a chess knight's move apart must contain different digits.
