---
format: open-rules
title: Escalator
setter: Jobo
source: https://sudokupad.app/lxesp8mcxg
case: https://sudoku-sleuth.com/cases/escalator
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r9c3-r8c4-r7c5-r6c6-r5c7-r4c8-r3c9 bulb ["r9c1","r9c2"]
arrow-2: arrow r8c3-r7c4-r6c5-r5c6-r4c7-r3c8-r2c9 bulb ["r8c1","r8c2"]
arrow-3: arrow r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9 bulb ["r7c1","r7c2"]
arrow-4: arrow r6c3-r5c4-r4c5-r3c6-r2c7-r1c8 bulb ["r6c1","r6c2"]
arrow-5: arrow r3c1-r2c1-r1c1 bulb ["r4c1","r5c1"]
arrow-6: arrow r5c8-r6c7-r6c8 bulb ["r4c9"]
arrow-7: arrow r8c5-r9c4-r9c5 bulb ["r7c6"]
```

Normal sudoku rules apply.

Digits along an arrow must sum to the number in that arrow's circle or pill (read left to right or top to bottom).
