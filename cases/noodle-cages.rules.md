---
format: open-rules
title: Noodle Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/isei41s6b1
case: https://sudoku-sleuth.com/cases/noodle-cages
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 7 connected true
cage-2: cage r1c9-r2c9-r3c9 total 9 connected true
cage-3: cage r9c7-r9c8-r9c9 total 7 connected true
cage-4: cage r7c1-r8c1-r9c1 total 8 connected true
cage-5: cage r1c6-r1c7 total 9 connected true
cage-6: cage r6c9-r7c9 total 8 connected true
cage-7: cage r9c3-r9c4 total 9 connected true
cage-8: cage r3c1-r4c1 total 9 connected true
cage-9: cage r6c3-r6c4 total 15 connected true
cage-10: cage r4c6-r4c7 total 15 connected true
cage-11: cage r3c3-r3c4 total 5 connected true
cage-12: cage r7c6-r7c7 total 15 connected true
cage-13: cage r3c5-r4c5 total 14 connected true
cage-14: cage r6c5-r7c5 total 9 connected true
cage-15: cage r7c2-r7c3 total 12 connected true
cage-16: cage r3c6-r3c7 total 13 connected true
cage-17: cage r2c4-r2c5 total 6 connected true
cage-18: cage r8c5-r8c6 total 7 connected true
```

- Normal sudoku rules apply.
- Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
