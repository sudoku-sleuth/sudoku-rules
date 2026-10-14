---
format: open-rules
title: Zipper Loops
setter: Jobo
source: https://sudokupad.app/hndtc7zgb6
case: https://sudoku-sleuth.com/cases/zipper-loops
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
exported: efb1b214193d92384d20d06a8ba5dcfb
---

```rules
sudoku 9x9
zipper-1: zipper r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
zipper-2: zipper r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
zipper-3: zipper r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
zipper-4: zipper r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
zipper-5: zipper r4c2-r3c3-r2c4
zipper-6: zipper r5c3-r4c4-r3c5
zipper-7: zipper r2c4-r3c4-r3c5
zipper-8: zipper r4c2-r4c3-r5c3
zipper-9: zipper r8c2-r7c3-r6c4
zipper-10: zipper r6c4-r7c4-r8c4
zipper-11: zipper r8c2-r8c3-r8c4
zipper-12: zipper r4c6-r5c7-r6c8
zipper-13: zipper r6c8-r7c7-r7c8-r8c7
zipper-14: zipper r4c6-r5c5-r6c5-r6c6
zipper-15: zipper r6c6-r7c6-r8c5-r8c6-r8c7
```

Normal sudoku rules apply.

Lavender lines are zipper loops. Zipper loops have two centers, which are to be deduced. Digits on a loop that are an equal distance away from a center must sum to the digit in that center.

All zipper loop centers are contained in a single cell and must be equal to their row, column or box number (friendly cells).
