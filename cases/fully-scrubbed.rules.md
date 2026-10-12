---
format: open-rules
title: Fully Scrubbed
setter: Timotab
source: https://sudokupad.app/mz8fslylpx
case: https://sudoku-sleuth.com/cases/fully-scrubbed
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r5c2-r5c3-r5c4 connected true
cage-2: cage r8c3-r9c3 connected true
cage-3: cage r6c3-r7c2-r7c3 connected true
cage-4: cage r7c6-r8c5-r8c6-r9c5-r9c6 connected true
cage-5: cage r8c1-r9c1 connected true
cage-6: cage r1c2-r1c3-r1c4 connected true
cage-7: cage r8c8-r8c9-r9c8-r9c9 connected true
cage-8: cage r4c5-r4c6-r4c7 connected true
cage-9: cage r2c5-r2c6 connected true
cage-10: cage r5c9-r6c9 connected true
cage-11: cage r2c4-r3c4-r3c5 connected true
kropki-1: kropki r7c4-r7c5 colour "white"
kropki-2: kropki r6c4-r6c5 colour "white"
kropki-3: kropki r6c2-r7c2 colour "white"
kropki-4: kropki r8c8-r9c8 colour "white"
kropki-5: kropki r1c8-r2c8 colour "white"
kropki-6: kropki r7c8-r7c9 colour "white"
kropki-7: kropki r5c2-r5c3 colour "black"
kropki-8: kropki r5c3-r5c4 colour "black"
kropki-9: kropki r8c3-r9c3 colour "black"
kropki-10: kropki r8c4-r8c5 colour "black"
kropki-11: kropki r8c6-r8c7 colour "black"
kropki-12: kropki r3c3-r3c4 colour "black"
kropki-13: kropki r4c5-r4c6 colour "black"
kropki-14: kropki r2c7-r3c7 colour "black"
kropki-15: kropki r7c5-r7c6 colour "black"
kropki-16: kropki r6c8-r6c9 colour "black"
kropki-17: kropki r4c8-r4c9 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.32,"height":0.32,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[49]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[52]}}
```

• Normal Sudoku rules apply
• Yin-Yang: Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected. No 2x2 area may be fully shaded or unshaded.
• Digits may not repeat in cages and must sum to the value in the top left corner of the cage, if given.
• Cage totals indicate how many cells of the same colour (shaded or unshaded) are seen orthogonally from the position of the cell marked with a diamond in that cage, including itself. The 'other' colour blocks vision.
• Cells separated by a white dot are consecutive. Cells separated by a black dot are in a 1:2 ratio
• All dots lie on the border between the shaded and unshaded regions.
