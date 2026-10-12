---
format: open-rules
title: Leftovers Can Be Deadly
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/leftovers-can-be-deadly
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2-r2c3 total 6 connected true
cage-2: cage r1c5-r2c5-r3c5 total 7 connected true
cage-3: cage r5c4-r5c5-r5c6 total 13 connected true
cage-4: cage r7c2-r8c2-r8c3 total 24 connected true
cage-5: cage r8c7-r8c8-r8c9 total 18 connected true
cage-6: cage r4c8-r5c8-r6c8 total 9 connected true
cage-7: cage r5c1-r6c1-r6c2 total 14 connected true
cage-8: cage r2c8-r3c8-r3c9 total 9 connected true
cage-9: cage r4c1-r4c2 total 14 connected true
cage-10: cage r7c5-r8c5-r9c5 total 14 connected true
modular-1: modular r2c1-r2c2-r2c3-r2c4-r2c5-r3c5-r4c5-r5c5
modular-2: modular r5c5-r5c6-r5c7-r5c8
modular-3: modular r8c8-r7c8-r6c8-r5c8
modular-4: modular r5c2-r6c2-r7c2-r8c2-r8c3-r8c4-r8c5
modular-5: modular r9c8-r8c8
modular-6: modular r1c7-r2c7-r3c7-r3c8-r3c9
modular-7: modular r7c7-r7c6-r6c6
modular-8: modular r4c4-r4c3-r3c3
modular-9: modular r1c4-r1c5-r1c6
modular-10: modular r9c3-r9c4-r9c5
```

Normal sudoku rules apply. Each row, column, and box must contain a complete set of the digits 1-9.

Digits in cages must sum to the number shown in the upper left corner of the cage.

Modular lines: every set of three sequential digits along a line must contain a complete set of residues modulo 3, i.e. one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}. Digits may repeat on a line if allowed by other rules.
