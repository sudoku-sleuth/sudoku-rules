---
format: open-rules
title: All The Same
setter: Marty Sears
source: https://sudokupad.app/55flkmc8kc
case: https://sudoku-sleuth.com/cases/all-the-same
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
kropki r4c3-r5c3 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.25,5.25],[6.25,6.25],[-0.25,6.25],[-0.25,-0.25],[6.25,-0.25],[6.25,5.25]],"color":"#d4a3dcff","thickness":28.16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,6.5],[-0.5,6.5],[-0.5,-0.5],[6.5,-0.5],[6.5,1.5]],"color":"#d4a3dcff","thickness":28.16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,6.5],[-0.5,6.5],[-0.5,-0.5],[6.5,-0.5],[6.5,1.5]],"color":"#debae8ff","thickness":32,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.55,-0.45],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,-0.45],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.55,-0.45],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,-0.45],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.55,-0.45],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.55,-0.45],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.45,0.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.45,1.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.45,2.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.45,3.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.55,0.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.55,1.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.55,2.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.55,3.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.45,4.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.45,5.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.55,4.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.55,5.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.55,6.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.55,6.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,6.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.55,6.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,6.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.55,6.55],"width":0.7,"height":0.7,"rounded":false,"fill":"#00000042","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,-0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,-0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#d9f1fdff","thickness":0,"angle":0}}
```

Normal 6x6 sudoku rules apply.

KROPKI:
If two digits are joined by a black dot, one is double the other.

NUMBERED ROOMS:
Every blue square contains a Numbered Rooms clue, which has been written in invisible ink. This digit on a blue square appears in its row or column exactly X cells away from that blue square, where X is the first digit encountered.

Oh, one more thing... all the blue squares contain the same clue.
