---
format: open-rules
title: Line Art
setter: Blobz
source: https://sudokupad.app/blobz/line-art
case: https://sudoku-sleuth.com/cases/line-art
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=1 r4c3=6 r8c2=2
exported: 1a05ef6caf0630cc9ebdfd381f837e03
---

```rules
sudoku 9x9
whispers-1: whispers r1c3-r1c2-r1c1-r2c1-r3c1 gap 5
whispers-2: whispers r6c1-r6c2-r6c3-r6c4-r6c5-r5c5-r5c6-r4c6-r3c6-r2c6-r1c6 gap 5
whispers-3: whispers r3c7-r4c7-r5c7 gap 5
whispers-4: whispers r3c8-r4c8-r5c8 gap 5
whispers-5: whispers r3c9-r4c9-r5c9 gap 5
whispers-6: whispers r7c5-r7c4-r7c3 gap 5
whispers-7: whispers r8c5-r8c4-r8c3 gap 5
whispers-8: whispers r9c5-r9c4-r9c3 gap 5
renban-1: renban r4c1-r3c2-r2c3-r1c4
renban-2: renban r5c1-r4c2-r3c3-r2c4-r1c5
renban-3: renban r5c2-r4c3-r3c4-r2c5
renban-4: renban r5c3-r4c4-r3c5
renban-5: renban r4c5-r5c4
renban-6: renban r7c9-r8c8-r9c7
renban-7: renban r7c6-r6c6-r6c7
renban-8: renban r2c7-r2c8-r2c9
renban-9: renban r7c1-r7c2-r6c1
renban-10: renban r7c7-r8c7-r7c8
renban-11: renban r8c9-r9c9-r9c8
renban-12: renban r8c1-r9c1-r9c2
```

Normal sudoku rules apply.

Pink lines contain a set of non-repeating, consecutive digits in any order.

Along green lines, adjacent digits differ by 5 or more.
