---
format: open-rules
title: Dusted Off
setter: Timotab
source: https://sudokupad.app/962kvemon5
case: https://sudoku-sleuth.com/cases/dusted-off
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6-r2c5 connected true
cage-2: cage r3c5-r4c5-r5c5 connected true
cage-3: cage r3c7-r3c8 connected true
cage-4: cage r2c1-r2c2 connected true
cage-5: cage r9c6-r9c7-r9c8 connected true
cage-6: cage r8c4-r9c4-r9c5 connected true
cage-7: cage r3c1-r3c2-r4c2 connected true
cage-8: cage r5c2-r5c3-r6c2 connected true
cage-9: cage r7c3-r8c3 connected true
kropki-1: kropki r3c6-r3c7 colour "white"
kropki-2: kropki r3c3-r3c4 colour "white"
kropki-3: kropki r2c8-r2c9 colour "white"
kropki-4: kropki r8c6-r9c6 colour "white"
kropki-5: kropki r5c1-r5c2 colour "white"
kropki-6: kropki r8c2-r9c2 colour "white"
kropki-7: kropki r7c1-r7c2 colour "white"
kropki-8: kropki r5c6-r5c7 colour "white"
kropki-9: kropki r7c6-r7c7 colour "white"
kropki-10: kropki r5c8-r5c9 colour "white"
kropki-11: kropki r2c5-r3c5 colour "black"
kropki-12: kropki r3c8-r3c9 colour "black"
kropki-13: kropki r2c3-r3c3 colour "black"
kropki-14: kropki r6c8-r6c9 colour "black"
kropki-15: kropki r2c1-r2c2 colour "black"
kropki-16: kropki r8c5-r8c6 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[8,17],"label":">9"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[60]}}
```

• Normal Sudoku rules apply
• Yin-Yang: Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected. No 2x2 area may be fully shaded or unshaded.
• Digits may not repeat in cages and must sum to the value in the top left corner of the cage, if given.
• Cage totals indicate how many cells of the same colour (shaded or unshaded) are seen orthogonally from the position of the cell marked with a diamond in that cage, including itself. The 'other' colour blocks vision.
• Cells separated by a white dot are consecutive. Cells separated by a black dot are in a 1:2 ratio
• All dots lie on the border between the shaded and unshaded regions.
