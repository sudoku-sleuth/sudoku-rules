---
format: open-rules
title: Zippularity
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/00nsemj9l2
case: https://sudoku-sleuth.com/cases/zippularity
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 15 connected true
cage-2: cage r5c1-r5c2 total 7 connected true
cage-3: cage r1c5-r2c5 total 11 connected true
cage-4: cage r3c4-r4c3-r4c4 total 18 connected true
cage-5: cage r6c6-r6c7-r7c6 total 15 connected true
cage-6: cage r5c4-r6c4-r6c5 total 12 connected true
cage-7: cage r4c5-r4c6-r5c6 total 12 connected true
cage-8: cage r2c7-r3c7-r3c8 total 12 connected true
cage-9: cage r7c2-r7c3-r8c3 total 15 connected true
cage-10: cage r8c1-r9c1-r9c2 total 12 connected true
cage-11: cage r1c8-r1c9-r2c9 total 14 connected true
modular-1: modular r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5
zipper-1: zipper r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5
modular-2: modular r9c5-r9c6-r9c7-r8c8-r7c9-r6c9-r5c9
zipper-2: zipper r9c5-r9c6-r9c7-r8c8-r7c9-r6c9-r5c9
modular-3: modular r5c3-r4c3-r3c4-r3c5
zipper-3: zipper r5c3-r4c3-r3c4-r3c5
modular-4: modular r7c5-r7c6-r6c7-r5c7
zipper-4: zipper r7c5-r7c6-r6c7-r5c7
modular-5: modular r5c2-r6c2-r7c2-r8c3-r8c4-r8c5
zipper-5: zipper r5c2-r6c2-r7c2-r8c3-r8c4-r8c5
modular-6: modular r2c5-r2c6-r2c7-r3c8-r4c8-r5c8
zipper-6: zipper r2c5-r2c6-r2c7-r3c8-r4c8-r5c8
modular-7: modular r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5
zipper-7: zipper r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5
modular-8: modular r9c5-r9c6-r9c7-r8c8-r7c9-r6c9-r5c9
zipper-8: zipper r9c5-r9c6-r9c7-r8c8-r7c9-r6c9-r5c9
modular-9: modular r5c3-r4c3-r3c4-r3c5
zipper-9: zipper r5c3-r4c3-r3c4-r3c5
modular-10: modular r7c5-r7c6-r6c7-r5c7
zipper-10: zipper r7c5-r7c6-r6c7-r5c7
modular-11: modular r2c5-r2c6-r2c7-r3c8-r4c8-r5c8
zipper-11: zipper r2c5-r2c6-r2c7-r3c8-r4c8-r5c8
modular-12: modular r5c2-r6c2-r7c2-r8c3-r8c4-r8c5
zipper-12: zipper r5c2-r6c2-r7c2-r8c3-r8c4-r8c5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- All lines are both Zipper AND Modular lines.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
