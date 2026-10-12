---
fog:
  initiallyLit:
    - 0
    - 1
    - 9
    - 18
    - 19
format: open-rules
title: Double The Fun
setter: Sandra & Nala
source: https://sudokupad.app/ljr4bsjo9k
case: https://sudoku-sleuth.com/cases/double-the-fun
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
cage-1: cage r1c1-r1c2-r2c1 total 8 connected true
cage-2: cage r3c1-r4c1 total 6 connected true
cage-3: cage r4c3-r5c3 total 15 connected true
cage-4: cage r5c4-r5c5-r6c3-r6c4 total 25 connected true
cage-5: cage r5c6-r6c5-r6c6-r7c5 total 13 connected true
cage-6: cage r7c6-r8c6 total 15 connected true
arrow-1: arrow r6c6-r6c7-r5c6 bulb ["r7c5"]
arrow-2: arrow r3c3-r4c2-r4c1 bulb ["r2c3"]
arrow-3: arrow r3c2 bulb ["r2c1"]
arrow-4: arrow r6c3-r6c2-r7c3 bulb ["r5c4"]
arrow-5: arrow r7c7-r8c6 bulb ["r6c8"]
arrow-6: arrow r5c3-r5c2 bulb ["r4c4"]
arrow-7: arrow r2c5-r2c6-r3c7-r4c6 bulb ["r1c6"]
arrow-8: arrow r9c5-r8c4 bulb ["r9c6"]
arrow-9: arrow r7c2-r6c1 bulb ["r8c2"]
value-modifier name "doubler" factor 2 offset 0 exactly [["r1c1","r1c2","r1c3","r1c4","r1c5","r1c6","r1c7","r1c8","r1c9"],["r2c1","r2c2","r2c3","r2c4","r2c5","r2c6","r2c7","r2c8","r2c9"],["r3c1","r3c2","r3c3","r3c4","r3c5","r3c6","r3c7","r3c8","r3c9"],["r4c1","r4c2","r4c3","r4c4","r4c5","r4c6","r4c7","r4c8","r4c9"],["r5c1","r5c2","r5c3","r5c4","r5c5","r5c6","r5c7","r5c8","r5c9"],["r6c1","r6c2","r6c3","r6c4","r6c5","r6c6","r6c7","r6c8","r6c9"],["r7c1","r7c2","r7c3","r7c4","r7c5","r7c6","r7c7","r7c8","r7c9"],["r8c1","r8c2","r8c3","r8c4","r8c5","r8c6","r8c7","r8c8","r8c9"],["r9c1","r9c2","r9c3","r9c4","r9c5","r9c6","r9c7","r9c8","r9c9"],["r1c1","r2c1","r3c1","r4c1","r5c1","r6c1","r7c1","r8c1","r9c1"],["r1c2","r2c2","r3c2","r4c2","r5c2","r6c2","r7c2","r8c2","r9c2"],["r1c3","r2c3","r3c3","r4c3","r5c3","r6c3","r7c3","r8c3","r9c3"],["r1c4","r2c4","r3c4","r4c4","r5c4","r6c4","r7c4","r8c4","r9c4"],["r1c5","r2c5","r3c5","r4c5","r5c5","r6c5","r7c5","r8c5","r9c5"],["r1c6","r2c6","r3c6","r4c6","r5c6","r6c6","r7c6","r8c6","r9c6"],["r1c7","r2c7","r3c7","r4c7","r5c7","r6c7","r7c7","r8c7","r9c7"],["r1c8","r2c8","r3c8","r4c8","r5c8","r6c8","r7c8","r8c8","r9c8"],["r1c9","r2c9","r3c9","r4c9","r5c9","r6c9","r7c9","r8c9","r9c9"],["r1c1","r1c2","r1c3","r2c1","r2c2","r2c3","r3c1","r3c2","r3c3"],["r1c4","r1c5","r1c6","r2c4","r2c5","r2c6","r3c4","r3c5","r3c6"],["r1c7","r1c8","r1c9","r2c7","r2c8","r2c9","r3c7","r3c8","r3c9"],["r4c1","r4c2","r4c3","r5c1","r5c2","r5c3","r6c1","r6c2","r6c3"],["r4c4","r4c5","r4c6","r5c4","r5c5","r5c6","r6c4","r6c5","r6c6"],["r4c7","r4c8","r4c9","r5c7","r5c8","r5c9","r6c7","r6c8","r6c9"],["r7c1","r7c2","r7c3","r8c1","r8c2","r8c3","r9c1","r9c2","r9c3"],["r7c4","r7c5","r7c6","r8c4","r8c5","r8c6","r9c4","r9c5","r9c6"],["r7c7","r7c8","r7c9","r8c7","r8c8","r8c9","r9c7","r9c8","r9c9"]] count 1 atMostOne [] distinct true stated true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.3,1.9],"width":0,"height":0.722,"rounded":true,"thickness":0,"angle":45,"text":"🐾","textColor":"#000000","fontSize":27.4,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.9,7.1],"width":0,"height":0.722,"rounded":true,"thickness":0,"angle":180,"text":"🐾","textColor":"#000000","fontSize":27.4,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,6.95],"width":0,"height":0.722,"rounded":true,"thickness":0,"angle":0,"text":"🐾","textColor":"#000000","fontSize":27.4,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8,8.15],"width":0,"height":0.722,"rounded":true,"thickness":0,"angle":315,"text":"🐾","textColor":"#000000","fontSize":27.4,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,6.9],"width":0.5,"height":0.5,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.9,7.3],"width":0.5,"height":0.5,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,7],"width":0.5,"height":0.5,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8,8.15],"width":0.5,"height":0.5,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.3],"width":0.72,"height":0.72,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.4,7.95],"width":0.72,"height":0.72,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.45,6.8],"width":0.72,"height":0.72,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.55,6.9],"width":0.72,"height":0.72,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.4,1.7],"width":0.72,"height":0.72,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.1,2.25],"width":0.72,"height":0.72,"rounded":false,"fill":"#fff","thickness":0,"opacity":0.5,"angle":0}}
```

It’s a very special day for Nala because she gets a visitor. It is her best friend Nelly! Nala and Nelly have been best friends since their earliest puppy weeks. Whenever they come together all the fun is doubled, but the backyard will be left in chaos and a huge cloud of dust. 

How will the backyard look like once the dust settled?

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

Each of the digits 1-9 appears as a „Doubler“ exactly once in the grid. There is only one „Doubler“ in each row, column and 3x3 box. Digits that appear as „Doubler“ have a value that is double their size. 

The value of digits in a dashed cage must sum to the total in the top left corner of the cage. Digits may not repeat within their own cage, although values may. 

The value of digits along an arrow must sum to the value of the digit in the corresponding circle. Each arrow has its own color. Arrows of the same color are connected. 

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
