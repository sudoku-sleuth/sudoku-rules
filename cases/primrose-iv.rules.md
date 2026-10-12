---
format: open-rules
title: Primrose IV
setter: Will Power
source: https://sudokupad.app/t8vrcu5u6t
case: https://sudoku-sleuth.com/cases/primrose-iv
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c5-r4c3-r4c4-r4c5 total 30 connected true
cage-2: cage r6c5-r6c6-r6c7-r7c5 total 30 connected true
cage-3: cage r5c3-r5c4-r6c4-r7c4 total 10 connected true
cage-4: cage r3c6-r4c6-r5c6-r5c7 total 10 connected true
cage-5: cage r7c7-r8c5-r8c6-r8c7 total 27 connected true
cage-6: cage r2c3-r2c4-r2c5-r3c3 total 27 connected true
cage-7: cage r5c2-r6c2-r7c2-r7c3 total 13 connected true
cage-8: cage r3c7-r3c8-r4c8-r5c8 total 13 connected true
cage-9: cage r4c1-r5c1 total 11 connected true
kropki-1: kropki r4c4-r4c5 colour "white"
kropki-2: kropki r6c5-r7c5 colour "white"
kropki-3: kropki r6c6-r6c7 colour "white"
kropki-4: kropki r7c7-r8c7 colour "white"
kropki-5: kropki r8c6-r8c7 colour "white"
kropki-6: kropki r5c4-r6c4 colour "white"
kropki-7: kropki r7c2-r7c3 colour "white"
kropki-8: kropki r3c8-r4c8 colour "white"
kropki-9: kropki r4c3-r4c4 colour "white"
kropki-10: kropki r3c5-r4c5 colour "white"
kropki-11: kropki r5c9-r6c9 colour "white"
kropki-12: kropki r3c2-r4c2 colour "white"
```

```drawing
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,3.5],[5.5,3.5],[6.5,3.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,1.5],[5.5,1.5],[4.5,1.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,3.5],[3.5,4.5],[2.5,4.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,3.5],[1.5,2.5],[2.5,2.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,5.5],[4.5,5.5],[4.5,6.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,7.5],[3.5,7.5],[4.5,7.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,5.5],[5.5,4.5],[6.5,4.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,5.5],[7.5,6.5],[6.5,6.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,8.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,1.5]],"color":"#70FFFF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. 

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages.

KROPKI PAIRS(+)- Numbers with a white dot between them are consecutive. All possible white dots between numbers on the same blue line are shown.
