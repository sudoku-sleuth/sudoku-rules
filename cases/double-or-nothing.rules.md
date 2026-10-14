---
format: open-rules
title: DOUBLE OR NOTHING
setter: Will Power
source: https://sudokupad.app/jelgmkl8yh
case: https://sudoku-sleuth.com/cases/double-or-nothing
library: https://rules.sudoku-sleuth.com/
status: read
exported: d39a039093a697fa85ff9ea56a26126b
---

```rules
sudoku 9x9
cage-1: cage r1c6-r1c7-r1c8 total 15 connected true
cage-2: cage r2c6-r2c7-r2c8 total 12 connected true
cage-3: cage r3c6-r3c7-r3c8 total 11 connected true
cage-4: cage r6c5-r7c5-r8c5 total 16 connected true
cage-5: cage r6c6-r7c6-r8c6 total 16 connected true
cage-6: cage r7c7-r8c7-r9c7 total 20 connected true
cage-7: cage r9c8-r9c9 total 15 connected true
cage-8: cage r3c2-r4c2-r5c2 total 17 connected true
cage-9: cage r8c1-r9c1 total 10 connected true
cage-10: cage r1c5-r2c5-r3c5 total 17 connected true
kropki-1: kropki r1c2-r2c2 black
kropki-2: kropki r1c3-r2c3 black
kropki-3: kropki r2c6-r3c6 black
kropki-4: kropki r1c4-r2c4 black
kropki-5: kropki r3c1-r3c2 black
kropki-6: kropki r5c1-r5c2 black
kropki-7: kropki r3c5-r4c5 black
kropki-8: kropki r4c5-r5c5 black
kropki-9: kropki r6c4-r6c5 black
kropki-10: kropki r8c5-r8c6 black
kropki-11: kropki r2c8-r3c8 black
kropki-12: kropki r1c6-r1c7 black
```

Normal Sudoku rules apply.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
