---
format: open-rules
title: Predict the Pattern
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/predict-the-pattern
library: https://rules.sudoku-sleuth.com/
status: read
exported: bed7b173fe64498620a641ab7c233dd3
---

```rules
sudoku 9x9
cage-1: cage r5c4-r6c4 total 7 connected true
cage-2: cage r3c4-r3c5 total 13 connected true
whispers-1: whispers r5c6-r4c6-r3c5-r3c4-r4c3-r5c2-r6c2-r7c3-r8c4-r9c5-r9c6-r8c7-r7c8-r6c9 gap 5
whispers-2: whispers r5c4-r6c4-r7c5-r7c6-r6c7-r5c8-r4c8-r3c7-r2c6-r1c5-r1c4-r2c3-r3c2-r4c1 gap 5
renban-1: renban r6c5-r6c6-r5c7-r4c7-r3c6-r2c5-r2c4-r3c3
renban-2: renban r4c5-r4c4-r5c3-r6c3-r7c4-r8c5-r8c6-r7c7
renban-3: renban r8c1-r8c2
```

Normal sudoku rules apply. German Whispers- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. Also, the sum of all numbers on one green line is greater than the sum on the other green line by 26. Renban- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage.
