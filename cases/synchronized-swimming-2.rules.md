---
format: open-rules
title: Synchronized Swimming?
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/synchronized-swimming-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 3748dfef06065aa57a6f11a7d21ed05a
---

```rules
sudoku 9x9
cage-1: cage r3c7-r3c8 total 5 connected true
cage-2: cage r3c2-r3c3 total 5 connected true
cage-3: cage r7c4-r8c4 total 3 connected true
cage-4: cage r7c5-r8c5 total 7 connected true
cage-5: cage r6c6-r7c6-r8c6 total 16 connected true
cage-6: cage r2c4-r3c4-r4c4 total 17 connected true
cage-7: cage r1c9-r2c9-r3c9 total 18 connected true
cage-8: cage r1c3-r2c3 total 14 connected true
kropki-1: kropki r4c3-r5c3 white
kropki-2: kropki r3c8-r4c8 white
kropki-3: kropki r8c5-r9c5 white
kropki-4: kropki r7c6-r8c6 white
kropki-5: kropki r5c1-r5c2 white
kropki-6: kropki r8c6-r8c7 white
kropki-7: kropki r7c6-r7c7 white
kropki-8: kropki r2c5-r2c6 white
kropki-9: kropki r5c2-r6c2 black
kropki-10: kropki r1c3-r1c4 black
kropki-11: kropki r8c1-r9c1 black
kropki-12: kropki r4c7-r5c7 black
kropki-13: kropki r6c8-r6c9 black
kropki-14: kropki r6c7-r6c8 black
kropki-15: kropki r6c7-r7c7 black
renban-1: renban r1c8-r2c9-r3c9-r4c8-r3c8-r2c8-r2c7-r3c7
renban-2: renban r8c4-r7c4-r7c5-r8c5-r9c5-r8c6-r7c6-r6c5
renban-3: renban r2c3-r3c4-r4c4-r5c3-r4c3-r3c3-r3c2-r4c2
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,2.5],[8.5,3.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,0.5],[4.5,1.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,5.5],[3.5,6.5]],"color":"#FFA666","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. RENBAN LINES- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Swimmers are considered "synchronized" if ALL numbers on their lines are the same, and in the same order. Find the swimmer that is NOT synchronized with the other 2.
