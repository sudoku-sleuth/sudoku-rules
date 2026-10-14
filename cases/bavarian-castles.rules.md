---
format: open-rules
title: Bavarian Castles
setter: Blobz
source: https://sudokupad.app/blobz/bavarian-castles
case: https://sudoku-sleuth.com/cases/bavarian-castles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 7
  cols: 7
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
exported: f4fd6cbbbd2dab4e6a11a54385ca0eb4
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7
unique-8: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
unique-9: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2
unique-10: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3
unique-11: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4
unique-12: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5
unique-13: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6
unique-14: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7
unique-15: unique r1c1-r1c7-r3c3-r3c5-r6c7-r7c1-r7c5
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.25,1.5],[0.75,1.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,1.75],[1.5,2.25]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.75,3.5],[1.25,3.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.75,5.5],[2.25,5.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.75,6.5],[2.25,6.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.75,3.5],[3.25,3.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.25,2.5],[2.75,2.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.75,4.5],[4.25,4.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,1.75],[4.5,2.25]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.75,2.5],[5.25,2.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.75,2.5],[6.25,2.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.75,0.5],[6.25,0.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,4.75],[6.5,5.25]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[5.75,5.5],[6.25,5.5]],"color":"#a6e19cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[0]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[1]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[9]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[16]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[42]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[35]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[38]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[45]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[41]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[6]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[22]}}
```

Divide the grid into seven provinces, each consisting of seven orthogonally connected cells. Every row, column and province must contain the digits 1 to 7 once each.

Every province contains a Castle (circle). The seven castles form a set of the digits 1-7.

Digits in caged cells indicate how many cells of the same province are seen orthogonally from that position, including itself. Other provinces block vision.

Green lines cross province borders, separating two digits that differ by 4 or more.
