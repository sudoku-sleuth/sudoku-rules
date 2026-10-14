---
format: open-rules
title: Twenty-Three
setter: Blobz
source: https://sudokupad.app/ycus9gcjot
case: https://sudoku-sleuth.com/cases/twenty-three
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c3=2 r9c4=3
exported: c9d58883cf5b29a2039789e6a3102518
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c4-r5c2-r5c3-r5c4-r6c2-r7c2-r7c3 connected true
cage-2: cage r3c6-r3c7-r4c7-r5c6-r5c7-r6c7-r7c5-r7c6-r7c7 connected true
cage-3: cage r6c4-r6c5-r6c6-r7c4 total 23 connected true
cage-4: cage r8c6-r8c7-r8c8-r9c6-r9c7-r9c8 total 23 connected true
cage-5: cage r5c8-r6c8-r7c8-r7c9-r8c9-r9c9 total 23 connected true
cage-6: cage r1c4-r1c5-r1c6-r2c6 total 23 connected true
cage-7: cage r1c1-r1c2-r1c3-r2c2-r2c3-r2c4 total 23 connected true
cage-8: cage r2c9-r3c9-r4c9-r5c9 total 23 connected true
cage-9: cage r7c1-r8c1-r8c2-r9c2 total 23 connected true
cage-10: cage r2c1-r3c1-r3c2-r4c2 total 23 connected true
whispers-1: whispers r3c4-r4c4-r5c4-r5c3-r5c2-r6c2-r7c2 gap 5
whispers-2: whispers r3c7-r4c7-r5c7-r6c7-r7c7-r7c6 gap 5
whispers-3: whispers r5c6-r5c7 gap 5
```

Normal sudoku rules apply. 

Digits in cages do not repeat and must sum to the small clue in the top left corner, if given.

Adjacent digits along a green line must differ by at least 5.
