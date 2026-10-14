---
format: open-rules
title: Containing Chaos
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1b1iwp4ny0
case: https://sudoku-sleuth.com/cases/containing-chaos
library: https://rules.sudoku-sleuth.com/
status: read
exported: 462d7acea6fdb77a8ff99372d4764a22
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4 total 10 connected true
cage-2: cage r2c8-r2c9-r3c9 total 7 connected true
cage-3: cage r2c1-r2c2-r3c1 total 8 connected true
cage-4: cage r1c6-r1c7-r1c8 total 21 connected true
cage-5: cage r9c2-r9c3-r9c4 total 21 connected true
cage-6: cage r9c6-r9c7-r9c8 total 10 connected true
cage-7: cage r7c9-r8c8-r8c9 total 10 connected true
cage-8: cage r7c1-r8c1-r8c2 total 11 connected true
cage-9: cage r4c1-r5c1-r6c1 total 20 connected true
cage-10: cage r4c9-r5c9-r6c9 total 24 connected true
cage-11: cage r2c4-r2c5-r2c6 total 22 connected true
cage-12: cage r4c7-r5c7 total 5 connected true
cage-13: cage r6c2-r6c3 total 6 connected true
cage-14: cage r5c5-r6c4-r6c5 total 18 connected true
cage-15: cage r4c5-r4c6-r5c6 total 15 connected true
entropic-1: entropic r4c1-r3c1-r2c2-r1c3-r1c4
entropic-2: entropic r1c6-r1c7-r2c8-r3c9-r4c9
entropic-3: entropic r6c9-r7c9-r8c8-r9c7-r9c6
entropic-4: entropic r9c4-r9c3-r8c2-r7c1-r6c1
entropic-5: entropic r2c6-r3c7-r4c8
entropic-6: entropic r8c6-r7c7-r6c8
entropic-7: entropic r2c4-r3c3-r4c2
entropic-8: entropic r7c3-r6c4-r5c5-r4c6
```

**Sudoku, Entropic Lines,Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
