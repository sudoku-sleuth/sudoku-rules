---
format: open-rules
title: Fifteens Coming Out Yo' Ears
setter: Team B (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/60ow3k645m
case: https://sudoku-sleuth.com/cases/fifteens-coming-out-yo-ears
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4 total 15 connected true
cage-2: cage r1c6-r1c7-r1c8 total 15 connected true
cage-3: cage r2c9-r3c9-r4c9 total 15 connected true
cage-4: cage r6c9-r7c9-r8c9 total 15 connected true
cage-5: cage r9c6-r9c7-r9c8 total 15 connected true
cage-6: cage r9c2-r9c3-r9c4 total 15 connected true
cage-7: cage r6c1-r7c1-r8c1 total 15 connected true
cage-8: cage r2c1-r3c1-r4c1 total 15 connected true
cage-9: cage r2c5-r3c5-r4c5 total 15 connected true
cage-10: cage r6c5-r7c5-r8c5 total 15 connected true
cage-11: cage r5c2-r5c3-r5c4 total 15 connected true
cage-12: cage r5c6-r5c7-r5c8 total 15 connected true
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2,3]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,2,3]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2,3]
quadruple-5: quadruple r1c5-r1c6-r2c5-r2c6 digits [7,8,9]
quadruple-6: quadruple r8c4-r8c5-r9c4-r9c5 digits [7,8,9]
quadruple-7: quadruple r4c8-r4c9-r5c8-r5c9 digits [6,7,8]
quadruple-8: quadruple r5c1-r5c2-r6c1-r6c2 digits [6,7,8]
quadruple-9: quadruple r7c2-r7c3-r8c2-r8c3 digits [2]
quadruple-10: quadruple r7c6-r7c7-r8c6-r8c7 digits [7]
quadruple-11: quadruple r2c7-r2c8-r3c7-r3c8 digits [5]
quadruple-12: quadruple r2c3-r2c4-r3c3-r3c4 digits [8]
quadruple-13: quadruple r4c4-r4c5-r5c4-r5c5 digits [2,8]
quadruple-14: quadruple r4c5-r4c6-r5c5-r5c6 digits [1,5]
quadruple-15: quadruple r5c4-r5c5-r6c4-r6c5 digits [4,7]
quadruple-16: quadruple r5c5-r5c6-r6c5-r6c6 digits [3,6]
```

- Normal sudoku rules apply.
- Cages: Digits in cages sum to 15.
- Quadruples: Digits in Quadruples circles must appear in the four cells touching the Quadruple.
