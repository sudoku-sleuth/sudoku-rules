---
format: open-rules
title: Map of Germany Area
setter: Will Power
source: https://f-puzzles.com/?id=y8su4hn8
case: https://sudoku-sleuth.com/cases/map-of-germany-area
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r9c3-r9c4 total 7 connected true
cage-2: cage r7c1-r7c2-r8c1-r8c2-r8c3-r9c1-r9c2 total 34 connected true
cage-3: cage r4c1-r5c1 total 9 connected true
cage-4: cage r2c2-r3c1-r3c2 total 14 connected true
cage-5: cage r1c1-r1c2-r1c3-r2c1 total 24 connected true
cage-6: cage r1c6-r1c7-r1c8-r1c9 total 20 connected true
cage-7: cage r2c9-r3c9-r4c9 total 17 connected true
cage-8: cage r8c8-r8c9-r9c6-r9c7-r9c8-r9c9 total 34 connected true
cage-9: cage r5c8-r5c9-r6c7-r6c8-r6c9-r7c8-r7c9 total 26 connected true
whispers-1: whispers r4c2-r3c3-r2c3-r2c4-r1c4-r1c5-r2c6-r2c7-r2c8-r3c8-r4c8-r5c7-r6c6-r7c7 gap 5
whispers-2: whispers r8c7-r8c6-r8c5-r8c4-r7c4-r7c3-r6c2-r5c2 gap 5
pair-1: pair r3c7-r3c8 sum 10
pair-2: pair r2c4-r2c5 sum 10
pair-3: pair r5c3-r5c4 sum 10
pair-4: pair r3c4-r3c5 sum 10
pair-5: pair r7c6-r7c7 sum 10
pair-6: pair r4c2-r5c2 sum 10
pair-7: pair r7c4-r7c5 sum 10
pair-8: pair r5c8-r6c8 sum 10
pair-9: pair r4c8-r4c9 sum 10
```

```drawing
- {"id":"drawing-41","rules":[],"visual":{"kind":"cage","cells":[76],"label":"1"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"cage","cells":[45],"label":"4"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
```

Normal Sudoku rules apply. German Whispers Line- Numbers on the green line are at least 5 apart from their neighbors on the line. Killer Cages- Numbers in cages sum to the number in the top left corner of the cage.  Numbers can repeat on the line or in cages if other rules allow. Numbers on either side of an X sum to 10. Xs represent approximatre locations of Hamburg, Hannover, Berlin, Dresden, Dusseldorf, Frankfurt, Stuttgart, Munich and Prague.
