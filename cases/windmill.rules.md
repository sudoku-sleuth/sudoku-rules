---
format: open-rules
title: Windmill
setter: Timotab
source: https://sudokupad.app/ru3jo1qq2e
case: https://sudoku-sleuth.com/cases/windmill
library: https://rules.sudoku-sleuth.com/
status: read
exported: 560f73524732717913295ff6f320d97a
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 3 connected true
cage-2: cage r8c2-r8c3 total 7 connected true
cage-3: cage r7c3-r7c4 total 13 connected true
cage-4: cage r6c4-r6c5 total 15 connected true
cage-5: cage r1c1-r2c1 total 4 connected true
cage-6: cage r2c2-r3c2 total 6 connected true
cage-7: cage r3c3-r4c3 total 12 connected true
cage-8: cage r4c4-r5c4 total 14 connected true
cage-9: cage r1c8-r1c9 total 17 connected true
cage-10: cage r2c7-r2c8 total 13 connected true
cage-11: cage r3c6-r3c7 total 11 connected true
cage-12: cage r4c5-r4c6 total 3 connected true
cage-13: cage r5c6-r6c6 total 10 connected true
cage-14: cage r6c7-r7c7 total 12 connected true
cage-15: cage r7c8-r8c8 total 14 connected true
cage-16: cage r8c9-r9c9 total 16 connected true
cage-17: cage r5c3-r6c3 total 3 connected true
cage-18: cage r4c7-r5c7 total 15 connected true
cage-19: cage r3c4-r3c5 total 13 connected true
cage-20: cage r7c5-r7c6 total 5 connected true
kropki-1: kropki r3c1-r4c1 white
kropki-2: kropki r6c9-r7c9 white
kropki-3: kropki r3c9-r4c9 white
kropki-4: kropki r6c1-r7c1 white
kropki-5: kropki r8c8-r8c9 white
kropki-6: kropki r2c1-r2c2 white
```

• Normal sudoku rules apply and all clues are standard.
• Digits in cages cannot repeat and sum to the value in the top left corner
• Where digits are separated by a white dot, they are consecutive. Not all dots are necessarily given.
