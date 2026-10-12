---
format: open-rules
title: Haus Romer, Frankfurt
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/haus-romer-frankfurt
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r6c8-r7c8 total 10 connected true
cage-2: cage r6c2-r7c2 total 12 connected true
cage-3: cage r8c3-r9c3 total 11 connected true
cage-4: cage r8c7-r9c7 total 14 connected true
cage-5: cage r8c5-r9c4-r9c5-r9c6 total 22 connected true
cage-6: cage r5c5-r6c5-r7c5 total 12 connected true
cage-7: cage r5c3-r6c3 total 10 connected true
cage-8: cage r5c7-r6c7 total 6 connected true
cage-9: cage r3c7-r4c7 total 7 connected true
cage-10: cage r4c8-r5c8 total 9 connected true
cage-11: cage r5c9-r6c9 total 12 connected true
cage-12: cage r3c3-r4c3 total 9 connected true
cage-13: cage r4c2-r5c2 total 11 connected true
cage-14: cage r5c1-r6c1 total 9 connected true
cage-15: cage r1c5-r2c5 total 17 connected true
cage-16: cage r1c6-r1c7 total 8 connected true
whispers-1: whispers r5c1-r5c2-r4c2-r4c3-r3c3-r3c4-r2c4-r2c5-r2c6-r3c6-r3c7-r4c7-r4c8-r5c8-r5c9 gap 5
whispers-2: whispers r6c1-r5c1 gap 5
whispers-3: whispers r6c9-r5c9 gap 5
whispers-4: whispers r1c5-r2c4 gap 5
whispers-5: whispers r9c1-r8c1-r7c1-r6c1 gap 5
whispers-6: whispers r9c9-r8c9-r7c9-r6c9 gap 5
whispers-7: whispers r8c5-r9c5 gap 5
whispers-8: whispers r2c6-r1c5 gap 5
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[22]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[32]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal Sudoku rules apply. German Whispers Lines- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers in cages sum to the number in the top left corner of the cage. The three unmarked cages sum to 20 total. The circle is the clock on the building, and has no effect on the puzzle.
