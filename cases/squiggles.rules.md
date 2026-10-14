---
format: open-rules
title: Squiggles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1ulduad2xb
case: https://sudoku-sleuth.com/cases/squiggles
library: https://rules.sudoku-sleuth.com/
status: read
exported: a2a7c92084e559e18abfb26695b896e0
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c3 total 10 connected true
cage-2: cage r3c7-r3c8 total 15 connected true
cage-3: cage r4c9-r5c9-r6c9 total 24 connected true
cage-4: cage r4c6-r5c6-r6c6 total 21 connected true
cage-5: cage r4c4-r5c4-r6c4 total 9 connected true
cage-6: cage r4c1-r5c1-r6c1 total 6 connected true
cage-7: cage r7c2-r7c3 total 5 connected true
cage-8: cage r7c7-r8c7 total 10 connected true
cage-9: cage r2c6-r2c7-r2c8 total 14 connected true
cage-10: cage r8c2-r8c3-r8c4 total 16 connected true
cage-11: cage r3c4-r3c5 total 15 connected true
cage-12: cage r7c5-r7c6 total 5 connected true
cage-13: cage r2c9-r3c9 total 7 connected true
cage-14: cage r7c1-r8c1 total 13 connected true
cage-15: cage r1c4-r1c5-r1c6 total 16 connected true
cage-16: cage r9c4-r9c5-r9c6 total 14 connected true
cage-17: cage r5c2-r6c2 total 14 connected true
cage-18: cage r4c8-r5c8 total 6 connected true
modular-1: modular r2c3-r2c2-r3c2-r3c3
modular-2: modular r3c7-r2c7-r2c8-r3c8
modular-3: modular r7c7-r7c8-r8c8-r8c7
modular-4: modular r7c2-r8c2-r8c3-r7c3
modular-5: modular r4c3-r4c4-r5c4-r5c3
modular-6: modular r5c7-r5c6-r6c6-r6c7
modular-7: modular r3c5-r4c5-r4c6-r3c6
modular-8: modular r7c4-r6c4-r6c5-r7c5
modular-9: modular r7c9-r8c9-r9c9
modular-10: modular r1c1-r2c1-r3c1
modular-11: modular r7c1-r8c1-r9c1
modular-12: modular r1c9-r2c9-r3c9
```

- Normal sudoku rules apply.
- Killer cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Modular lines: Every set of three adjacent cells along a modular line must contain digits with three different remainders when divided by 3.
