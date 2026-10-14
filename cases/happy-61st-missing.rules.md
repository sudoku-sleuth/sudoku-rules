---
format: open-rules
title: Happy 61st, Missing!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3bcv31ke25
case: https://sudoku-sleuth.com/cases/happy-61st-missing
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
givens: r1c1=2 r1c2=9 r1c9=3 r6c3=6 r6c7=1
exported: e9c07e27b919084c807df64acbd87353
---

```rules
sudoku 9x9
cage-1: cage r8c3-r8c4-r8c5-r8c6-r8c7 total 29 connected true
cage-2: cage r7c3-r7c4-r7c5-r7c6-r7c7 total 19 connected true
cage-3: cage r6c4-r6c5-r6c6 total 13 connected true
cage-4: cage r6c4-r6c5-r6c6 total 13 connected true
cage-5: cage r7c3-r7c4-r7c5-r7c6-r7c7 total 19 connected true
cage-6: cage r8c3-r8c4-r8c5-r8c6-r8c7 total 29 connected true
pair-1: pair r3c3-r4c3 difference 6
kropki-1: kropki r3c4-r4c4 white
kropki-2: kropki r3c5-r4c5 white
pair-2: pair r3c6-r4c6 difference 6
kropki-3: kropki r3c7-r4c7 white
kropki-4: kropki r6c5-r6c6 white
kropki-5: kropki r7c6-r8c6 white
kropki-6: kropki r8c5-r8c6 white
kropki-7: kropki r7c5-r8c5 white
kropki-8: kropki r6c3-r7c3 white
kropki-9: kropki r1c9-r2c9 white
kropki-10: kropki r5c1-r6c1 white
kropki-11: kropki r7c7-r7c8 white
whispers-1: whispers r5c3-r4c3 gap 5
whispers-2: whispers r5c5-r4c5 gap 5
whispers-3: whispers r5c7-r4c7 gap 5
whispers-4: whispers r8c2-r9c3-r9c4-r9c5-r9c6-r9c7-r8c8 gap 5
renban-1: renban r4c4-r5c4
renban-2: renban r4c6-r5c6
```

```drawing
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":0.25,"height":1.05,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2],"width":0.25,"height":1.05,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2],"width":0.25,"height":1.05,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.25,"height":1.05,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7],"width":0.25,"height":1.05,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7],"width":0.25,"height":1.05,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,3.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,3.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6.5],"width":1.05,"height":0.25,"rounded":false,"fill":"#9E7466","stroke":"#9E7466","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2.5],"width":0.35,"height":0.7,"rounded":true,"fill":"#FFB83D","stroke":"#B0594D","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3.5],"width":0.35,"height":0.7,"rounded":true,"fill":"#FFB83D","stroke":"#B0594D","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.35,"height":0.7,"rounded":true,"fill":"#FFB83D","stroke":"#B0594D","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,5.5],"width":0.35,"height":0.7,"rounded":true,"fill":"#FFB83D","stroke":"#B0594D","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6.5],"width":0.35,"height":0.7,"rounded":true,"fill":"#FFB83D","stroke":"#B0594D","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Standard sudoku constraints apply: every row, column, and box must contain a complete set of the digits 1-9.

Killer cages: Digits inside cages marked by dashed lines cannot repeat and must sum to the number shown in the upper left corner of the cage.

Renban lines: Digits on purple lines are consecutive.

German whispers lines: Adjacent digits on green lines must differ by at least 5.

Difference dots: Digits separated by white dots differ by the number shown in the dot. If no number is shown in the dot, the difference is 1 (digits are consecutive).
