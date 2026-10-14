---
format: open-rules
title: Zipping from Cage to Cage
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0ugg5d75n4
case: https://sudoku-sleuth.com/cases/zipping-from-cage-to-cage
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2c6ebcf10e77152670b5b06e5d7fb0a4
---

```rules
sudoku 9x9
cage-1: cage r4c2-r5c2 total 3 connected true
cage-2: cage r5c8-r6c8 total 3 connected true
cage-3: cage r6c5-r7c5 total 12 connected true
cage-4: cage r4c6-r5c6 total 12 connected true
cage-5: cage r6c7-r7c7 total 11 connected true
cage-6: cage r3c3-r4c3 total 11 connected true
cage-7: cage r5c4-r6c4 total 13 connected true
cage-8: cage r3c5-r4c5 total 5 connected true
cage-9: cage r4c8-r4c9 total 13 connected true
cage-10: cage r6c1-r6c2 total 7 connected true
cage-11: cage r3c7-r4c7 total 11 connected true
cage-12: cage r6c3-r7c3 total 7 connected true
cage-13: cage r6c9-r7c9 total 17 connected true
cage-14: cage r3c1-r4c1 total 17 connected true
cage-15: cage r9c6-r9c7 total 3 connected true
cage-16: cage r9c3-r9c4 total 17 connected true
cage-17: cage r1c3-r1c4 total 11 connected true
cage-18: cage r1c6-r1c7 total 14 connected true
cage-19: cage r1c9-r2c9-r3c9 total 6 connected true
cage-20: cage r7c1-r8c1-r9c1 total 15 connected true
cage-21: cage r1c1-r1c2 total 11 connected true
zipper-1: zipper r4c2-r3c3-r2c4-r3c5-r4c6
zipper-2: zipper r6c8-r7c7-r8c6-r7c5-r6c4
zipper-3: zipper r4c5-r5c6-r6c7-r5c8-r4c9
zipper-4: zipper r6c5-r5c4-r4c3-r5c2-r6c1
```

**Sudoku, Cages, Zipper lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
