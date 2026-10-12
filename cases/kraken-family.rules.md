---
format: open-rules
title: Kraken Family
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/kraken-family
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r2c1 bulb ["r1c3"]
arrow-2: arrow r2c2-r3c1 bulb ["r1c3"]
arrow-3: arrow r1c4-r1c5 bulb ["r1c3"]
arrow-4: arrow r4c6-r3c7-r2c8 bulb ["r5c5"]
arrow-5: arrow r4c6-r3c6-r2c5 bulb ["r5c5"]
arrow-6: arrow r4c6-r4c7-r5c8 bulb ["r5c5"]
arrow-7: arrow r6c5-r7c6-r7c7 bulb ["r5c5"]
arrow-8: arrow r6c4-r7c3-r8c2 bulb ["r5c5"]
arrow-9: arrow r6c4-r7c4-r8c4-r9c3 bulb ["r5c5"]
arrow-10: arrow r5c4-r4c3 bulb ["r5c5"]
arrow-11: arrow r4c4-r3c3 bulb ["r5c5"]
arrow-12: arrow r6c4-r6c3 bulb ["r5c5"]
arrow-13: arrow r7c8-r6c8 bulb ["r8c8"]
arrow-14: arrow r9c8-r9c9 bulb ["r8c8"]
arrow-15: arrow r9c7-r9c6 bulb ["r8c8"]
arrow-16: arrow r8c9-r7c9 bulb ["r8c8"]
extremum r4c5 type "max" exhaustive false
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[41,50],"label":"14"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[1,2],"label":"13"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[21,22],"label":"13"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[9,18],"label":"11"}}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the circle attached to the arrow. Numbers may repeat on arrows, if other rules allow. The number in the gray square is a MAXIMUM, which is larger than all 4 orthogonally adjacent cells.
