---
format: open-rules
title: Formulate
setter: Blobz
source: https://sudokupad.app/blobz/formulate
case: https://sudoku-sleuth.com/cases/formulate
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c7-r5c8-r5c9 total 11 connected true
cage-2: cage r5c1-r5c2-r5c3 total 14 connected true
cage-3: cage r7c4-r7c5-r7c6 total 8 connected true
cage-4: cage r3c4-r3c5-r3c6 total 14 connected true
cage-5: cage r7c9-r8c8-r8c9 total 18 connected true
cage-6: cage r2c1-r2c2-r3c1 total 19 connected true
cage-7: cage r8c1-r9c1-r9c2 total 12 connected true
cage-8: cage r1c8-r1c9-r2c9 total 15 connected true
cage-9: cage r4c5-r5c5-r6c5 total 16 connected true
cage-10: cage r9c4-r9c5-r9c6 total 14 connected true
cage-11: cage r1c4-r1c5-r1c6 total 14 connected true
whispers-1: whispers r3c3-r3c2-r4c2-r4c3-r4c4-r5c4-r5c5-r5c6-r6c6-r6c7-r6c8-r7c8-r7c7 gap 5
whispers-2: whispers r1c1-r1c2-r1c3-r1c4 gap 5
whispers-3: whispers r9c6-r9c7-r9c8-r9c9 gap 5
whispers-4: whispers r2c4-r3c4 gap 5
whispers-5: whispers r7c6-r8c6 gap 5
whispers-6: whispers r6c1-r7c1-r7c2-r6c2 gap 5 loop true
whispers-7: whispers r8c3-r9c3-r9c4-r8c4 gap 5 loop true
whispers-8: whispers r3c8-r4c8-r4c9-r3c9 gap 5 loop true
whispers-9: whispers r1c6-r2c6-r2c7-r1c7 gap 5 loop true
```

Normal sudoku rules apply.

Along green lines, adjacent digits differ by 5 or more.

Digits in cages do not repeat, and sum to the given value.
