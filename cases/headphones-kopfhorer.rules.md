---
format: open-rules
title: Headphones (Kopfhörer)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/headphones-kopfhorer
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2 total 14 connected true
cage-2: cage r1c6-r2c6-r2c7 total 8 connected true
cage-3: cage r8c7-r8c8 total 7 connected true
cage-4: cage r8c2-r9c2 total 10 connected true
kropki-1: kropki r7c5-r7c6 colour "white"
kropki-2: kropki r7c4-r7c5 colour "white"
kropki-3: kropki r1c5-r2c5 colour "white"
kropki-4: kropki r5c3-r5c4 colour "white"
kropki-5: kropki r5c2-r5c3 colour "white"
kropki-6: kropki r5c6-r5c7 colour "white"
kropki-7: kropki r5c7-r5c8 colour "white"
kropki-8: kropki r2c1-r3c1 colour "white"
whispers-1: whispers r2c8-r1c7-r1c6 gap 5
whispers-2: whispers r6c8-r6c9-r5c9-r4c9-r3c9-r3c8 gap 5
whispers-3: whispers r1c4-r1c3-r2c2-r3c2 gap 5
whispers-4: whispers r3c2-r3c1-r4c1-r5c1-r6c1-r6c2 gap 5
renban-1: renban r4c6-r4c7
renban-2: renban r7c4-r7c5-r7c6
renban-3: renban r5c5-r6c5
renban-4: renban r4c3-r4c4
renban-5: renban r4c2-r3c2-r2c3-r1c4-r1c5-r1c6-r2c7-r3c8-r4c8
pair-1: pair r5c9-r6c9 sum 10
pair-2: pair r3c9-r4c9 sum 10
pair-3: pair r4c1-r5c1 sum 10
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,1.5]],"color":"#FAB355","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,3.5]],"color":"#FAB355","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5]],"color":"#FAB355","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,6.5]],"color":"#FAB355","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[5.5,7.5]],"color":"#FAB355","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,4.5]],"color":"#FAB355","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,4.5]],"color":"#FAB355","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers on orange lines sum to at least 13. Numbers do not repeat on orange lines. Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages. Numbers with an X between them sum to 10. Numbers with a white dot between them are consecutive. Not all possible X and dots are shown.
