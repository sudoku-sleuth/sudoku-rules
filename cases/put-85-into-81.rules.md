---
format: open-rules
title: Put 85 Into 81
setter: EPH
source: https://sudokupad.app/m19t3er6ib
case: https://sudoku-sleuth.com/cases/put-85-into-81
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r1c7-r2c7-r3c7-r4c7
renban-2: renban r7c9-r7c8-r7c7-r7c6
renban-3: renban r9c3-r8c3-r7c3-r6c3
renban-4: renban r3c1-r3c2-r3c3-r3c4
renban-5: renban r5c1-r6c1-r7c1-r8c1-r9c1
renban-6: renban r9c5-r9c6-r9c7-r9c8-r9c9
renban-7: renban r1c9-r2c9-r3c9-r4c9-r5c9
renban-8: renban r1c1-r1c2-r1c3-r1c4-r1c5
renban-9: renban r2c6-r2c5-r3c5-r4c5
renban-10: renban r7c5-r8c5
renban-11: renban r6c2-r5c2-r5c3-r5c4
renban-12: renban r5c7-r5c8
pair-1: pair r3c1-r3c2 relation {"op":"sum","value":10}
pair-2: pair r1c7-r2c7 relation {"op":"sum","value":10}
pair-3: pair r7c8-r7c9 relation {"op":"sum","value":10}
pair-4: pair r8c3-r9c3 relation {"op":"sum","value":10}
pair-5: pair r7c1-r7c2 relation {"op":"sum","value":10}
pair-6: pair r3c8-r3c9 relation {"op":"sum","value":10}
pair-7: pair r5c9-r6c9 relation {"op":"sum","value":10}
pair-8: pair r8c6-r9c6 relation {"op":"sum","value":10}
pair-9: pair r6c5-r6c6 relation {"op":"sum","value":5}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

XV clues: digits separated by an X sum to 10; digits separated by a V sum to 5.

Renban: digits on a pink line are a non-repeating set of consecutive digits, in any order.
