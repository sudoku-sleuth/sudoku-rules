---
fog:
  initiallyLit:
    - 0
    - 1
    - 2
    - 9
    - 10
    - 11
    - 18
    - 19
    - 20
format: open-rules
title: Zapped through the Fog
setter: Meggen033
source: https://sudokupad.app/fie4aq9qo0
case: https://sudoku-sleuth.com/cases/zapped-through-the-fog
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
cage-1: cage r1c2-r2c1-r2c2 total 10 connected true
cage-2: cage r2c3-r2c4 total 10 connected true
cage-3: cage r1c5-r2c5-r3c5 total 11 connected true
cage-4: cage r8c4-r9c3-r9c4 total 18 connected true
kropki-1: kropki r1c2-r2c2 colour "white"
kropki-2: kropki r3c5-r3c6 colour "white"
kropki-3: kropki r3c9-r4c9 colour "white"
pair-1: pair r2c1-r3c1 sum 10
pair-2: pair r2c3-r3c3 sum 10
pair-3: pair r7c7-r7c8 sum 10
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,0.5],[0.5,0.5],[0.5,1.5],[0.5,2.5]],"color":"#C8A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[0.5,2.5]],"color":"#C8A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5],[4.5,2.5],[3.5,2.5],[2.5,3.5],[3.5,3.5],[3.5,4.5],[4.5,5.5],[5.5,4.5],[5.5,3.5],[6.5,2.5],[7.5,2.5],[8.5,3.5],[8.5,4.5],[7.5,5.5],[6.5,4.5]],"color":"#C8A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,4.5],[0.5,5.5],[1.5,6.5],[1.5,7.5],[2.5,7.5],[3.5,8.5],[4.5,7.5],[5.5,7.5],[5.5,6.5],[6.5,5.5],[7.5,6.5],[7.5,7.5],[8.5,6.5],[8.5,7.5]],"color":"#C8A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#C8A1FF","stroke":"#C8A1FF","thickness":1,"textColor":"#000000","opacity":0.5}}
```

•    Normal Sudoku rules apply. 
•    THERE IS ONE, AND ONLY ONE, purple Zipper Line, along which each pair of digits that are the same distance from the line's central cell (indicated by a filled purple circle), must sum to the digit in that central cell.
•    A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    Adjacent cells connected with an X must sum to 10. 
•    Digits in a cage do not repeat and sum to the clue in the top left.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
