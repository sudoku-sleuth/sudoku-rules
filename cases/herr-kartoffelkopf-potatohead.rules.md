---
format: open-rules
title: Herr Kartoffelkopf- Potatohead
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/herr-kartoffelkopf-potatohead
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: f0cdfbbb1044d6067a5d8a0817ce8e7d
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r2c4 white
kropki-2: kropki r1c5-r2c5 white
kropki-3: kropki r1c6-r2c6 white
kropki-4: kropki r2c1-r3c1 white
kropki-5: kropki r6c1-r6c2 white
kropki-6: kropki r1c2-r1c3 white
kropki-7: kropki r3c2-r3c3 white
kropki-8: kropki r1c3-r2c3 white
whispers-1: whispers r3c4-r4c4-r5c3-r6c3-r7c4-r7c5-r7c6-r6c7-r5c7-r4c6-r3c6 gap 5
whispers-2: whispers r4c8-r5c8-r5c7 gap 5
whispers-3: whispers r6c2-r5c2-r5c3 gap 5
whispers-4: whispers r9c3-r9c4-r8c4-r7c4 gap 5
whispers-5: whispers r9c7-r9c6-r8c6-r7c6 gap 5
renban-1: renban r2c7-r2c6-r2c5-r2c4-r2c3-r1c4-r1c5-r1c6
renban-2: renban r5c4-r5c5-r5c6
pair-1: pair r7c4-r8c4 sum 10
pair-2: pair r8c6-r8c7 sum 5
pair-3: pair r4c1-r4c2 sum 5
pair-4: pair r7c2-r7c3 sum 5
pair-5: pair r5c8-r6c8 sum 5
pair-6: pair r3c7-r3c8 sum 5
pair-7: pair r9c2-r9c3 sum 5
```

```drawing
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[21,22,23],"label":"24"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":1,"height":1,"rounded":true,"fill":"#FF6E69","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0.5,"height":0.5,"rounded":true,"fill":"#000000","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.5,"height":0.5,"rounded":true,"fill":"#000000","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4.5],"width":1,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Christmas gift from childhood #1- Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. Numbers on gray lines (HAT AND MOUSTACHE) are a set of non-repeating, consecutive numbers, in any order. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with white dots between them are consecutive. Not all X, V and dots are given. THE EYES, NOSE AND MOUTH HAVE NO EFFECT ON THE PUZZLE.
