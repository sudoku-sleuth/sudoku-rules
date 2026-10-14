---
format: open-rules
title: YYSL Numbered Rooms
setter: Blobz
source: https://sudokupad.app/fde7vyur2m
case: https://sudoku-sleuth.com/cases/yysl-numbered-rooms
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 44a4533dcd6701dc1dfc2669bba37930
---

```rules
sudoku 9x9
numbered-room-1: numbered-room r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 digit 6
numbered-room-2: numbered-room r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 digit 8
numbered-room-3: numbered-room r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 digit 5
numbered-room-4: numbered-room r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 digit 6
numbered-room-5: numbered-room r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 digit 2
numbered-room-6: numbered-room r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 digit 1
numbered-room-7: numbered-room r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 digit 8
numbered-room-8: numbered-room r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 digit 4
numbered-room-9: numbered-room r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 digit 1
numbered-room-10: numbered-room r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 digit 2
numbered-room-11: numbered-room r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 digit 5
numbered-room-12: numbered-room r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 digit 4
numbered-room-13: numbered-room r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 digit 2
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[1],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[0],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[2],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[4],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[14],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[12],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[11],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[19],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[25],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[28],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[27],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[39],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[41],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[42],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[43],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[51],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[50],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[48],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[45],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[55],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[56],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[71],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[70],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[68],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[67],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[65],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[73],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply.

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area is fully shaded or unshaded (Yin Yang).

Digits in caged cells show the number of cells of the same color (shaded or unshaded) seen orthogonally from that position, including itself. The "other" color blocks vision (Sight Lines).

Clues outside the grid indicate the digit which has to be placed in the Nth cell in the corresponding direction, where N is the digit placed in the first cell in that direction (Numbered Rooms).
