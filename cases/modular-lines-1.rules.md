---
format: open-rules
title: Modular Lines 1
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wuhm0x6cvq
case: https://sudoku-sleuth.com/cases/modular-lines-1
library: https://rules.sudoku-sleuth.com/
status: read
exported: d9205a30943e6da893b4402f37233019
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 21 connected true
cage-2: cage r2c5-r3c5-r4c5 total 22 connected true
cage-3: cage r4c1-r5c1-r6c1 total 22 connected true
cage-4: cage r4c3-r4c4 total 3 connected true
cage-5: cage r4c6-r4c7 total 7 connected true
cage-6: cage r4c9-r5c9-r6c9 total 15 connected true
cage-7: cage r6c3-r6c4 total 3 connected true
cage-8: cage r6c6-r6c7 total 8 connected true
cage-9: cage r6c5-r7c5-r8c5 total 10 connected true
cage-10: cage r8c8-r8c9-r9c8-r9c9 total 13 connected true
modular-1: modular r5c2-r4c2-r3c2-r2c2-r2c3-r2c4-r2c5
modular-2: modular r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r9c2-r9c1
modular-3: modular r7c1-r8c1-r8c2-r7c2
modular-4: modular r8c5-r8c6-r8c7-r8c8-r7c8-r6c8-r5c8
modular-5: modular r3c8-r2c8-r2c9-r3c9
modular-6: modular r1c9-r1c8-r1c7-r2c7-r3c7-r4c7-r5c7-r6c7
modular-7: modular r6c4-r5c4-r4c4-r4c5-r4c6-r5c6-r6c6
```

Standard sudoku constraints: every row, column, and box must contain a complete set of the digits 1-9.

Killer cages: Digits in a cage indicated by a dashed line cannot repeat and must sum to the total shown in the upper left corner of the cage.

Modular lines: every set of three sequential digits along a teal modular line contains digits with three different remainders when divided by 3. Digits on two-cell lines have different remainders when divided by 3. Digits may repeat on a line if allowed by other rules.
