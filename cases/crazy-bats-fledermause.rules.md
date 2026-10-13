---
format: open-rules
title: Crazy Bats (Fledermäuse)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/crazy-bats-fledermause
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r3c5-r4c5-r4c6-r5c6-r5c7 gap 4
whispers-2: whispers r7c5-r7c4-r6c4-r6c3-r5c3 gap 4
whispers-3: whispers r4c3-r5c3-r5c4-r6c4-r6c5-r7c5-r7c6 gap 4
whispers-4: whispers r3c4-r3c5-r3c6-r4c6-r4c7-r5c7-r6c7 gap 4
whispers-5: whispers r5c1-r6c1-r7c1-r7c2-r7c3 gap 4
whispers-6: whispers r3c7-r3c8-r3c9-r4c9-r5c9 gap 4
whispers-7: whispers r6c9-r7c9-r7c8-r8c8-r8c7-r9c7-r9c6 gap 4
whispers-8: whispers r4c1-r3c1-r3c2-r2c2-r2c3-r1c3-r1c4 gap 4
pair-1: pair r6c7-r6c8 sum 5
pair-2: pair r4c5-r5c5 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[73,74,75],"label":"6"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[57,58,59],"label":"18"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[29,38,39],"label":"18"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[42,51],"label":"6"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[22,23],"label":"6"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[40,41,50],"label":"19"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[55,56],"label":"6"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[36,45,54],"label":"15"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[10,18,19],"label":"9"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[17,26],"label":"12"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[53,61,62],"label":"10","color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply. Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers in dashed areas sum to the number in the top left corner of the area. Numbers may repeat on lines and in dashed areas. Numbers with a V between them sum to 5. Not all possible V are given.
