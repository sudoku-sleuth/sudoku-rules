---
format: open-rules
title: Basketball Finals Bracket
setter: Will Power
source: https://sudokupad.app/3pka9a3cbd
case: https://sudoku-sleuth.com/cases/basketball-finals-bracket
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: a62b84df8c134c77aad120f1410bfd2e
---

```rules
sudoku 9x9
whispers-1: whispers r9c9-r8c9-r8c8-r7c8-r7c7-r6c7-r6c6-r5c6 gap 5
whispers-2: whispers r5c8-r5c7-r4c7 gap 5
whispers-3: whispers r5c2-r5c3-r6c3 gap 5
whispers-4: whispers r1c9-r2c9-r2c8-r3c8-r3c7-r4c7-r4c6-r5c6 gap 4
whispers-5: whispers r4c9-r4c8-r3c8 gap 4
whispers-6: whispers r6c9-r6c8-r7c8 gap 4
whispers-7: whispers r6c1-r6c2-r7c2 gap 4
renban-1: renban r9c1-r8c1-r8c2-r7c2-r7c3-r6c3-r6c4-r5c4-r5c5
renban-2: renban r4c1-r4c2-r3c2-r1c1-r2c1-r2c2-r3c3-r4c3-r4c4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[71,80],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[61,70],"label":"11","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[51,60],"label":"13","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[41,50],"label":"13","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[40,48,49],"label":"18","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[25,34,35],"label":"23","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[72,73,74],"label":"6","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[0,9,10],"label":"22","color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. REGIONS- Numbers in regions sum to the number in the top left corner of the region. NUMBERS MAY REPEAT in regions and on green and red lines, if other rules allow. RENBAN- Numbers on purple lines are each a set of numbers from 1-9, without repeats.
