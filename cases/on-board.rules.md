---
format: open-rules
title: On Board
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nkmgt1le7w
case: https://sudoku-sleuth.com/cases/on-board
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3c6d873787caf13a4b5d1a59e0860f4c
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3-r3c3 total 15 connected true
cage-2: cage r2c2-r3c2 total 6 connected true
cage-3: cage r4c1-r4c2 total 8 connected true
cage-4: cage r6c2-r6c3 total 12 connected true
cage-5: cage r7c3-r7c4 total 11 connected true
cage-6: cage r8c2-r8c3-r8c4 total 8 connected true
cage-7: cage r2c4-r3c4 total 5 connected true
cage-8: cage r3c5-r4c5-r5c5-r6c5-r7c5 total 15 connected true
cage-9: cage r2c6-r2c7-r2c8 total 14 connected true
cage-10: cage r4c7-r4c8 total 15 connected true
cage-11: cage r6c8-r6c9 total 7 connected true
cage-12: cage r7c7-r8c7-r9c7 total 15 connected true
cage-13: cage r7c8-r8c8 total 6 connected true
modular-1: modular r3c1-r2c2-r1c3-r2c4-r3c5-r2c6
modular-2: modular r4c1-r3c2-r2c3-r3c4-r4c5-r3c6
modular-3: modular r3c7-r2c8-r1c9
modular-4: modular r6c2-r5c1-r4c2-r3c3-r4c4-r5c5-r6c6-r7c7-r6c8-r5c9-r4c8
modular-5: modular r7c3-r8c2-r9c1
modular-6: modular r7c4-r6c5-r7c6-r8c7-r7c8-r6c9
modular-7: modular r8c4-r7c5-r8c6-r9c7-r8c8-r7c9
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent cells along a modular line has three different remainders when divided by 3, that is, digits from each of {1,4,7}, {2,5,8} and {3,6,9}.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
