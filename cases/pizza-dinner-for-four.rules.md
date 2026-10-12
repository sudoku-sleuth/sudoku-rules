---
format: open-rules
title: Pizza Dinner for Four
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/pizza-dinner-for-four
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
givens: r4c6=9
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c9 total 17 connected true
cage-2: cage r3c1-r3c2 total 17 connected true
cage-3: cage r7c3-r8c3 total 17 connected true
cage-4: cage r9c7-r9c8 total 17 connected true
cage-5: cage r5c2-r6c2 total 12 connected true
whispers-1: whispers r4c6-r3c7-r2c8 gap 4
whispers-2: whispers r4c6-r3c6-r2c6-r1c6 gap 4
whispers-3: whispers r4c6-r4c7-r4c8-r4c9 gap 4
whispers-4: whispers r4c6-r5c6-r6c6-r7c6 gap 4
whispers-5: whispers r4c6-r5c7-r6c8 gap 4
whispers-6: whispers r4c6-r5c5-r6c4 gap 4
whispers-7: whispers r4c6-r4c5-r4c4-r4c3 gap 4
whispers-8: whispers r4c6-r3c5-r2c4 gap 4
parity-cells-1: parity-cells r5c1-r8c1-r1c1-r8c8 parity "odd"
parity-cells-2: parity-cells r5c5-r4c3-r4c9-r7c6-r6c4-r3c6 parity "even"
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on the red line are at least 4 apart from their neighbors on the line. The solver must make the sum of all numbers on the red line a minimum. Numbers in cages sum to the number in the top left corner of the cage. Numbers in gray squares are EVEN. All possible even numbers ON THE RED LINE are given. Numbers in gray circles (the cups for the family's drinks) are ODD. The yellow line is the pizza crust, and has no effect on the puzzle.
