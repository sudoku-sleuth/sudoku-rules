---
format: open-rules
title: Symphonic Pink
setter: Blobz
source: https://sudokupad.app/blobz/symphonic-pink
case: https://sudoku-sleuth.com/cases/symphonic-pink
library: https://rules.sudoku-sleuth.com/
status: read
exported: cce43a4e4c1e1153adbf0dd8eb6071d0
---

```rules
sudoku 9x9
cage-1: cage r4c9-r5c9-r6c9 total 7 connected true
cage-2: cage r4c1-r5c1-r6c1 total 23 connected true
whispers-1: whispers r1c1-r2c2-r3c3 gap 5
whispers-2: whispers r1c9-r2c8-r3c7 gap 5
whispers-3: whispers r9c1-r8c2-r7c3-r8c4 gap 5
whispers-4: whispers r8c6-r7c7-r8c8-r9c9 gap 5
whispers-5: whispers r9c2-r9c3 gap 5
whispers-6: whispers r9c7-r9c8 gap 5
whispers-7: whispers r4c5-r5c4-r6c5-r5c6 gap 5 loop true
renban-1: renban r4c2-r5c2-r6c2
renban-2: renban r4c8-r5c8-r6c8
renban-3: renban r1c1-r2c1-r3c1
renban-4: renban r1c9-r2c9-r3c9
renban-5: renban r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
renban-6: renban r6c1-r7c2-r6c3
renban-7: renban r6c7-r7c8-r6c9
renban-8: renban r7c1-r8c2-r8c3-r9c4
renban-9: renban r7c9-r8c8-r8c7-r9c6
renban-10: renban r8c5-r9c5
renban-11: renban r4c7-r5c7
renban-12: renban r4c3-r5c3
renban-13: renban r6c4-r5c5-r4c6
renban-14: renban r2c5-r2c6-r2c7
renban-15: renban r2c3-r1c4-r1c5
```

Normal sudoku rules apply.

In cages, digits sum to the given value.

Along green lines, adjacent digits differ by 5 or more.

Along pink lines, digits form a non-repeating consecutive sequence in any order.
