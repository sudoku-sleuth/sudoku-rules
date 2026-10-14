---
format: open-rules
title: 6 Geese 'a Laying
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/6-geese-a-laying
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ee9b1579c9c9c6b6963e9b77f5d029fb
---

```rules
sudoku 9x9
cage r6c1-r7c1-r7c2-r7c3-r8c1 total 14 repeats true connected true
whispers-1: whispers r1c8-r2c9-r2c8 gap 4
whispers-2: whispers r8c4-r9c3-r9c4 gap 4
whispers-3: whispers r8c5-r9c6-r8c7 gap 4
whispers-4: whispers r7c9-r7c8-r8c8-r9c8-r9c9-r8c9 gap 4
whispers-5: whispers r8c8-r8c9 gap 4
whispers-6: whispers r4c7-r3c7-r2c7-r2c8-r1c8-r1c7-r2c6-r3c6-r4c6-r5c6-r5c5-r4c4-r3c3-r3c2-r3c1-r4c2-r5c2-r5c1-r6c2-r7c2-r8c3-r8c4-r8c5-r8c6-r7c7-r6c7-r5c7 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[37,46,47,48,57,58,67],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[2,3,4,10,11,13,19,28],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[49,50,59,68,69,78],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[42,43,52,61],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[5,14,15],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"57      ","textColor":"#000000","fontSize":12}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      19","textColor":"#000000","fontSize":12}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      27","textColor":"#000000","fontSize":12}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      21","textColor":"#000000","fontSize":12}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      24","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines (goose body) are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on orange lines (goose legs, beak and #6) are at least 4 apart from their neighbors on the line. Numbers may repeat on green and orange lines. KILLER+ CONSECUTIVE CAGES- Numbers in cages sum to the number in the top left cell in the cage. Numbers in cages each form a consecutive set, in any order. NUMBERS MAY REPEAT IN CAGES. The blue line (egg) has no effect on the puzzle.
