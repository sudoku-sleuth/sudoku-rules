---
format: open-rules
title: Modelisks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/45j9szqi3k
case: https://sudoku-sleuth.com/cases/modelisks
library: https://rules.sudoku-sleuth.com/
status: read
exported: 05722ac598c0a6200971c46f8ce5c854
---

```rules
sudoku 9x9
cage-1: cage r4c3-r4c4 total 15 connected true
cage-2: cage r3c6-r4c6 total 12 connected true
cage-3: cage r6c6-r6c7 total 12 connected true
cage-4: cage r6c4-r7c4 total 12 connected true
cage-5: cage r3c3-r3c4 total 14 connected true
cage-6: cage r3c7-r4c7 total 12 connected true
cage-7: cage r7c6-r7c7 total 10 connected true
cage-8: cage r6c3-r7c3 total 13 connected true
cage-9: cage r3c2-r4c2 total 13 connected true
cage-10: cage r2c6-r2c7 total 9 connected true
cage-11: cage r8c3-r8c4 total 9 connected true
cage-12: cage r6c8-r7c8 total 8 connected true
modular-1: modular r2c1-r3c2-r4c3-r4c4-r3c4-r2c3-r1c2
modular-2: modular r1c8-r2c7-r3c6-r4c6-r4c7-r3c8-r2c9
modular-3: modular r9c8-r8c7-r7c6-r6c6-r6c7-r7c8-r8c9
modular-4: modular r8c1-r7c2-r6c3-r6c4-r7c4-r8c3-r9c2
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
