---
format: open-rules
title: Barbed Wire
setter: Jobo
source: https://tinyurl.com/48srpswn
case: https://sudoku-sleuth.com/cases/barbed-wire
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c2=2 r5c3=7 r5c7=8 r5c8=3
exported: af23efbf4dcb5ca5dbb0716052063afe
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r4c5-r4c4 bulb ["r5c5"]
arrow-2: arrow r5c6-r4c6 bulb ["r5c5"]
arrow-3: arrow r6c5-r6c6 bulb ["r5c5"]
arrow-4: arrow r5c4-r6c4 bulb ["r5c5"]
arrow-5: arrow r6c3-r6c4 bulb ["r7c3"]
arrow-6: arrow r7c2-r8c2 bulb ["r7c3"]
arrow-7: arrow r8c1-r8c2 bulb ["r9c1"]
arrow-8: arrow r6c7-r6c6 bulb ["r7c7"]
arrow-9: arrow r7c8-r8c8 bulb ["r7c7"]
arrow-10: arrow r8c9-r8c8 bulb ["r9c9"]
arrow-11: arrow r4c3-r4c4 bulb ["r3c3"]
arrow-12: arrow r2c3-r2c2 bulb ["r3c3"]
arrow-13: arrow r1c2-r2c2 bulb ["r1c1"]
arrow-14: arrow r1c8-r2c8 bulb ["r1c9"]
arrow-15: arrow r4c7-r4c6 bulb ["r3c7"]
arrow-16: arrow r2c7-r2c8 bulb ["r3c7"]
```

Normal sudoku rules apply.

Digits cannot repeat on either diagonal.

Digits along an arrow must sum to the digit in that arrow's circle.
