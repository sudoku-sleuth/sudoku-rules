---
format: open-rules
title: Medieval Skirmish
setter: FastSandals
source: https://sudokupad.app/fd15s77dvq
case: https://sudoku-sleuth.com/cases/medieval-skirmish
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
board:
  rows: 4
  cols: 4
  symbols:
    - 1
    - 2
    - 3
    - 4
  regions:
    - - r1c1
      - r1c2
      - r2c1
      - r2c2
    - - r1c3
      - r1c4
      - r2c3
      - r2c4
    - - r3c1
      - r3c2
      - r4c1
      - r4c2
    - - r3c3
      - r3c4
      - r4c3
      - r4c4
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4
unique-2: unique r2c1-r2c2-r2c3-r2c4
unique-3: unique r3c1-r3c2-r3c3-r3c4
unique-4: unique r4c1-r4c2-r4c3-r4c4
unique-5: unique r1c1-r2c1-r3c1-r4c1
unique-6: unique r1c2-r2c2-r3c2-r4c2
unique-7: unique r1c3-r2c3-r3c3-r4c3
unique-8: unique r1c4-r2c4-r3c4-r4c4
unique-9: unique r1c1-r1c2-r2c1-r2c2
unique-10: unique r1c3-r1c4-r2c3-r2c4
unique-11: unique r3c1-r3c2-r4c1-r4c2
unique-12: unique r3c3-r3c4-r4c3-r4c4
arrow-1: arrow r1c2-r1c3-r2c4 bulb ["r1c1"]
arrow-2: arrow r3c1-r2c1 bulb ["r4c1"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.38,1.11],[2.5,1.06],[2.62,1.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.62,1.89],[2.5,1.94],[2.38,1.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.11,1.62],[2.06,1.5],[2.11,1.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.89,1.38],[2.94,1.5],[2.89,1.62]],"color":"#000000","thickness":2,"rounded":true}}
```

• Normal 4x4 sudoku rules apply
• Grey cells are Fortress cells. Digits in a Fortress cell must be larger than the digits in all non-Fortess cells that are orthogonally adjacent to it. 
• Digits on an arrow must sum to the value in the attached circle.
