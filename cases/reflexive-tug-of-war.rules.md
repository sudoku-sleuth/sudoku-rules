---
format: open-rules
title: Reflexive Tug Of War
setter: EPH
source: https://tinyurl.com/2m6zv69n
case: https://sudoku-sleuth.com/cases/reflexive-tug-of-war
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r1c4-r1c5-r1c6-r2c6-r3c6
renban-2: renban r4c4-r5c4-r6c4-r6c5-r6c6
renban-3: renban r3c1-r3c2-r3c3
renban-4: renban r7c4-r8c4-r9c4
renban-5: renban r4c7-r4c8-r4c9
renban-6: renban r7c3-r8c3-r9c3-r9c2-r9c1
renban-7: renban r7c7-r7c8-r7c9-r8c9-r9c9
renban-8: renban r4c1-r5c1
renban-9: renban r2c9-r3c9
nabner-1: nabner r1c4-r2c4-r3c4-r3c5-r3c6 distinct true
nabner-2: nabner r4c4-r4c5-r4c6-r5c6-r6c6 distinct true
nabner-3: nabner r1c1-r1c2-r1c3 distinct true
nabner-4: nabner r1c7-r1c8-r1c9 distinct true
nabner-5: nabner r6c1-r6c2-r6c3 distinct true
nabner-6: nabner r6c7-r6c8-r6c9 distinct true
nabner-7: nabner r7c3-r7c2-r7c1-r8c1-r9c1 distinct true
nabner-8: nabner r7c7-r8c7-r9c7-r9c8-r9c9 distinct true
nabner-9: nabner r4c2-r4c3 distinct true
nabner-10: nabner r3c8-r3c9 distinct true
little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 46
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Purple lines are renban lines: digits on a line form a set of consecutive digits in any order, without repetition.

Light brown lines are nabner lines: no two digits on a line can be consecutive; there are no repeated digits.

Digits along the diagonal indicated by the arrow outside the grid must sum to the value by the arrow.
