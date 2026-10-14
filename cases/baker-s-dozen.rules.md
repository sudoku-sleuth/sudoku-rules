---
format: open-rules
title: Baker's Dozen
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/62shx789ud
case: https://sudoku-sleuth.com/cases/baker-s-dozen
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=1 r2c4=8 r5c2=6 r7c8=5 r9c5=7
exported: f772a421469ed068d5243b6d7364bd3a
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 13 connected true
cage-2: cage r1c4-r1c5 total 13 connected true
cage-3: cage r1c7-r1c8 total 13 connected true
cage-4: cage r8c9-r9c9 total 13 connected true
cage-5: cage r3c1-r4c1 total 13 connected true
cage-6: cage r6c1-r7c1 total 13 connected true
cage-7: cage r9c3-r9c4 total 13 connected true
cage-8: cage r9c6-r9c7 total 13 connected true
cage-9: cage r4c3-r5c3 total 13 connected true
cage-10: cage r2c7-r2c8-r3c8 total 13 connected true
cage-11: cage r2c9-r3c9 total 13 connected true
cage-12: cage r5c9-r6c9 total 13 connected true
cage-13: cage r3c3-r3c4 total 13 connected true
cage-14: cage r6c7-r7c7 total 13 connected true
cage-15: cage r3c6-r3c7-r4c7 total 13 connected true
cage-16: cage r6c3-r7c3-r7c4 total 13 connected true
cage-17: cage r8c1-r9c1-r9c2 total 13 connected true
cage-18: cage r7c2-r8c2-r8c3 total 13 connected true
cage-19: cage r2c2-r2c3-r3c2 total 13 connected true
cage-20: cage r2c5-r2c6-r3c5 total 13 connected true
cage-21: cage r8c7-r8c8-r9c8 total 13 connected true
cage-22: cage r6c4-r6c5-r6c6 total 13 connected true
cage-23: cage r7c5-r8c5-r8c6 total 13 connected true
cage-24: cage r5c5-r5c6 total 13 connected true
cage-25: cage r4c8-r5c8-r6c8 total 13 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
