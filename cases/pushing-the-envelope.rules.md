---
format: open-rules
title: Pushing the Envelope
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/e95akwypjk
case: https://sudoku-sleuth.com/cases/pushing-the-envelope
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
little-killer-1: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 16
little-killer-2: little-killer r7c1-r8c2-r9c3 sum 11
little-killer-3: little-killer r9c3-r8c4-r7c5-r6c6-r5c7-r4c8-r3c9 sum 40
little-killer-4: little-killer r1c3-r2c2-r3c1 sum 6
little-killer-5: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 30
little-killer-6: little-killer r9c6-r8c7-r7c8-r6c9 sum 10
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 7
little-killer-8: little-killer r4c9-r3c8-r2c7-r1c6 sum 17
little-killer-9: little-killer r1c4-r2c3-r3c2-r4c1 sum 11
little-killer-10: little-killer r1c7-r2c8-r3c9 sum 9
little-killer-11: little-killer r7c9-r6c8-r5c7-r4c6-r3c5-r2c4-r1c3 sum 50
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Normal little killer rules: numbers outside the grid give the sum of the digits along the indicated diagonal. Digits may repeat along a little killer if allowed other rules.
