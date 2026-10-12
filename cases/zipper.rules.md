---
format: open-rules
title: Zipper
setter: Blobz
source: https://sudokupad.app/blobz/zipper
case: https://sudoku-sleuth.com/cases/zipper
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r7c2-r8c2 total 4 connected true
cage-2: cage r7c1-r8c1-r9c1 total 23 connected true
cage-3: cage r7c5-r8c5 total 17 connected true
cage-4: cage r7c9-r8c9-r9c9 total 11 connected true
cage-5: cage r7c8-r8c8 total 8 connected true
cage-6: cage r8c3-r9c3 total 12 connected true
cage-7: cage r8c7-r9c7 total 15 connected true
zipper-1: zipper r1c1-r1c2-r1c3-r2c2-r3c1-r3c2-r3c3
zipper-2: zipper r1c5-r2c5-r3c6
zipper-3: zipper r3c7-r2c7-r1c7-r1c8-r1c9-r2c9-r2c8
zipper-4: zipper r6c1-r5c1-r4c1-r4c2-r4c3-r5c3-r5c2
zipper-5: zipper r4c6-r4c5-r5c4-r5c5-r6c4-r6c5-r6c6
zipper-6: zipper r6c7-r5c7-r4c7-r4c8-r4c9-r5c8-r6c9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.3,4.7],"width":0.34,"height":0.34,"rounded":true,"fill":"#bbb2feff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.3,7.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#bbb2feff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.3,1.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#bbb2feff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.35,4.8],"width":0.34,"height":0.34,"rounded":true,"fill":"#bbb2feff","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.35,7.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#bbb2feff","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

Along a Zipper line, pairs of digits equidistant from the center of the line sum to the digit in that cell.

Digits in cages sum to the given total.
