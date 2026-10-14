---
fog:
  initiallyLit:
    - r7c1
    - r8c3
    - r9c1
    - r9c2
    - r9c3
format: open-rules
title: Slalom mit Ablenkung
setter: Sandra & Nala
source: https://sudokupad.app/xa8xjti6sv
case: https://sudoku-sleuth.com/cases/slalom-mit-ablenkung
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
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
exported: 41df86ceeb535f23fd49c9c76fc1e11b
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
cage-1: cage r1c5-r2c4-r2c5 total 6 connected true
cage-2: cage r8c9-r9c8-r9c9 total 20 connected true
kropki-1: kropki r9c1-r9c2 black
kropki-2: kropki r9c2-r9c3 black
kropki-3: kropki r8c3-r9c3 black
kropki-4: kropki r2c1-r2c2 black
kropki-5: kropki r1c3-r1c4 black
kropki-6: kropki r3c9-r4c9 black
kropki-7: kropki r8c2-r8c3 white
kropki-8: kropki r7c3-r8c3 white
kropki-9: kropki r6c1-r6c2 white
kropki-10: kropki r6c1-r7c1 white
kropki-11: kropki r6c2-r6c3 white
kropki-12: kropki r4c2-r5c2 white
kropki-13: kropki r2c3-r3c3 white
kropki-14: kropki r1c4-r2c4 white
kropki-15: kropki r3c2-r4c2 white
kropki-16: kropki r2c6-r3c6 white
kropki-17: kropki r6c7-r7c7 white
slow-thermo-1: slow-thermo r7c1-r6c2
slow-thermo-2: slow-thermo r3c2-r4c3-r5c3
slow-thermo-3: slow-thermo r1c3-r2c4
slow-thermo-4: slow-thermo r5c8-r5c7-r6c6-r6c5
quadruple-1: quadruple r2c4-r2c5-r3c4-r3c5 digits [8]
quadruple-2: quadruple r3c7-r3c8-r4c7-r4c8 digits [4]
parity-cells r5c2-r2c6-r4c4-r4c6-r7c8-r7c4 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f7ab3f","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f7ab3f","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f7ab3f","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f7ab3f","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f7ab3f","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f7ab3f","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f7ab3f","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#43496b","thickness":5,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#43496b","thickness":5,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#43496b","thickness":5,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6.7,2.3],[7.4,1.6]],"color":"#67f067","thickness":5,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6.3,2.3],[5.7,1.7]],"color":"#67f067","thickness":5,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,1.5]],"color":"#67f067","thickness":5,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[3.7,8.3]],"color":"#67f067","thickness":5,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.6,8.4]],"color":"#67f067","thickness":5,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[5.3,1.7],[4.7,2.3]],"color":"#67f067","thickness":5,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[6.7,1.3]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[6.3,1.3],[5.5,0.5]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[6.3,1.7],[5.6,2.4]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[6.5,1.2],[6.5,0.6]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.3,3.7]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,3.7]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3.3,3.7],[2.6,4.4]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.3,3.5]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[3.3,8.3],[2.5,7.5]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[2.65,4.65],[3.45,5.45]],"color":"#ffa600","thickness":10,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[0.8,1.8],[1.5,2.5],[2.7,2.5],[2.5,2.7]],"color":"#a1a4b5","thickness":6,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[2.7,2.5],[2.5,2.3]],"color":"#a1a4b5","thickness":6,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[1.5,6.1],[1.5,5.5],[2.4,4.6],[2.4,4.8]],"color":"#a1a4b5","thickness":6,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[2.4,4.6],[2.2,4.6]],"color":"#a1a4b5","thickness":6,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[1.2,6.2],[0.6,5.6],[0.8,5.6]],"color":"#a1a4b5","thickness":6,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[0.6,5.6],[0.6,5.8]],"color":"#a1a4b5","thickness":6,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[5.5,3.1],[5.5,2.5],[4.6,1.6],[4.6,1.8]],"color":"#a1a4b5","thickness":6,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[4.6,1.6],[4.8,1.6]],"color":"#a1a4b5","thickness":6,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"cage","cells":[37,38,39,48,57]}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,1],"width":0.52,"height":0.52,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.2,1],"width":0,"height":0.582,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":22,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Have you ever heard of Rally Obedience? It’s a type of dog sport that Nala has recently discovered for herself. There is a course to walk and it has signs placed on the ground explaining what tricks to perform before moving on to the next sign. It is a team sport and while Nala is really good at it, her human counterpart gets literally everything wrogn on the course. The result: chaos and confusion. We might need help to finish this.. 

Normal sudoku rules apply. Place the digits 1-9 in each row, column and box exactly once each. 

All clues are standard and in the final grid all clues need to be wrong. A clue is wrong when the placed digits cause it to be invalid. Placing digits that successfully make clues invalid will help clearing the fog from surrounding cells, possibly revealing more nonsense (clues). 

Clues are valid if: 
Digits in a killer cage sum up to the number on it's top left (if given) and do NOT contain repeated digits. 

Digits on arrows sum to the number in the connected circle. (Each arrow is a separate clue, even if multiple arrows share the same circle).

Digits on a slow thermometer increase or stay the same as they move from the bulb to the tip.

Digits on a (thin) green whisper line have a difference of at least 5. 

Digits on a (thick) orange whisper line have a difference of at least 4. 

Digits in an orange odd shaded circle are odd.

Digits in a blue shaded square are even.

All digits in a (larger) white circle appear in the 4 cells touching it.

Digits joined by a white dot are consecutive.

Digits joined by a black dot are in a ratio of 1:2.

Who would have expected the beginner level to be this complex already?!
