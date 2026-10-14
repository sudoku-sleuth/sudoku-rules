---
format: open-rules
title: Castle and Drawbridge
setter: Tingo
source: https://sudokupad.app/cxzg8v3aph
case: https://sudoku-sleuth.com/cases/castle-and-drawbridge
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
exported: 6b771b5ced691fdf941261d261741e9a
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4 total 14 connected true
cage-2: cage r1c6-r2c6 total 14 connected true
cage-3: cage r5c3-r6c3 total 9 connected true
cage-4: cage r5c2-r6c2 total 9 connected true
cage-5: cage r5c7-r6c7 total 9 connected true
cage-6: cage r5c8-r6c8 total 9 connected true
kropki-1: kropki r8c3-r8c4 white
kropki-2: kropki r5c8-r5c9 white
kropki-3: kropki r5c1-r5c2 white
kropki-4: kropki r8c6-r8c7 black
whispers-1: whispers r7c3-r6c3 gap 5
whispers-2: whispers r6c3-r5c3-r4c3-r3c3 gap 5
whispers-3: whispers r3c3-r4c4-r5c5-r4c6-r3c7-r4c7-r5c7-r6c7-r7c7 gap 5
whispers-4: whispers r7c5-r8c5-r9c5 gap 5
whispers-5: whispers r7c2-r8c2-r9c2 gap 5
whispers-6: whispers r7c8-r8c8-r9c8 gap 5
whispers-7: whispers r3c4-r2c5-r3c6 gap 5
whispers-8: whispers r2c9-r2c8-r2c7 gap 5
whispers-9: whispers r2c3-r2c2-r2c1 gap 5
renban-1: renban r7c3-r7c4-r6c4-r5c4-r4c5-r5c6-r6c6-r7c6-r7c7
renban-2: renban r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
pair-1: pair r3c3-r3c4 sum 10
pair-2: pair r3c6-r3c7 sum 10
pair-3: pair r8c5-r9c5 sum 10
```

Normal Sudoku Rules Apply
Digits in killer cages must sum to the small total in the top left corner of the cage. Digits may not repeat in cages.
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5.
Pink lines are Renban lines. Digits along the line are consecutive in any order.
Cells joined by X must sum to 10. Not all Xs are given.
Cells joined by white dots are consecutive in value. Cells joined by black dots have values in a ratio of 2:1. Not all dots are given.
