---
format: open-rules
title: Dishes Washed
setter: Timotab
source: https://sudokupad.app/qdapyysjrm
case: https://sudoku-sleuth.com/cases/dishes-washed
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: c5f1f6bcf6beea0d2cc3d75654f2f316
---

```rules
sudoku 9x9
cage-1: cage r5c2-r5c3-r5c4 connected true
cage-2: cage r7c3-r8c3-r9c3 connected true
cage-3: cage r8c1-r8c2 connected true
cage-4: cage r3c1-r4c1-r5c1 connected true
cage-5: cage r1c2-r2c2 connected true
cage-6: cage r7c5-r8c5 connected true
cage-7: cage r9c4-r9c5 connected true
cage-8: cage r1c4-r1c5 connected true
cage-9: cage r1c6-r1c7-r1c8 connected true
cage-10: cage r6c9-r7c9 connected true
kropki-1: kropki r6c3-r6c4 white
kropki-2: kropki r8c3-r9c3 white
kropki-3: kropki r2c3-r3c3 white
kropki-4: kropki r8c8-r8c9 white
kropki-5: kropki r8c6-r8c7 white
kropki-6: kropki r3c2-r3c3 white
kropki-7: kropki r3c6-r4c6 white
kropki-8: kropki r1c8-r2c8 white
kropki-9: kropki r2c7-r3c7 white
kropki-10: kropki r5c2-r5c3 black
kropki-11: kropki r5c3-r5c4 black
kropki-12: kropki r6c2-r6c3 black
kropki-13: kropki r8c8-r9c8 black
kropki-14: kropki r2c4-r2c5 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[47]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[79]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[12]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[23]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[43]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[17]}}
```

• Normal Sudoku rules apply
• Yin-Yang: Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected. No 2x2 area may be fully shaded or unshaded.
• Digits may not repeat in cages and must sum to the value in the top left corner of the cage, if given.
• Cage totals indicate how many cells of the same colour (shaded or unshaded) are seen orthogonally from the position of the cell marked with a diamond in that cage, including itself. The 'other' colour blocks vision.
• Cells separated by a white dot are consecutive. Cells separated by a black dot are in a 1:2 ratio
• All dots lie on the border between the shaded and unshaded regions.
