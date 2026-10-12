---
format: open-rules
title: Whirlpool
setter: Jobo
source: https://sudokupad.app/98oe9v0gsb
case: https://sudoku-sleuth.com/cases/whirlpool-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r8c2-r9c3 bulb ["r7c2"]
arrow-2: arrow r2c8-r1c7 bulb ["r3c8"]
arrow-3: arrow r7c4-r8c5-r8c6 bulb ["r7c3"]
arrow-4: arrow r3c6-r2c5-r2c4 bulb ["r3c7"]
arrow-5: arrow r6c7-r5c8-r5c9 bulb ["r6c6"]
slow-thermo-1: slow-thermo r4c5-r3c4-r3c3-r4c2
slow-thermo-2: slow-thermo r5c4-r6c3-r7c3-r8c4
slow-thermo-3: slow-thermo r6c5-r7c6-r7c7-r6c8
slow-thermo-4: slow-thermo r5c6-r4c7-r3c7-r2c6
slow-thermo-5: slow-thermo r4c6-r3c5-r2c4-r2c3-r3c2-r4c1
slow-thermo-6: slow-thermo r4c4-r5c3-r6c2-r7c2-r8c3-r9c4
slow-thermo-7: slow-thermo r6c4-r7c5-r8c6-r8c7-r7c8-r6c9
slow-thermo-8: slow-thermo r6c6-r5c7-r4c8-r3c8-r2c7-r1c6
```

Normal sudoku rules apply.

Along thermometers, digits must either stay the same or increase from the bulb end (slow thermos).

Digits along an arrow must sum to the digit in that arrow's circle.
