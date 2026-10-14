---
format: open-rules
title: Donut Hole
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/donut-hole
case: https://sudoku-sleuth.com/cases/donut-hole
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7a72134098f8d3aeb957402be1f68119
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 4 connected true
cage-2: cage r2c9-r3c9 total 5 connected true
cage-3: cage r9c7-r9c8 total 8 connected true
cage-4: cage r9c5-r9c6 total 8 connected true
cage-5: cage r5c1-r5c2 total 7 connected true
cage-6: cage r5c8-r5c9 total 9 connected true
cage-7: cage r1c5-r2c5 total 11 connected true
cage-8: cage r7c5-r7c6 total 11 connected true
cage-9: cage r6c3-r6c4 total 12 connected true
cage-10: cage r8c3-r9c3 total 6 connected true
cage-11: cage r3c4-r3c5 total 6 connected true
cage-12: cage r3c3-r4c3 total 13 connected true
modular-1: modular r9c4-r9c3-r9c2-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9
modular-2: modular r9c8-r8c9-r7c9-r6c9-r5c9
modular-3: modular r9c5-r9c4-r9c3-r9c2-r8c1-r7c1-r6c1-r5c1-r4c1
modular-4: modular r5c3-r4c3-r3c4-r3c5-r3c6-r4c7-r5c7-r6c7-r7c6
modular-5: modular r6c3-r5c3-r4c3-r3c4
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
