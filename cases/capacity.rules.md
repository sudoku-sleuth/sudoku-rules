---
format: open-rules
title: Capacity
setter: sujoyku
source: https://sudokupad.app/u0r6e3mp12
case: https://sudoku-sleuth.com/cases/capacity
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 23 connected true
cage-2: cage r2c3-r2c4 total 13 connected true
cage-3: cage r8c6-r8c7 total 13 connected true
cage-4: cage r6c9-r7c9 total 10 connected true
cage-5: cage r6c5-r7c5 total 13 connected true
diagonal direction "main"
arrow-1: arrow r1c8-r1c7-r1c6 bulb ["r1c9"]
arrow-2: arrow r2c8-r3c7-r4c6 bulb ["r1c9"]
arrow-3: arrow r9c2-r9c3-r9c4 bulb ["r9c1"]
arrow-4: arrow r8c2-r7c3-r6c4 bulb ["r9c1"]
nabner-1: nabner r9c5-r9c6-r9c7-r9c8 distinct true
nabner-2: nabner r1c2-r1c3-r1c4-r1c5 distinct true
nabner-3: nabner r5c1-r6c1-r7c1-r8c1 distinct true
nabner-4: nabner r2c9-r3c9-r4c9-r5c9 distinct true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Diagonal: On the negative diagonal digits do not repeat.
.
- Nabner: The golden lines are Nabner lines, i.e. on a golden line there may not be consecutive or repeat digits.

- Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges.

- Killer cages: Digits in a cage sum to the clue in the top left.
