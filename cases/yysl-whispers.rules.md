---
format: open-rules
title: YYSL Whispers
setter: Blobz
source: https://sudokupad.app/r37j0x2oos
case: https://sudoku-sleuth.com/cases/yysl-whispers
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: f8b75ac122cecb47accb9ca6e6af2225
---

```rules
sudoku 9x9
kropki-1: kropki r8c5-r9c5 white
kropki-2: kropki r2c2-r3c2 white
kropki-3: kropki r2c8-r3c8 white
kropki-4: kropki r6c4-r7c4 white
kropki-5: kropki r6c6-r7c6 white
kropki-6: kropki r4c3-r5c3 white
kropki-7: kropki r4c7-r5c7 white
kropki-8: kropki r1c2-r2c2 white
kropki-9: kropki r1c8-r2c8 white
kropki-10: kropki r5c5-r6c5 white
kropki-11: kropki r2c5-r3c5 white
kropki-12: kropki r6c3-r7c3 white
whispers-1: whispers r9c2-r8c2-r8c3 gap 5
whispers-2: whispers r6c2-r5c2-r4c2-r4c3 gap 5
whispers-3: whispers r2c8-r1c9 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[73],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[79],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[76],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[10],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[16],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[19],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[14],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[12],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[30],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[32],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[48],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[50],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[49],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[58],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[46],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[42],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[41],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[4],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[45],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[17],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply. 

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area may be fully shaded or unshaded. 

White dots lie on the border between the shaded and unshaded regions. Additionally, white dots separate consecutive digits. Not all possible dots are shown.

Digits in caged cells show the number of cells of the same color (shaded or unshaded) seen orthogonally from that position, including itself. The "other" color blocks vision.

Adjacent digits on green lines must differ by at least 5.
