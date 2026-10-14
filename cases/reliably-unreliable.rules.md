---
format: open-rules
title: Reliably unreliable
setter: sujoyku
source: https://tinyurl.com/2uf735bz
case: https://sudoku-sleuth.com/cases/reliably-unreliable
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 7
  cols: 7
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r3c1
      - r3c2
    - - r1c4
      - r1c5
      - r2c3
      - r2c4
      - r2c5
      - r3c3
      - r3c4
    - - r1c6
      - r1c7
      - r2c6
      - r2c7
      - r3c7
      - r4c6
      - r4c7
    - - r3c5
      - r3c6
      - r4c3
      - r4c4
      - r4c5
      - r5c2
      - r5c3
    - - r5c4
      - r5c5
      - r6c3
      - r6c4
      - r6c5
      - r7c3
      - r7c4
    - - r4c1
      - r4c2
      - r5c1
      - r6c1
      - r6c2
      - r7c1
      - r7c2
    - - r5c6
      - r5c7
      - r6c6
      - r6c7
      - r7c5
      - r7c6
      - r7c7
exported: fa8a86f54d3c799f634c41b7bd7af8dc
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7
unique-8: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
unique-9: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2
unique-10: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3
unique-11: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4
unique-12: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5
unique-13: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6
unique-14: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7
unique-15: unique r1c1-r1c2-r1c3-r2c1-r2c2-r3c1-r3c2
unique-16: unique r1c4-r1c5-r2c3-r2c4-r2c5-r3c3-r3c4
unique-17: unique r1c6-r1c7-r2c6-r2c7-r3c7-r4c6-r4c7
unique-18: unique r3c5-r3c6-r4c3-r4c4-r4c5-r5c2-r5c3
unique-19: unique r5c4-r5c5-r6c3-r6c4-r6c5-r7c3-r7c4
unique-20: unique r4c1-r4c2-r5c1-r6c1-r6c2-r7c1-r7c2
unique-21: unique r5c6-r5c7-r6c6-r6c7-r7c5-r7c6-r7c7
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0,1,2,7],"label":"11","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[8,14,15],"label":"6","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[40,46,47],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[33,34,41,48],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[23,29,30],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[18,19,24,25],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[3,4,10,11],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[37,38,44,45],"label":"10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[21,28,35],"label":"11","color":"#000000","labelColor":"#000000"}}
```

Normal irregular 7x7 Sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 7.
Rellik Cages: All cages are Rellik Cages. In a Rellik Cage digits do not repeat, and any combination of one or more digits within such a cage CANNOT sum to the value in the top left (e.g. a Rellik Cage with given value 6 cannot contain (1,2,3), (1,5), (2,4) or a 6).
