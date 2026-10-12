---
format: open-rules
title: Farfalle
setter: Blobz
source: https://sudokupad.app/blobz/farfalle
case: https://sudoku-sleuth.com/cases/farfalle
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=6 r2c9=3 r3c2=5 r4c5=5 r5c3=4 r5c7=6 r6c5=7 r7c8=8 r8c1=4 r9c6=2
---

```rules
sudoku 9x9
whispers-1: whispers r6c1-r5c2-r6c3 gap 5
whispers-2: whispers r6c7-r5c8-r6c9 gap 5
whispers-3: whispers r4c2-r3c3-r4c4 gap 5
whispers-4: whispers r4c8-r3c7-r4c6 gap 5
whispers-5: whispers r8c2-r7c3-r8c4 gap 5
whispers-6: whispers r8c6-r7c7-r8c8 gap 5
whispers-7: whispers r2c5-r1c6-r2c7 gap 5
whispers-8: whispers r2c1-r1c2-r2c3 gap 5
renban-1: renban r4c1-r5c2-r4c3
renban-2: renban r4c7-r5c8-r4c9
renban-3: renban r2c2-r3c3-r2c4
renban-4: renban r2c6-r3c7-r2c8
renban-5: renban r6c2-r7c3-r6c4
renban-6: renban r6c8-r7c7-r6c6
renban-7: renban r8c3-r9c4-r8c5
renban-8: renban r8c7-r9c8-r8c9
```

Normal sudoku rules apply.

Along green lines, adjacent digits differ by 5 or more.

Pink lines contain a non-repeating consecutive sequence in any order.
