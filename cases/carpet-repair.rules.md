---
format: open-rules
title: Carpet Repair
setter: Blobz
source: https://sudokupad.app/blobz/carpet-repair
case: https://sudoku-sleuth.com/cases/carpet-repair
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c9 total 24 connected true
cage-2: cage r8c1-r9c1-r9c2 total 24 connected true
cage-3: cage r1c2-r2c1-r2c2 total 24 connected true
cage-4: cage r8c8-r8c9-r9c8 total 24 connected true
cage-5: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 24 connected true
cage-6: cage r6c3-r7c2-r7c3-r7c4-r8c3 total 24 connected true
cage-7: cage r2c7-r3c6-r3c7-r3c8-r4c7 total 24 connected true
cage-8: cage r3c2-r3c3-r3c4-r4c4 total 24 connected true
cage-9: cage r6c6-r7c5-r7c6-r7c7 total 24 connected true
cage-10: cage r4c3-r5c1-r5c2-r5c3 total 24 connected true
cage-11: cage r5c7-r5c8-r6c7-r6c8 total 24 connected true
cage-12: cage r1c5-r2c3-r2c4-r2c5-r3c5 total 24 connected true
whispers-1: whispers r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8 gap 5
whispers-2: whispers r3c6-r3c7-r4c7 gap 5
whispers-3: whispers r6c3-r7c3-r7c4 gap 5
whispers-4: whispers r2c9-r3c8 gap 5
whispers-5: whispers r1c8-r2c7 gap 5
whispers-6: whispers r7c2-r8c1 gap 5
whispers-7: whispers r8c3-r9c2 gap 5
whispers-8: whispers r6c9-r7c8 gap 5
whispers-9: whispers r3c2-r4c1 gap 5
```

Normal sudoku rules apply. 

Digits in cages do not repeat, and sum to the given total.

Along green lines, adjacent digits differ by 5 or more.
