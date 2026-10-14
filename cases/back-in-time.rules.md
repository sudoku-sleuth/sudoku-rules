---
format: open-rules
title: Back In Time
setter: Blobz
source: https://sudokupad.app/blobz/back-in-time
case: https://sudoku-sleuth.com/cases/back-in-time
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=3
exported: 79c2fa515b5a2ff92696ffd56dc230f6
---

```rules
sudoku 9x9
numbered-room-1: numbered-room r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 digit 1
numbered-room-2: numbered-room r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 digit 9
numbered-room-3: numbered-room r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 digit 8
numbered-room-4: numbered-room r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 digit 5
numbered-room-5: numbered-room r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 digit 1
numbered-room-6: numbered-room r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 digit 9
numbered-room-7: numbered-room r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 digit 5
numbered-room-8: numbered-room r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 digit 5
numbered-room-9: numbered-room r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 digit 1
numbered-room-10: numbered-room r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 digit 9
numbered-room-11: numbered-room r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 digit 8
numbered-room-12: numbered-room r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 digit 5
numbered-room-13: numbered-room r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 digit 1
numbered-room-14: numbered-room r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 digit 5
numbered-room-15: numbered-room r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 digit 9
numbered-room-16: numbered-room r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 digit 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.75,5.875],[1.5,6.125],[1.25,5.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.25,6.875],[1.5,7.125],[1.75,6.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.25,7.875],[1.5,8.125],[1.75,7.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.25,6.875],[2.5,7.125],[2.75,6.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.25,7.875],[2.5,8.125],[2.75,7.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.25,2.875],[3.5,3.125],[3.75,2.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.25,3.875],[3.5,4.125],[3.75,3.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.25,4.875],[3.5,5.125],[3.75,4.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.25,5.875],[3.5,6.125],[3.75,5.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.25,4.875],[1.5,5.125],[1.75,4.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.25,3.875],[1.5,4.125],[1.75,3.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.25,3.875],[5.5,4.125],[5.75,3.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.25,4.875],[5.5,5.125],[5.75,4.875]],"color":"#ffb3b3ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.25,6.125],[6.5,5.875],[6.75,6.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.25,5.125],[6.5,4.875],[6.75,5.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.25,4.125],[6.5,3.875],[6.75,4.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.25,3.125],[6.5,2.875],[6.75,3.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.25,6.125],[7.5,5.875],[7.75,6.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.25,5.125],[7.5,4.875],[7.75,5.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8.25,4.125],[8.5,3.875],[8.75,4.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[8.25,3.125],[8.5,2.875],[8.75,3.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.25,7.125],[7.5,6.875],[7.75,7.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0.25,5.125],[0.5,4.875],[0.75,5.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0.25,4.125],[0.5,3.875],[0.75,4.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[4.25,5.125],[4.5,4.875],[4.75,5.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.25,4.125],[4.5,3.875],[4.75,4.125]],"color":"#b6b3ffff","thickness":5.12,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[39,40,41],"label":"Giga","color":"#d38904ff","labelColor":"#d38904ff"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[48,49,50],"label":"Watts","color":"#d38904ff","labelColor":"#d38904ff"}}
```

Normal sudoku rules apply.

Clues outside the grid indicate the digit which has to be placed in the Nth cell in the corresponding direction, where N is the digit placed in the first cell in that direction.

Chevrons point to the smaller of two digits (color is cosmetic only).
