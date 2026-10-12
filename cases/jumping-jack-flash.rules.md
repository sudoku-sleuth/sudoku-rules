---
format: open-rules
title: Jumping Jack Flash
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dreqh2ztpj
case: https://sudoku-sleuth.com/cases/jumping-jack-flash
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 24 connected true
cage-2: cage r8c9-r9c8-r9c9 total 23 connected true
cage-3: cage r1c8-r1c9-r2c9 total 6 connected true
cage-4: cage r8c1-r9c1-r9c2 total 7 connected true
cage-5: cage r3c3-r3c4-r4c3 total 6 connected true
cage-6: cage r6c7-r7c6-r7c7 total 7 connected true
cage-7: cage r6c3-r7c3-r7c4 total 23 connected true
cage-8: cage r3c6-r3c7-r4c7 total 24 connected true
cage-9: cage r5c2-r5c3-r5c4 total 8 connected true
cage-10: cage r5c6-r5c7-r5c8 total 22 connected true
cage-11: cage r5c1-r6c1 total 11 connected true
cage-12: cage r4c9-r5c9 total 9 connected true
cage-13: cage r1c5-r2c5 total 11 connected true
cage-14: cage r8c5-r9c5 total 5 connected true
anti-knight
```

- Normal sudoku rules apply.
- Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Digits separated by a knight's move (in chess) must be different.
