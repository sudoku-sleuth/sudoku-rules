---
format: open-rules
title: Modular Scrolls
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/akaixo5jro
case: https://sudoku-sleuth.com/cases/modular-scrolls
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0a5058c1ec91e48eeb4dea8419e18d72
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1 total 15 connected true
cage-2: cage r7c2-r7c3-r7c4 total 6 connected true
cage-3: cage r5c1-r5c2-r5c3 total 10 connected true
cage-4: cage r1c5-r1c6-r1c7 total 18 connected true
cage-5: cage r3c6-r3c7-r3c8 total 17 connected true
cage-6: cage r1c1-r1c2 total 5 connected true
cage-7: cage r5c9-r6c9 total 13 connected true
cage-8: cage r8c9-r9c9 total 15 connected true
cage-9: cage r3c2-r4c2 total 16 connected true
modular-1: modular r2c2-r2c3-r3c3-r3c2-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r2c9-r3c9-r3c8-r3c7-r2c7-r2c8
modular-2: modular r8c2-r8c3-r7c3-r7c2-r7c1-r8c1-r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r7c8-r7c7-r8c7-r8c8
modular-3: modular r5c1-r4c2-r5c3-r6c4-r5c5-r6c6-r5c7-r4c8-r5c9
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent cells along a modular line has three different remainders when divided by 3, that is, digits from each of {1,4,7}, {2,5,8} and {3,6,9}.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
