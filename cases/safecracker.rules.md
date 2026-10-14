---
format: open-rules
title: Safecracker
setter: Jobo
source: https://sudokupad.app/eb8gjngirf
case: https://sudoku-sleuth.com/cases/safecracker
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ef0695da577e557ede7741694dc3eeac
---

```rules
sudoku 9x9
arrow-1: arrow r3c3-r2c4 bulb ["r4c4"]
arrow-2: arrow r3c4-r2c5 bulb ["r4c4"]
arrow-3: arrow r3c5-r2c6 bulb ["r4c4"]
arrow-4: arrow r3c7-r4c8 bulb ["r4c6"]
arrow-5: arrow r4c7-r5c8 bulb ["r4c6"]
arrow-6: arrow r5c7-r6c8 bulb ["r4c6"]
arrow-7: arrow r7c7-r8c6 bulb ["r6c6"]
arrow-8: arrow r7c6-r8c5 bulb ["r6c6"]
arrow-9: arrow r7c5-r8c4 bulb ["r6c6"]
arrow-10: arrow r7c3-r6c2 bulb ["r6c4"]
arrow-11: arrow r6c3-r5c2 bulb ["r6c4"]
arrow-12: arrow r5c3-r4c2 bulb ["r6c4"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.5,"height":1.5,"rounded":true,"stroke":"#cccf","thickness":6,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.5,"height":1.5,"rounded":true,"stroke":"#cccf","thickness":6,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.5,"height":1.5,"rounded":true,"stroke":"#cccf","thickness":6,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1.5,"height":1.5,"rounded":true,"stroke":"#cccf","thickness":6,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,7.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal sudoku rules apply.

Digits in a wheel have to be placed in the same circular order in the four cells that are touched by the wheel. The wheels might have to be rotated to the correct position by 90°, 180°, or 270°.

Digits along an arrow must sum to the digit in that arrow's circle.
