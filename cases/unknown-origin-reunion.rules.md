---
format: open-rules
title: Unknown Origin Reunion
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origin-reunion
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 02c0b45897b0e8f3131f11a1764ce534
---

```rules
sudoku 9x9
kropki r3c5-r3c6 white
arrow-1: arrow r5c1-r5c2-r6c2-r5c3-r4c3-r4c2-r4c1-r3c1 bulb ["r6c1","r7c1"]
arrow-2: arrow r7c2-r8c2-r8c1-r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7 bulb ["r6c1","r7c1"]
arrow-3: arrow r5c9-r4c9-r3c9-r2c9-r1c9-r1c8-r2c8-r3c8-r4c8-r3c7-r2c7-r1c7-r1c6 bulb ["r6c9","r7c9"]
arrow-4: arrow r5c8-r4c7-r3c6-r2c6-r2c5-r1c5-r1c4-r1c3-r1c2-r1c1 bulb ["r6c9","r7c9"]
arrow-5: arrow r6c8-r5c7-r4c6-r4c5-r3c5-r3c4-r2c4-r2c3-r2c2-r2c1 bulb ["r6c9","r7c9"]
arrow-6: arrow r7c8-r7c7-r7c6-r7c5-r6c5-r6c6-r6c7-r5c6-r5c5-r4c4-r3c3-r3c2 bulb ["r6c9","r7c9"]
arrow-7: arrow r8c9-r9c9-r9c8-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r7c3-r6c3 bulb ["r6c9","r7c9"]
pair-1: pair r6c2-r7c2 sum 10
pair-2: pair r6c3-r7c3 sum 10
pair-3: pair r6c4-r7c4 sum 10
pair-4: pair r6c5-r7c5 sum 10
pair-5: pair r6c6-r7c6 sum 10
pair-6: pair r6c7-r7c7 sum 10
pair-7: pair r6c8-r7c8 sum 10
pair-8: pair r2c7-r3c7 sum 10
pair-9: pair r3c1-r3c2 sum 10
pair-10: pair r8c7-r9c7 sum 5
pair-11: pair r5c5-r5c6 sum 5
pair-12: pair r1c1-r1c2 sum 5
pair-13: pair r5c3-r6c3 sum 5
pair-14: pair r9c3-r9c4 sum 5
pair-15: pair r8c4-r9c4 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
```

Normal Sudoku rules apply. Numbers in light and dark green areas are at least 5 apart from their HORIZONTAL neighbors within the area. 2 separate German Whispers lines were not used to avoid confusion with the arrows. Numbers on arrows sum to the number in the pill at the arrow's origin. Numbers may repeat on arrows. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Not all possible X, V and dots are given.
