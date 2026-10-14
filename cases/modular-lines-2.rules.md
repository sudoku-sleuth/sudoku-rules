---
format: open-rules
title: Modular Lines 2
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4pmy4fip6p
case: https://sudoku-sleuth.com/cases/modular-lines-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: a6b0c681edd7a3d26bbaa3fcf739692f
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3-r3c3 total 10 connected true
cage-2: cage r1c4-r1c5 total 13 connected true
cage-3: cage r2c7-r3c7-r4c7-r4c8 total 19 connected true
cage-4: cage r3c4-r4c4 total 13 connected true
cage-5: cage r4c1-r4c2 total 13 connected true
cage-6: cage r6c6-r7c6 total 8 connected true
cage-7: cage r7c1-r8c1-r9c1 total 16 connected true
cage-8: cage r7c3-r7c4 total 9 connected true
cage-9: cage r7c7-r8c7 total 10 connected true
cage-10: cage r9c6-r9c7-r9c8-r9c9 total 21 connected true
modular-1: modular r1c1-r2c1
modular-2: modular r2c3-r2c2-r3c2-r3c3
modular-3: modular r4c3-r4c4-r3c4-r2c4-r1c4-r1c5-r1c6-r1c7-r2c7-r3c7-r4c7-r4c8-r4c9-r5c9-r6c9
modular-4: modular r2c8-r2c9-r3c9
modular-5: modular r4c2-r4c1-r5c1-r5c2-r5c3-r5c4-r5c5
modular-6: modular r5c6-r6c6-r7c6-r8c6-r9c6-r9c7
modular-7: modular r7c3-r6c3-r6c4-r7c4-r8c4-r9c4
```

Standard sudoku constraints: every row, column, and box must contain a complete set of the digits 1-9.

Killer cages: Digits in a cage indicated by a dashed line cannot repeat and must sum to the total shown in the upper left corner of the cage.

Modular lines: every set of three sequential digits along a teal modular line contains digits with three different remainders when divided by 3. Digits on two-cell lines have different remainders when divided by 3. Digits may repeat on a line if allowed by other rules.
