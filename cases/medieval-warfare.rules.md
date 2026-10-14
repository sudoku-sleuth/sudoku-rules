---
format: open-rules
title: Medieval Warfare
setter: FastSandals
source: https://sudokupad.app/d2b7268vcx
case: https://sudoku-sleuth.com/cases/medieval-warfare
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
exported: 3344fe33501576302b9ce28695c77a53
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
arrow-1: arrow r2c2-r2c3-r1c4 bulb ["r3c1"]
arrow-2: arrow r3c6-r4c6 bulb ["r2c5"]
arrow-3: arrow r6c5-r5c5-r4c4 bulb ["r6c6"]
arrow-4: arrow r5c3-r4c2 bulb ["r4c3"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.38,2.11],[1.5,2.06],[1.62,2.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.11,2.62],[1.06,2.5],[1.11,2.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.89,2.38],[1.94,2.5],[1.89,2.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.62,3.89],[1.5,3.94],[1.38,3.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.11,3.62],[1.06,3.5],[1.11,3.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.89,3.38],[1.94,3.5],[1.89,3.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.38,5.11],[4.5,5.06],[4.62,5.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.11,5.62],[4.06,5.5],[4.11,5.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.89,5.38],[4.94,5.5],[4.89,5.62]],"color":"#000000","thickness":1.92,"rounded":true}}
```

• Normal 6x6 Sudoku rules apply
• Grey cells are Fortress cells. Digits in a Fortress cell must be larger than the digits in all non-Fortess cells that are orthogonally adjacent to it. 
• Digits on an arrow must sum to the value in the attached circle.
