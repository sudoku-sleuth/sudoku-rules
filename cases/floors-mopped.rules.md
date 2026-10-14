---
format: open-rules
title: Floors Mopped
setter: Timotab
source: https://sudokupad.app/7d7juxazhq
case: https://sudoku-sleuth.com/cases/floors-mopped
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e32838f526cb50246ea2b8439b909dfc
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 connected true
cage-2: cage r1c8-r1c9-r2c8-r2c9 connected true
cage-3: cage r8c1-r8c2-r9c1 connected true
cage-4: cage r2c4-r3c4 connected true
cage-5: cage r3c3-r4c3 connected true
cage-6: cage r5c1-r6c1 connected true
cage-7: cage r8c6-r8c7-r9c6 connected true
cage-8: cage r4c2-r5c2 connected true
cage-9: cage r6c8-r6c9 connected true
cage-10: cage r7c4-r8c4 connected true
kropki-1: kropki r2c9-r3c9 black
kropki-2: kropki r2c7-r2c8 black
kropki-3: kropki r1c5-r2c5 black
kropki-4: kropki r2c2-r2c3 black
kropki-5: kropki r5c2-r6c2 black
kropki-6: kropki r4c7-r4c8 white
kropki-7: kropki r7c6-r7c7 white
kropki-8: kropki r3c3-r3c4 white
kropki-9: kropki r7c3-r7c4 white
kropki-10: kropki r3c6-r4c6 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[80]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[41]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[55]}}
```

• Normal Sudoku rules apply
• Yin-Yang: Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected. No 2x2 area may be fully shaded or unshaded.
• Digits may not repeat in cages and must sum to the value in the top left corner of the cage, if given.
• Cage totals indicate how many cells of the same colour (shaded or unshaded) are seen orthogonally from the position of the cell marked with a diamond in that cage, including itself. The other colour blocks vision.
• Cells separated by a white dot are consecutive. Cells separated by a black dot are in a 1:2 ratio
• All dots lie on the border between the shaded and unshaded regions.
