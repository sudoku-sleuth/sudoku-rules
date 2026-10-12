---
format: open-rules
title: Penne
setter: Blobz
source: https://sudokupad.app/blobz/penne
case: https://sudoku-sleuth.com/cases/penne
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=8 r2c5=3 r3c2=2 r5c3=3 r6c8=2 r7c4=2 r8c1=2 r9c9=3
---

```rules
sudoku 9x9
whispers-1: whispers r2c1-r1c2-r1c3-r1c4-r1c5 gap 4
whispers-2: whispers r3c1-r4c2-r5c2-r6c2-r7c2 gap 4
whispers-3: whispers r4c3-r3c4-r3c5-r3c6-r3c7 gap 4
whispers-4: whispers r1c8-r2c8-r3c8-r4c8-r5c9 gap 4
whispers-5: whispers r5c8-r5c7-r5c6-r5c5-r6c4 gap 4
whispers-6: whispers r9c3-r8c4-r8c5-r8c6-r8c7 gap 4
renban-1: renban r1c5-r2c4-r2c3-r2c2-r2c1
renban-2: renban r3c1-r4c1-r5c1-r6c1-r7c2
renban-3: renban r4c3-r4c4-r4c5-r4c6-r3c7
renban-4: renban r1c8-r2c9-r3c9-r4c9-r5c9
renban-5: renban r6c4-r6c5-r6c6-r6c7-r5c8
renban-6: renban r8c7-r9c6-r9c5-r9c4-r9c3
```

Normal sudoku rules apply.

Along pink "renban" lines, digits form a non-repeating consecutive sequence in any order.

Along orange "dutch whisper" lines, adjacent digits differ by 4 or more.
