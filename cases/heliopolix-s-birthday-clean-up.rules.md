---
format: open-rules
title: Heliopolix's Birthday Clean Up.
setter: Timotab
source: https://sudokupad.app/rm8e1hpr31
case: https://sudoku-sleuth.com/cases/heliopolix-s-birthday-clean-up
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 9 connected true
cage-2: cage r8c8-r8c9-r9c8-r9c9 total 29 connected true
cage-3: cage r7c7-r7c8-r7c9-r8c7 connected true
cage-4: cage r1c6-r2c6-r3c6 connected true
cage-5: cage r9c1-r9c2 connected true
cage-6: cage r8c3-r9c3 connected true
cage-7: cage r5c8-r5c9 connected true
cage-8: cage r6c5-r6c6 connected true
cage-9: cage r6c1-r6c2-r6c3 connected true
kropki-1: kropki r3c2-r4c2 colour "black"
kropki-2: kropki r1c5-r2c5 colour "black"
kropki-3: kropki r7c7-r7c8 colour "black"
kropki-4: kropki r8c7-r9c7 colour "black"
kropki-5: kropki r4c8-r5c8 colour "black"
kropki-6: kropki r2c5-r2c6 colour "white"
kropki-7: kropki r8c6-r9c6 colour "white"
kropki-8: kropki r8c1-r8c2 colour "white"
kropki-9: kropki r8c5-r8c6 colour "white"
kropki-10: kropki r5c5-r6c5 colour "white"
kropki-11: kropki r2c7-r3c7 colour "white"
kropki-12: kropki r5c2-r6c2 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[40]}}
```

• Normal Sudoku rules apply: place the digits 1 to 9 in every row, column, and box, once each.
• Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area is fully shaded or unshaded.
• Digits cannot repeat in cages, and must sum to the value in the top left corner of the cage, if given.
• If a cage contains a diamond, that cage's total indicates how many cells of the same colour (shaded or unshaded) are seen orthogonally from the position of the cell marked with the diamond, including itself. The other colour blocks vision.
• Cells separated by a white dot are consecutive. Cells separated by a black dot are in a 1:2 ratio
• All dots lie on the border between the shaded and unshaded regions.
