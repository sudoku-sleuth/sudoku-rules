---
format: open-rules
title: 1 is not the loneliest number
setter: EPH
source: https://sudokupad.app/wvputnot38
case: https://sudoku-sleuth.com/cases/1-is-not-the-loneliest-number
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4-r3c4-r4c1-r4c2-r4c3-r4c4 total 36 connected true
cage-2: cage r1c6-r2c6-r3c6-r4c6-r4c7-r4c8-r4c9 total 28 connected true
cage-3: cage r6c1-r6c2-r6c3-r6c4-r7c4-r8c4-r9c4 total 40 connected true
cage-4: cage r6c6-r6c7-r6c8-r6c9-r7c6-r8c6-r9c6 total 32 connected true
cage-5: cage r1c1-r1c2-r2c1 connected true
cage-6: cage r1c8-r1c9-r2c9 total 9 connected true
cage-7: cage r8c9-r9c8-r9c9 total 19 connected true
cage-8: cage r8c1-r9c1-r9c2 total 11 connected true
whispers-1: whispers r3c4-r4c4-r4c3 gap 5
whispers-2: whispers r3c6-r4c6-r4c7 gap 5
whispers-3: whispers r6c7-r6c6-r7c6 gap 5
whispers-4: whispers r6c3-r6c4-r7c4 gap 5
whispers-5: whispers r1c4-r1c5-r1c6 gap 5
whispers-6: whispers r3c9-r4c9-r5c9-r6c9-r7c9 gap 5
whispers-7: whispers r3c1-r4c1-r5c1-r6c1-r7c1 gap 5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Cages: digits in cages must not repeat and must sum to the number in the top left corner of the cage, if given.

Whisper-5: adjacent digits along a green line must have a difference of at least 5.
