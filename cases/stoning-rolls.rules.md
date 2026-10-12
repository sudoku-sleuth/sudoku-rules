---
format: open-rules
title: Stoning Rolls
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1dx1x4fscl
case: https://sudoku-sleuth.com/cases/stoning-rolls
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r4c2 total 8 connected true
cage-2: cage r2c6-r2c7-r3c7 total 7 connected true
cage-3: cage r6c8-r7c7-r7c8 total 9 connected true
cage-4: cage r7c3-r8c3-r8c4 total 10 connected true
cage-5: cage r4c4-r5c4 total 10 connected true
cage-6: cage r6c4-r6c5 total 10 connected true
cage-7: cage r5c6-r6c6 total 10 connected true
cage-8: cage r4c5-r4c6 total 10 connected true
cage-9: cage r8c6-r9c5-r9c6 total 10 connected true
cage-10: cage r1c4-r1c5-r2c4 total 8 connected true
cage-11: cage r4c7-r5c7-r6c7 total 19 connected true
cage-12: cage r4c3-r5c3-r6c3 total 10 connected true
cage-13: cage r8c9-r9c8-r9c9 total 12 connected true
cage-14: cage r8c1-r9c1-r9c2 total 18 connected true
cage-15: cage r1c1-r1c2-r2c1 total 18 connected true
cage-16: cage r1c8-r1c9-r2c9 total 18 connected true
cage-17: cage r4c8-r4c9-r5c9 total 15 connected true
cage-18: cage r5c1-r6c1-r6c2 total 15 connected true
anti-knight
```

- Normal sudoku rules apply.
- Antiknight: Digits a chess knight's move apart must be different.
Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
