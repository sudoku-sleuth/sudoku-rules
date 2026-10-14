---
fog:
  initiallyLit:
    - r6c1
    - r9c1
    - r9c3
format: open-rules
title: Pheasant Fitnesstrainer
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala/pheasant-fitnesstrainer
case: https://sudoku-sleuth.com/cases/pheasant-fitnesstrainer
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
exported: 915199f5daf1a82a433101450cc68907
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 stated true
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 stated true
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 stated true
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 stated true
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 stated true
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 stated true
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 stated true
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 stated true
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 stated true
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 stated true
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 stated true
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 stated true
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 stated true
arrow-1: arrow r5c3-r4c4 bulb ["r5c2"]
arrow-2: arrow r5c6-r4c6-r3c5 bulb ["r6c5"]
arrow-3: arrow r2c1-r1c2 bulb ["r3c1"]
arrow-4: arrow r3c8-r2c8 bulb ["r4c7"]
arrow-5: arrow r5c7-r6c8 bulb ["r5c8"]
arrow-6: arrow r8c8 bulb ["r9c9"]
constructed-regions size 9 borders [] joins [] stated true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.444,2.111],[8.5,2.056],[8.556,2.111]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,2.056],[8.5,2.167]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.889,0.444],[5.944,0.5],[5.889,0.556]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.944,0.5],[5.833,0.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.111,0.444],[8.056,0.5],[8.111,0.556]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.056,0.5],[8.167,0.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.889,2.444],[3.944,2.5],[3.889,2.556]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.944,2.5],[3.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.889,3.444],[4.944,3.5],[4.889,3.556]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.944,3.5],[4.833,3.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.889,4.444],[6.944,4.5],[6.889,4.556]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.944,4.5],[6.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.111,4.444],[6.056,4.5],[6.111,4.556]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.056,4.5],[6.167,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.444,2.889],[7.5,2.944],[7.556,2.889]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,2.944],[7.5,2.833]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.444,5.111],[4.5,5.056],[4.556,5.111]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,5.056],[4.5,5.167]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.889,5.444],[4.944,5.5],[4.889,5.556]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.944,5.5],[4.833,5.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.111,8.444],[7.056,8.5],[7.111,8.556]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.056,8.5],[7.167,8.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[2.444,4.889],[2.5,4.944],[2.556,4.889]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.5,4.944],[2.5,4.833]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[2.444,4.111],[2.5,4.056],[2.556,4.111]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[2.5,4.056],[2.5,4.167]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.64,"height":0.64,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.2,1.2],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":90,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.8,1.25],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":270,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,4.7],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":270,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.2,4.3],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":45,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,7.7],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":45,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.7,7.4],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":180,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.7,8.65],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":90,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.45,8.25],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":180,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.3,6.35],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":315,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.8,6.4],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":90,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.7,0.35],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":225,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.3,0.75],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":0,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.6,1.8],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":225,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.8,7.8],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":135,"text":"🪶","textColor":"#000000","fontSize":19.6,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Nala loves to sneak up on the pheasants in our park and watch them scatter and angrily squawk at her while flying just a few meters away. She knows the spots where they are likely to sit to some degree, but there is still that moment of pleasant surprise, when she finds one.

The grid is partially covered in fog. Entering correct digits will clear the fog from surrounding cells, possibly revealing more clues and helping Nala to find the pheasants.

Chaos Construction: Each row, column, and region contains the digits 1-9 exactly once each. A region is an orthogonally connected collection of cells. The shape and position of the regions have to be determined with the help of the following clues: 

Small Arrows: The digit in a cell containing a small arrow indicates the number of region borders seen in that direction. If there is more than one small arrow, the number of borders is the same in each direction, not the total for all directions. The outer edges of the grid do not count as borders.

Circles: A digit in a circle equals the number of cells seen horizontally and vertically that are in the same region as the circled digit, including itself. Borders obstruct vision.

Pheasants had to flee from some circles. Their flight path is shown as a (larger) arrow. Digits on that (larger arrow) sum to the digit in that arrows circle, which also follows the same cell counting rules as the other circles in the grid.
