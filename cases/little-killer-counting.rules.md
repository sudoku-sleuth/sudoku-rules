---
format: open-rules
title: Little Killer Counting
setter: Marty Sears
source: https://sudokupad.app/bha9cza16q
case: https://sudoku-sleuth.com/cases/little-killer-counting
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
little-killer-1: little-killer r6c3-r5c2-r4c1 sum 8
little-killer-2: little-killer r3c6-r2c5-r1c4 sum 9
little-killer-3: little-killer r2c6-r1c5 sum 7
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0,"height":1.019,"rounded":true,"thickness":0,"angle":0,"text":"?","textColor":"#FFFFFF","fontSize":38.8}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0,"height":1.019,"rounded":true,"thickness":0,"angle":0,"text":"?","textColor":"#FFFFFF","fontSize":38.8}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0,"height":1.019,"rounded":true,"thickness":0,"angle":0,"text":"?","textColor":"#FFFFFF","fontSize":38.8}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0,"height":1.019,"rounded":true,"thickness":0,"angle":0,"text":"?","textColor":"#FFFFFF","fontSize":38.8}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.266,2.266],[6.068,2.068]],"color":"#579affff","thickness":2,"headLength":0.14,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.266,6.266],[5.068,6.068]],"color":"#579affff","thickness":2,"headLength":0.14,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.266,6.266],[4.068,6.068]],"color":"#579affff","thickness":2,"headLength":0.14,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.266,-0.266],[2.068,-0.068]],"color":"#579affff","thickness":2,"headLength":0.14,"rounded":true}}
```

Normal 6x6 sudoku rules apply.

Digits along a diagonal marked by an arrow sum to the digit on the arrow, if one is given.

Any digit along an 'arrow diagonal' indicates exactly how many arrow diagonals contain that digit.

Eg: if there is a digit 3 somewhere along an arrow diagonal, then exactly 3 arrow diagonals contain at least one 3.
