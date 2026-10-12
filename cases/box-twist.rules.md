---
format: open-rules
title: Box Twist
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/box-twist
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c1-r2c2 total 10 connected true
cage-2: cage r8c8-r8c9-r9c7-r9c8 total 10 connected true
cage-3: cage r1c8-r2c8-r2c9-r3c9 total 11 connected true
cage-4: cage r7c1-r8c1-r8c2-r9c2 total 11 connected true
cage-5: cage r3c3-r4c3-r4c4-r5c4 total 11 connected true
cage-6: cage r6c4-r6c5-r7c3-r7c4 total 19 connected true
cage-7: cage r5c6-r6c6-r6c7-r7c7 total 29 connected true
cage-8: cage r3c6-r3c7-r4c5-r4c6 total 24 connected true
cage-9: cage r5c1-r5c2 total 8 connected true
cage-10: cage r5c8-r5c9 total 12 connected true
cage-11: cage r9c5-r9c6 total 13 connected true
modular-1: modular r1c2-r2c1-r2c2-r1c3
modular-2: modular r2c9-r1c8-r2c8-r3c9
modular-3: modular r9c7-r8c8-r8c9-r9c8
modular-4: modular r8c1-r9c2-r8c2-r7c1
modular-5: modular r3c6-r4c5-r4c6-r3c7
modular-6: modular r6c7-r5c6-r6c6-r7c7
modular-7: modular r7c3-r6c4-r6c5-r7c4
modular-8: modular r3c3-r4c4-r5c4-r4c3
```

Normal sudoku rules apply. Each row, column, and box must contain a complete set of the digits 1-9.

Normal killer cage rules apply: digits in cages cannot repeat and must sum to the number shown in the upper left corner of the cage.

Modular lines: every set of three sequential digits along a line must contain a complete set of residues modulo 3, i.e. one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}. Digits may repeat on a line if allowed by other rules.

For more of our puzzles, visit us online at missingdeck.net
