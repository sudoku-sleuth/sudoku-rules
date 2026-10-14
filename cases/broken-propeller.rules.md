---
format: open-rules
title: Broken Propeller
setter: EPH
source: https://sudokupad.app/u7i760zfcz
case: https://sudoku-sleuth.com/cases/broken-propeller
library: https://rules.sudoku-sleuth.com/
status: read
exported: 797b0ed3edf4d95aef5f5e8ee72f51ca
---

```rules
sudoku 9x9
whispers-1: whispers r3c2-r2c1-r1c1-r1c2-r2c3-r3c4-r3c5-r3c6-r2c7-r1c8-r1c9-r2c9-r3c8-r4c7 gap 5
whispers-2: whispers r6c3-r7c2-r8c1-r9c1-r9c2-r8c3-r7c4-r7c5-r7c6-r8c7-r9c8-r9c9-r8c9-r7c8 gap 5
whispers-3: whispers r4c2-r4c3-r5c3 gap 5
whispers-4: whispers r5c7-r6c7-r6c8 gap 5
little-killer-1: little-killer r4c1-r3c2-r2c3-r1c4 sum 26
little-killer-2: little-killer r1c6-r2c7-r3c8-r4c9 sum 16
little-killer-3: little-killer r6c9-r7c8-r8c7-r9c6 sum 13
little-killer-4: little-killer r9c4-r8c3-r7c2-r6c1 sum 20
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Whisper-5 lines: adjacent digits along a green line must have a difference of at least 5.

Little Killer Sums: a clue with an arrow outside the grid gives the sum of the digits along the diagonal indicated by the arrow.
