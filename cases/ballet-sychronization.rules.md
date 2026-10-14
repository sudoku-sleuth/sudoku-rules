---
format: open-rules
title: Ballet Sychronization?
setter: Will Power
source: https://sudokupad.app/jn93mqwkbc
case: https://sudoku-sleuth.com/cases/ballet-sychronization
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 582caad67d20675bf8ec3de9e82184f1
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 13 connected true
cage-2: cage r3c4-r3c5 total 13 connected true
cage-3: cage r4c2-r5c2-r5c3 total 16 connected true
cage-4: cage r5c5-r6c5-r6c6 total 16 connected true
cage-5: cage r6c1-r7c1-r7c2 total 18 connected true
cage-6: cage r7c4-r8c4-r8c5 total 18 connected true
cage-7: cage r5c7-r5c8-r6c8 total 19 connected true
cage-8: cage r3c1-r3c2 total 12 connected true
cage-9: cage r1c8-r1c9-r2c9 total 21 connected true
cage-10: cage r1c7-r2c7-r2c8 total 10 connected true
cage-11: cage r1c4-r1c5-r1c6-r2c6 total 15 connected true
cage-12: cage r8c7-r8c8-r9c8 total 11 connected true
cage-13: cage r8c1-r8c2-r8c3-r9c1 total 14 connected true
cage-14: cage r3c7-r3c8-r4c7-r4c8 total 22 connected true
renban-1: renban r2c1-r1c1-r1c2-r2c2
renban-2: renban r2c4-r2c5-r3c5-r3c4
renban-3: renban r4c7-r3c7-r3c8-r4c8
renban-4: renban r4c9-r5c8-r5c7-r6c8-r7c7-r7c8-r7c9
renban-5: renban r3c6-r4c5-r4c4-r5c5-r6c4-r6c5-r6c6
renban-6: renban r2c3-r3c2-r3c1-r4c2-r5c1-r5c2-r5c3
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,1.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,0.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,3.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,4.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,3.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,0.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,1.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,7.5],[8.5,7.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,6.5],[8.5,6.5]],"color":"#D9D9D9","thickness":8,"rounded":true}}
```

READ THE RULES CAREFULLY. YOU HAVE BEEN WARNED.

Normal Sudoku rules apply. 

SYNCHRONIZATION- Ballet dancers are considered "synchronized" if all digits, in all positions, on both dancers are exactly the same. Find the dancer that is not synchronized with the other two. All three colored lines are considered in the synchronization. 

RENBAN- Numbers on purple and pink lines are each a set of non-repeating, consecutive numbers, in any order. However, THE NON-SYNCHRONIZED DANCER IS SO CLUMSY, SHE ALSO HAS ONE DIGIT REPEATED ON HER PINK LINE. 

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages.
