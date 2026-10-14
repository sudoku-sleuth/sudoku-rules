---
format: open-rules
title: The Imposter
setter: Kennet's Dad
source: https://sudokupad.app/rh8u70dcxa
case: https://sudoku-sleuth.com/cases/the-imposter
library: https://rules.sudoku-sleuth.com/
status: read
exported: abadc54eec6b0cfca08bfeb5171f87c1
---

```rules
sudoku 9x9
arrow-1: arrow r4c5-r4c6 bulb ["r3c4"]
arrow-2: arrow r3c5-r3c6 bulb ["r3c4"]
arrow-3: arrow r4c3-r4c2-r4c1 bulb ["r3c4"]
arrow-4: arrow r7c5-r7c4 bulb ["r7c6"]
arrow-5: arrow r6c5-r6c4 bulb ["r7c6"]
arrow-6: arrow r6c9-r7c8 bulb ["r6c8"]
arrow-7: arrow r7c1-r8c1 bulb ["r6c2"]
arrow-8: arrow r1c7-r2c7 bulb ["r1c8"]
window-classes classes "mod3"
```

-Normal sudoku rules apply.
-Each 2x2 area of cells in the grid must include at least one digit from each of the following sets: (147), (258), (369).
-Digits along an arrow sum to the digit in that arrow’s circle.
