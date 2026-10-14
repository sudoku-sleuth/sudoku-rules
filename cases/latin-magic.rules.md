---
format: open-rules
title: Latin Magic
setter: Blobz
source: ""
case: https://sudoku-sleuth.com/cases/latin-magic
library: https://rules.sudoku-sleuth.com/
status: read
givens: 1.47..2.8.........6.......73.......9...........5.....18.....9.2.........2.39.56..
exported: d87ad82f462a594c4b36a49d163b1bd0
---

```rules
sudoku 9x9
parity-cells r2c2-r2c4-r2c6-r2c8-r4c8-r4c2-r6c2-r6c8-r8c8-r8c6-r8c4-r8c2 parity "even"
magic-square places [["r4c4","r4c5","r4c6","r5c4","r5c5","r5c6","r6c4","r6c5","r6c6"]]
```

Normal sudoku rules apply.

Grey squares indicate even digits.

The central box is a magic square, that is: each row, column and diagonal (of 3 digits each) add up to the same value.
