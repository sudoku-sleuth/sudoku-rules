---
format: open-rules
title: Balance Beam
setter: Jobo
source: https://sudokupad.app/dkuwbx7lba
case: https://sudoku-sleuth.com/cases/balance-beam
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c1=7
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r5c5-r6c5 colour "white"
arrow-1: arrow r3c2-r3c1 bulb ["r3c3"]
arrow-2: arrow r3c4-r3c5 bulb ["r3c3"]
arrow-3: arrow r4c3-r4c2 bulb ["r4c4"]
arrow-4: arrow r4c5-r4c6 bulb ["r4c4"]
arrow-5: arrow r5c4-r5c3 bulb ["r5c5"]
arrow-6: arrow r5c6-r5c7 bulb ["r5c5"]
arrow-7: arrow r6c5-r6c4 bulb ["r6c6"]
arrow-8: arrow r6c7-r6c8 bulb ["r6c6"]
arrow-9: arrow r7c6-r7c5 bulb ["r7c7"]
arrow-10: arrow r7c8-r7c9 bulb ["r7c7"]
diagonal direction "main"
```

Normal sudoku rules apply.

Digits cannot repeat on the marked diagonal.

Digits along an arrow must sum to the digit in that arrow's circle.

Digits separated by a white dot must be consecutive. Not all dots are given.

Cells separated by a king's move cannot contain the same digit.
