---
format: open-rules
title: Going Up
setter: sujoyku
source: https://sudokupad.app/3t1qb95tfa
case: https://sudoku-sleuth.com/cases/going-up
library: https://rules.sudoku-sleuth.com/
status: read
exported: edbba6272a0c103fb16111a6e51cd6fe
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2 total 9 connected true
cage-2: cage r5c1-r6c1 total 9 connected true
cage-3: cage r6c2-r6c3 total 9 connected true
cage-4: cage r4c3-r5c3 total 9 connected true
cage-5: cage r4c4-r4c5 total 10 connected true
cage-6: cage r5c4-r6c4 total 10 connected true
cage-7: cage r6c5-r6c6 total 10 connected true
cage-8: cage r4c6-r5c6 total 10 connected true
cage-9: cage r4c7-r4c8 total 11 connected true
cage-10: cage r4c9-r5c9 total 11 connected true
cage-11: cage r5c7-r6c7 total 11 connected true
cage-12: cage r6c8-r6c9 total 11 connected true
cage-13: cage r1c1-r1c2-r2c1 total 6 connected true
cage-14: cage r7c2-r7c3 total 12 connected true
cage-15: cage r8c1-r9c1-r9c2 total 12 connected true
cage-16: cage r8c9-r9c8-r9c9 total 14 connected true
cage-17: cage r8c4-r9c4-r9c5 total 13 connected true
cage-18: cage r7c5-r7c6 total 13 connected true
cage-19: cage r1c7-r1c8-r2c7 total 8 connected true
cage-20: cage r2c4-r3c4 total 7 connected true
cage-21: cage r3c5-r3c6 total 7 connected true
cage-22: cage r3c8-r3c9 total 8 connected true
cage-23: cage r8c7-r9c7 total 14 connected true
cage-24: cage r8c5-r8c6 total 13 connected true
cage-25: cage r7c8-r8c8 total 14 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage sum to the clue in the top left.
