---
format: open-rules
title: Zipped and Stitched
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8v1iu8cpnc
case: https://sudoku-sleuth.com/cases/zipped-and-stitched
library: https://rules.sudoku-sleuth.com/
status: read
exported: dd68658c7c07556a7df574344d035521
---

```rules
sudoku 9x9
cage-1: cage r3c6-r4c6 total 6 connected true
cage-2: cage r6c4-r7c4 total 6 connected true
cage-3: cage r4c4-r5c4 total 13 connected true
cage-4: cage r5c6-r6c6 total 11 connected true
cage-5: cage r2c7-r3c7 total 9 connected true
cage-6: cage r7c3-r8c3 total 9 connected true
cage-7: cage r3c5-r4c5 total 8 connected true
cage-8: cage r6c5-r7c5 total 8 connected true
cage-9: cage r8c2-r9c2 total 10 connected true
cage-10: cage r1c8-r2c8 total 8 connected true
cage-11: cage r4c2-r5c2 total 10 connected true
cage-12: cage r5c8-r6c8 total 7 connected true
cage-13: cage r1c4-r2c4 total 14 connected true
cage-14: cage r8c6-r9c6 total 11 connected true
cage-15: cage r5c3-r6c3 total 8 connected true
cage-16: cage r4c7-r5c7 total 12 connected true
diagonal direction "anti"
zipper-1: zipper r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9
zipper-2: zipper r8c1-r7c2-r6c3-r5c4-r4c5-r3c6-r2c7-r1c8
zipper-3: zipper r9c2-r8c3-r7c4-r6c5-r5c6-r4c7-r3c8-r2c9
zipper-4: zipper r6c1-r5c2-r4c3-r3c4-r2c5-r1c6
zipper-5: zipper r9c4-r8c5-r7c6-r6c7-r5c8-r4c9
```

**Sudoku, Zipper, Cages, Diagonal**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal: Digits along a marked diagonal cannot repeat.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
- Cages: Digits in a cage sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
