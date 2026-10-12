---
format: open-rules
title: Trading Places
setter: Meggen033
source: https://sudokupad.app/huq9inpn1t
case: https://sudoku-sleuth.com/cases/trading-places
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 7 connected true
cage-2: cage r9c1-r9c2 total 7 connected true
cage-3: cage r8c1-r8c2 total 7 connected true
cage-4: cage r8c9-r9c9 total 7 connected true
cage-5: cage r1c8-r1c9 total 7 connected true
cage-6: cage r2c8-r2c9 total 7 connected true
cage-7: cage r2c2-r3c2 total 13 connected true
cage-8: cage r2c3-r3c3 total 13 connected true
cage-9: cage r7c2-r7c3 total 13 connected true
cage-10: cage r7c7-r8c7 total 13 connected true
cage-11: cage r7c8-r8c8 total 13 connected true
cage-12: cage r3c7-r3c8 total 13 connected true
cage-13: cage r4c1-r5c1 total 9 connected true
cage-14: cage r3c5-r3c6 total 11 connected true
cage-15: cage r5c9-r6c9 total 9 connected true
cage-16: cage r7c4-r7c5 total 11 connected true
cage-17: cage r1c5-r1c6 total 10 connected true
cage-18: cage r5c8-r6c8 total 9 connected true
cage-19: cage r4c3-r4c4 total 11 connected true
cage-20: cage r6c6-r6c7 total 10 connected true
cage-21: cage r8c6-r9c6 total 11 connected true
```

Normal Sudoku rules apply

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.
