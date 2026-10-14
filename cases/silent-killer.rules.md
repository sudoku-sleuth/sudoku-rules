---
format: open-rules
title: Silent Killer
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/silent-killer
library: https://rules.sudoku-sleuth.com/
status: read
exported: bf982ce0c0a04b7ab1508fe5e7e5d563
---

```rules
sudoku 9x9
cage-1: cage r1c6-r2c6 total 9 connected true
cage-2: cage r3c4-r3c5-r3c6 total 15 connected true
cage-3: cage r3c8-r3c9 total 10 connected true
cage-4: cage r4c3-r5c3-r6c3 total 15 connected true
cage-5: cage r7c1-r7c2 total 9 connected true
cage-6: cage r8c3-r9c3 total 10 connected true
cage-7: cage r7c5-r7c6 total 7 connected true
cage-8: cage r5c7-r6c7 total 13 connected true
cage-9: cage r6c8-r6c9 total 9 connected true
cage-10: cage r7c8-r8c7-r8c8 total 12 connected true
whispers-1: whispers r6c3-r5c3-r4c3 gap 5
whispers-2: whispers r3c4-r3c5-r3c6 gap 5
whispers-3: whispers r3c1-r2c1-r1c1-r1c2-r1c3 gap 5
whispers-4: whispers r5c7-r6c7-r6c6-r7c6-r7c5 gap 5
whispers-5: whispers r9c6-r9c7-r8c8-r7c9-r6c9 gap 5
whispers-6: whispers r9c2-r9c1-r8c1 gap 5
whispers-7: whispers r6c4-r5c4-r4c5-r4c6 gap 5
whispers-8: whispers r3c9-r2c9-r1c8 gap 5
```

Normal Sudoku rules apply. 

Adjacent digits along each german whisper line must have a difference of at least 5.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

Exported from sudokulab.net
