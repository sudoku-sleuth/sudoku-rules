---
format: open-rules
title: Pi(e) is a sandwich, right?
setter: EPH
source: https://sudokupad.app/6cchow6p32
case: https://sudoku-sleuth.com/cases/pi-e-is-a-sandwich-right
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=8 r1c7=6 r3c5=4 r4c1=3 r4c4=6 r6c9=2 r7c3=2 r7c6=3 r9c9=9
exported: df2aa7c3d5b7f8b8b2369414e6d40de0
---

```rules
sudoku 9x9
sandwich-1: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 3
sandwich-2: sandwich r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 14
sandwich-3: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 15
sandwich-4: sandwich r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 9
sandwich-5: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 26
sandwich-6: sandwich r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 5
sandwich-7: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 35
sandwich-8: sandwich r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 8
sandwich-9: sandwich r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sum 9
sandwich-10: sandwich r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 sum 7
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Sandwich: clues outside the grid give the sum of the digits between the 1 and the 9 in the appropriate column or row.
