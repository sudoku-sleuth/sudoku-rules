---
fog:
  initiallyLit:
    - 6
    - 7
    - 8
    - 12
    - 13
    - 14
format: open-rules
title: Hmm...??????
setter: Kennet's Dad
source: https://sudokupad.app/12qbqoksm1
case: https://sudoku-sleuth.com/cases/hmm
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
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6 stated true
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1 stated true
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2 stated true
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 stated true
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 stated true
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5 stated true
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6 stated true
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3 stated true
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6 stated true
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3 stated true
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6 stated true
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3 stated true
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6 stated true
pair r3c3-r3c4 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,4.5],[2.5,5.5],[4.5,5.5],[4.5,1.5],[5.5,0.5]],"color":"#e6261fff","thickness":4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.75,1.25],[1.75,1.75],[2.25,2.25],[2.25,0.75],[1.75,1.25]],"color":"#e6261fff","thickness":4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[2.5,2.5],[1.5,2.5],[1.5,0.5]],"color":"#e6261fff","thickness":4,"rounded":true}}
```

Fog of War, Garden Path Lines, X/V pairs

Normal sudoku rules apply. The grid is partially covered in fog; placing a correct digit will remove the fog surrounding that digit. Box borders divide lines into segments with different sums, where one sum will be double the other. Digits in cells joined by a V sum to 5.
