---
format: open-rules
title: Cutting Corners
setter: sujoyku
source: https://sudokupad.app/e6gb883917
case: https://sudoku-sleuth.com/cases/cutting-corners-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: d60ceeabc04ab126670a72d1f33b76b5
---

```rules
sudoku 9x9
index-line-1: index-line r5c1-r6c1-r7c1-r8c2-r9c3-r9c4-r9c5
index-line-2: index-line r4c9-r3c9-r2c9-r1c8-r1c7-r1c6-r1c5
index-line-3: index-line r1c1-r2c2-r3c2-r3c3-r2c3
index-line-4: index-line r9c6-r9c7-r8c7-r7c8-r7c9-r6c9
index-line-5: index-line r7c4-r6c5-r5c5-r4c5-r3c6
index-line-6: index-line r8c5-r7c6-r7c7-r6c8-r5c7-r5c8-r4c8-r5c9
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Index lines: Each turquoise line is an Index Line, i.e. the digit in the Nth cell along such a line (starting from the diamond) indicates the position along the line where the digit N appears. For example, if a diamond cell contains a 3, the third cell along that line must have a 1.
