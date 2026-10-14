---
fog:
  initiallyLit:
    - r1c1
    - r1c5
    - r1c8
    - r2c3
    - r3c4
    - r3c7
    - r4c2
    - r9c8
    - r9c9
format: open-rules
title: Drunkard's Walk
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/29j1npfjo0
case: https://sudoku-sleuth.com/cases/drunkard-s-walk
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
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
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
exported: 0b9f6a36dc52766d1c9ba09dc6268855
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
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r9c8-r9c9 total 3 connected true
cage-2: cage r1c1-r1c2 total 8 connected true
cage-3: cage r1c5-r1c6 total 8 connected true
cage-4: cage r1c8-r2c8-r3c7-r3c8 total 26 connected true
cage-5: cage r2c3-r3c2-r3c3-r4c2-r4c3 total 17 connected true
cage-6: cage r1c9-r2c9 total 12 connected true
cage-7: cage r4c8-r4c9-r5c8 total 14 connected true
cage-8: cage r7c8-r8c8-r8c9 total 19 connected true
cage-9: cage r2c1-r2c2 total 12 connected true
cage-10: cage r6c6-r6c7-r6c8 connected true
cage-11: cage r7c6-r7c7-r8c6-r8c7 total 20 connected true
cage-12: cage r4c5-r4c6-r5c5-r5c6 total 23 connected true
cage-13: cage r4c7-r5c7 connected true
cage-14: cage r2c4-r3c4 connected true
cage-15: cage r7c4-r7c5-r8c4-r8c5 connected true
cage-16: cage r7c2-r8c2-r8c3 connected true
cage-17: cage r2c5-r3c5-r3c6 total 21 connected true
cage-18: cage r9c2-r9c3-r9c4 connected true
cage-19: cage r5c3-r5c4 connected true
```

```drawing
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFF47A","stroke":"#C28B2B","thickness":1,"textColor":"#000000","opacity":0.5}}
```

After a night of celebrating, our hero leaves r1c1, through the fog, trying to get home to r9c9. With each step, they move to an orthogonally adjacent cell, forming a modular line as they go. (That means any set of three contiguous digits along their path must include one each from {147}, {258}, and {369}.)   

They stagger from streetlamp to streetlamp along the way, each indicated by a yellow disk in a cell. Some of the street lamps are visible from the start but others are hidden by the fog and will only be revealed when correct digits are placed nearby. Their path must lead them to every streetlamp. All streetlamps are from the same modular set and whenever a number from that set is on the path, it appears as a street lamp. Numbers from that modular set which are not on the path are not streetlamps.

If our hero enters a killer cage, they must completely traverse the cage before exiting it. Some killer cages may be avoided entirely.
