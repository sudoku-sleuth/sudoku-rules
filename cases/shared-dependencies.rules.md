---
format: open-rules
title: Shared Dependencies
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/shared-dependencies
case: https://sudoku-sleuth.com/cases/shared-dependencies
library: https://rules.sudoku-sleuth.com/
status: read
exported: 263b563ba6895a35b9e1141e1291be5e
---

```rules
sudoku 9x9
cage-1: cage r2c5-r3c5 total 5 connected true
cage-2: cage r3c2-r3c3 total 6 connected true
cage-3: cage r4c5-r4c6-r5c6 total 18 connected true
cage-4: cage r5c2-r5c3 total 12 connected true
cage-5: cage r7c5-r8c5 total 9 connected true
cage-6: cage r1c1-r2c1 total 17 connected true
cage-7: cage r9c3-r9c4 total 11 connected true
cage-8: cage r6c1-r7c1 total 9 connected true
cage-9: cage r5c7-r5c8 total 6 connected true
cage-10: cage r4c8-r4c9 total 9 connected true
cage-11: cage r1c6-r2c6 total 11 connected true
cage-12: cage r7c7-r8c7 total 9 connected true
modular-1: modular r1c1-r2c2-r1c3-r2c4-r3c5-r2c6-r3c7-r4c8-r5c7-r6c8-r7c9-r8c8-r9c9
modular-2: modular r9c8-r8c7-r9c6-r8c5-r9c4-r8c3-r7c2-r6c1-r5c2-r4c1-r3c2-r2c1
modular-3: modular r7c7-r6c6-r7c5-r6c4-r5c3-r4c4-r3c3
modular-4: modular r5c8-r4c9-r3c9-r2c8-r1c7-r1c6-r2c5
modular-5: modular r7c1-r8c1-r9c1-r9c2-r9c3
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
