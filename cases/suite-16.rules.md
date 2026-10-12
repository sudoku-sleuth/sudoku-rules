---
format: open-rules
title: Suite 16
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/em7f1a5wfi
case: https://sudoku-sleuth.com/cases/suite-16
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c8-r9c8-r9c9 total 16 connected true
cage-2: cage r6c7-r7c7-r8c7 total 16 connected true
cage-3: cage r5c5-r5c6-r5c7 total 16 connected true
cage-4: cage r3c2-r4c2-r5c2 total 16 connected true
cage-5: cage r2c3-r3c3-r4c3 total 16 connected true
cage-6: cage r3c4-r4c4-r5c4 total 16 connected true
cage-7: cage r3c7-r3c8-r3c9 total 16 connected true
cage-8: cage r6c2-r6c3-r7c2-r7c3 total 16 connected true
cage-9: cage r1c8-r2c7-r2c8 total 16 connected true
cage-10: cage r7c4-r7c5-r8c4 total 16 connected true
entropic-1: entropic r3c3-r3c4-r4c4-r4c3-r4c2-r3c2-r2c2-r2c3-r2c4-r2c5-r3c5-r4c5-r5c5-r5c4-r5c3-r5c2
entropic-2: entropic r5c9-r5c8-r5c7-r5c6-r6c6-r7c6-r8c6-r8c7-r8c8-r8c9-r7c9-r6c9-r6c8-r6c7-r7c7-r7c8
entropic-3: entropic r7c3-r7c4-r6c4-r6c3-r6c2-r7c2-r8c2-r8c3-r8c4
entropic-4: entropic r3c8-r3c7-r2c7-r2c8-r2c9-r3c9-r4c9-r4c8-r4c7
```

**Sudoku, Entropic Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
