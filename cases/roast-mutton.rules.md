---
format: open-rules
title: Roast Mutton
setter: Blobz
source: https://sudokupad.app/blobz/roast-mutton
case: https://sudoku-sleuth.com/cases/roast-mutton
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r3c2-r3c3-r4c2 total 17 connected true
cage-2: cage r3c6-r3c7-r4c7-r4c8-r5c8 total 17 connected true
cage-3: cage r7c4-r7c6-r8c4-r8c5-r8c6 total 17 connected true
cage-4: cage r8c9-r9c9 total 17 connected true
cage-5: cage r7c1-r8c1 total 17 connected true
cage-6: cage r1c7-r1c8 total 16 connected true
cage-7: cage r1c1-r1c2 total 14 connected true
cage-8: cage r9c3-r9c4 total 5 connected true
cage-9: cage r9c6-r9c7 total 15 connected true
cage-10: cage r4c1-r5c1 total 8 connected true
cage-11: cage r6c2-r7c2 total 9 connected true
cage-12: cage r2c9-r3c9 total 7 connected true
quadruple r4c4-r4c5-r5c4-r5c5 digits [1,2,3,4]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,4],"width":1.22,"height":1.22,"rounded":true,"fill":"#f5c58dff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":320,"text":"Dori","textColor":"#bc69da71","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":320,"text":"Nori","textColor":"#bc69da71","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":320,"text":"Fili","textColor":"#bc69da71","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":320,"text":"Bill","textColor":"#00000030","fontSize":28,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":40,"text":"Bert","textColor":"#00000030","fontSize":28,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"Tom","textColor":"#00000030","fontSize":28,"textStroke":"#ffffff00","textStrokeWidth":1}}
```

And this is what he saw. Three very large persons sitting round a very large fire of beech-logs. They were toasting mutton on long spits of wood, and licking the gravy off their fingers. They were trolls. Obviously trolls. Even Bilbo, in spite of his sheltered life, could see that: from the great heavy faces of them, and their size, and the shape of their legs, not to mention their language, which was not drawing-room fashion at all, at all.

Normal sudoku rules apply.

Begin by filling in the digits for Fili, Dori, and Nori, discovered in the previous puzzle.

Digits adjacent to the fire (in box 5) are shown in the circle.

Digits in cages do not repeat, and must sum to the given value.
