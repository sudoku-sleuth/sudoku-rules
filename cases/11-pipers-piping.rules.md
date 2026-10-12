---
format: open-rules
title: 11 Pipers Piping
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/11-pipers-piping
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2 total 11 connected true
cage-2: cage r3c1-r4c1 total 11 connected true
cage-3: cage r2c3-r2c4 total 11 connected true
cage-4: cage r3c4-r4c4 total 11 connected true
cage-5: cage r8c6-r9c6 total 11 connected true
cage-6: cage r9c7-r9c8 total 11 connected true
cage-7: cage r6c8-r7c8 total 11 connected true
cage-8: cage r1c6-r2c6 total 11 connected true
cage-9: cage r1c4-r1c5 total 11 connected true
cage-10: cage r5c9-r6c9 total 5 connected true
cage-11: cage r1c8-r2c7-r2c8-r2c9 total 30 connected true
kropki-1: kropki r1c8-r2c8 colour "white"
kropki-2: kropki r3c8-r3c9 colour "white"
kropki-3: kropki r4c7-r5c7 colour "white"
kropki-4: kropki r4c8-r4c9 colour "white"
kropki-5: kropki r3c8-r4c8 colour "white"
kropki-6: kropki r5c8-r6c8 colour "white"
kropki-7: kropki r8c8-r9c8 colour "white"
kropki-8: kropki r8c6-r8c7 colour "white"
whispers-1: whispers r6c1-r7c2-r8c3-r9c4-r8c5-r7c6 gap 4
whispers-2: whispers r6c3-r7c3-r8c4-r7c5-r6c6 gap 4
whispers-3: whispers r5c1-r4c1-r3c1-r2c1-r1c2-r1c3-r1c4-r2c5-r3c5-r4c6-r4c5-r5c5-r6c4-r6c3 gap 5
whispers-4: whispers r1c7-r2c7-r3c7 gap 5
whispers-5: whispers r1c9-r2c9-r3c9 gap 5
renban-1: renban r6c7-r5c7-r4c7-r4c8-r4c9-r5c9-r6c9
renban-2: renban r8c8-r7c7-r6c6-r5c5
```

```drawing
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.6,"height":0.4,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"      ","textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":0,"height":0,"rounded":false,"thickness":0,"text":"    O","textColor":"#C77EFA","fontSize":36}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":"    O","textColor":"#C77EFA","fontSize":36}}
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on green and red lines. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
