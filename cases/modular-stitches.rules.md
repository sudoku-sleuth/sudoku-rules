---
format: open-rules
title: Modular Stitches
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5tn8o87udn
case: https://sudoku-sleuth.com/cases/modular-stitches
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0453a7a0b8bad6c63bd5ee7be818fae5
---

```rules
sudoku 9x9
cage-1: cage r7c2-r7c3 total 9 connected true
cage-2: cage r7c7-r7c8 total 7 connected true
cage-3: cage r6c4-r6c5-r6c6 total 8 connected true
cage-4: cage r4c4-r5c4 total 11 connected true
cage-5: cage r4c6-r5c6 total 9 connected true
cage-6: cage r2c3-r2c4 total 13 connected true
cage-7: cage r2c6-r2c7 total 8 connected true
cage-8: cage r9c2-r9c3-r9c4 total 6 connected true
cage-9: cage r9c6-r9c7-r9c8 total 24 connected true
modular-1: modular r7c2-r6c2-r6c3-r7c3-r7c4-r6c4
modular-2: modular r6c6-r7c6-r7c7-r6c7-r6c8-r7c8
modular-3: modular r5c6-r5c7-r4c7-r4c6-r3c6-r3c7
modular-4: modular r1c2-r2c2-r2c3-r1c3-r1c4-r2c4
modular-5: modular r2c6-r1c6-r1c7-r2c7-r2c8-r1c8
modular-6: modular r5c4-r5c3-r4c3-r4c4-r3c4-r3c3
modular-7: modular r7c1-r8c1-r9c1
modular-8: modular r7c9-r8c9-r9c9
modular-9: modular r7c5-r8c5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
-Modular lines: Any set of three adjacent digits along a teal modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
