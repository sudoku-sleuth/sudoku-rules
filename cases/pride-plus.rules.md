---
format: open-rules
title: Pride Plus
setter: EPH
source: https://sudokupad.app/10b3ejgkmr
case: https://sudoku-sleuth.com/cases/pride-plus
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4-r3c4-r4c1-r4c2-r4c3-r4c4-r5c4 connected true
cage-2: cage r1c6-r2c6-r3c6-r4c5-r4c6-r4c7-r4c8-r4c9 connected true
cage-3: cage r5c6-r6c6-r6c7-r6c8-r6c9-r7c6-r8c6-r9c6 connected true
cage-4: cage r6c1-r6c2-r6c3-r6c4-r6c5-r7c4-r8c4-r9c4 connected true
cage-5: cage r1c8-r1c9-r2c9 total 22 connected true
cage-6: cage r8c9-r9c8-r9c9 total 17 connected true
cage-7: cage r8c1-r9c1-r9c2 total 20 connected true
cage-8: cage r1c1-r1c2-r2c1 total 9 connected true
whispers-1: whispers r3c4-r2c4-r1c4-r1c5-r1c6-r2c6-r3c6 gap 5
whispers-2: whispers r8c4-r9c4-r9c5-r9c6-r8c6 gap 5
whispers-3: whispers r4c1-r5c1-r6c1 gap 5
whispers-4: whispers r4c9-r5c9-r6c9 gap 5
whispers-5: whispers r7c3-r8c3 gap 5
whispers-6: whispers r7c7-r8c7 gap 5
renban-1: renban r5c1-r5c2-r5c3
renban-2: renban r5c7-r5c8-r5c9
renban-3: renban r8c5-r9c5
renban-4: renban r1c5-r2c5-r3c5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Cages: digits in a cage must not repeat, and sum to the total in the upper left corner of the cage, if given.
Togther, the cages without totals sum to 157.

Renban: a magenta line denotes a non-repeating set of consecutive digits, in any order.

Whisper-5: adjacent digits along a green line must have a difference of at least 5.
