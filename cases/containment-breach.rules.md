---
format: open-rules
title: Containment Breach
setter: Blobz
source: https://sudokupad.app/blobz/containment-breach
case: https://sudoku-sleuth.com/cases/containment-breach
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4bb4205f88cdd3a7c68776445d7f4c91
---

```rules
sudoku 9x9
cage-1: cage r6c7-r6c8-r7c6-r7c8-r8c6-r8c7-r8c8 connected true
cage-2: cage r5c5-r5c6-r5c7-r6c5-r7c5 connected true
cage-3: cage r3c3-r3c4-r3c5-r4c3-r5c3 connected true
cage-4: cage r2c2-r2c3-r2c4-r3c2-r4c2 connected true
cage-5: cage r8c9-r9c8-r9c9 total 11 connected true
cage-6: cage r1c1-r1c2-r2c1 total 18 connected true
cage-7: cage r5c1-r5c2 connected true
cage-8: cage r7c1-r7c2-r8c1-r8c3-r9c1-r9c2-r9c3 connected true
cage-9: cage r8c4-r9c4 total 12 connected true
cage-10: cage r1c7-r1c8-r1c9-r2c7-r2c9-r3c8-r3c9 connected true
cage-11: cage r4c8-r4c9 connected true
cage-12: cage r2c5-r2c6 total 13 connected true
whispers-1: whispers r7c6-r8c6-r8c7-r8c8-r7c8-r6c8-r6c7 gap 5
whispers-2: whispers r7c5-r6c5-r5c5-r5c6-r5c7 gap 5
whispers-3: whispers r5c3-r4c3-r3c3-r3c4-r3c5 gap 5
whispers-4: whispers r2c4-r2c3-r2c2-r3c2-r4c2 gap 5
whispers-5: whispers r2c7-r1c7-r1c8-r1c9-r2c9-r3c9-r3c8 gap 5
whispers-6: whispers r7c2-r7c1-r8c1-r9c1-r9c2-r9c3-r8c3 gap 5
whispers-7: whispers r9c9-r9c8-r9c7 gap 5
whispers-8: whispers r5c1-r5c2 gap 5
whispers-9: whispers r1c1-r1c2-r1c3 gap 5
whispers-10: whispers r8c4-r9c4 gap 5
whispers-11: whispers r4c8-r4c9 gap 5
whispers-12: whispers r2c5-r2c6 gap 5
```

Normal sudoku rules apply.

Digits in cages do not repeat, and must sum to the small clue, if given.

Along green lines, adjacent digits differ by 5 or more.
