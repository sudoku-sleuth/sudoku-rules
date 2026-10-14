---
format: open-rules
title: Play Ball!
setter: Will Power
source: https://f-puzzles.com/?id=yb8drvmu
case: https://sudoku-sleuth.com/cases/play-ball
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=5
exported: c47e3e48edd8afe12b0bd5789b2fe5e4
---

```rules
sudoku 9x9
whispers-1: whispers r8c8-r7c8-r7c7-r8c7 gap 5
whispers-2: whispers r9c1-r8c1-r7c1-r6c1-r5c1-r4c2-r3c3-r2c4-r1c5-r1c6-r1c7-r1c8 gap 5
renban r9c5-r8c5-r7c5-r6c5-r5c6-r5c7-r5c8-r5c9
parity-cells-1: parity-cells r3c7-r4c4-r6c5-r9c5-r7c8 parity "odd"
parity-cells-2: parity-cells r5c7-r5c9-r9c9-r7c2 parity "even"
```

```drawing
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"B","textColor":"#000000","fontSize":20}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"B","textColor":"#000000","fontSize":20}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"B","textColor":"#000000","fontSize":20}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"B","textColor":"#000000","fontSize":20}}
```

Normal Sudoku rules apply. German Whispers- Numbers on the green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on the green lines. Renban Line- Numbers on the pink line are a set of 8 different consecutive digits, in any order. The 9 players on the field are represented by 5 (odd) circles and 4 (even) squares. All players are unique numbers. The four white bases with a "B" on top are unique powers of 2.
