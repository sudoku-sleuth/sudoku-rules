---
format: open-rules
title: Cryptic checkers
setter: sujoyku
source: https://sudokupad.app/yzl6i96frq
case: https://sudoku-sleuth.com/cases/cryptic-checkers
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: 3188c1e186a0a92d6593f9099e853622
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 10 connected true
cage-2: cage r1c8-r1c9 total 10 connected true
cage-3: cage r8c9-r9c9 total 13 connected true
cage-4: cage r9c1-r9c2 total 15 connected true
cage-5: cage r9c7-r9c8 total 9 connected true
cage-6: cage r8c3-r8c4 total 12 connected true
cage-7: cage r6c4-r6c5 total 7 connected true
cage-8: cage r3c2-r4c2-r5c2 total 10 connected true
cage-9: cage r3c8-r4c8-r5c8 total 20 connected true
cage-10: cage r3c6-r4c6 total 5 connected true
cage-11: cage r2c6-r2c7 total 11 connected true
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,7],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,3],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,2],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.85,0.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.15,1.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.85,0.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,1.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
```

Normal sudoku rules apply. Digits in a cage sum to the clue in the top left. Ambiguous Battenburg: Mark each cell of the grid with one of two different colours (e.g. red and blue) such that each digit always appears in cells of the same colour. (For example, if a 1 is in a red cell, all 1s in the grid have to be in red cells.) In any killer cage, all cells have the same colour (i.e. any cage is entirely red or entirely blue, but does not consist of both red and blue cells). Whenever 2 digits of both colours form a 2x2 checkerboard pattern, a Battenburg marking is given. If there is no such marking, the above pattern is not allowed.
