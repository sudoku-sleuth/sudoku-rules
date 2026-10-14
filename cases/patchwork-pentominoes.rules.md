---
format: open-rules
title: Patchwork Pentominoes
setter: Blobz
source: https://sudokupad.app/9v7fzs15xq
case: https://sudoku-sleuth.com/cases/patchwork-pentominoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 0f9fa538d6404898a11735769dfac179
---

```rules
sudoku 9x9
pair-1: pair r1c2-r1c3 difference 8
kropki-1: kropki r5c2-r6c2 white
kropki-2: kropki r3c2-r3c3 white
pair-2: pair r2c4-r3c4 difference 6
kropki-3: kropki r2c5-r2c6 white
pair-3: pair r3c5-r3c6 difference 5
pair-4: pair r2c7-r3c7 difference 7
pair-5: pair r3c9-r4c9 difference 5
pair-6: pair r5c7-r5c8 difference 4
kropki-4: kropki r5c8-r6c8 white
kropki-5: kropki r4c4-r4c5 white
kropki-6: kropki r6c1-r7c1 white
pair-7: pair r8c2-r8c3 difference 6
kropki-7: kropki r8c5-r8c6 white
pair-8: pair r6c7-r6c8 difference 2
pair-9: pair r7c5-r8c5 difference 3
pair-10: pair r5c4-r6c4 difference 2
pair-11: pair r6c3-r6c4 difference 3
kropki-8: kropki r5c3-r5c4 white
pair-12: pair r6c6-r7c6 difference 4
pair-13: pair r5c6-r6c6 difference 7
kropki-9: kropki r7c7-r8c7 white
pair-14: pair r3c7-r3c8 difference 3
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[19],"label":"17","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[64],"label":"27","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[68],"label":"28","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[46],"label":"17","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[43],"label":"19","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[50],"label":"31","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[12],"label":"24","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[61],"label":"22","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[57],"label":"21","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[39],"label":"29","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[32],"label":"25","color":"#0000","labelColor":"#0000CC"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[15],"label":"30","color":"#0000","labelColor":"#0000CC"}}
```

Normal sudoku rules apply.

The indicated 60-cell white region contains one each of the twelve standard pentominoes (no repeats by rotation or reflection).

Each "difference" dot lies on the boundary between two pentominoes. Digits separated by these dots differ by the amount shown. Every pair of touching pentominoes shares exactly one such dot.

The arrangement of pentominoes must be deduced.

Once placed, each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the value listed in one of the pentomino's cells.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
