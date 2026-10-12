---
format: open-rules
title: We Don't Need No Stinkin Boxes
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/we-don-t-need-no-stinkin-boxes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r2c1
      - r3c1
      - r4c1
      - r5c1
      - r6c1
      - r7c1
      - r8c1
      - r9c1
    - - r1c2
      - r2c2
      - r3c2
      - r4c2
      - r5c2
      - r6c2
      - r7c2
      - r8c2
      - r9c2
    - - r1c3
      - r2c3
      - r3c3
      - r4c3
      - r5c3
      - r6c3
      - r7c3
      - r8c3
      - r9c3
    - - r1c4
      - r2c4
      - r3c4
      - r4c4
      - r5c4
      - r6c4
      - r7c4
      - r8c4
      - r9c4
    - - r1c5
      - r2c5
      - r3c5
      - r4c5
      - r5c5
      - r6c5
      - r7c5
      - r8c5
      - r9c5
    - - r1c6
      - r2c6
      - r3c6
      - r4c6
      - r5c6
      - r6c6
      - r7c6
      - r8c6
      - r9c6
    - - r1c7
      - r2c7
      - r3c7
      - r4c7
      - r5c7
      - r6c7
      - r7c7
      - r8c7
      - r9c7
    - - r1c8
      - r2c8
      - r3c8
      - r4c8
      - r5c8
      - r6c8
      - r7c8
      - r8c8
      - r9c8
    - - r1c9
      - r2c9
      - r3c9
      - r4c9
      - r5c9
      - r6c9
      - r7c9
      - r8c9
      - r9c9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-20: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-21: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-22: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-23: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-24: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-25: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-26: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-27: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
kropki-1: kropki r8c1-r8c2 colour "white"
kropki-2: kropki r5c2-r5c3 colour "white"
kropki-3: kropki r4c7-r5c7 colour "black"
kropki-4: kropki r2c5-r3c5 colour "black"
kropki-5: kropki r2c4-r2c5 colour "black"
kropki-6: kropki r1c4-r2c4 colour "black"
kropki-7: kropki r4c2-r5c2 colour "black"
kropki-8: kropki r8c2-r9c2 colour "black"
kropki-9: kropki r7c2-r8c2 colour "black"
kropki-10: kropki r6c2-r7c2 colour "black"
kropki-11: kropki r1c3-r2c3 colour "black"
kropki-12: kropki r4c3-r5c3 colour "black"
kropki-13: kropki r2c6-r3c6 colour "black"
kropki-14: kropki r8c7-r9c7 colour "black"
kropki-15: kropki r4c8-r4c9 colour "black"
kropki-16: kropki r3c9-r4c9 colour "black"
pair r2c8-r2c9 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[45,54,63,72,73],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[46,55,56,57],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[64,65,66,74,75],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[76,77,78,79,80],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[58,60,67,68,69],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[51,52,53,61,62,71],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[32,41,42,50,59],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"cage","cells":[30,39,40,49],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"cage","cells":[27,36,37,38,47,48],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"cage","cells":[9,10,18,19],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"cage","cells":[12,13,14,20,21,28,29],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"cage","cells":[0,1,2,3,11],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"cage","cells":[4,5,6,7],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"cage","cells":[22,23,24,25,31],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"cage","cells":[8,15,16,17,26],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"cage","cells":[33,34,35,43,44],"label":"25","color":"#000000","labelColor":"#000000"}}
```

Fill each row and column with the numbers 1-9, once each (There are no 3x3 boxes in this puzzle). The numbers in EACH OUTLINED AREA sum to 25. Red areas have the same set of numbers in them.  Blue areas have the same set of numbers in them.  Gray areas have the same set of numbers in them. White areas have no restrictions, except the sum. Numbers may repeat in areas, if other rules allow. Seven of the nine 5's in the puzzle are in consecutive locations on one of the two major diagonals. Numbers with black dots between them are in a ratio of 2:1. Numbers with white dots between them are consecutive. Numbers with a V between them sum to 5. No negative constraint on dots or V's.
