---
format: open-rules
title: Dance Around the Maypole
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ug9tck5x25
case: https://sudoku-sleuth.com/cases/dance-around-the-maypole
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7a8744b99bfda2f4ef85c1766cc37dd8
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 3 connected true
cage-2: cage r1c3-r1c4 total 7 connected true
cage-3: cage r1c5-r1c6 total 11 connected true
cage-4: cage r1c7-r1c8 total 15 connected true
cage-5: cage r1c9-r2c9 total 10 connected true
cage-6: cage r3c9-r4c9 total 5 connected true
cage-7: cage r5c9-r6c9 total 9 connected true
cage-8: cage r7c9-r8c9 total 13 connected true
cage-9: cage r9c8-r9c9 total 9 connected true
cage-10: cage r9c6-r9c7 total 5 connected true
cage-11: cage r9c4-r9c5 total 9 connected true
cage-12: cage r9c2-r9c3 total 13 connected true
cage-13: cage r8c1-r9c1 total 10 connected true
cage-14: cage r6c1-r7c1 total 7 connected true
cage-15: cage r4c1-r5c1 total 11 connected true
cage-16: cage r2c1-r3c1 total 15 connected true
cage-17: cage r2c2-r2c3 total 8 connected true
cage-18: cage r8c7-r8c8 total 6 connected true
cage-19: cage r7c2-r8c2 total 5 connected true
cage-20: cage r2c8-r3c8 total 7 connected true
cage-21: cage r6c3-r7c3 total 17 connected true
cage-22: cage r3c3-r3c4 total 10 connected true
cage-23: cage r3c7-r4c7 total 12 connected true
cage-24: cage r7c6-r7c7 total 15 connected true
cage-25: cage r4c3-r4c4 total 8 connected true
cage-26: cage r3c6-r4c6 total 5 connected true
cage-27: cage r6c4-r7c4 total 3 connected true
cage-28: cage r6c6-r6c7 total 8 connected true
```

Normal sudoku rules apply. 

Cages: Digits within cages marked by dashed lines cannot repeat and must sum to the number in the upper left corner of the cage.
