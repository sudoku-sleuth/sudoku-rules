---
format: open-rules
title: Peruvian Weaving
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/peruvian-weaving
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c4=5 r2c5=2 r4c8=9 r5c2=1 r5c8=7 r6c2=6 r8c5=7 r8c6=1
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 5 connected true
cage-2: cage r1c2-r1c3 total 6 connected true
cage-3: cage r1c7-r1c8 total 15 connected true
cage-4: cage r2c9-r3c9 total 14 connected true
cage-5: cage r2c7-r2c8 total 5 connected true
cage-6: cage r2c2-r2c3 total 14 connected true
cage-7: cage r7c1-r8c1 total 7 connected true
cage-8: cage r7c9-r8c9 total 15 connected true
cage-9: cage r9c7-r9c8 total 15 connected true
cage-10: cage r9c2-r9c3 total 6 connected true
cage-11: cage r7c8-r8c8 total 6 connected true
cage-12: cage r6c6-r6c7 total 12 connected true
cage-13: cage r4c3-r4c4 total 11 connected true
cage-14: cage r3c6-r4c6 total 13 connected true
cage-15: cage r6c4-r7c4 total 11 connected true
```

Normal Sudoku rules apply.

Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within cages.
