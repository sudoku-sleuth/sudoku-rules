---
format: open-rules
title: Speed Bump
setter: The Bard
source: https://sudokupad.app/ijp1czuurh
case: https://sudoku-sleuth.com/cases/speed-bump
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7c6e997e6306a3c59c0cf583424e8419
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1 total 6 connected true
cage-2: cage r4c1-r4c2 total 5 connected true
cage-3: cage r5c1-r5c2 total 7 connected true
cage-4: cage r6c1-r6c2 total 9 connected true
cage-5: cage r7c1-r7c2 total 11 connected true
cage-6: cage r8c1-r8c2 total 13 connected true
cage-7: cage r9c1-r9c2 total 15 connected true
cage-8: cage r1c2-r1c3 total 11 connected true
cage-9: cage r2c2-r2c3 total 13 connected true
cage-10: cage r3c2-r3c3 total 15 connected true
cage-11: cage r4c3-r5c3 total 15 connected true
cage-12: cage r8c3-r9c3 total 4 connected true
cage-13: cage r9c4-r9c5 total 3 connected true
cage-14: cage r9c6-r9c7 total 9 connected true
cage-15: cage r8c9-r9c9 total 9 connected true
cage-16: cage r6c9-r7c9 total 17 connected true
cage-17: cage r5c8-r5c9 total 15 connected true
cage-18: cage r4c8-r4c9 total 12 connected true
cage-19: cage r3c8-r3c9 total 9 connected true
cage-20: cage r2c8-r2c9 total 7 connected true
cage-21: cage r8c8-r9c8 total 11 connected true
cage-22: cage r7c4-r7c5 total 9 connected true
arrow r4c6-r5c5-r6c4 bulb ["r3c7"]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.

Arrow: Digits on an arrow must sum to the digit placed in that arrow's circle.

Killer: Digits in cages must sum to the number in the top left corner of the cage.
