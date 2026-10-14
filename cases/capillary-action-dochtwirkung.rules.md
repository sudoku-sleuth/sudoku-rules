---
format: open-rules
title: Capillary Action(Dochtwirkung)
setter: Will Power
source: https://sudokupad.app/2e7ybtb1ev
case: https://sudoku-sleuth.com/cases/capillary-action-dochtwirkung
library: https://rules.sudoku-sleuth.com/
status: read
exported: dad4029b91554db08f3685f8c2de7473
---

```rules
sudoku 9x9
cage-1: cage r2c7-r3c7-r3c8 total 15 connected true
cage-2: cage r3c6-r4c6-r4c7 total 15 connected true
cage-3: cage r4c5-r5c5-r5c6 total 15 connected true
cage-4: cage r5c4-r6c4-r6c5 total 15 connected true
cage-5: cage r6c3-r7c3-r7c4 total 15 connected true
cage-6: cage r7c2-r8c2-r8c3 total 15 connected true
cage-7: cage r8c1-r9c1-r9c2 total 15 connected true
cage-8: cage r1c8-r2c8-r2c9 total 15 connected true
kropki-1: kropki r6c8-r6c9 white
kropki-2: kropki r6c7-r6c8 white
kropki-3: kropki r6c9-r7c9 white
kropki-4: kropki r7c9-r8c9 white
kropki-5: kropki r8c1-r8c2 black
kropki-6: kropki r7c3-r8c3 black
kropki-7: kropki r6c3-r6c4 black
kropki-8: kropki r5c5-r6c5 black
kropki-9: kropki r4c5-r4c6 black
kropki-10: kropki r3c7-r4c7 black
kropki-11: kropki r2c7-r2c8 black
kropki-12: kropki r1c9-r2c9 black
kropki-13: kropki r9c1-r9c2 black
pair-1: pair r1c2-r1c3 sum 5
pair-2: pair r5c1-r6c1 sum 5
pair-3: pair r8c5-r9c5 sum 5
```

Normal Sudoku rules apply. KILLER- Numbers in cages sum to 15. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. XV PAIRS- Numbers with a V between them sum to 5. Not all possible dots and V are given.
