---
format: open-rules
title: Ziffers of Entropy
setter: Marty Sears
source: https://sudokupad.app/yhmdve886m
case: https://sudoku-sleuth.com/cases/ziffers-of-entropy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
entropic-1: entropic r6c2-r5c2-r4c3-r3c4-r2c3-r1c4-r1c5-r1c6-r2c7-r3c6-r4c7-r5c6-r6c6
entropic-2: entropic r7c8-r6c7-r7c6-r8c7-r9c6-r9c5-r9c4-r8c5-r7c4-r6c5-r5c4
entropic-3: entropic r4c5-r3c5-r2c4
entropic-4: entropic r8c1-r7c2-r6c3
entropic-5: entropic r9c8-r9c9-r8c9
entropic-6: entropic r2c8-r3c8-r3c9
entropic-7: entropic r3c2-r2c2-r1c3
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f2972b","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f2972b","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f2972b","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f2972b","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f2972b","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f2972b","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f2972b","thickness":0,"opacity":0.5,"angle":0}}
```

• Normal sudoku rules apply.
• Each line is a ziffer line; pairs of digits an equal distance from the central spot always have the same difference, which is indicated by the digit on the central spot.
• Each line is also entropic; every group of three adjacent cells on a line must contain one low digit (1, 2 or 3), one medium digit (4, 5 or 6) and one high digit (7, 8 or 9.)
