---
format: open-rules
title: Twelve Spots
setter: Marty Sears
source: https://sudokupad.app/7m4vgf6l3t
case: https://sudoku-sleuth.com/cases/twelve-spots
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
exported: 5eb9ed4e29ad56f37c29a37f9b0bf1db
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
cage-1: cage r1c3-r2c3 repeats false total 11 connected true
cage-2: cage r6c3-r6c4-r6c5 repeats false total 6 connected true
cage-3: cage r1c4-r2c4 repeats false total 8 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#81fffeff","thickness":0,"angle":0}}
```

Normal 6x6 sudoku rules apply.

Draw 6 lines, each with a different turquoise spot at both ends. Each line must occupy at least 3 cells, and may move orthogonally and diagonally. Lines may not branch, cross each other, or share cells.

Each line is a 'same difference' line. Every pair of adjacent cells along a line has the same difference - this is its 'difference value.'

Every line has a different 'difference value'.

Digits in a cage sum to the total in the corner.
