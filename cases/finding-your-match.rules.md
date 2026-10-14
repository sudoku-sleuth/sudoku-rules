---
format: open-rules
title: Finding Your Match
setter: Will Power
source: https://sudokupad.app/0832qwxb0r
case: https://sudoku-sleuth.com/cases/finding-your-match
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 593815fa3b351341c1da13aabf1720d0
---

```rules
sudoku 9x9
cage-1: cage r1c6-r1c7 total 14 connected true
cage-2: cage r2c6-r2c7 total 16 connected true
cage-3: cage r3c1-r4c1 total 12 connected true
cage-4: cage r5c5-r6c5 total 15 connected true
cage-5: cage r9c2-r9c3 total 4 connected true
cage-6: cage r3c3-r4c3 total 10 connected true
kropki-1: kropki r7c7-r8c7 white
kropki-2: kropki r5c7-r6c7 white
kropki-3: kropki r6c6-r6c7 white
zipper-1: zipper r1c7-r1c8-r2c9-r3c8-r3c7
zipper-2: zipper r2c6-r2c5-r3c4-r4c5-r4c6
zipper-3: zipper r5c7-r5c8-r6c9-r7c8-r7c7
zipper-4: zipper r6c7-r6c6-r7c5-r8c6-r8c7
zipper-5: zipper r7c4-r8c5-r9c5-r9c4-r8c3
zipper-6: zipper r7c2-r6c3-r5c3-r5c2-r6c1
parity-cells r1c4-r1c5-r3c5-r3c4 parity "even"
```

```drawing
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#96FFFF","stroke":"#96FFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#96FFFF","stroke":"#96FFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#FFA666","stroke":"#FFA666","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#FFA666","stroke":"#FFA666","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#C77EFA","stroke":"#C77EFA","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#C77EFA","stroke":"#C77EFA","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. ZIPPER LINES- Numbers an equal distance from the center of ALL lines sum to the number in the line's center. Lines of the same color have the same center number. Numbers may repeat on lines if other rules allow. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown. Numbers highlighted with a gray square are even.
