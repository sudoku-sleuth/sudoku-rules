---
format: open-rules
title: A Walk With A Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yoezwo837g
case: https://sudoku-sleuth.com/cases/a-walk-with-a-knight
library: https://rules.sudoku-sleuth.com/
status: read
exported: e597cd34d12c29953cffea0aa4de2175
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r4c3-r4c4-r5c3 total 17 connected true
cage-2: cage r5c7-r6c6-r6c7-r7c5-r7c6 total 33 connected true
cage-3: cage r6c2-r7c2-r7c3-r8c3-r8c4 total 16 connected true
cage-4: cage r2c6-r2c7-r3c7-r3c8-r4c8 total 34 connected true
cage-5: cage r7c9-r8c8-r8c9-r9c7-r9c8 total 20 connected true
cage-6: cage r1c2-r1c3-r2c1-r2c2-r3c1 total 23 connected true
cage-7: cage r4c1-r5c1-r6c1 total 15 connected true
cage-8: cage r4c9-r5c9-r6c9 total 15 connected true
cage-9: cage r8c2-r9c2 total 15 connected true
cage-10: cage r6c3-r6c4 total 10 connected true
cage-11: cage r4c6-r4c7 total 17 connected true
cage-12: cage r8c5-r8c6 total 5 connected true
cage-13: cage r2c4-r2c5 total 16 connected true
cage-14: cage r1c8-r2c8 total 6 connected true
anti-knight
```

- Normal sudoku rules apply.
- Antiknight: Digits a chess knight's move apart must be different.
- Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
