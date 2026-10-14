---
format: open-rules
title: Cages a la Mod
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/u88ofi0lfa
case: https://sudoku-sleuth.com/cases/cages-a-la-mod
library: https://rules.sudoku-sleuth.com/
status: read
exported: ceeea2d8b15025aed6f4354b32de3616
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4 total 14 connected true
cage-2: cage r1c6-r1c7 total 15 connected true
cage-3: cage r2c6-r2c7 total 9 connected true
cage-4: cage r3c6-r3c7 total 12 connected true
cage-5: cage r2c2-r2c3-r2c4-r2c5 total 24 connected true
cage-6: cage r3c1-r3c2 total 5 connected true
cage-7: cage r3c8-r3c9 total 14 connected true
cage-8: cage r4c7-r4c8-r4c9-r5c7-r6c7 total 23 connected true
cage-9: cage r5c1-r5c2-r6c2-r6c3 total 10 connected true
cage-10: cage r6c1-r7c1-r8c1 total 17 connected true
cage-11: cage r7c2-r7c3-r8c2-r9c1-r9c2 total 29 connected true
cage-12: cage r8c3-r9c3-r9c4-r9c5-r9c6 total 17 connected true
cage-13: cage r7c9-r8c9-r9c7-r9c8-r9c9 total 33 connected true
modular-1: modular r1c2-r1c1-r2c1
modular-2: modular r1c6-r2c6-r3c6
modular-3: modular r1c8-r2c8-r2c9-r1c9
modular-4: modular r3c9-r3c8-r4c8-r4c9
modular-5: modular r6c9-r5c9-r5c8-r6c8-r7c8-r7c7-r8c7
modular-6: modular r9c7-r9c8-r9c9-r8c9-r7c9
modular-7: modular r8c5-r9c5-r9c6
modular-8: modular r7c3-r8c3-r9c3-r9c2-r9c1-r8c2-r7c2-r6c2-r6c1-r5c1-r4c1
modular-9: modular r1c5-r2c5-r2c4-r2c3-r2c2-r3c2-r4c2-r4c3-r5c3-r5c4-r5c5-r4c5-r3c5-r3c4
pair-1: pair r7c1-r8c1 multiple
pair-2: pair r1c9-r2c9 multiple
```

- Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

- Cages: Digits in a cage indicated by a dashed line must sum to the total shown in the upper left corner of the cage, if given. Digits cannot repeat within a cage.

Modular Lines: every set of three sequential digits along a teal Modular line contains digits with three different remainders when divided by 3. Digits on two-cell lines must have different remainders when divided by 3. Digits may repeat on a line if allowed by other rules.

Kropki dots: Digits separated by a peach Kropki dot are in a k:1 ratio, with k a whole number to be determined by the solver. The value of k may be different for different dots.
