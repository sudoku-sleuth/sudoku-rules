---
format: open-rules
title: Magical Arrows
setter: Sir Moose
source: https://sudokupad.app/eijb2nu5cj
case: https://sudoku-sleuth.com/cases/magical-arrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: c5bf866d4c7409d972fdbbcebe640e60
---

```rules
sudoku 9x9
diagonal direction "anti"
kropki r5c9-r6c9 black
arrow-1: arrow r5c8-r4c7 bulb ["r5c7"]
arrow-2: arrow r6c7-r6c8 bulb ["r5c7"]
arrow-3: arrow r2c5-r3c4 bulb ["r2c4"]
arrow-4: arrow r8c5-r9c6 bulb ["r8c6"]
arrow-5: arrow r5c2-r4c3 bulb ["r4c2"]
arrow-6: arrow r2c8-r3c9 bulb ["r3c8"]
arrow-7: arrow r1c1-r2c1 bulb ["r1c2"]
arrow-8: arrow r8c8-r9c8 bulb ["r7c9"]
arrow-9: arrow r4c9-r5c9 bulb ["r4c8"]
```

Normal Sudoku Rules Apply.

Three of the regions are magic squares. In these regions, all rows, columns, and diagonals sum to the same number.

Digits cannot repeat on the positive diagonal.

Digits along an arrow sum the the number in that arrow's circle.

Digits separated by a black dot are in a 1:2 ratio. Not all dots are given.
