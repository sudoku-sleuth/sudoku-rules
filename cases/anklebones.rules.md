---
format: open-rules
title: Anklebones
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6zrib0785f
case: https://sudoku-sleuth.com/cases/anklebones
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5813f1b8a212a5b8ab0e3ab35a04b437
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 8 connected true
cage-2: cage r1c5-r2c5 total 13 connected true
cage-3: cage r3c2-r3c3 total 8 connected true
cage-4: cage r3c7-r3c8 total 7 connected true
cage-5: cage r6c7-r6c8 total 9 connected true
cage-6: cage r6c2-r6c3 total 9 connected true
cage-7: cage r7c1-r7c2 total 8 connected true
cage-8: cage r8c3-r8c4 total 7 connected true
cage-9: cage r8c6-r8c7 total 6 connected true
cage-10: cage r5c5-r6c5 total 4 connected true
cage-11: cage r8c5-r9c5 total 14 connected true
cage-12: cage r7c8-r7c9-r8c8 total 18 connected true
modular-1: modular r3c1-r2c1-r1c1-r1c2-r1c3-r1c4-r1c5
modular-2: modular r3c3-r2c3-r2c4-r2c5-r2c6-r2c7-r3c7
modular-3: modular r3c2-r4c2-r5c2-r6c2-r6c1-r7c1
modular-4: modular r3c8-r4c8-r5c8-r6c8-r6c9-r7c9
modular-5: modular r6c3-r6c4-r6c5-r6c6-r6c7
modular-6: modular r7c2-r8c2-r9c2-r9c3-r8c3
modular-7: modular r7c8-r8c8-r9c8-r9c7-r8c7
modular-8: modular r7c3-r7c4-r7c5-r7c6-r7c7
modular-9: modular r8c4-r9c5-r8c6
```

**Standard Sudoku, Cages, Modular Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
