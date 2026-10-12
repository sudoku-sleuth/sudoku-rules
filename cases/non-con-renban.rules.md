---
format: open-rules
title: Non-Con Renban
setter: Blobz
source: https://sudokupad.app/blobz/non-con-renban
case: https://sudoku-sleuth.com/cases/non-con-renban
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=9 r5c9=5 r8c3=5 r9c7=9
---

```rules
sudoku 9x9
renban-1: renban r9c1-r8c1-r7c2
renban-2: renban r7c1-r6c1-r5c2
renban-3: renban r5c1-r4c1-r3c2
renban-4: renban r3c1-r2c1-r1c2
renban-5: renban r1c3-r1c4-r2c5
renban-6: renban r1c6-r1c7-r2c8
renban-7: renban r9c3-r9c4-r8c5
renban-8: renban r8c2-r7c3-r7c4
renban-9: renban r7c8-r8c9-r9c9
renban-10: renban r9c8-r8c7-r7c7
renban-11: renban r6c9-r5c8-r4c8
renban-12: renban r5c7-r5c6-r6c5
renban-13: renban r4c4-r5c5-r6c4
renban-14: renban r3c5-r4c6-r3c7
negative relations [{"op":"difference","value":1}] except []
```

Normal sudoku rules apply.

Pink lines contain a non-repeating set of consecutive digits in any order.

Orthogonally adjacent cells cannot contain consecutive digits.
