---
format: open-rules
title: Under Way
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yqdqwqcfaw
case: https://sudoku-sleuth.com/cases/under-way
library: https://rules.sudoku-sleuth.com/
status: read
exported: a1ade87f5c94e7bfe8713151d8dc26a2
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 11 connected true
cage-2: cage r3c6-r3c7-r4c6-r4c7 total 11 connected true
cage-3: cage r6c6-r6c7-r7c6-r7c7 total 11 connected true
cage-4: cage r6c3-r6c4-r7c3-r7c4 total 11 connected true
cage-5: cage r1c1-r1c2-r1c3 total 8 connected true
cage-6: cage r9c7-r9c8-r9c9 total 8 connected true
cage-7: cage r1c9-r2c9-r3c9 total 11 connected true
cage-8: cage r7c1-r8c1-r9c1 total 11 connected true
cage-9: cage r9c3-r9c4-r9c5 total 15 connected true
cage-10: cage r1c5-r1c6-r1c7 total 19 connected true
cage-11: cage r5c9-r6c9-r7c9 total 20 connected true
cage-12: cage r3c1-r4c1-r5c1 total 15 connected true
kropki-1: kropki r6c4-r6c5 white
kropki-2: kropki r3c6-r3c7 white
kropki-3: kropki r2c1-r3c1 white
kropki-4: kropki r5c2-r5c3 white
kropki-5: kropki r7c8-r7c9 white
```

**Sudoku, Cages, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Consecutive Pairs: Digits separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
