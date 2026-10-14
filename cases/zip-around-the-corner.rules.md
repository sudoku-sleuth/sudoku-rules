---
format: open-rules
title: Zip Around The Corner
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3lbym54k3v
case: https://sudoku-sleuth.com/cases/zip-around-the-corner
library: https://rules.sudoku-sleuth.com/
status: read
exported: c546521334ea4f659e9e77abe0a31437
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1 total 8 connected true
cage-2: cage r3c2-r4c2 total 8 connected true
cage-3: cage r1c3-r1c4 total 8 connected true
cage-4: cage r2c3-r2c4 total 8 connected true
cage-5: cage r1c6-r1c7 total 9 connected true
cage-6: cage r2c6-r2c7 total 9 connected true
cage-7: cage r3c8-r4c8 total 8 connected true
cage-8: cage r3c9-r4c9 total 8 connected true
cage-9: cage r6c1-r7c1 total 11 connected true
cage-10: cage r9c3-r9c4 total 8 connected true
cage-11: cage r9c6-r9c7 total 4 connected true
cage-12: cage r6c9-r7c9 total 13 connected true
cage-13: cage r3c3-r4c3 total 12 connected true
cage-14: cage r3c6-r3c7 total 10 connected true
cage-15: cage r6c2-r7c2 total 9 connected true
cage-16: cage r8c3-r8c4 total 10 connected true
cage-17: cage r8c6-r8c7 total 11 connected true
cage-18: cage r6c8-r7c8 total 6 connected true
cage-19: cage r7c3-r7c4 total 16 connected true
cage-20: cage r6c7-r7c7 total 11 connected true
cage-21: cage r7c5-r8c5 total 6 connected true
zipper-1: zipper r4c1-r4c2-r4c3-r3c4-r2c4-r1c4
zipper-2: zipper r1c6-r2c6-r3c6-r4c7-r4c8-r4c9
zipper-3: zipper r6c1-r6c2-r6c3-r7c4-r8c4-r9c4
zipper-4: zipper r9c6-r8c6-r7c6-r6c7-r6c8-r6c9
zipper-5: zipper r3c1-r3c2-r3c3-r2c3-r1c3
zipper-6: zipper r1c7-r2c7-r3c7-r3c8-r3c9
zipper-7: zipper r7c1-r7c2-r7c3-r8c3-r9c3
zipper-8: zipper r9c7-r8c7-r7c7-r7c8-r7c9
```

**Sudoku, Zipper Lines, Cages**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
