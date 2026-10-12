---
format: open-rules
title: "Dutch Flat Mates: Ziffers"
setter: Marty Sears
source: https://sudokupad.app/xehu4x981q
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-ziffers
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#fbd263ff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#fbd263ff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#fbd263ff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#fbd263ff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#fa716dff","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#fa716dff","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#fa716dff","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#66d8ffff","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#66d8ffff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#66d8ffff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5],[1.5,1.5]],"color":"#fa716dff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[1.5,8.5]],"color":"#fa716dff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,5.5],[3.5,3.5],[3.5,5.5],[4.5,5.5],[4.5,3.5],[5.5,3.5],[5.5,5.5],[6.5,4.5],[6.5,3.5],[7.5,4.5],[7.5,5.357]],"color":"#fa716dff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,8.5]],"color":"#66d8ffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,2.5],[2.5,3.5]],"color":"#66d8ffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,6.5],[2.5,7.5]],"color":"#66d8ffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,7.5]],"color":"#fbd263ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,6.5],[7.333,5.667]],"color":"#fbd263ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[5.5,8.5]],"color":"#fbd263ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[3.5,0.5]],"color":"#fbd263ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Every 5 in the grid has a 1 directly above it or a 9 directly below it. It may have both, but it doesn't need both.

Any pair of cells that are an equal distance from the central spot of a coloured ziffer line have a difference equal to the digit on that central spot.
