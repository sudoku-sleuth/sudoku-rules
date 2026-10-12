---
format: open-rules
title: Starburst
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/starburst
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c6-r2c7-r3c5-r3c6 total 16 connected true
cage-2: cage r6c6-r6c7-r7c7-r7c8 total 27 connected true
cage-3: cage r8c1-r9c1-r9c2 total 15 connected true
cage-4: cage r1c8-r1c9-r2c9 total 21 connected true
cage-5: cage r3c7-r3c8-r4c6-r4c7 total 25 connected true
cage-6: cage r6c3-r6c4-r7c2-r7c3 total 10 connected true
cage-7: cage r7c4-r7c5-r8c3-r8c4 total 27 connected true
cage-8: cage r1c1-r1c2-r2c1 total 11 connected true
cage-9: cage r8c9-r9c8-r9c9 total 23 connected true
cage-10: cage r4c9-r5c8-r5c9-r6c9 total 13 connected true
cage-11: cage r4c1-r5c1-r5c2-r6c1 total 16 connected true
cage-12: cage r1c4-r1c5-r2c4 total 15 connected true
cage-13: cage r8c6-r9c5-r9c6 total 15 connected true
cage-14: cage r3c2-r3c3-r4c3-r4c4 total 24 connected true
modular-1: modular r4c3-r3c2-r3c3-r4c4
modular-2: modular r4c6-r3c7-r3c8-r4c7
modular-3: modular r6c3-r7c2-r7c3-r6c4
modular-4: modular r6c6-r7c7-r7c8-r6c7
modular-5: modular r5c6-r5c7-r5c8
modular-6: modular r5c2-r5c3-r5c4
modular-7: modular r4c9-r5c9-r6c9
modular-8: modular r6c1-r5c1-r4c1
modular-9: modular r7c4-r8c3-r8c4-r7c5-r6c5-r5c5-r4c5-r3c5-r2c6-r2c7-r3c6
```

- Normal Sudoku rules apply.
- Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within cages.
- Any set of three sequential cells along a teal Modular Line must contain a complete set of residues modulo 3, i.e. one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}. Digits may repeat on a line if allowed by other rules.
