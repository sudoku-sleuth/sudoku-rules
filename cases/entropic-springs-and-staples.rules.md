---
format: open-rules
title: Entropic Springs and Staples
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/entropic-springs-and-staples
case: https://sudoku-sleuth.com/cases/entropic-springs-and-staples
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 16 connected true
cage-2: cage r1c6-r1c7 total 14 connected true
cage-3: cage r5c1-r5c2-r6c1-r6c2 total 26 connected true
cage-4: cage r5c8-r5c9-r6c8-r6c9 total 14 connected true
cage-5: cage r2c7-r2c8-r3c7-r3c8 total 17 connected true
cage-6: cage r2c2-r2c3-r3c2-r3c3 total 17 connected true
cage-7: cage r3c5-r3c6-r4c5-r4c6 total 20 connected true
cage-8: cage r6c4-r6c5-r7c4-r7c5 total 15 connected true
cage-9: cage r7c7-r7c8-r8c7-r8c8 total 19 connected true
cage-10: cage r9c6-r9c7 total 9 connected true
cage-11: cage r9c3-r9c4 total 4 connected true
cage-12: cage r7c2-r7c3-r8c2-r8c3 total 22 connected true
entropic-1: entropic r4c2-r4c1-r5c2-r5c1-r6c2-r6c1
entropic-2: entropic r2c2-r2c3-r3c3-r3c2
entropic-3: entropic r1c4-r2c5-r1c6
entropic-4: entropic r3c7-r2c7-r2c8-r3c8
entropic-5: entropic r3c5-r4c5-r4c6-r3c6
entropic-6: entropic r4c4-r4c3-r5c3-r5c4
entropic-7: entropic r7c4-r6c4-r6c5-r7c5
entropic-8: entropic r6c6-r6c7-r5c7-r5c6
entropic-9: entropic r4c9-r4c8-r5c9-r5c8-r6c9-r6c8
entropic-10: entropic r7c2-r8c2-r8c3-r7c3
entropic-11: entropic r9c4-r8c5-r9c6
entropic-12: entropic r8c8-r8c7-r7c7-r7c8
```

**Sudoku, Entropic Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
