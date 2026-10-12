---
format: open-rules
title: Outward Expansion
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nrep0m2oi8
case: https://sudoku-sleuth.com/cases/outward-expansion
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c7-r7c8-r7c9-r8c7-r9c7 total 15 connected true
cage-2: cage r1c7-r2c7-r3c7-r3c8-r3c9 total 35 connected true
cage-3: cage r1c3-r2c3-r3c1-r3c2-r3c3 total 16 connected true
cage-4: cage r7c1-r7c2-r7c3-r8c3-r9c3 total 34 connected true
cage-5: cage r3c4-r3c5-r3c6 total 8 connected true
cage-6: cage r4c3-r5c3-r6c3 total 22 connected true
cage-7: cage r4c7-r5c7-r6c7 total 21 connected true
cage-8: cage r7c4-r7c5-r7c6 total 9 connected true
cage-9: cage r4c9-r5c9-r6c9 total 9 connected true
cage-10: cage r9c4-r9c5-r9c6 total 21 connected true
cage-11: cage r4c1-r5c1-r6c1 total 8 connected true
cage-12: cage r1c4-r1c5-r1c6 total 21 connected true
cage-13: cage r4c4-r4c5 total 4 connected true
cage-14: cage r5c4-r6c4 total 6 connected true
cage-15: cage r6c5-r6c6 total 14 connected true
cage-16: cage r4c6-r5c6 total 16 connected true
cage-17: cage r1c8-r1c9-r2c9 total 8 connected true
cage-18: cage r1c1-r1c2-r2c1 total 20 connected true
cage-19: cage r5c2-r6c2 total 13 connected true
cage-20: cage r2c5-r2c6 total 10 connected true
cage-21: cage r5c8-r6c8 total 8 connected true
```

Normal sudoku rules apply. 

Killer cages: Digits within cages marked by dashed lines cannot repeat and must sum to the number in the upper left corner of the cage.
