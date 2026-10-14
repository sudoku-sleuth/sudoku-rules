---
format: open-rules
title: Nabnerix
setter: sujoyku
source: https://sudokupad.app/7ynw9nnxh5
case: https://sudoku-sleuth.com/cases/nabnerix
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
exported: d9792e09452631735d1ad15cfa06e90d
---

```rules
sudoku 9x9
nabner-1: nabner r7c9-r8c8-r9c7 distinct true
nabner-2: nabner r3c1-r2c2-r1c3-r1c4 distinct true
nabner-3: nabner r9c3-r8c2-r7c1-r6c1 distinct true
nabner-4: nabner r1c7-r2c8-r3c9-r4c9 distinct true
nabner-5: nabner r5c2-r4c3-r3c4-r2c5 distinct true
nabner-6: nabner r8c5-r7c6-r6c7-r5c8 distinct true
nabner-7: nabner r5c4-r4c5-r3c6 distinct true
x-sum-1: x-sum r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sum 22
x-sum-2: x-sum r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 sum 20
x-sum-3: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 10
x-sum-4: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 12
x-sum-5: x-sum r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 14
x-sum-6: x-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 35
x-sum-7: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 19
x-sum-8: x-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 19
```

- Normal sudoku rules apply, i.e. each row, colum and 3x3 region has to contain the digits from 1 to 9 once each.

- Nabner lines: The golden lines are Nabner lines, i.e. on such a line there may not be consecutive or repeated digits.

- X-sums: Clues outside the grid indicate the sum of the first X digits in the respective row or column where X is the first digit seen from the clue.
