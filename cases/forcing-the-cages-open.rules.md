---
format: open-rules
title: Forcing the Cages Open
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0wlhzwk7ft
case: https://sudoku-sleuth.com/cases/forcing-the-cages-open
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c2-r5c3-r5c4 total 6 connected true
cage-2: cage r5c6-r5c7-r5c8 total 24 connected true
cage-3: cage r2c5-r3c5-r4c5 total 7 connected true
cage-4: cage r6c5-r7c5-r8c5 total 23 connected true
cage-5: cage r3c4-r4c3-r4c4 total 24 connected true
cage-6: cage r6c6-r6c7-r7c6 total 23 connected true
cage-7: cage r6c3-r6c4-r7c4 total 6 connected true
cage-8: cage r3c6-r4c6-r4c7 total 7 connected true
cage-9: cage r1c4-r1c5-r1c6 total 14 connected true
cage-10: cage r3c8-r3c9-r4c8 total 19 connected true
cage-11: cage r3c1-r3c2-r4c2 total 13 connected true
cage-12: cage r6c2-r7c1-r7c2 total 21 connected true
cage-13: cage r6c8-r7c8-r7c9 total 13 connected true
cage-14: cage r1c3-r2c3-r3c3 total 16 connected true
cage-15: cage r1c7-r2c7-r3c7 total 15 connected true
cage-16: cage r7c3-r8c2-r8c3 total 10 connected true
cage-17: cage r7c7-r8c7-r8c8 total 10 connected true
cage-18: cage r1c1-r1c2 total 10 connected true
cage-19: cage r1c8-r1c9 total 10 connected true
cage-20: cage r5c1-r6c1 total 10 connected true
cage-21: cage r5c9-r6c9 total 9 connected true
```

- Normal Sudoku rules apply.
- Digits in cages cannot repeat and must sum to the value given in the top left corner.
