---
format: open-rules
title: Zippage
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8tctx1sz31
case: https://sudoku-sleuth.com/cases/zippage
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r5c1 total 7 connected true
cage-2: cage r3c2-r4c2 total 7 connected true
cage-3: cage r2c3-r2c4 total 14 connected true
cage-4: cage r1c4-r1c5 total 14 connected true
cage-5: cage r1c8-r1c9 total 14 connected true
cage-6: cage r5c4-r5c5 total 7 connected true
cage-7: cage r4c5-r4c6 total 8 connected true
cage-8: cage r2c7-r2c8 total 12 connected true
cage-9: cage r5c9-r6c9 total 13 connected true
cage-10: cage r6c8-r7c8 total 9 connected true
cage-11: cage r8c6-r8c7 total 11 connected true
cage-12: cage r9c5-r9c6 total 6 connected true
cage-13: cage r9c3-r9c4 total 9 connected true
cage-14: cage r7c2-r8c2-r8c3 total 11 connected true
cage-15: cage r6c1-r7c1 total 16 connected true
cage-16: cage r5c2-r6c2 total 15 connected true
cage-17: cage r3c5-r3c6 total 13 connected true
cage-18: cage r2c5-r2c6 total 8 connected true
zipper-1: zipper r5c1-r4c2-r3c3-r2c4-r1c5
zipper-2: zipper r5c4-r4c5-r3c6-r2c7-r1c8
zipper-3: zipper r5c9-r6c8-r7c7-r8c6-r9c5
zipper-4: zipper r6c1-r7c2-r8c3-r9c4
zipper-5: zipper r5c2-r5c3-r4c4-r3c5-r2c6
```

**Sudoku, Cages, Zipper Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
