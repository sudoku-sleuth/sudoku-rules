---
format: open-rules
title: Jacob's Ladder
setter: Will Power
source: https://f-puzzles.com/?id=y74s9jgj
case: https://sudoku-sleuth.com/cases/jacob-s-ladder
library: https://rules.sudoku-sleuth.com/
status: read
exported: 97cc76c434f649386054ce72a0d4470d
---

```rules
sudoku 9x9
cage-1: cage r7c8-r8c8 total 6 connected true
cage-2: cage r6c7-r7c7 total 7 connected true
cage-3: cage r5c6-r6c6 total 8 connected true
cage-4: cage r4c5-r5c5 total 9 connected true
cage-5: cage r3c4-r4c4 total 10 connected true
cage-6: cage r2c3-r3c3 total 11 connected true
cage-7: cage r1c2-r2c2 total 12 connected true
cage-8: cage r9c7-r9c8 total 13 connected true
cage-9: cage r8c6-r8c7 total 14 connected true
cage-10: cage r7c5-r7c6 total 15 connected true
cage-11: cage r6c4-r6c5 total 16 connected true
cage-12: cage r1c1-r2c1 total 6 connected true
cage-13: cage r7c4-r8c4 total 14 connected true
cage-14: cage r4c8-r5c7-r5c8-r5c9-r6c8 total 18 connected true
cage-15: cage r4c3-r5c2-r5c3-r5c4-r6c3 total 32 connected true
cage-16: cage r3c5-r3c6-r4c6 total 18 connected true
cage-17: cage r1c4-r1c5-r1c6 total 10 connected true
cage-18: cage r8c9-r9c9 total 5 connected true
```

Normal Sudoku rules apply.  Numbers in cages sum to the total in the top left corner of the cage.  Numbers cannot repeat in cages.
