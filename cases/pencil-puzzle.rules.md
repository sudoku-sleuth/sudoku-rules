---
format: open-rules
title: Pencil Puzzle
setter: Blobz
source: https://sudokupad.app/blobz/pencil-puzzle
case: https://sudoku-sleuth.com/cases/pencil-puzzle
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r2c2-r3c2-r4c1-r5c1-r6c2-r7c2-r8c3-r9c4-r9c5-r8c6-r7c6-r6c5-r5c5-r4c5-r3c4-r4c3 gap 5
whispers-2: whispers r2c5-r1c6-r1c7-r2c7-r3c7-r3c8-r2c8 gap 5
whispers-3: whispers r9c8-r9c7-r9c6-r8c7-r7c8-r6c8 gap 5
renban-1: renban r8c1-r8c2-r9c2-r9c1
renban-2: renban r4c2-r4c3-r5c3-r5c2
renban-3: renban r7c4-r7c5-r8c5-r8c4
renban-4: renban r8c8-r8c9-r9c9-r9c8
renban-5: renban r5c7-r5c8-r6c8-r6c7
renban-6: renban r1c8-r2c8-r2c9-r1c9
renban-7: renban r2c5-r2c6-r3c6-r3c5
renban-8: renban r1c1-r1c2-r2c2-r2c1
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [3]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [5]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [7]
quadruple-5: quadruple r4c2-r4c3-r5c2-r5c3 digits [8]
quadruple-6: quadruple r5c7-r5c8-r6c7-r6c8 digits [4]
quadruple-7: quadruple r2c5-r2c6-r3c5-r3c6 digits [2]
quadruple-8: quadruple r7c4-r7c5-r8c4-r8c5 digits [6]
```

Normal sudoku rules apply.

Pink lines contain a consecutive sequence in any order.

Along green lines, adjacent digits differ by 5 or more.

Digits in circles must appear in a cell touching the circle.
