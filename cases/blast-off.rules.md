---
format: open-rules
title: Blast Off
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0qqqkdih3s
case: https://sudoku-sleuth.com/cases/blast-off
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=3 r1c9=7 r2c5=5 r7c1=6 r7c9=4 r8c5=8
---

```rules
sudoku 9x9
cage-1: cage r4c3-r4c4-r5c4 total 22 connected true
cage-2: cage r4c6-r4c7-r5c6 total 10 connected true
cage-3: cage r6c6-r6c7-r7c7 total 8 connected true
cage-4: cage r6c3-r6c4-r7c3 total 21 connected true
cage-5: cage r7c4-r8c2-r8c3-r8c4 total 24 connected true
cage-6: cage r7c6-r8c6-r8c7-r8c8 total 14 connected true
cage-7: cage r2c7-r3c6-r3c7 total 19 connected true
cage-8: cage r2c3-r3c3-r3c4 total 14 connected true
cage-9: cage r1c6-r1c7-r1c8-r2c8 total 28 connected true
cage-10: cage r1c2-r1c3-r1c4-r2c2 total 13 connected true
cage-11: cage r8c1-r9c1 total 7 connected true
cage-12: cage r8c9-r9c9 total 8 connected true
anti-knight
```

- Normal sudoku rules apply.
- Antiknight: Digits a chess knight's move apart must be different.
- Cages: Digits within a cage may not repeat and must sum to the value shown in the upper left corner of the cage.
