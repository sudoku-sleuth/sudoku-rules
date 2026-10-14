---
format: open-rules
title: Octagon Grudge Match
setter: Will Power
source: https://sudokupad.app/tdsfbrx2ib
case: https://sudoku-sleuth.com/cases/octagon-grudge-match
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 699d0e0e3ac38bc70a1a22e06128ec06
---

```rules
sudoku 9x9
whispers-1: whispers r1c3-r1c4-r1c5-r1c6-r1c7-r2c8-r3c9-r4c9-r5c9-r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r9c4-r9c3-r8c2-r7c1-r6c1-r5c1-r4c1-r3c1-r2c2 gap 5
whispers-2: whispers r2c2-r1c3 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[2,3,4],"label":"42","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[5,6],"label":"16","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[26,35,44],"label":"63","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[53,62],"label":"16","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[76,77,78],"label":"54","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[74,75],"label":"24","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[36,45,54],"label":"72","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[18,27],"label":"14","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[21,22,23],"label":"72","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[57,58,59],"label":"120","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[38,47],"label":"21","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[33,42],"label":"15","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[29,30],"label":"36","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[50,51],"label":"36","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      24","textColor":"#000000","fontSize":12}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      63","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply. 

GERMAN WHISPERS- Numbers on the green line are at least 5 apart from their neighbors on the line.

Factor Regions(+)- Numbers in dashed regions MULTIPLY to the number in the top left corner of the region. 

Two region totals are repeated in the region because the green line can obscure them in some puzzle formats.
