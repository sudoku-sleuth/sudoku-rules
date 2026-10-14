---
format: open-rules
title: Chivalry
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pf0vi43jko
case: https://sudoku-sleuth.com/cases/chivalry
library: https://rules.sudoku-sleuth.com/
status: read
exported: dce2b3a8469d7d676a1743db91a6de13
---

```rules
sudoku 9x9
cage-1: cage r3c4-r4c3-r4c4 total 7 connected true
cage-2: cage r6c6-r6c7-r7c6 total 23 connected true
cage-3: cage r5c4-r6c4-r6c5 total 20 connected true
cage-4: cage r4c5-r4c6-r5c6 total 10 connected true
cage-5: cage r4c1-r5c1-r5c2-r5c3-r6c1 total 35 connected true
cage-6: cage r4c9-r5c7-r5c8-r5c9-r6c9 total 15 connected true
cage-7: cage r2c7-r2c8 total 7 connected true
cage-8: cage r6c3-r7c3-r7c4 total 7 connected true
cage-9: cage r7c7-r8c7-r8c8 total 7 connected true
cage-10: cage r2c2-r2c3-r3c3 total 23 connected true
cage-11: cage r3c5-r3c6 total 10 connected true
cage-12: cage r2c1-r3c1 total 11 connected true
cage-13: cage r9c7-r9c8 total 11 connected true
cage-14: cage r7c1-r8c1-r9c1 total 11 connected true
anti-knight
```

Never underestimate the power of a knight.

Standard sudoku rules apply. Killer cages: Digits within a cage cannot repeat and must sum to the total shown in the upper left corner of the cage. Antiknight constraint: The same digit cannot appear a chess knight's move apart.
