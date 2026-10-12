---
format: open-rules
title: Do You Promise Not To Tell?
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r7lj4q0vtr
case: https://sudoku-sleuth.com/cases/do-you-promise-not-to-tell
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 8 connected true
cage-2: cage r1c4-r1c5 total 8 connected true
cage-3: cage r1c6-r1c7 total 10 connected true
cage-4: cage r2c1-r3c1 total 8 connected true
cage-5: cage r4c1-r5c1 total 8 connected true
cage-6: cage r6c1-r7c1 total 10 connected true
cage-7: cage r8c1-r9c1 total 10 connected true
cage-8: cage r9c2-r9c3 total 8 connected true
cage-9: cage r9c4-r9c5 total 11 connected true
cage-10: cage r9c6-r9c7 total 8 connected true
cage-11: cage r2c9-r3c9 total 8 connected true
cage-12: cage r4c9-r5c9 total 8 connected true
cage-13: cage r6c9-r7c9 total 10 connected true
cage-14: cage r8c9-r9c8-r9c9 total 23 connected true
cage-15: cage r5c2-r5c3 total 8 connected true
cage-16: cage r5c7-r5c8 total 10 connected true
cage-17: cage r5c4-r6c4-r6c5 total 6 connected true
cage-18: cage r4c5-r4c6-r5c6 total 24 connected true
cage-19: cage r7c6-r7c7 total 11 connected true
cage-20: cage r3c3-r3c4 total 10 connected true
cage-21: cage r7c3-r7c4 total 10 connected true
cage-22: cage r3c6-r3c7 total 5 connected true
cage-23: cage r2c8-r3c8 total 14 connected true
cage-24: cage r7c2-r8c2 total 15 connected true
cage-25: cage r1c8-r1c9 total 10 connected true
```

- Normal Sudoku rules apply.  

- In cages, digits cannot repeat and must sum to the value in the top left corner of the cage.
