---
format: open-rules
title: Unidentified Flying Octagon
setter: Marty Sears
source: https://sudokupad.app/3d8jihidrp
case: https://sudoku-sleuth.com/cases/unidentified-flying-octagon
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r2c1-r1c1-r2c2-r2c3-r3c2-r4c1-r5c1-r6c1-r7c2-r8c3-r9c4-r9c5-r9c6-r8c7-r7c8-r8c8-r8c9-r9c8 gap 5
whispers-2: whispers r2c3-r1c4-r1c5-r1c6-r2c7-r3c8-r4c9-r5c9-r6c9-r7c8 gap 5
whispers-3: whispers r9c1-r9c2-r8c1-r7c1 gap 5
whispers-4: whispers r5c8-r6c7-r7c6-r8c5-r7c4-r6c3-r5c2-r4c3-r3c4-r2c5-r3c6-r4c7 gap 5 loop true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[5.5,3.5],[5.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,0.5],[8.5,1.5],[7.5,0.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,0.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[5.5,3.5],[5.5,5.5]],"color":"#4acfd9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5]],"color":"#4acfd9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.44,"height":0.44,"rounded":false,"fill":"#4acfd9ff","thickness":0,"angle":45}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.44,"height":0.44,"rounded":false,"fill":"#4acfd9ff","thickness":0,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.25],"width":0.5,"height":0.15,"rounded":false,"fill":"#4acfd9ff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.25],"width":0.5,"height":0.15,"rounded":false,"fill":"#4acfd9ff","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

Adjacent digits on a green line have a difference of at least 5.

The Nth digit along a teal line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: if the first cell along a line is a 3, then the 3rd cell along that line is a 1.
