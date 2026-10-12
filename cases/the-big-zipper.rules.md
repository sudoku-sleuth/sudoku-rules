---
format: open-rules
title: The Big Zipper
setter: Marty Sears
source: https://sudokupad.app/5tw5gusn3p
case: https://sudoku-sleuth.com/cases/the-big-zipper
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
zipper-1: zipper r1c5-r1c6-r1c7-r1c8-r1c9-r2c8-r3c8-r3c9-r4c8-r5c8-r6c7-r5c7-r4c7-r4c6-r3c6-r2c5-r2c4-r1c3-r1c2-r2c1-r3c1-r3c2-r3c3-r2c3-r3c4-r3c5-r4c5-r5c5-r5c6-r6c6-r7c7-r8c7-r8c6-r7c6-r7c5-r8c5-r8c4-r9c3-r8c3-r9c2-r9c1-r8c1-r7c1-r6c1-r5c1
zipper-2: zipper r5c4-r6c5-r7c4
zipper-3: zipper r7c8-r8c9-r9c9-r9c8-r9c7
```

Normal sudoku rules apply.
Along a lavender zipper line, any pair of digits that are the same distance from the centre cell of the line (marked by a spot) sum to the digit in that centre cell.
