---
format: open-rules
title: Amphiteatre
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/x8b2tbc5tq
case: https://sudoku-sleuth.com/cases/amphiteatre
library: https://rules.sudoku-sleuth.com/
status: read
exported: 015af45e0bdd7a7b5a48b6861a2fdb71
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3 total 9 connected true
cage-2: cage r6c3-r7c3 total 9 connected true
cage-3: cage r6c6-r6c7 total 9 connected true
cage-4: cage r8c5-r9c5 total 10 connected true
cage-5: cage r4c5-r5c5 total 14 connected true
cage-6: cage r1c5-r2c5 total 14 connected true
cage-7: cage r4c8-r4c9 total 3 connected true
cage-8: cage r2c7-r3c7 total 11 connected true
zipper-1: zipper r5c2-r4c2-r3c3-r2c4-r2c5-r2c6-r3c7-r4c8-r5c8
zipper-2: zipper r6c3-r5c3-r4c4-r4c5-r4c6-r5c7-r6c7
zipper-3: zipper r4c1-r3c1-r2c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c8-r3c9-r4c9
zipper-4: zipper r7c4-r6c4-r5c5-r6c6-r7c6
zipper-5: zipper r7c3-r8c4-r8c5
zipper-6: zipper r9c5-r9c6-r8c7
```

**Sudoku, Zipper Lines, Cages**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
