---
format: open-rules
title: YYSL Knights
setter: Blobz
source: https://sudokupad.app/spfphooek4
case: https://sudoku-sleuth.com/cases/yysl-knights
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: c516ad27f977b06f4e0f817ac5a6d486
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r3c8-r3c9 white
kropki-2: kropki r3c8-r4c8 white
kropki-3: kropki r3c7-r3c8 white
kropki-4: kropki r3c6-r3c7 white
kropki-5: kropki r4c6-r4c7 white
kropki-6: kropki r4c8-r5c8 white
kropki-7: kropki r8c5-r8c6 white
kropki-8: kropki r9c4-r9c5 white
kropki-9: kropki r8c1-r8c2 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[31],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[39],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[40],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[41],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[50],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[49],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[48],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[57],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[9],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[5],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[1],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[32],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[25],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[16],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[15],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[24],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[34],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[12],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[43],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[79],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[11],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[29],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[28],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply. 

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area may be fully shaded or unshaded. 

White dots lie on the border between the shaded and unshaded regions. Additionally, white dots separate consecutive digits. Not all possible dots are shown.

Digits in caged cells show the number of cells of the same color (shaded or unshaded) seen orthogonally from that position, including itself. The "other" color blocks vision.

Cells a (chess) knight's move apart cannot contain the same digit.
