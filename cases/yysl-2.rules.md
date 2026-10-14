---
format: open-rules
title: YYSL-2
setter: Blobz
source: https://sudokupad.app/xeij2c2uo1
case: https://sudoku-sleuth.com/cases/yysl-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 86e846a01974f7f138983df10cc65612
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r2c4 white
kropki-2: kropki r2c4-r3c4 white
kropki-3: kropki r1c5-r2c5 white
kropki-4: kropki r2c5-r3c5 white
kropki-5: kropki r1c6-r2c6 white
kropki-6: kropki r6c2-r6c3 white
kropki-7: kropki r8c7-r9c7 white
kropki-8: kropki r8c6-r9c6 white
kropki-9: kropki r7c7-r8c7 white
kropki-10: kropki r6c8-r6c9 white
kropki-11: kropki r5c8-r6c8 white
kropki-12: kropki r3c8-r3c9 white
kropki-13: kropki r1c2-r2c2 white
kropki-14: kropki r2c2-r2c3 white
kropki-15: kropki r3c4-r4c4 white
kropki-16: kropki r4c5-r5c5 white
kropki-17: kropki r5c4-r6c4 white
kropki-18: kropki r6c5-r7c5 white
kropki-19: kropki r8c4-r8c5 white
kropki-20: kropki r4c5-r4c6 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[5],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[17],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[75],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[27],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[13],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[14],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[16],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[41],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[40],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[30],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[29],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[55],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[64],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[68],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[69],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[70],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[52],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[31],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[22],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[21],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[47],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[50],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[24],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply.

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area may be fully shaded or unshaded. 

White dots lie on the border between the shaded and unshaded regions. Additionally, white dots separate consecutive digits. Not all possible dots are shown.

Digits in caged cells show the number of cells of the same color (shaded or unshaded) seen orthogonally from that position, including itself. The "other" color blocks vision.
