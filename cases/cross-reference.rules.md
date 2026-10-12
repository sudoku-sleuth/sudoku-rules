---
format: open-rules
title: Cross Reference
setter: Jobo
source: https://sudokupad.app/dvfktln524
case: https://sudoku-sleuth.com/cases/cross-reference
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r3c3 bulb ["r1c1"]
arrow-2: arrow r2c4-r3c3 bulb ["r1c5"]
arrow-3: arrow r2c6-r3c7 bulb ["r1c5"]
arrow-4: arrow r2c8-r3c7 bulb ["r1c9"]
arrow-5: arrow r4c8-r3c7 bulb ["r5c9"]
arrow-6: arrow r6c8-r7c7 bulb ["r5c9"]
arrow-7: arrow r8c8-r7c7 bulb ["r9c9"]
arrow-8: arrow r8c6-r7c7 bulb ["r9c5"]
arrow-9: arrow r8c4-r7c3 bulb ["r9c5"]
arrow-10: arrow r8c2-r7c3 bulb ["r9c1"]
arrow-11: arrow r6c2-r7c3 bulb ["r5c1"]
arrow-12: arrow r4c2-r3c3 bulb ["r5c1"]
arrow-13: arrow r4c4-r3c3 bulb ["r5c5"]
arrow-14: arrow r6c4-r7c3 bulb ["r5c5"]
arrow-15: arrow r6c6-r7c7 bulb ["r5c5"]
arrow-16: arrow r4c6-r3c7 bulb ["r5c5"]
```

```drawing
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,0.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,4.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,8.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,0.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,4.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,0.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,8.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,0.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

Small clues on top of arrow circles show either the highest or the lowest digit to appear on all arrow line segments attached to that circle.
