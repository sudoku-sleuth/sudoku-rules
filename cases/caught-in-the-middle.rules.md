---
format: open-rules
title: Caught in the Middle
setter: Meggen033
source: https://sudokupad.app/6ofa907w3m
case: https://sudoku-sleuth.com/cases/caught-in-the-middle
library: https://rules.sudoku-sleuth.com/
status: read
exported: 489c562aa2433740c2832913bf438222
---

```rules
sudoku 9x9
cage-1: cage r5c2-r5c3 total 7 connected true
cage-2: cage r5c5-r5c6 total 13 connected true
cage-3: cage r5c7-r5c8-r5c9 total 15 connected true
cage-4: cage r4c4-r5c4 total 7 connected true
cage-5: cage r5c1-r6c1 total 13 connected true
cage-6: cage r1c4-r2c4 total 13 connected true
cage-7: cage r3c3-r3c4 total 7 connected true
cage-8: cage r6c4-r6c5 total 13 connected true
cage-9: cage r7c4-r8c4-r9c4 total 15 connected true
cage-10: cage r8c1-r9c1 total 9 connected true
cage-11: cage r1c1-r2c1 total 10 connected true
cage-12: cage r3c6-r4c6 total 7 connected true
cage-13: cage r7c1-r7c2 total 5 connected true
cage-14: cage r7c8-r7c9 total 14 connected true
cage-15: cage r3c8-r3c9 total 13 connected true
cage-16: cage r9c8-r9c9 total 9 connected true
cage-17: cage r1c7-r2c7 total 7 connected true
cage-18: cage r9c6-r9c7 total 9 connected true
cage-19: cage r1c2-r1c3 total 13 connected true
cage-20: cage r1c9-r2c9 total 13 connected true
cage-21: cage r7c3-r8c3 total 9 connected true
cage-22: cage r7c7-r8c7 total 13 connected true
```

Normal Sudoku Rules Apply

Digits in a cage must sum to the number in that cage's top left corner. Digits cannot repeat within a cage.
