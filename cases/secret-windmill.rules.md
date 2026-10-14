---
format: open-rules
title: Secret Windmill
setter: Marty Sears
source: https://sudokupad.app/v9iw9562yc
case: https://sudoku-sleuth.com/cases/secret-windmill
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 5e316489dea3213c5218b53ef8e3a152
---

```rules
sudoku 9x9
pair-1: pair r3c4-r4c4 sum 10
pair-2: pair r3c3-r3c4 sum 10
pair-3: pair r2c3-r3c3 sum 10
pair-4: pair r4c4-r4c5 sum 10
pair-5: pair r5c4-r6c4 sum 10
pair-6: pair r6c5-r6c6 sum 10
pair-7: pair r4c6-r5c6 sum 10
pair-8: pair r6c3-r6c4 sum 10
pair-9: pair r6c3-r7c3 sum 10
pair-10: pair r7c2-r7c3 sum 10
pair-11: pair r6c6-r7c6 sum 10
pair-12: pair r7c6-r7c7 sum 10
pair-13: pair r7c7-r8c7 sum 10
pair-14: pair r4c6-r4c7 sum 10
pair-15: pair r3c7-r4c7 sum 10
pair-16: pair r3c7-r3c8 sum 10
pair-17: pair r2c2-r2c3 sum 5
pair-18: pair r2c8-r3c8 sum 5
pair-19: pair r8c7-r8c8 sum 5
pair-20: pair r7c2-r8c2 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[9.125,8.625],[9.125,9.125],[-0.125,9.125],[-0.125,-0.125],[9.125,-0.125],[9.125,8.625]],"color":"#07c4f1ff","thickness":17.28,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[9.25,8.25],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,8.25]],"color":"#7ae2f9ff","thickness":14.72,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8],"width":1.22,"height":1.22,"rounded":true,"stroke":"#FFFFFF","thickness":14.08,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8],"width":1.13,"height":1.13,"rounded":true,"stroke":"#ffed0dff","thickness":8.32,"angle":0}}
```

Normal sudoku rules apply.
If two digits have an X between them, they sum to 10. If not, they don't.
If two digits have a V between them, they sum to 5. If not, they don't.
No two digits on the yellow circle may be consecutive.
