---
format: open-rules
title: Caging About
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/aqaglk27t8
case: https://sudoku-sleuth.com/cases/caging-about
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c2-r4c3-r4c4 total 6 connected true
cage-2: cage r2c6-r3c6-r4c6 total 7 connected true
cage-3: cage r6c6-r6c7-r6c8 total 8 connected true
cage-4: cage r6c4-r7c4-r8c4 total 9 connected true
cage-5: cage r5c6-r5c7-r5c8 total 15 connected true
cage-6: cage r5c2-r5c3-r5c4 total 15 connected true
cage-7: cage r6c5-r7c5-r8c5 total 15 connected true
cage-8: cage r2c5-r3c5-r4c5 total 15 connected true
cage-9: cage r6c3-r7c3-r8c3 total 24 connected true
cage-10: cage r3c2-r3c3-r3c4 total 23 connected true
cage-11: cage r7c6-r7c7-r7c8 total 23 connected true
cage-12: cage r2c7-r3c7-r4c7 total 24 connected true
cage-13: cage r1c2-r2c1-r2c2 total 10 connected true
cage-14: cage r1c8-r2c8-r2c9 total 11 connected true
cage-15: cage r8c8-r8c9-r9c8 total 19 connected true
cage-16: cage r8c1-r8c2-r9c2 total 15 connected true
cage-17: cage r3c9-r4c9 total 10 connected true
cage-18: cage r9c6-r9c7 total 8 connected true
cage-19: cage r6c1-r7c1 total 9 connected true
cage-20: cage r1c3-r1c4 total 9 connected true
cage-21: cage r1c6-r1c7 total 10 connected true
cage-22: cage r6c9-r7c9 total 11 connected true
cage-23: cage r9c3-r9c4 total 11 connected true
cage-24: cage r3c1-r4c1 total 9 connected true
```

- Normal Sudoku rules apply.
- Digits in cages cannot repeat and must sum to the value given in the top left corner.
