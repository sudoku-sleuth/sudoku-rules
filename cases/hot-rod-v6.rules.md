---
format: open-rules
title: Hot Rod V6
setter: Tingo
source: https://tinyurl.com/hotrodv6sudoku
case: https://sudoku-sleuth.com/cases/hot-rod-v6
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r4c3-r4c4 colour "white"
kropki-2: kropki r6c3-r6c4 colour "white"
kropki-3: kropki r2c8-r2c9 colour "white"
kropki-4: kropki r8c8-r8c9 colour "white"
kropki-5: kropki r1c6-r2c6 colour "white"
kropki-6: kropki r8c6-r9c6 colour "white"
kropki-7: kropki r5c1-r5c2 colour "white"
kropki-8: kropki r5c3-r5c4 colour "white"
kropki-9: kropki r3c2-r4c2 colour "white"
whispers-1: whispers r5c4-r5c5-r5c6-r5c7 gap 5
whispers-2: whispers r3c8-r4c8 gap 5
whispers-3: whispers r3c9-r4c9 gap 5
whispers-4: whispers r7c9-r6c9 gap 5
whispers-5: whispers r7c8-r6c8 gap 5
whispers-6: whispers r3c1-r3c2-r2c3-r2c2 gap 2
whispers-7: whispers r2c2-r3c1 gap 2
whispers-8: whispers r7c1-r8c2-r8c3-r7c2 gap 2
whispers-9: whispers r7c2-r7c1 gap 2
whispers-10: whispers r8c6-r9c7-r9c8-r9c9-r8c8-r8c7 gap 2
whispers-11: whispers r8c6-r8c7 gap 2
whispers-12: whispers r7c7-r6c6-r6c5 gap 2
whispers-13: whispers r3c7-r4c6-r4c5 gap 2
whispers-14: whispers r4c4-r5c4-r6c4 gap 2
whispers-15: whispers r4c3-r5c3-r6c3 gap 2
whispers-16: whispers r4c2-r5c2-r6c2 gap 2
whispers-17: whispers r4c1-r5c1-r6c1 gap 2
whispers-18: whispers r2c8-r2c7-r2c6-r1c7-r1c8-r1c9 gap 2
whispers-19: whispers r1c9-r2c8 gap 2
whispers-20: whispers r5c8-r4c9 gap 2
whispers-21: whispers r5c8-r4c8 gap 2
whispers-22: whispers r5c8-r6c8 gap 2
whispers-23: whispers r5c8-r6c9 gap 2
renban r4c7-r4c8-r4c9-r5c9-r6c9-r6c8-r6c7-r5c7
pair-1: pair r4c1-r4c2 relation {"op":"sum","value":10}
pair-2: pair r6c1-r6c2 relation {"op":"sum","value":10}
pair-3: pair r6c2-r7c2 relation {"op":"sum","value":10}
pair-4: pair r4c2-r4c3 relation {"op":"sum","value":5}
pair-5: pair r6c2-r6c3 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,3.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5],[6.5,6.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,3.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
```

Normal Sudoku Rules Apply
Green lines are German Whisper lines. Adjacent digits along the line must differ in value by at least 5.
Black lines are "anti-consecutive" lines. Adjacent digits along the line must differ in value by at least 2.
Pink lines are renban lines. Digits along the line are consecutive in any order.
Cells separated by white dots have consecutive values.
Not all dots are given.
Cells joined by V must sum to 5. Cells joined by X sum to 10. Not all Vs and Xs are given.
