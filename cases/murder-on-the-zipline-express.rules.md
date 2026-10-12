---
format: open-rules
title: Murder on the Zipline Express
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4qt4n1bnz3
case: https://sudoku-sleuth.com/cases/murder-on-the-zipline-express
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 12 connected true
cage-2: cage r1c8-r1c9-r2c9 total 18 connected true
cage-3: cage r8c1-r9c1-r9c2 total 14 connected true
cage-4: cage r8c9-r9c8-r9c9 total 16 connected true
cage-5: cage r2c3-r3c2-r3c3 total 18 connected true
cage-6: cage r2c7-r3c7-r3c8 total 15 connected true
cage-7: cage r7c2-r7c3-r8c3 total 16 connected true
cage-8: cage r7c7-r7c8-r8c7 total 12 connected true
cage-9: cage r3c4-r4c3-r4c4 total 10 connected true
cage-10: cage r4c5-r5c5-r6c5 total 12 connected true
cage-11: cage r1c5-r2c5 total 12 connected true
cage-12: cage r8c5-r9c5 total 5 connected true
cage-13: cage r5c1-r5c2 total 7 connected true
cage-14: cage r5c8-r5c9 total 10 connected true
cage-15: cage r6c3-r6c4-r7c4 total 12 connected true
cage-16: cage r6c6-r6c7-r7c6 total 14 connected true
cage-17: cage r3c6-r4c6-r4c7 total 14 connected true
zipper-1: zipper r3c1-r2c1-r1c1-r1c2-r1c3
zipper-2: zipper r1c7-r1c8-r1c9-r2c9-r3c9
zipper-3: zipper r7c9-r8c9-r9c9-r9c8-r9c7
zipper-4: zipper r7c1-r8c1-r9c1-r9c2-r9c3
zipper-5: zipper r6c3-r7c3-r7c4
zipper-6: zipper r7c6-r7c7-r6c7
zipper-7: zipper r4c7-r3c7-r3c6
zipper-8: zipper r3c4-r3c3-r4c3
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
