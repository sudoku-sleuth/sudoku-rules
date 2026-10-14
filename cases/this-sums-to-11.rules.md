---
format: open-rules
title: This Sums to 11
setter: Blobz
source: https://sudokupad.app/blobz/this-sums-to-11
case: https://sudoku-sleuth.com/cases/this-sums-to-11
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7bc66d8d5839dbc31ef321208180510e
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3 connected true
cage-2: cage r3c3-r3c4 connected true
cage-3: cage r1c5-r2c5 connected true
cage-4: cage r2c6-r3c6 connected true
cage-5: cage r3c7-r4c7 connected true
cage-6: cage r2c8-r3c8 connected true
cage-7: cage r5c8-r5c9 connected true
cage-8: cage r6c7-r6c8 connected true
cage-9: cage r7c6-r7c7 connected true
cage-10: cage r8c7-r8c8 connected true
cage-11: cage r8c5-r9c5 connected true
cage-12: cage r7c4-r8c4 connected true
cage-13: cage r6c3-r7c3 connected true
cage-14: cage r7c2-r8c2 connected true
cage-15: cage r5c1-r5c2 connected true
cage-16: cage r4c2-r4c3 connected true
cage-17: cage r4c4-r4c5 connected true
cage-18: cage r4c6-r5c6 connected true
cage-19: cage r6c5-r6c6 connected true
cage-20: cage r5c4-r6c4 connected true
whispers-1: whispers r1c2-r2c1-r2c2-r2c3-r2c4 gap 5
whispers-2: whispers r8c1-r7c1-r7c2-r8c2-r8c3 gap 5
whispers-3: whispers r8c9-r9c8 gap 5
whispers-4: whispers r4c7-r4c8-r5c9 gap 5
```

Normal sudoku rules apply.

All cages sum to 11 and ALL such dominoes are shown (negative constraint applies).

Adjacent digits along a green line differ by at least 5.
