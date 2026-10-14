---
format: open-rules
title: Index Fingers
setter: Marty Sears
source: https://tinyurl.com/m9mcr3j5
case: https://sudoku-sleuth.com/cases/index-fingers-2
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
exported: a3b68ff546403a175d8033bba10c3e87
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.833,4.5],[1.5,4.5],[0.5,3.5]],"color":"#ffdfaaff","thickness":31.36,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,2.5],[3.833,2.5]],"color":"#ffdfaaff","thickness":31.36,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2,2],[1.5,2.5],[2.5,3.5]],"color":"#c59d63ff","thickness":31.36,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,3.5],[5.5,3.833]],"color":"#c59d63ff","thickness":31.36,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5]],"color":"#8b5e33ff","thickness":31.36,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[0.5,1.5],[0.5,1.167]],"color":"#8b5e33ff","thickness":31.36,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.571,5.5],"width":0.4,"height":0.52,"rounded":true,"fill":"#ffffff76","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.571,3.5],"width":0.4,"height":0.52,"rounded":true,"fill":"#ffffff76","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.429,1.5],"width":0.4,"height":0.52,"rounded":true,"fill":"#ffffff76","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.429],"width":0.4,"height":0.52,"rounded":true,"fill":"#ffffff76","thickness":0,"angle":90}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.571,3.571],"width":0.4,"height":0.52,"rounded":true,"fill":"#ffffff76","thickness":0,"angle":135}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.429,3.429],"width":0.4,"height":0.52,"rounded":true,"fill":"#ffffff76","thickness":0,"angle":135}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.333,2.5],"width":0.49,"height":1,"rounded":false,"fill":"#ffdfaaff","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.333,4.5],"width":0.49,"height":1,"rounded":false,"fill":"#ffdfaaff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.167,5.5],"width":0.49,"height":1.3,"rounded":false,"fill":"#8b5e33ff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.833],"width":0.49,"height":1.11,"rounded":false,"fill":"#8b5e33ff","thickness":0,"angle":90}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.167],"width":0.49,"height":1.16,"rounded":false,"fill":"#c59d63ff","thickness":0,"angle":90}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.2,1.8],"width":0.49,"height":1.16,"rounded":false,"fill":"#c59d63ff","thickness":0,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.45,3.55],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":45,"text":"(|)","textColor":"#00000015","fontSize":19.6}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,2.55],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":0,"text":"(|)","textColor":"#00000015","fontSize":19.6}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,4.55],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":61,"text":"(|)","textColor":"#ba7d1e24","fontSize":19.6}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,2.55],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":135,"text":"(|)","textColor":"#ba7d1e24","fontSize":19.6}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.55,1.45],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":45,"text":"(|)","textColor":"#0000001e","fontSize":19.6}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.75,5.5],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":90,"text":"(|)","textColor":"#0000001e","fontSize":19.6}}
```

Normal 6x6 sudoku rules apply.

Each finger has lost its gold ring! Can you find them? Every row, column and box contains one gold ring, and none of them are located on a finger. Each gold ring contains a different digit.

The digits ABC along a finger, reading towards the fingertip (the C goes on the fingernail), indicates that row A column B contains that finger's missing gold ring, which contains the digit C.

EG: A finger reading 452 would indicate that r4c5 contains a 2 on a gold ring.
