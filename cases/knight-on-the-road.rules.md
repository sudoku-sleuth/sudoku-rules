---
format: open-rules
title: Knight on the Road
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kgp6jzmk37
case: https://sudoku-sleuth.com/cases/knight-on-the-road
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3-r4c4 total 7 connected true
cage-2: cage r3c7-r4c6-r4c7 total 23 connected true
cage-3: cage r6c6-r6c7-r7c7 total 8 connected true
cage-4: cage r6c3-r6c4-r7c3 total 22 connected true
cage-5: cage r7c2-r8c2-r8c3 total 6 connected true
cage-6: cage r2c7-r2c8-r3c8 total 8 connected true
cage-7: cage r7c8-r8c7-r8c8 total 24 connected true
cage-8: cage r2c2-r2c3-r3c2 total 20 connected true
cage-9: cage r8c1-r9c1-r9c2 total 22 connected true
cage-10: cage r8c9-r9c8-r9c9 total 10 connected true
cage-11: cage r1c8-r1c9-r2c9 total 15 connected true
cage-12: cage r1c1-r1c2-r2c1 total 14 connected true
cage-13: cage r5c3-r5c4 total 8 connected true
cage-14: cage r3c5-r4c5 total 14 connected true
cage-15: cage r5c6-r5c7 total 12 connected true
cage-16: cage r6c5-r7c5 total 5 connected true
cage-17: cage r5c1-r5c2 total 7 connected true
cage-18: cage r5c8-r5c9 total 12 connected true
cage-19: cage r8c5-r9c5 total 9 connected true
cage-20: cage r1c5-r2c5 total 11 connected true
anti-knight
```

- Normal sudoku rules apply.
- Antiknight: Digits a chess knight's move apart must be different.
- Cages: Within cages, digits may not repeat and must sum to the value shown in the upper left corner of the cage.
