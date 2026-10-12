---
format: open-rules
title: Ascent / Descent
setter: Will Power
source: https://f-puzzles.com/?id=ydg7byuw
case: https://sudoku-sleuth.com/cases/ascent-descent
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c9 total 15 connected true
cage-2: cage r2c8-r3c8 total 14 connected true
cage-3: cage r3c7-r4c7 total 13 connected true
cage-4: cage r4c6-r5c6 total 12 connected true
cage-5: cage r5c5-r6c5 total 11 connected true
cage-6: cage r6c4-r7c4 total 10 connected true
cage-7: cage r7c3-r8c3 total 9 connected true
cage-8: cage r8c2-r9c2 total 8 connected true
cage-9: cage r8c1-r9c1 total 7 connected true
cage-10: cage r6c2-r6c3 total 6 connected true
cage-11: cage r5c1-r5c2 total 5 connected true
cage-12: cage r6c6-r7c6 total 3 connected true
cage-13: cage r7c7-r8c7 total 4 connected true
cage-14: cage r7c8-r7c9 total 16 connected true
cage-15: cage r1c6-r2c6 total 17 connected true
kropki-1: kropki r1c4-r1c5 colour "black"
kropki-2: kropki r2c2-r2c3 colour "black"
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a black dot between them are in a ratio of 2:1.
