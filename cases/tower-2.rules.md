---
format: open-rules
title: Tower
setter: Will Power
source: https://sudokupad.app/cstlk763ze
case: https://sudoku-sleuth.com/cases/tower-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2655ea08a7deb4d216f198567bc5e81d
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 9 connected true
cage-2: cage r9c3-r9c4 total 9 connected true
cage-3: cage r9c6-r9c7 total 9 connected true
cage-4: cage r9c8-r9c9 total 9 connected true
cage-5: cage r8c1-r8c2 total 10 connected true
cage-6: cage r8c3-r8c4 total 10 connected true
cage-7: cage r8c6-r8c7 total 10 connected true
cage-8: cage r8c8-r8c9 total 10 connected true
cage-9: cage r7c1-r7c2 total 11 connected true
cage-10: cage r7c3-r7c4 total 11 connected true
cage-11: cage r7c6-r7c7 total 11 connected true
cage-12: cage r7c8-r7c9 total 11 connected true
cage-13: cage r5c5-r5c6 total 10 connected true
cage-14: cage r4c5-r4c6 total 11 connected true
cage-15: cage r4c3-r4c4 total 11 connected true
cage-16: cage r5c3-r5c4 total 10 connected true
cage-17: cage r4c7-r4c8 total 11 connected true
cage-18: cage r5c7-r5c8 total 10 connected true
cage-19: cage r6c2-r6c3 total 9 connected true
cage-20: cage r6c8-r6c9 total 9 connected true
cage-21: cage r6c4-r6c5 total 9 connected true
cage-22: cage r3c3-r3c4 total 9 connected true
cage-23: cage r3c5-r3c6 total 9 connected true
cage-24: cage r2c4-r2c5-r2c6 total 12 connected true
cage-25: cage r1c4-r1c5-r1c6 total 16 connected true
kropki-1: kropki r7c2-r7c3 white
kropki-2: kropki r8c2-r8c3 white
kropki-3: kropki r9c2-r9c3 white
kropki-4: kropki r7c3-r7c4 white
kropki-5: kropki r7c8-r8c8 black
kropki-6: kropki r8c8-r9c8 black
kropki-7: kropki r4c5-r5c5 black
kropki-8: kropki r5c5-r6c5 black
kropki-9: kropki r1c1-r2c1 black
kropki-10: kropki r1c1-r1c2 black
```

Normal Sudoku rules apply.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage..

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
