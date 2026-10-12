---
format: open-rules
title: Narrow
setter: Jobo
source: https://sudokupad.app/kl6ia7tawx
case: https://sudoku-sleuth.com/cases/narrow
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r4c5-r4c4-r5c4 bulb ["r4c6"]
arrow-2: arrow r6c5-r6c4 bulb ["r6c6"]
arrow-3: arrow r6c1-r6c2 bulb ["r5c1"]
arrow-4: arrow r6c9-r7c9 bulb ["r5c9"]
arrow-5: arrow r8c7-r7c7 bulb ["r9c7"]
arrow-6: arrow r1c8-r1c7-r2c7 bulb ["r2c8"]
arrow-7: arrow r1c6-r2c6 bulb ["r1c5"]
arrow-8: arrow r3c3-r3c4 bulb ["r2c3"]
arrow-9: arrow r2c1-r3c1 bulb ["r1c1"]
arrow-10: arrow r8c2-r9c2 bulb ["r8c3"]
arrow-11: arrow r9c5-r9c6 bulb ["r9c4"]
nabner-1: nabner r4c6-r4c5-r4c4-r5c4 distinct true
nabner-2: nabner r6c6-r6c5-r6c4 distinct true
nabner-3: nabner r5c1-r6c1-r6c2 distinct true
nabner-4: nabner r5c9-r6c9-r7c9 distinct true
nabner-5: nabner r9c7-r8c7-r7c7 distinct true
nabner-6: nabner r2c8-r1c8-r1c7-r2c7 distinct true
nabner-7: nabner r1c5-r1c6-r2c6 distinct true
nabner-8: nabner r2c3-r3c3-r3c4 distinct true
nabner-9: nabner r1c1-r2c1-r3c1 distinct true
nabner-10: nabner r8c3-r8c2-r9c2 distinct true
nabner-11: nabner r9c4-r9c5-r9c6 distinct true
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle. Digits on arrows cannot repeat and no two digits on an arrow (including the bulb) can be consecutive, regardless of their order along the arrow.
