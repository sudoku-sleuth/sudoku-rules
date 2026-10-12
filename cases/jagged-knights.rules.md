---
format: open-rules
title: Jagged Knights
setter: Blobz
source: ""
case: https://sudoku-sleuth.com/cases/jagged-knights
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c3=7
---

```rules
sudoku 9x9
whispers-1: whispers r8c3-r9c4-r8c4-r8c5-r7c4-r7c5-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r5c9-r5c8-r4c7 gap 5
whispers-2: whispers r2c7-r1c6-r2c6-r2c5-r3c6-r3c5-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1-r5c1-r5c2-r6c3 gap 5
renban-1: renban r1c8-r2c8-r3c8-r4c8-r4c9
renban-2: renban r5c3-r5c4-r5c5-r5c6-r5c7
renban-3: renban r6c1-r6c2-r7c2-r8c2-r9c2
anti-knight
```

Normal sudoku rules apply. 

Cells a (chess) knight's move apart cannot contain the same digit. 

Digits on a purple (renban) line form a set of non-repeating consecutive digits in any order.

Adjacent digits along a green (german whisper) line must differ by at least 5.
