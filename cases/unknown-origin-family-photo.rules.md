---
format: open-rules
title: Unknown Origin Family Photo
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origin-family-photo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r3c5 colour "white"
kropki-2: kropki r3c5-r3c6 colour "white"
kropki-3: kropki r5c4-r5c5 colour "white"
kropki-4: kropki r4c3-r5c3 colour "white"
kropki-5: kropki r7c6-r8c6 colour "white"
kropki-6: kropki r7c7-r8c7 colour "white"
kropki-7: kropki r3c4-r4c4 colour "black"
kropki-8: kropki r3c5-r4c5 colour "black"
kropki-9: kropki r3c6-r4c6 colour "black"
kropki-10: kropki r3c7-r4c7 colour "black"
kropki-11: kropki r3c6-r3c7 colour "black"
arrow-1: arrow r3c3-r3c2 bulb ["r3c4","r4c4"]
arrow-2: arrow r2c3-r2c2-r3c1 bulb ["r3c4","r4c4"]
arrow-3: arrow r2c4-r1c3-r1c2-r1c1 bulb ["r3c5","r4c5"]
arrow-4: arrow r5c4-r5c3-r4c3 bulb ["r3c5","r4c5"]
arrow-5: arrow r2c6-r2c5-r1c4-r1c5-r1c6-r1c7-r1c8 bulb ["r3c6","r4c6"]
arrow-6: arrow r2c7-r2c8-r1c9-r2c9-r3c9-r4c9 bulb ["r3c6","r4c6"]
arrow-7: arrow r5c5-r6c4-r6c3-r7c3-r7c2-r6c2-r5c2-r4c2 bulb ["r3c6","r4c6"]
arrow-8: arrow r5c6-r6c6-r6c5-r7c4-r8c3-r8c2-r9c2-r9c1-r8c1-r7c1-r6c1-r5c1-r4c1 bulb ["r3c7","r4c7"]
arrow-9: arrow r3c8-r4c8-r5c8-r5c9-r6c9-r7c9-r8c9-r9c9-r9c8-r8c8-r8c7-r9c7-r9c6 bulb ["r3c7","r4c7"]
arrow-10: arrow r5c7-r6c7-r7c8-r7c7-r8c6-r9c5-r9c4-r9c3-r8c4-r8c5-r7c5 bulb ["r3c7","r4c7"]
pair-1: pair r4c1-r4c2 sum 10
pair-2: pair r7c5-r7c6 sum 5
pair-3: pair r7c3-r7c4 sum 5
parity-cells r2c2-r2c3-r3c3 parity "odd"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number on the pill attached to that arrow. Numbers may repeat on arrows. Numbers with an X between them sum to 10, a V between them sum to 5, a white dot between them are consecutive, a black dot between them are in a ratio of 2:1. Not all possible X, V and dots are given. Numbers with a gray circle are odd. Yellow highlights are the cells not on arrows.
