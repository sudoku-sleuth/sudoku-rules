---
format: open-rules
title: ZipBan!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8851i50p1d
case: https://sudoku-sleuth.com/cases/zipban
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c5=3 r5c6=3
---

```rules
sudoku 9x9
zipper-1: zipper r2c1-r1c1-r1c2
zipper-2: zipper r1c7-r1c8-r1c9-r2c9-r3c9
zipper-3: zipper r3c6-r4c6-r4c7-r3c7
zipper-4: zipper r4c3-r3c3-r3c4-r4c4
zipper-5: zipper r4c9-r5c9-r6c9-r6c8
zipper-6: zipper r7c8-r8c8-r9c8-r9c9
zipper-7: zipper r7c4-r8c4-r9c4-r9c5-r9c6-r8c6-r7c6
zipper-8: zipper r9c1-r9c2-r8c2
zipper-9: zipper r4c1-r5c1-r6c1-r6c2
zipper-10: zipper r2c1-r1c1-r1c2
zipper-11: zipper r1c7-r1c8-r1c9-r2c9-r3c9
zipper-12: zipper r4c3-r3c3-r3c4-r4c4
zipper-13: zipper r3c6-r4c6-r4c7-r3c7
zipper-14: zipper r4c1-r5c1-r6c1-r6c2
zipper-15: zipper r6c8-r6c9-r5c9-r4c9
zipper-16: zipper r9c1-r9c2-r8c2
zipper-17: zipper r7c4-r8c4-r9c4-r9c5-r9c6-r8c6-r7c6
zipper-18: zipper r7c8-r8c8-r9c8-r9c9
renban-1: renban r2c1-r1c1-r1c2
renban-2: renban r1c7-r1c8-r1c9-r2c9-r3c9
renban-3: renban r3c6-r4c6-r4c7-r3c7
renban-4: renban r4c3-r3c3-r3c4-r4c4
renban-5: renban r4c9-r5c9-r6c9-r6c8
renban-6: renban r7c8-r8c8-r9c8-r9c9
renban-7: renban r7c4-r8c4-r9c4-r9c5-r9c6-r8c6-r7c6
renban-8: renban r9c1-r9c2-r8c2
renban-9: renban r4c1-r5c1-r6c1-r6c2
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#9d6dc7","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","stroke":"#9d6dc7","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","stroke":"#9d6dc7","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","stroke":"#9d6dc7","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","stroke":"#9d6dc7","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","stroke":"#9d6dc7","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,0.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","stroke":"#9d6dc7","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","stroke":"#9d6dc7","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","stroke":"#9d6dc7","thickness":1,"opacity":0.5,"angle":0}}
```

- Normal sudoku rules apply.
- All lines are both Renban AND Zipper lines. Centres of Zipper lines are marked by small circles.
- Along Renban lines, digits for a non-repeating set of consecutive digits in some order.
- Along Zipper lines, pairs of digits equidistant from the center have the same sum. For odd length Zipper lines, that sum is the value in the center cell of the line.
