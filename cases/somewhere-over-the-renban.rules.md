---
format: open-rules
title: Somewhere Over the Renban
setter: Blobz
source: https://sudokupad.app/blobz/somewhere-over-the-renban
case: https://sudoku-sleuth.com/cases/somewhere-over-the-renban
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
renban-1: renban r2c1-r1c1-r1c2-r1c3
renban-2: renban r4c2-r3c2-r3c3-r3c4
renban-3: renban r1c7-r1c8-r1c9-r2c9
renban-4: renban r3c6-r3c7-r3c8-r4c8
renban-5: renban r8c1-r9c1-r9c2-r9c3
renban-6: renban r6c2-r7c2-r7c3-r7c4
renban-7: renban r9c7-r9c8-r9c9-r8c9
renban-8: renban r7c6-r7c7-r7c8-r6c8
renban-9: renban r9c5-r9c4-r8c3-r8c2
renban-10: renban r1c4-r1c5-r2c6
renban-11: renban r3c9-r4c9-r5c9
renban-12: renban r7c1-r6c1-r5c1
renban-13: renban r3c1-r4c1
renban-14: renban r6c9-r7c9
renban-15: renban r4c3-r4c4-r5c4
renban-16: renban r5c6-r6c6-r6c7
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#8d3cfa40","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#8d3cfa40","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#8d3cfa40","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#8d3cfa40","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#8d3cfa40","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#8d3cfa40","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#8d3cfa40","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#8d3cfa40","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal sudoku rules apply. 

Pink lines contain a set of non-repeating consecutive digits in any order.

If a pink line is marked with a digit, that digit must appear somewhere along that line.
