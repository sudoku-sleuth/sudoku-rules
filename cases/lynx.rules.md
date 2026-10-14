---
format: open-rules
title: Lynx
setter: Blobz
source: https://sudokupad.app/blobz/lynx
case: https://sudoku-sleuth.com/cases/lynx
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c9=8 r3c1=3 r4c5=2 r5c3=8 r5c7=7 r6c5=1 r8c7=1
exported: fc6f62367e161d5ac329418b89f461b8
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
double-arrow-1: double-arrow r2c2-r3c1-r4c1-r5c2-r6c1-r7c1-r8c2 ends ["r1c3","r9c3"]
double-arrow-2: double-arrow r2c8-r3c9-r4c9-r5c8-r6c9-r7c9-r8c8 ends ["r1c7","r9c7"]
double-arrow-3: double-arrow r4c6-r5c6-r6c6 ends ["r3c6","r7c6"]
double-arrow-4: double-arrow r6c4-r5c4-r4c4 ends ["r7c4","r3c4"]
double-arrow-5: double-arrow r2c5 ends ["r3c5","r1c6"]
double-arrow-6: double-arrow r8c5 ends ["r7c5","r9c4"]
```

Normal sudoku rules apply.

The sum of the digits along a 'double arrow' line is equal to the sum of the digits in the attached circles.

Digits do not repeat along the marked diagonals.
