---
format: open-rules
title: Reflection and Rotation
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/reflection-and-rotation
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: d6b5ce34865ae6586166d719f6817c1f
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r4c8 black
kropki-2: kropki r6c3-r6c4 black
palindrome-1: palindrome r3c2-r2c3-r1c4-r1c5-r1c6
palindrome-2: palindrome r2c7-r3c8-r4c9-r5c9-r6c9
palindrome-3: palindrome r7c8-r8c7-r9c6-r9c5-r9c4
palindrome-4: palindrome r8c3-r7c2-r6c1-r5c1-r4c1
whispers-1: whispers r6c8-r6c9-r7c9-r8c9-r8c8-r7c8 gap 5
whispers-2: whispers r6c8-r7c8 gap 5
whispers-3: whispers r8c2-r8c3-r8c4-r9c4-r9c3-r9c2 gap 5
whispers-4: whispers r8c2-r9c2 gap 5
whispers-5: whispers r2c1-r3c1-r4c1-r4c2-r3c2-r2c2 gap 5
whispers-6: whispers r2c2-r2c1 gap 5
whispers-7: whispers r1c6-r2c6-r2c7-r2c8-r1c8-r1c7 gap 5
whispers-8: whispers r1c6-r1c7 gap 5
pair-1: pair r4c5-r4c6 sum 10
pair-2: pair r5c6-r6c6 sum 10
pair-3: pair r6c4-r6c5 sum 10
pair-4: pair r5c4-r5c5 sum 10
pair-5: pair r5c1-r6c1 sum 10
pair-6: pair r7c9-r8c9 sum 10
pair-7: pair r1c8-r2c8 sum 10
pair-8: pair r1c7-r2c7 sum 10
pair-9: pair r2c2-r3c2 sum 10
pair-10: pair r8c2-r9c2 sum 10
```

```drawing
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,4.5],"width":0.8,"height":0.8,"rounded":false,"text":"28","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[9.2,4.2],[9.042,4.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,9.5],"width":0.8,"height":0.8,"rounded":false,"text":"26","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.8,9.2],[4.958,9.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.5],"width":0.8,"height":0.8,"rounded":false,"text":"28","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[4.2,-0.2],[4.042,-0.04199999999999998]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0.8,"height":0.8,"rounded":false,"text":"30","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[-0.2,4.8],[-0.04199999999999998,4.958]],"color":"#000000","thickness":2,"headLength":0.156}}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. Numbers on orange lines are a palindrome, in the same sequence forward and backward. Numbers with an X between them sum to 10. Numbers with black dots between them are in a ratio of 2:1. Not all possible X and dots are given.
