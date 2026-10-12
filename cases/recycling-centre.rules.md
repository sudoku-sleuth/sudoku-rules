---
format: open-rules
title: Recycling Centre
setter: Timotab
source: https://sudokupad.app/f02za2orxg
case: https://sudoku-sleuth.com/cases/recycling-centre
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5-r5c6 connected true
cage-2: cage r4c2-r5c2 connected true
cage-3: cage r1c5-r1c6-r1c7 connected true
cage-4: cage r1c1-r1c2-r2c1-r2c2 connected true
cage-5: cage r9c3-r9c4 connected true
cage-6: cage r1c9-r2c8-r2c9 connected true
cage-7: cage r6c8-r6c9 connected true
kropki-1: kropki r8c5-r8c6 colour "white"
kropki-2: kropki r2c1-r2c2 colour "white"
kropki-3: kropki r5c3-r6c3 colour "white"
kropki-4: kropki r7c3-r8c3 colour "white"
kropki-5: kropki r8c2-r8c3 colour "white"
kropki-6: kropki r6c2-r6c3 colour "white"
kropki-7: kropki r6c5-r6c6 colour "white"
kropki-8: kropki r3c6-r3c7 colour "white"
kropki-9: kropki r2c7-r2c8 colour "white"
kropki-10: kropki r7c1-r7c2 colour "white"
kropki-11: kropki r5c6-r6c6 colour "white"
kropki-12: kropki r2c5-r3c5 colour "white"
kropki-13: kropki r2c4-r2c5 colour "white"
kropki-14: kropki r5c1-r5c2 colour "black"
kropki-15: kropki r5c6-r5c7 colour "black"
kropki-16: kropki r6c5-r7c5 colour "black"
kropki-17: kropki r3c5-r4c5 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[36]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[65]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[72]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[58]}}
```

• Normal Sudoku rules apply
• Yin-Yang: Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected. No 2x2 area may be fully shaded or unshaded.
• Digits may not repeat in cages and must sum to the value in the top left corner of the cage, if given.
• Cage totals indicate how many cells of the same colour (shaded or unshaded) are seen orthogonally from the position of the cell marked with a diamond in that cage, including itself. The 'other' colour blocks vision.
• Cells separated by a white dot are consecutive. Cells separated by a black dot are in a 1:2 ratio
• All dots lie on the border between the shaded and unshaded regions.
