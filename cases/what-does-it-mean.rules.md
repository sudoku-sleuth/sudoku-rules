---
format: open-rules
title: What Does It Mean?
setter: sujoyku
source: https://sudokupad.app/ure2uvy821
case: https://sudoku-sleuth.com/cases/what-does-it-mean
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1a6e26f279399a1e3624a724e8b0986a
---

```rules
sudoku 9x9
region-sum-1: region-sum r5c8-r4c8-r4c7-r4c6-r3c7-r3c8-r2c8 segments [["r5c8","r4c8","r4c7"],["r4c6"],["r3c7","r3c8","r2c8"]]
region-sum-2: region-sum r5c2-r6c2-r6c3-r6c4-r7c3-r7c2-r8c2 segments [["r5c2","r6c2","r6c3"],["r6c4"],["r7c3","r7c2","r8c2"]]
region-sum-3: region-sum r5c4-r4c4-r3c3-r2c3-r2c2-r1c2 segments [["r5c4","r4c4"],["r3c3","r2c3","r2c2","r1c2"]]
region-sum-4: region-sum r5c6-r6c6-r7c7-r8c7-r8c8 segments [["r5c6","r6c6"],["r7c7","r8c7","r8c8"]]
renban-1: renban r4c5-r3c5-r2c6-r1c7-r1c8
renban-2: renban r4c9-r5c9-r6c8-r7c9
renban-3: renban r6c1-r5c1-r4c2-r3c1
```

- Normal Sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Renban: Each purple line must contain a set of consecutive non-repeating digits in any order.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)
