---
format: open-rules
title: Fourth of July 2024
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cmxxfti9cg
case: https://sudoku-sleuth.com/cases/fourth-of-july-2024
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=7 r2c6=1 r3c4=4 r3c7=7 r4c8=7 r5c9=6 r6c1=7 r7c2=4 r8c7=2 r9c8=4
exported: 33e4e74ee0e43e6ee0606d6b32532293
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c2-r2c3 total 17 connected true
cage-2: cage r4c2-r5c1-r5c2 total 7 connected true
cage-3: cage r4c7-r5c7 total 4 connected true
cage-4: cage r8c3-r9c3 total 7 connected true
cage-5: cage r8c5-r9c5 total 4 connected true
cage-6: cage r8c1-r9c1 total 7 connected true
modular-1: modular r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
modular-2: modular r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
modular-3: modular r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
modular-4: modular r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
modular-5: modular r5c8-r5c7-r5c6-r5c5-r5c4-r5c3
modular-6: modular r6c2-r6c3-r6c4-r6c5-r6c6-r6c7
modular-7: modular r7c1-r7c2-r7c3-r7c4-r7c5-r7c6
modular-8: modular r8c2-r8c3-r8c4-r8c5-r8c6-r8c7
modular-9: modular r9c3-r9c4-r9c5-r9c6-r9c7-r9c8
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
