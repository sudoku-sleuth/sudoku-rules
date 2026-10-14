---
format: open-rules
title: Excellent Vacuuming
setter: Timotab
source: https://sudokupad.app/h4h816nbqk
case: https://sudoku-sleuth.com/cases/excellent-vacuuming
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: a4839e3d80bd31c3451327831308d2d7
---

```rules
sudoku 9x9
cage-1: cage r5c5-r5c6 connected true
cage-2: cage r5c3-r5c4 connected true
cage-3: cage r8c8-r8c9-r9c8-r9c9 connected true
cage-4: cage r3c9-r4c9-r5c9 connected true
cage-5: cage r6c7-r6c8 connected true
cage-6: cage r2c5-r2c6 connected true
cage-7: cage r3c1-r4c1 connected true
cage-8: cage r1c1-r1c2-r2c1 connected true
cage-9: cage r1c4-r2c4 connected true
pair-1: pair r3c5-r4c5 sum 10
pair-2: pair r5c7-r5c8 sum 10
pair-3: pair r8c8-r8c9 sum 10
pair-4: pair r6c7-r7c7 sum 10
pair-5: pair r3c3-r4c3 sum 10
pair-6: pair r6c3-r7c3 sum 10
pair-7: pair r7c4-r7c5 sum 10
pair-8: pair r5c2-r5c3 sum 10
pair-9: pair r7c5-r8c5 sum 5
pair-10: pair r5c4-r5c5 sum 5
pair-11: pair r5c8-r6c8 sum 5
pair-12: pair r4c3-r5c3 sum 5
pair-13: pair r8c8-r9c8 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[23]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[24]}}
```

• Normal Sudoku rules apply.
• Yin Yang: Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected. No 2x2 area may be fully shaded or unshaded.
• Digits may not repeat in cages and must sum to the number in the top left corner of the cage, if given.
• Cage totals indicate how many cells of the same colour (shaded or unshaded) are seen orthogonally from the position of the cell marked with a diamond in that cage, including itself. The 'other' colour blocks vision.
• Cells separated by a V sum to 5. Cells separated by an X sum to 10.
• Every X and V lies on the border between the shaded and unshaded regions.
