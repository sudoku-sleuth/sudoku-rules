---
format: open-rules
title: Tying Down The Mess
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/tying-down-the-mess
case: https://sudoku-sleuth.com/cases/tying-down-the-mess
library: https://rules.sudoku-sleuth.com/
status: read
exported: 48ab30a186bbefcdf696c73515356ca3
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r3c4 total 7 connected true
cage-2: cage r2c6-r2c7-r3c6 total 23 connected true
cage-3: cage r6c6-r6c7-r7c6 total 7 connected true
cage-4: cage r6c3-r6c4-r7c4 total 23 connected true
cage-5: cage r4c9-r5c8-r5c9 total 22 connected true
cage-6: cage r8c9-r9c8-r9c9 total 8 connected true
cage-7: cage r8c1-r9c1-r9c2 total 22 connected true
cage-8: cage r4c1-r5c1-r5c2 total 8 connected true
cage-9: cage r8c3-r9c3 total 9 connected true
cage-10: cage r8c7-r9c7 total 10 connected true
cage-11: cage r3c5-r4c5-r5c5 total 16 connected true
cage-12: cage r2c1-r3c1 total 14 connected true
cage-13: cage r2c9-r3c9 total 9 connected true
cage-14: cage r1c5-r2c5 total 5 connected true
entropic-1: entropic r4c1-r3c2-r2c3-r3c4-r4c3-r5c2
entropic-2: entropic r5c8-r4c7-r3c6-r2c7-r3c8-r4c9
entropic-3: entropic r8c1-r7c2-r6c3-r7c4-r8c3-r9c2
entropic-4: entropic r9c8-r8c7-r7c6-r6c7-r7c8-r8c9
entropic-5: entropic r9c3-r8c4-r7c5-r8c6-r9c7
entropic-6: entropic r1c3-r1c4-r1c5-r1c6-r1c7
entropic-7: entropic r9c4-r9c5-r9c6
entropic-8: entropic r4c5-r5c5-r6c5
```

**Sudoku, Entropic Lines, Cage**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
