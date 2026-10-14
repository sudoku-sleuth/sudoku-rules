---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r2c1
    - r2c2
format: open-rules
title: "Fog Puzzle #2"
setter: EPH
source: https://tinyurl.com/43fr7ssa
case: https://sudoku-sleuth.com/cases/fog-puzzle-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: c1bd58e6f91a115e3a5f22cc1ba9cff2
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r2c5 white
kropki-2: kropki r7c8-r7c9 white
kropki-3: kropki r9c6-r9c7 white
kropki-4: kropki r6c2-r7c2 white
kropki-5: kropki r4c3-r4c4 black
kropki-6: kropki r3c4-r4c4 black
whispers-1: whispers r2c3-r2c2-r3c2 gap 5
whispers-2: whispers r1c3-r1c2-r1c1-r2c1-r3c1-r4c1-r4c2-r4c3-r5c3-r6c3 gap 5
whispers-3: whispers r1c4-r2c4-r3c4-r3c5-r3c6 gap 5
whispers-4: whispers r1c7-r1c8-r1c9-r2c8-r3c7 gap 5
whispers-5: whispers r4c5-r4c4-r5c4-r6c4 gap 5
whispers-6: whispers r5c6-r6c6-r6c5 gap 5
whispers-7: whispers r5c9-r6c8-r7c7-r8c6-r9c5 gap 5
whispers-8: whispers r7c3-r8c2 gap 5
whispers-9: whispers r7c1-r8c1 gap 5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Cells connected by a green line must contain digits with a difference of at least 5.

Cells connected by a black dot must contain digits which are in a 1:2 ratio.
Cells connected by a white dot must contain digits which are consecutive.

Standard Fog of War rules apply: when a correct digit is placed in a cell, the fog will be removed from a 3x3 square centered on that cell.
