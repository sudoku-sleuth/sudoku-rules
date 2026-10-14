---
format: open-rules
title: All Around My Hat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/90rrvn1ygk
case: https://sudoku-sleuth.com/cases/all-around-my-hat
library: https://rules.sudoku-sleuth.com/
status: read
exported: d2c014cb44aae734f1e74656fa6f0920
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3 total 3 connected true
cage-2: cage r3c7-r3c8 total 3 connected true
cage-3: cage r6c4-r6c5 total 17 connected true
cage-4: cage r4c9-r5c9 total 17 connected true
cage-5: cage r4c6-r5c6 total 13 connected true
cage-6: cage r6c1-r6c2 total 13 connected true
cage-7: cage r7c3-r8c3 total 15 connected true
cage-8: cage r9c4-r9c5 total 15 connected true
cage-9: cage r9c7-r9c8 total 10 connected true
cage-10: cage r7c6-r8c6 total 10 connected true
cage-11: cage r1c9-r2c9 total 11 connected true
cage-12: cage r3c4-r3c5 total 11 connected true
cage-13: cage r1c6-r2c6 total 7 connected true
cage-14: cage r3c1-r3c2 total 7 connected true
cage-15: cage r4c3-r5c3 total 9 connected true
cage-16: cage r6c7-r6c8 total 9 connected true
cage-17: cage r9c1-r9c2 total 5 connected true
cage-18: cage r7c9-r8c9 total 5 connected true
cage-19: cage r4c4-r4c5 total 8 connected true
cage-20: cage r4c7-r5c7 total 8 connected true
cage-21: cage r1c1-r2c1 total 12 connected true
cage-22: cage r8c1-r8c2 total 14 connected true
cage-23: cage r7c8-r8c8 total 14 connected true
cage-24: cage r1c7-r1c8 total 12 connected true
cage-25: cage r1c4-r1c5 total 11 connected true
cage-26: cage r7c5-r8c5 total 7 connected true
cage-27: cage r4c1-r5c1 total 9 connected true
```

Normal sudoku rules apply. Digits in cages must sum to the total in the upper left corner.
