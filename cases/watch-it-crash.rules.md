---
format: open-rules
title: Watch It Crash
setter: sujoyku
source: https://sudokupad.app/4z8ku01djc
case: https://sudoku-sleuth.com/cases/watch-it-crash
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4-r2c4 total 13 connected true
cage-2: cage r1c6-r1c7-r1c8-r2c6 total 13 connected true
cage-3: cage r2c1-r2c2-r3c1 total 10 connected true
cage-4: cage r2c8-r2c9-r3c9 total 10 connected true
cage-5: cage r3c3-r3c4-r4c4 total 8 connected true
cage-6: cage r3c6-r3c7-r4c6 total 14 connected true
cage-7: cage r4c9-r5c9-r6c9 total 18 connected true
cage-8: cage r7c7-r8c7-r9c7-r9c8 total 12 connected true
cage-9: cage r4c1-r5c1-r6c1 total 17 connected true
cage-10: cage r7c3-r8c3-r9c2-r9c3 total 16 connected true
cage-11: cage r9c4-r9c5-r9c6 total 14 connected true
cage-12: cage r5c2-r6c2 total 7 connected true
cage-13: cage r5c8-r6c8 total 6 connected true
cage-14: cage r5c3-r5c4 total 10 connected true
cage-15: cage r5c6-r5c7 total 10 connected true
cage-16: cage r6c5-r7c5 total 8 connected true
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 Region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage do not repeat and must sum to the clue in the top left.
