---
format: open-rules
title: One Lost Goose
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/d7xkmtjoxt
case: https://sudoku-sleuth.com/cases/one-lost-goose
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 17 connected true
cage-2: cage r2c3-r3c2-r3c3 total 11 connected true
cage-3: cage r2c4-r2c5-r3c4 total 17 connected true
cage-4: cage r2c6-r3c5-r3c6 total 17 connected true
cage-5: cage r1c8-r1c9-r2c9 total 15 connected true
cage-6: cage r4c2-r4c3-r5c2 total 18 connected true
cage-7: cage r5c3-r6c2-r6c3 total 17 connected true
cage-8: cage r6c4-r7c3-r7c4 total 16 connected true
cage-9: cage r7c5-r8c4-r8c5 total 14 connected true
cage-10: cage r8c1-r9c1-r9c2 total 13 connected true
zipper-1: zipper r2c1-r1c1-r1c2
zipper-2: zipper r3c2-r2c2-r2c3
zipper-3: zipper r4c3-r3c3-r3c4
zipper-4: zipper r3c5-r2c5-r2c6
zipper-5: zipper r3c6-r4c6-r4c7
zipper-6: zipper r6c2-r5c2-r5c3
zipper-7: zipper r7c3-r6c3-r6c4
zipper-8: zipper r8c4-r7c4-r7c5
zipper-9: zipper r9c5-r8c5-r8c6
zipper-10: zipper r6c6-r7c7-r8c8
zipper-11: zipper r5c7-r5c8-r4c8
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#c4a7dd","thickness":0,"opacity":0.5,"angle":0}}
```

-Normal sudoku rules apply.
-Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
-Zipper Lines: Digits equidistant from the center of a purple Zipper Line must sum to the digit in the center of the line. Centers of Zipper Lines are marked by small purple dots.
