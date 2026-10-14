---
format: open-rules
title: Blossom
setter: Blobz
source: https://sudokupad.app/blobz/blossom
case: https://sudoku-sleuth.com/cases/blossom
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6c11486fb5b1bd06e0c1c771f1e9d1d2
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5-r2c6 total 8 connected true
cage-2: cage r8c4-r8c5-r8c6 total 6 connected true
cage-3: cage r4c2-r5c2-r6c2 total 24 connected true
cage-4: cage r4c8-r5c8-r6c8 total 21 connected true
cage-5: cage r8c1-r9c1-r9c2 total 8 connected true
cage-6: cage r1c1-r1c2-r2c1 total 10 connected true
cage-7: cage r1c8-r1c9-r2c9 total 18 connected true
cage-8: cage r8c9-r9c8-r9c9 total 20 connected true
whispers-1: whispers r5c1-r4c2 gap 5
whispers-2: whispers r4c2-r3c2-r2c3 gap 5
whispers-3: whispers r2c3-r2c4-r1c5 gap 5
whispers-4: whispers r1c5-r2c6-r2c7 gap 5
whispers-5: whispers r2c7-r3c8-r4c8 gap 5
whispers-6: whispers r4c8-r5c9-r6c8 gap 5
whispers-7: whispers r6c8-r7c8-r8c7 gap 5
whispers-8: whispers r8c7-r8c6-r9c5-r8c4 gap 5
whispers-9: whispers r8c4-r8c3-r7c2 gap 5
whispers-10: whispers r7c2-r6c2-r5c1 gap 5
whispers-11: whispers r4c6-r4c5-r3c5 gap 5
whispers-12: whispers r5c3-r5c4-r4c4 gap 5
whispers-13: whispers r7c5-r6c5-r6c4 gap 5
whispers-14: whispers r5c7-r5c6-r6c6 gap 5
whispers-15: whispers r2c1-r1c2 gap 5
whispers-16: whispers r9c7-r8c8-r7c9 gap 5
whispers-17: whispers r6c7-r7c7 gap 5
whispers-18: whispers r4c3-r3c4 gap 5
whispers-19: whispers r6c3-r7c4 gap 5
whispers-20: whispers r3c6-r3c7 gap 5
```

Normal sudoku rules apply. 

Adjacent digits along green lines differ by at least 5.

Digits in cages sum to the given total.
