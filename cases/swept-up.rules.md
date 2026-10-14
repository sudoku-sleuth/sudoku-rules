---
format: open-rules
title: Swept Up
setter: Timotab
source: https://sudokupad.app/ui107d45ql
case: https://sudoku-sleuth.com/cases/swept-up
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: caef2caeb1cdf4d329ce3167df5f9a56
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 connected true
cage-2: cage r1c8-r1c9-r2c9-r3c9-r4c9 connected true
cage-3: cage r2c8-r3c8-r4c7-r4c8 connected true
cage-4: cage r2c3-r2c4-r3c3 connected true
cage-5: cage r5c6-r5c7 connected true
cage-6: cage r6c5-r6c6 connected true
cage-7: cage r7c5-r8c4-r8c5 connected true
cage-8: cage r8c9-r9c9 connected true
cage-9: cage r9c5-r9c6-r9c7 connected true
kropki-1: kropki r1c1-r2c1 black
kropki-2: kropki r2c4-r3c4 black
kropki-3: kropki r1c7-r2c7 black
kropki-4: kropki r8c1-r9c1 black
kropki-5: kropki r7c2-r8c2 black
kropki-6: kropki r8c3-r8c4 white
kropki-7: kropki r8c6-r8c7 white
kropki-8: kropki r7c7-r8c7 white
kropki-9: kropki r6c8-r6c9 white
kropki-10: kropki r4c7-r5c7 white
kropki-11: kropki r4c6-r4c7 white
kropki-12: kropki r5c6-r6c6 white
kropki-13: kropki r1c4-r2c4 white
kropki-14: kropki r1c5-r2c5 white
kropki-15: kropki r3c3-r3c4 white
kropki-16: kropki r3c1-r3c2 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[13]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[9,18],"label":">9"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[38]}}
```

• Normal Sudoku rules apply
• Yin-Yang: Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected. No 2x2 area may be fully shaded or unshaded.
• Digits may not repeat in cages and must sum to the value in the top left corner of the cage, if given.
• Cage totals indicate how many cells of the same colour (shaded or unshaded) are seen orthogonally from the position of the cell marked with a diamond in that cage, including itself. The 'other' colour blocks vision.
• Cells separated by a white dot are consecutive. Cells separated by a black dot are in a 1:2 ratio
• All dots lie on the border between the shaded and unshaded regions.
