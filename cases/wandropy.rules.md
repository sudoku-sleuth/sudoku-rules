---
format: open-rules
title: Wandropy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7g2ggoh9z4
case: https://sudoku-sleuth.com/cases/wandropy
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c2 total 12 connected true
cage-2: cage r4c2-r4c3-r5c3 total 10 connected true
cage-3: cage r2c4-r3c4-r3c5 total 11 connected true
cage-4: cage r6c4-r6c5-r7c5 total 13 connected true
cage-5: cage r8c6-r8c7-r9c6 total 21 connected true
cage-6: cage r8c2-r9c1-r9c2 total 6 connected true
cage-7: cage r2c7-r3c7-r3c8 total 20 connected true
cage-8: cage r4c8-r4c9-r5c8 total 20 connected true
cage-9: cage r1c9-r2c9-r3c9 total 12 connected true
entropic-1: entropic r2c1-r2c2-r3c2-r4c2-r4c3-r4c4-r5c4-r6c4-r6c5-r6c6-r7c6-r8c6-r8c7-r8c8-r8c9
entropic-2: entropic r4c1-r5c1-r5c2-r6c2
entropic-3: entropic r2c6-r3c6-r3c7
entropic-4: entropic r4c7-r4c8-r5c8
entropic-5: entropic r7c3-r7c4-r8c4
entropic-6: entropic r1c7-r1c8-r1c9-r2c9-r3c9
entropic-7: entropic r4c9-r5c9-r6c9
entropic-8: entropic r1c1-r1c2-r1c3-r2c3-r3c3-r3c4-r3c5-r4c5-r5c5-r5c6-r5c7-r6c7-r7c7-r7c8-r7c9-r6c9-r5c9-r4c9
```

**Standard Sudoku, Entropic Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
