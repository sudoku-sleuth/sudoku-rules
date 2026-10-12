---
format: open-rules
title: Herringbone
setter: Jobo
source: https://tinyurl.com/3vwm9t8d
case: https://sudoku-sleuth.com/cases/herringbone
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c9=3 r6c9=9
---

```rules
sudoku 9x9
arrow-1: arrow r2c4-r1c3 bulb ["r3c5"]
arrow-2: arrow r8c4-r9c3 bulb ["r7c5"]
arrow-3: arrow r8c6 bulb ["r7c7"]
arrow-4: arrow r2c6 bulb ["r3c7"]
whispers-1: whispers r8c3-r7c4 gap 5
whispers-2: whispers r8c5-r7c6 gap 5
whispers-3: whispers r2c5-r3c6 gap 5
whispers-4: whispers r2c3-r3c4 gap 5
slow-thermo-1: slow-thermo r3c1-r4c2-r5c3
slow-thermo-2: slow-thermo r3c2-r4c3-r5c4
slow-thermo-3: slow-thermo r3c3-r4c4-r5c5
slow-thermo-4: slow-thermo r3c4-r4c5-r5c6
slow-thermo-5: slow-thermo r3c5-r4c6-r5c7
slow-thermo-6: slow-thermo r3c6-r4c7-r5c8
slow-thermo-7: slow-thermo r3c7-r4c8-r5c9
slow-thermo-8: slow-thermo r7c7-r6c8-r5c9
slow-thermo-9: slow-thermo r7c6-r6c7-r5c8
slow-thermo-10: slow-thermo r7c5-r6c6-r5c7
slow-thermo-11: slow-thermo r7c4-r6c5-r5c6
slow-thermo-12: slow-thermo r7c3-r6c4-r5c5
slow-thermo-13: slow-thermo r7c2-r6c3-r5c4
slow-thermo-14: slow-thermo r7c1-r6c2-r5c3
```

Normal sudoku rules apply.

Along thermometers, digits must either stay the same or increase from the bulb end (slow thermos). All thermos are length 3 and end in the middle row. Some thermo bulbs may be hidden by arrow circles.

Digits along an arrow must sum to the digit in that arrow's circle.

Adjacent digits along a green line must differ by at least 5.
