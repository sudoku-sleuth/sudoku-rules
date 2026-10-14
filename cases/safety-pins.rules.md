---
format: open-rules
title: Safety Pins
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/safety-pins
case: https://sudoku-sleuth.com/cases/safety-pins
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c9=3
exported: 78c9c329726e4db48234f9c4f0803350
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2 total 5 connected true
cage-2: cage r2c3-r2c4 total 7 connected true
cage-3: cage r3c5-r4c5 total 6 connected true
cage-4: cage r4c4-r5c4 total 9 connected true
cage-5: cage r6c3-r6c4 total 15 connected true
cage-6: cage r6c2-r7c2 total 11 connected true
cage-7: cage r8c2-r8c3 total 11 connected true
cage-8: cage r4c6-r5c6 total 9 connected true
cage-9: cage r5c7-r5c8 total 13 connected true
cage-10: cage r2c5-r2c6 total 11 connected true
cage-11: cage r8c5-r8c6 total 10 connected true
cage-12: cage r6c6-r7c6 total 17 connected true
modular-1: modular r2c2-r1c2-r1c3-r2c3-r3c3-r3c2
modular-2: modular r3c5-r2c5-r2c4-r3c4-r4c4-r4c5
modular-3: modular r6c3-r6c2-r5c2-r5c3-r5c4-r6c4
modular-4: modular r8c2-r8c1-r7c1-r7c2-r7c3-r8c3
modular-5: modular r4c6-r4c7-r3c7-r2c7-r2c6-r3c6
modular-6: modular r5c7-r5c6-r6c6-r6c7-r6c8-r5c8
modular-7: modular r8c5-r8c4-r7c4-r7c5-r7c6-r8c6
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
