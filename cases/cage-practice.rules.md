---
format: open-rules
title: Cage Practice
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ek2cvdxj8h
case: https://sudoku-sleuth.com/cases/cage-practice
library: https://rules.sudoku-sleuth.com/
status: read
exported: dba68bf0cdff0ae5ca823fc29c980f86
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 6 connected true
cage-2: cage r1c4-r2c4-r3c4 total 7 connected true
cage-3: cage r9c7-r9c8-r9c9 total 24 connected true
cage-4: cage r7c6-r8c6-r9c6 total 23 connected true
cage-5: cage r5c4-r5c5-r5c6 total 15 connected true
cage-6: cage r5c8-r5c9 total 3 connected true
cage-7: cage r5c1-r5c2 total 17 connected true
cage-8: cage r5c7-r6c7 total 7 connected true
cage-9: cage r4c3-r5c3 total 13 connected true
cage-10: cage r6c8-r7c8-r8c8 total 10 connected true
cage-11: cage r2c2-r3c2-r4c2 total 20 connected true
cage-12: cage r6c2-r6c3 total 4 connected true
cage-13: cage r4c7-r4c8 total 16 connected true
cage-14: cage r3c6-r3c7 total 5 connected true
cage-15: cage r7c3-r7c4 total 15 connected true
cage-16: cage r8c4-r9c3-r9c4 total 9 connected true
cage-17: cage r1c6-r1c7-r2c6 total 21 connected true
cage-18: cage r2c8-r3c8 total 12 connected true
cage-19: cage r7c2-r8c2 total 8 connected true
```

- Normal sudoku rules apply.
- Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
