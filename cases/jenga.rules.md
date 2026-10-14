---
format: open-rules
title: Jenga
setter: Will Power
source: https://sudokupad.app/f8x70l0yjm
case: https://sudoku-sleuth.com/cases/jenga
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0fe6dac17d008e0a45670a847b021efa
---

```rules
sudoku 9x9
cage-1: cage r6c5-r6c6 total 10 connected true
cage-2: cage r7c4-r7c5 total 11 connected true
cage-3: cage r9c4-r9c5 total 13 connected true
cage-4: cage r9c6-r9c7 total 8 connected true
cage-5: cage r6c3-r6c4 total 11 connected true
cage-6: cage r5c6-r5c7 total 12 connected true
cage-7: cage r3c6-r3c7 total 14 connected true
cage-8: cage r9c2-r9c3 total 3 connected true
cage-9: cage r5c2-r5c3 total 15 connected true
cage-10: cage r3c2-r3c3 total 11 connected true
cage-11: cage r4c3-r4c4 total 15 connected true
cage-12: cage r6c7-r6c8 total 13 connected true
cage-13: cage r5c4-r5c5 total 10 connected true
cage-14: cage r4c5-r4c6 total 9 connected true
cage-15: cage r4c7-r4c8 total 6 connected true
cage-16: cage r8c3-r8c4 total 10 connected true
cage-17: cage r8c7-r8c8 total 5 connected true
cage-18: cage r7c6-r7c7 total 11 connected true
cage-19: cage r8c5-r8c6 total 15 connected true
cage-20: cage r1c5-r2c5 total 8 connected true
cage-21: cage r7c2-r7c3 total 7 connected true
cage-22: cage r6c1-r6c2 total 5 connected true
cage-23: cage r6c9-r7c9 total 14 connected true
cage-24: cage r3c4-r3c5 total 7 connected true
cage-25: cage r2c3-r2c4 total 11 connected true
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage.
