---
format: open-rules
title: Evolution
setter: Blobz
source: https://sudokupad.app/blobz/evolution
case: https://sudoku-sleuth.com/cases/evolution
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c8=6 r7c2=9
exported: 9fc8183e75518aad9c469ff9a88d40f7
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r5c7 black
kropki-2: kropki r5c3-r6c3 black
kropki-3: kropki r2c7-r3c7 black
kropki-4: kropki r7c3-r8c3 black
kropki-5: kropki r1c6-r1c7 black
kropki-6: kropki r9c3-r9c4 black
kropki-7: kropki r2c5-r3c5 black
zipper-1: zipper r1c4-r2c4-r3c4
zipper-2: zipper r7c6-r8c6-r9c6
zipper-3: zipper r8c7-r7c8-r6c9
zipper-4: zipper r4c2-r3c2-r2c3
zipper-5: zipper r6c1-r7c1-r8c2
zipper-6: zipper r2c1-r1c1-r2c2
zipper-7: zipper r9c8-r8c9-r7c9
zipper-8: zipper r2c8-r1c9-r2c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#dbbaf4ff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#dbbaf4ff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,6.5],[2.5,6.5],[3.5,5.5],[3.5,3.5],[4.5,2.5],[5.5,2.5],[6,3],[6.5,2.5],[7.5,2.5],[8.5,3.5],[8.5,4.5]],"color":"#dbbaf4ff","thickness":12,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,3.5],[6,3],[5.5,3.5],[5.5,5.5],[4.5,6.5],[3.5,6.5],[2.5,5.5],[2.5,4.5]],"color":"#dbbaf4ff","thickness":12,"rounded":true}}
```

Normal sudoku rules apply.

Along a Zipper line, pairs of digits equidistant from the center of the line sum to the digit in that cell.

Black dots separate digits where one is double the other.
