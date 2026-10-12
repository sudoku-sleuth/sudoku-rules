---
format: open-rules
title: "1: Small Differences Count"
setter: Marty Sears
source: https://sudokupad.app/7yld3jef5j
case: https://sudoku-sleuth.com/cases/1-small-differences-count
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
kropki r4c3-r4c4 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,1.643],[0.5,2.5]],"color":"#9ad6f7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.357]],"color":"#b7f68cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5],[2.5,2.5],[2.5,0.5],[3.5,0.5],[3.5,1.5]],"color":"#f8c67aff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,1.643],[1.5,2.5]],"color":"#dfb1f4ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,1.357],[0.5,0.5]],"color":"#dfb1f4ff","thickness":9.6,"rounded":true}}
```

Normal 4x4 sudoku rules apply.

• The difference between a pair of adjacent digits along a coloured line equals the number of adjacent pairs along that line that have that difference. 

• The black dot sits between two digits with a 1:2 ratio.
