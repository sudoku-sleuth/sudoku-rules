---
format: open-rules
title: Rocket
setter: Jobo
source: https://sudokupad.app/oc4k2aaxd9
case: https://sudoku-sleuth.com/cases/rocket
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8418b8f00339f981664b030311684f4b
---

```rules
sudoku 9x9
diagonal direction "anti"
kropki r3c9-r4c9 white
arrow-1: arrow r8c3-r7c3 bulb ["r9c3"]
arrow-2: arrow r7c2-r7c3 bulb ["r7c1"]
arrow-3: arrow r6c3-r6c4 bulb ["r6c2"]
arrow-4: arrow r7c4-r6c4 bulb ["r8c4"]
arrow-5: arrow r6c5-r5c5 bulb ["r7c5"]
arrow-6: arrow r5c6-r4c6 bulb ["r6c6"]
arrow-7: arrow r4c7-r3c7 bulb ["r5c7"]
arrow-8: arrow r3c8-r2c8 bulb ["r4c8"]
arrow-9: arrow r2c9-r1c9 bulb ["r3c9"]
arrow-10: arrow r1c8-r1c9 bulb ["r1c7"]
arrow-11: arrow r2c7-r2c8 bulb ["r2c6"]
arrow-12: arrow r3c6-r3c7 bulb ["r3c5"]
arrow-13: arrow r4c5-r4c6 bulb ["r4c4"]
arrow-14: arrow r5c4-r5c5 bulb ["r5c3"]
parity-1: parity r7c1-r6c2-r5c3-r4c4-r3c5-r2c6-r1c7
parity-2: parity r9c3-r8c4-r7c5-r6c6-r5c7-r4c8-r3c9
renban r1c7-r2c8-r3c9
```

Normal sudoku rules apply.

Digits cannot repeat on the marked diagonal.

Digits along an arrow must sum to the digit in that arrow's circle.

Adjacent digits along a red line must alternate in parity (odd/even).

Digits along the purple line are a set of consecutive, non-repeating digits in any order. 

Digits separated by a white dot must be consecutive. Not all dots are given.
