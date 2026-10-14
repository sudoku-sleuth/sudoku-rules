---
format: open-rules
title: Duplicated Incarceration
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/duplicated-incarceration
library: https://rules.sudoku-sleuth.com/
status: read
exported: e1161d1b33af97ef9bd1d6e607d59bb7
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 9 connected true
cage-2: cage r3c1-r3c2 total 13 connected true
cage-3: cage r1c7-r1c8 total 9 connected true
cage-4: cage r3c8-r3c9 total 13 connected true
cage-5: cage r4c1-r4c2 total 9 connected true
cage-6: cage r4c4-r5c4 total 13 connected true
cage-7: cage r5c7-r6c7 total 8 connected true
cage-8: cage r6c9-r7c9 total 7 connected true
cage-9: cage r8c8-r8c9 total 10 connected true
cage-10: cage r8c1-r8c2 total 7 connected true
cage-11: cage r7c4-r8c4 total 9 connected true
cage-12: cage r7c6-r8c6 total 9 connected true
cage-13: cage r8c5-r9c5 total 13 connected true
kropki-1: kropki r2c1-r2c2 white
kropki-2: kropki r1c5-r2c5 black
kropki-3: kropki r3c3-r3c4 black
kropki-4: kropki r3c6-r3c7 black
kropki-5: kropki r4c6-r5c6 black
kropki-6: kropki r4c8-r4c9 black
kropki-7: kropki r5c3-r6c3 black
kropki-8: kropki r6c1-r7c1 black
kropki-9: kropki r9c2-r9c3 black
kropki-10: kropki r9c7-r9c8 black
```

Normal Sudoku rules apply.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Exported from sudokulab.net
