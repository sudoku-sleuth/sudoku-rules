---
format: open-rules
title: Transmission
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ll325igo4l
case: https://sudoku-sleuth.com/cases/transmission
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8d4a308201ca4b98b77b1a1702f9468c
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1-r4c2 total 11 connected true
cage-2: cage r7c7-r7c8-r8c7 total 15 connected true
cage-3: cage r8c6-r9c6-r9c7 total 17 connected true
cage-4: cage r8c8-r8c9-r9c8 total 18 connected true
cage-5: cage r6c8-r6c9-r7c9 total 16 connected true
cage-6: cage r5c1-r5c2 total 9 connected true
cage-7: cage r1c3-r1c4-r2c4 total 15 connected true
cage-8: cage r2c3-r3c2-r3c3 total 14 connected true
cage-9: cage r1c2-r2c1-r2c2 total 16 connected true
cage-10: cage r8c5-r9c5 total 13 connected true
cage-11: cage r5c4-r6c4-r6c5 total 21 connected true
cage-12: cage r6c3-r7c3-r7c4 total 9 connected true
cage-13: cage r3c6-r3c7-r4c7 total 20 connected true
cage-14: cage r4c5-r4c6-r5c6 total 13 connected true
modular-1: modular r5c1-r4c1-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4-r1c5
modular-2: modular r5c2-r4c2-r3c2-r2c2-r2c3-r2c4-r2c5
modular-3: modular r9c5-r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r6c9-r5c9
modular-4: modular r8c5-r8c6-r8c7-r8c8-r7c8-r6c8-r5c8
modular-5: modular r3c6-r4c6-r4c7
modular-6: modular r6c3-r6c4-r7c4
modular-7: modular r4c5-r4c4-r5c4
modular-8: modular r6c5-r6c6-r5c6
modular-9: modular r7c3-r7c2-r8c2
modular-10: modular r3c7-r3c8-r2c8
```

**Standard Sudoku, Cages, Modular Lines **

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
