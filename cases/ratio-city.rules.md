---
format: open-rules
title: Ratio City
setter: Timotab
source: https://sudokupad.app/w0wiy0pyaw
case: https://sudoku-sleuth.com/cases/ratio-city
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some source features still need to be checked against our reading.
  - Some of the source rules still need to be included in our reading.
board:
  rows: 11
  cols: 11
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
    - - r2c2
      - r2c3
      - r2c4
      - r3c2
      - r3c3
      - r3c4
      - r4c2
      - r4c3
      - r4c4
    - - r2c5
      - r2c6
      - r2c7
      - r3c5
      - r3c6
      - r3c7
      - r4c5
      - r4c6
      - r4c7
    - - r2c8
      - r2c9
      - r2c10
      - r3c8
      - r3c9
      - r3c10
      - r4c8
      - r4c9
      - r4c10
    - - r5c2
      - r5c3
      - r5c4
      - r6c2
      - r6c3
      - r6c4
      - r7c2
      - r7c3
      - r7c4
    - - r5c5
      - r5c6
      - r5c7
      - r6c5
      - r6c6
      - r6c7
      - r7c5
      - r7c6
      - r7c7
    - - r5c8
      - r5c9
      - r5c10
      - r6c8
      - r6c9
      - r6c10
      - r7c8
      - r7c9
      - r7c10
    - - r8c2
      - r8c3
      - r8c4
      - r9c2
      - r9c3
      - r9c4
      - r10c2
      - r10c3
      - r10c4
    - - r8c5
      - r8c6
      - r8c7
      - r9c5
      - r9c6
      - r9c7
      - r10c5
      - r10c6
      - r10c7
    - - r8c8
      - r8c9
      - r8c10
      - r9c8
      - r9c9
      - r9c10
      - r10c8
      - r10c9
      - r10c10
---

```rules
unique-1: unique r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10
unique-2: unique r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10
unique-3: unique r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10
unique-4: unique r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10
unique-5: unique r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10
unique-6: unique r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10
unique-7: unique r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10
unique-8: unique r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10
unique-9: unique r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10
unique-10: unique r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2
unique-11: unique r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3
unique-12: unique r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4
unique-13: unique r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5
unique-14: unique r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6
unique-15: unique r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7
unique-16: unique r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8
unique-17: unique r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9
unique-18: unique r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10
unique-19: unique r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4
unique-20: unique r2c5-r2c6-r2c7-r3c5-r3c6-r3c7-r4c5-r4c6-r4c7
unique-21: unique r2c8-r2c9-r2c10-r3c8-r3c9-r3c10-r4c8-r4c9-r4c10
unique-22: unique r5c2-r5c3-r5c4-r6c2-r6c3-r6c4-r7c2-r7c3-r7c4
unique-23: unique r5c5-r5c6-r5c7-r6c5-r6c6-r6c7-r7c5-r7c6-r7c7
unique-24: unique r5c8-r5c9-r5c10-r6c8-r6c9-r6c10-r7c8-r7c9-r7c10
unique-25: unique r8c2-r8c3-r8c4-r9c2-r9c3-r9c4-r10c2-r10c3-r10c4
unique-26: unique r8c5-r8c6-r8c7-r9c5-r9c6-r9c7-r10c5-r10c6-r10c7
unique-27: unique r8c8-r8c9-r8c10-r9c8-r9c9-r9c10-r10c8-r10c9-r10c10
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"5","textColor":"#FFFFFF"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"2","textColor":"#FFFFFF"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"9","textColor":"#FFFFFF"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,4],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"8","textColor":"#FFFFFF"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,0.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"1","textColor":"#FFFFFF"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"2","textColor":"#FFFFFF"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,10],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"2","textColor":"#FFFFFF"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,0.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"7","textColor":"#FFFFFF"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,2],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"2","textColor":"#FFFFFF"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,10.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"5","textColor":"#FFFFFF"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,10],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"2","textColor":"#FFFFFF"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,10.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"1","textColor":"#FFFFFF"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,10.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"1","textColor":"#FFFFFF"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"2","textColor":"#FFFFFF"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,10.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"1","textColor":"#FFFFFF"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,10.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"1","textColor":"#FFFFFF"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,7],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"1","textColor":"#FFFFFF"}}
```

• Normal Sudoku rules apply. Place the digits 1-9 once each in every row, column, and box of the main 9x9 grid without repetition.
• Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid indicate how many skyscrapers are visible looking across the row or column from the direction of the clue.
• Where digits are separated by a black dot, multiply one by the digit in the black dot to get the other.
