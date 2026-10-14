---
format: open-rules
title: Lighthouse Lantern
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mvcdad6wo8
case: https://sudoku-sleuth.com/cases/lighthouse-lantern
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=2 r4c4=8 r4c6=7 r6c4=9 r6c6=6 r9c7=2
exported: fb784f18d2801ad5a807c2f27b9587b2
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6-r2c4-r2c6 total 28 connected true
cage-2: cage r4c2-r4c3-r5c2-r6c2-r6c3 total 26 connected true
cage-3: cage r4c7-r4c8-r5c8-r6c7-r6c8 total 21 connected true
cage-4: cage r8c4-r8c6-r9c4-r9c5-r9c6 total 32 connected true
cage-5: cage r2c2-r3c2 total 13 connected true
cage-6: cage r2c8-r3c8 total 3 connected true
cage-7: cage r7c8-r8c8 total 13 connected true
cage-8: cage r7c2-r8c2 total 5 connected true
zipper-1: zipper r2c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c8
zipper-2: zipper r8c2-r9c3-r9c4-r9c5-r9c6-r9c7-r8c8
zipper-3: zipper r2c3-r3c2-r4c2-r5c2-r6c2-r7c2-r8c3
zipper-4: zipper r8c7-r7c8-r6c8-r5c8-r4c8-r3c8-r2c7
zipper-5: zipper r4c3-r3c4-r3c5-r3c6-r4c7
zipper-6: zipper r6c3-r7c4-r7c5-r7c6-r6c7
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
