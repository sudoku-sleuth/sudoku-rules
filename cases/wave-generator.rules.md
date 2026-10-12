---
format: open-rules
title: Wave Generator
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/wave-generator
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r1c2-r2c2-r2c3-r3c3-r3c4-r4c4-r4c5-r5c5-r5c6-r6c6-r6c7-r7c7-r7c8-r8c8-r8c9-r9c9 gap 5
whispers-2: whispers r2c1-r3c1-r3c2-r4c2-r4c3-r5c3-r5c4-r6c4-r6c5-r7c5-r7c6-r8c6-r8c7-r9c7 gap 5
whispers-3: whispers r1c5-r2c5-r3c6-r4c7-r5c8-r5c9 gap 5
whispers-4: whispers r6c1-r7c1-r7c2-r8c2-r8c3-r9c3 gap 5
little-killer-1: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 61
little-killer-2: little-killer r7c1-r8c2-r9c3 sum 7
little-killer-3: little-killer r1c2-r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9 sum 11
```

Normal Sudoku rules apply. German Whispers- Numbers on green lines must be at lease 5 apart from their neighbors on the line. Little killer- Numbers outside the grid show the sum of the indicated diagonal. Numbers may repeat on lines and diagonals, if other rules allow.
