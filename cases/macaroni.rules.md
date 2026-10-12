---
format: open-rules
title: Macaroni
setter: Blobz
source: https://sudokupad.app/blobz/macaroni
case: https://sudoku-sleuth.com/cases/macaroni
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=3 r4c9=7 r6c1=1 r9c6=4
---

```rules
sudoku 9x9
anti-knight
whispers-1: whispers r1c1-r1c2-r2c3 gap 5
whispers-2: whispers r2c1-r3c2-r3c3 gap 5
whispers-3: whispers r4c1-r4c2-r5c3 gap 5
whispers-4: whispers r5c1-r6c2-r6c3 gap 5
whispers-5: whispers r7c1-r7c2-r8c3 gap 5
whispers-6: whispers r8c1-r9c2-r9c3 gap 5
renban-1: renban r2c7-r3c8-r3c9
renban-2: renban r8c4-r7c5-r7c6
renban-3: renban r5c4-r6c5-r6c6
renban-4: renban r2c4-r2c5-r1c6
renban-5: renban r6c9-r5c9-r4c8
renban-6: renban r7c7-r8c7-r9c8
```

Normal sudoku rules apply.

Along green lines, adjacent digits differ by 5 or more.

Pink lines contain a set of consecutive digits in any order.

Cells a chess knight's move apart cannot contain the same digit.
