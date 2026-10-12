---
format: open-rules
title: Lying right to your face
setter: sujoyku
source: ""
case: https://sudoku-sleuth.com/cases/lying-right-to-your-face
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
      - r1c4
      - r2c1
      - r2c4
    - - r1c5
      - r1c6
      - r2c6
      - r3c6
      - r4c5
      - r4c6
    - - r2c2
      - r2c3
      - r3c3
      - r4c2
      - r4c3
      - r5c2
    - - r2c5
      - r3c4
      - r3c5
      - r4c4
      - r5c4
      - r5c5
    - - r3c1
      - r3c2
      - r4c1
      - r5c1
      - r6c1
      - r6c2
    - - r5c3
      - r5c6
      - r6c3
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
unique-13: unique r1c1-r1c2-r1c3-r1c4-r2c1-r2c4
unique-14: unique r1c5-r1c6-r2c6-r3c6-r4c5-r4c6
unique-15: unique r2c2-r2c3-r3c3-r4c2-r4c3-r5c2
unique-16: unique r2c5-r3c4-r3c5-r4c4-r5c4-r5c5
unique-17: unique r3c1-r3c2-r4c1-r5c1-r6c1-r6c2
unique-18: unique r5c3-r5c6-r6c3-r6c4-r6c5-r6c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0,1,6],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[2,3,9],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[12,13,18],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[24,30,31],"label":"4","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[26,32,33],"label":"6","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[29,34,35],"label":"3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[4,5,11],"label":"10","color":"#000000","labelColor":"#000000"}}
```

Normal irregular 6x6 Sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 6. Rellik Cages: All cages are Rellik Cages. In a Rellik Cage digits do not repeat, and any combination of one or more digits within that cage CANNOT sum to the value in the top left.
