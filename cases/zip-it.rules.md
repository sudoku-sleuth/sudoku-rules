---
format: open-rules
title: Zip It
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8hml9ye644
case: https://sudoku-sleuth.com/cases/zip-it
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 22 connected true
cage-2: cage r3c6-r3c7-r4c7 total 8 connected true
cage-3: cage r6c3-r7c3-r7c4 total 8 connected true
cage-4: cage r6c7-r7c6-r7c7 total 22 connected true
cage-5: cage r1c1-r1c2-r2c2 total 8 connected true
cage-6: cage r1c8-r1c9-r2c8 total 22 connected true
cage-7: cage r8c2-r9c1-r9c2 total 21 connected true
cage-8: cage r8c8-r9c8-r9c9 total 8 connected true
cage-9: cage r5c2-r5c3 total 13 connected true
cage-10: cage r5c4-r6c4-r6c5 total 13 connected true
cage-11: cage r5c6-r5c7 total 13 connected true
zipper-1: zipper r1c1-r2c2-r3c3-r2c4-r1c5-r2c6-r3c7-r2c8-r1c9
zipper-2: zipper r9c1-r8c2-r7c3-r8c4-r9c5-r8c6-r7c7-r8c8-r9c9
zipper-3: zipper r3c1-r4c2-r5c3-r6c2-r7c1
zipper-4: zipper r3c9-r4c8-r5c7-r6c8-r7c9
```

**Sudoku, Zipper Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Zipper Lines: Along Zipper lines, pairs of digits equidistant from the center of the line (marked by a small purple dot) have the same sum. 
 - Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
