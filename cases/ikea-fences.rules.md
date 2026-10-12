---
format: open-rules
title: IKEA Fences
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/n3z7l5mfek
case: https://sudoku-sleuth.com/cases/ikea-fences
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2 total 3 connected true
cage-2: cage r3c4-r3c5 total 7 connected true
cage-3: cage r3c7-r3c8 total 11 connected true
cage-4: cage r4c8-r4c9 total 6 connected true
cage-5: cage r4c2-r4c3 total 7 connected true
cage-6: cage r4c5-r4c6 total 9 connected true
cage-7: cage r6c2-r6c3 total 7 connected true
cage-8: cage r7c6-r7c7 total 6 connected true
cage-9: cage r5c8-r6c8 total 6 connected true
cage-10: cage r5c3-r5c4 total 17 connected true
cage-11: cage r8c1-r8c2 total 15 connected true
modular-1: modular r3c2-r4c3-r4c4-r4c5-r3c4
modular-2: modular r3c5-r4c6-r4c7-r4c8-r3c7
modular-3: modular r3c1-r4c2-r5c2-r6c2-r5c1
modular-4: modular r3c8-r4c9-r5c9-r6c9-r5c8
modular-5: modular r6c3-r7c4-r7c5-r7c6-r6c5
modular-6: modular r6c6-r7c7-r7c8-r7c9-r6c8
modular-7: modular r8c1-r9c2-r9c3-r9c4-r8c3
modular-8: modular r8c5-r9c6-r9c7-r9c8-r8c7
modular-9: modular r1c3-r2c4-r2c5-r2c6-r1c7
```

**Sudoku,  Modular lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
