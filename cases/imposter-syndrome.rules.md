---
format: open-rules
title: Imposter Syndrome
setter: Kennet's Dad
source: https://sudokupad.app/l57rfugnlw
case: https://sudoku-sleuth.com/cases/imposter-syndrome
library: https://rules.sudoku-sleuth.com/
status: read
exported: 49be853d29575cc2da43ddb6c30d7c79
---

```rules
sudoku 9x9
arrow-1: arrow r5c3-r4c3 bulb ["r6c3"]
arrow-2: arrow r5c4-r4c4 bulb ["r6c3"]
arrow-3: arrow r7c4-r7c5 bulb ["r6c3"]
arrow-4: arrow r5c7-r6c7 bulb ["r4c7"]
arrow-5: arrow r5c6-r6c6 bulb ["r4c7"]
arrow-6: arrow r3c6-r3c5 bulb ["r4c7"]
arrow-7: arrow r4c8-r4c9 bulb ["r3c7"]
arrow-8: arrow r3c8-r3c9 bulb ["r3c7"]
window-classes classes "mod3"
```

-Normal sudoku rules apply. 
-Each 2x2 area of cells in the grid must include at least one digit from each of the following sets: (147), (258), (369).
 -Digits along an arrow sum to the digit in that arrow’s circle.
