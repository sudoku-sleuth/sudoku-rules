---
format: open-rules
title: Yin-Yang Arrows
setter: Blobz
source: https://sudokupad.app/8lo8uvn80f
case: https://sudoku-sleuth.com/cases/yin-yang-arrows
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c1=1
exported: 4bfebb77b0ebf9751602e49067043995
---

```rules
sudoku 9x9
arrow-1: arrow r5c4-r5c5-r5c6 bulb ["r5c3"]
arrow-2: arrow r5c8-r5c7-r4c8 bulb ["r5c9"]
arrow-3: arrow r7c3-r7c2-r6c2 bulb ["r6c4"]
arrow-4: arrow r3c8-r2c7 bulb ["r3c9"]
arrow-5: arrow r8c8-r8c7 bulb ["r8c9"]
arrow-6: arrow r5c2-r4c3 bulb ["r6c3"]
arrow-7: arrow r8c6-r7c6 bulb ["r9c7"]
arrow-8: arrow r9c1-r9c2 bulb ["r8c2"]
arrow-9: arrow r3c6-r2c6 bulb ["r4c7"]
arrow-10: arrow r8c4-r7c5 bulb ["r9c5"]
arrow-11: arrow r2c2-r3c3 bulb ["r1c2"]
arrow-12: arrow r2c3-r2c4 bulb ["r1c3"]
```

Normal sudoku rules apply. 

Digits along an arrow must sum to the value in the attached circle. Digits along arrows may repeat if allowed by other rules.

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area may be fully shaded or unshaded. 

The digits 7, 8, and 9 are shaded. All circles are shaded and all arrows are unshaded.
