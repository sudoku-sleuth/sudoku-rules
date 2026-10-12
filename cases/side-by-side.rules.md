---
format: open-rules
title: Side by side
setter: sujoyku
source: https://sudokupad.app/r5wcack6v2
case: https://sudoku-sleuth.com/cases/side-by-side
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c3-r8c4-r9c4 total 9 connected true
cage-2: cage r7c4-r7c5-r8c5 total 9 connected true
cage-3: cage r1c3-r1c4-r2c2-r2c3-r3c2 total 17 connected true
cage-4: cage r2c4-r2c5-r3c3-r3c4-r4c3 total 17 connected true
cage-5: cage r1c6-r1c7 total 12 connected true
cage-6: cage r1c8-r1c9 total 12 connected true
cage-7: cage r7c7-r8c7-r8c8 total 10 connected true
cage-8: cage r6c8-r7c8-r7c9 total 10 connected true
cage-9: cage r2c9-r3c9 total 9 connected true
cage-10: cage r4c9-r5c9 total 9 connected true
cage-11: cage r5c6-r5c7-r6c7 total 15 connected true
cage-12: cage r6c5-r6c6-r7c6 total 15 connected true
cage-13: cage r6c2-r7c2 total 15 connected true
cage-14: cage r5c3-r6c3 total 15 connected true
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage do not repeat and must sum to the clue in the top left.
