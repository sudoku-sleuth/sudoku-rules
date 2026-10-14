---
format: open-rules
title: ORION, The Hunter
setter: Will Power
source: https://sudokupad.app/3vieae9sdn
case: https://sudoku-sleuth.com/cases/orion-the-hunter
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6a197d850fe52a954bf59f5f09758661
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9 total 12 connected true
cage-2: cage r4c8-r4c9 total 9 connected true
cage-3: cage r5c7-r6c7 total 9 connected true
cage-4: cage r5c4-r6c4 total 12 connected true
cage-5: cage r4c3-r5c3 total 9 connected true
cage-6: cage r2c3-r3c3 total 12 connected true
cage-7: cage r1c2-r2c2 total 12 connected true
cage-8: cage r2c1-r3c1 total 9 connected true
cage-9: cage r9c7-r9c8 total 9 connected true
cage-10: cage r8c8-r8c9 total 12 connected true
cage-11: cage r5c6-r6c6 total 9 connected true
cage-12: cage r8c3-r9c3 total 9 connected true
cage-13: cage r9c4-r9c5 total 9 connected true
cage-14: cage r6c5-r7c5 total 9 connected true
cage-15: cage r5c9-r6c9-r7c9 total 12 connected true
cage-16: cage r5c8-r6c8 total 12 connected true
cage-17: cage r2c7-r3c7-r4c7 total 12 connected true
cage-18: cage r7c1-r8c1 total 12 connected true
kropki-1: kropki r6c4-r6c5 white
kropki-2: kropki r6c5-r6c6 white
kropki-3: kropki r6c6-r6c7 white
kropki-4: kropki r8c8-r9c8 white
kropki-5: kropki r9c3-r9c4 white
kropki-6: kropki r3c3-r4c3 white
kropki-7: kropki r3c7-r4c7 white
kropki-8: kropki r1c9-r2c9 white
kropki-9: kropki r2c9-r3c9 white
kropki-10: kropki r3c9-r4c9 white
kropki-11: kropki r1c1-r1c2 white
kropki-12: kropki r2c1-r2c2 white
kropki-13: kropki r1c5-r2c5 white
kropki-14: kropki r3c1-r3c2 white
kropki-15: kropki r2c8-r2c9 black
kropki-16: kropki r2c7-r2c8 black
```

Normal Sudoku rules apply. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The number 12 is duplicated in one cage because the gray line can obscure it in some puzzle formats. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown. The gray line is to show the constellation, and has no effect on the puzzle.
