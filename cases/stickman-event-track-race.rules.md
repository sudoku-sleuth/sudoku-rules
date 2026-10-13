---
format: open-rules
title: Stickman Event (Track Race)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stickman-event-track-race
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c7-r3c8 total 9 connected true
cage-2: cage r6c5-r7c5 total 10 connected true
cage-3: cage r7c9-r8c9 total 9 connected true
cage-4: cage r1c7-r2c7 total 9 connected true
cage-5: cage r2c8-r2c9 total 9 connected true
cage-6: cage r3c3-r3c4 total 9 connected true
kropki r2c2-r2c3 colour "black"
whispers-1: whispers r6c2-r7c3-r8c4-r9c5 gap 5
whispers-2: whispers r5c9-r5c8-r4c7-r4c6-r5c5 gap 5
whispers-3: whispers r4c7-r5c6-r6c5-r7c5-r8c5-r8c4-r8c3 gap 5
whispers-4: whispers r6c5-r7c6-r8c7-r9c8 gap 5
whispers-5: whispers r4c4-r5c3-r6c2-r7c2-r8c2-r8c1 gap 5
whispers-6: whispers r5c2-r4c3-r4c4-r5c5-r5c6 gap 5
pair-1: pair r7c2-r7c3 sum 5
pair-2: pair r1c2-r2c2 sum 5
extremum r3c5-r3c8 type "max" exhaustive false
```

```drawing
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":1,"height":1,"rounded":true,"fill":"#38FF3F","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":1,"height":1,"rounded":true,"fill":"#B0FFB7","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers can repeat on green lines. Numbers in cages sum to the number in the top left corner of the cage. The two large circles are each greater than all 4 of their orthogonal neighbors. Numbers with a V between them sum to 5. Numbers with a black dot between them are in a ratio of 2:1. Not all V and dots are given.
