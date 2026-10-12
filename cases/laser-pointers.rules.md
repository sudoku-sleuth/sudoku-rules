---
format: open-rules
title: Laser Pointers
setter: Jobo
source: https://sudokupad.app/v6b0kmzhke
case: https://sudoku-sleuth.com/cases/laser-pointers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-2: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-3: arrow r9c7-r9c6 bulb ["r9c8"]
arrow-4: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-5: arrow r7c5-r7c4 bulb ["r7c6"]
arrow-6: arrow r6c4-r6c5 bulb ["r6c3"]
arrow-7: arrow r4c6-r4c5 bulb ["r4c7"]
arrow-8: arrow r3c5-r3c6 bulb ["r3c4"]
whispers-1: whispers r1c3-r1c4-r1c5-r1c6-r1c7-r1c8 gap 5
whispers-2: whispers r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 gap 5
whispers-3: whispers r9c6-r9c5-r9c4-r9c3-r9c2 gap 5
whispers-4: whispers r7c1-r6c1-r5c1-r4c1-r3c1-r2c1 gap 5
whispers-5: whispers r3c6-r3c7 gap 5
whispers-6: whispers r4c5-r4c4-r4c3 gap 5
whispers-7: whispers r6c5-r6c6-r6c7 gap 5
whispers-8: whispers r7c4-r7c3 gap 5
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

Adjacent digits along a green line must differ by at least 5.
