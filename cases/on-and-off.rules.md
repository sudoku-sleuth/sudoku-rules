---
format: open-rules
title: On and off
setter: sujoyku
source: https://tinyurl.com/bddw9sdx
case: https://sudoku-sleuth.com/cases/on-and-off
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 8
  cols: 8
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
    - - r1c5
      - r1c6
      - r1c7
      - r1c8
      - r2c7
      - r2c8
      - r3c8
      - r4c8
    - - r1c4
      - r2c4
      - r3c3
      - r3c4
      - r4c1
      - r4c2
      - r4c3
      - r5c3
    - - r2c5
      - r2c6
      - r3c5
      - r3c6
      - r3c7
      - r4c5
      - r4c6
      - r4c7
    - - r4c4
      - r5c2
      - r5c4
      - r5c5
      - r6c2
      - r6c3
      - r6c4
      - r7c3
    - - r5c6
      - r5c7
      - r5c8
      - r6c5
      - r6c6
      - r7c4
      - r7c5
      - r8c5
    - - r5c1
      - r6c1
      - r7c1
      - r7c2
      - r8c1
      - r8c2
      - r8c3
      - r8c4
    - - r6c7
      - r6c8
      - r7c6
      - r7c7
      - r7c8
      - r8c6
      - r8c7
      - r8c8
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
unique-17: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2
unique-18: unique r1c5-r1c6-r1c7-r1c8-r2c7-r2c8-r3c8-r4c8
unique-19: unique r1c4-r2c4-r3c3-r3c4-r4c1-r4c2-r4c3-r5c3
unique-20: unique r2c5-r2c6-r3c5-r3c6-r3c7-r4c5-r4c6-r4c7
unique-21: unique r4c4-r5c2-r5c4-r5c5-r6c2-r6c3-r6c4-r7c3
unique-22: unique r5c6-r5c7-r5c8-r6c5-r6c6-r7c4-r7c5-r8c5
unique-23: unique r5c1-r6c1-r7c1-r7c2-r8c1-r8c2-r8c3-r8c4
unique-24: unique r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8
whispers-1: whispers r8c1-r8c2-r8c3-r8c4 loop false gap 4
whispers-2: whispers r1c5-r1c6-r1c7-r1c8 loop false gap 4
nabner-1: nabner r2c1-r1c1-r1c2-r1c3 distinct true
nabner-2: nabner r8c6-r8c7-r8c8-r7c8 distinct true
nabner-3: nabner r5c2-r6c2-r6c3-r7c3 distinct true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[9,10,16,17],"label":"4","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[46,47,53,54],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[37,38,39,45],"label":"4","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[44,51,52,60],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[27,35,36,43],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[20,28,29,30],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[12,13,21,22],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[40,48,49],"label":"10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[14,15,23],"label":"9","color":"#000000","labelColor":"#000000"}}
```

Normal irregular 8x8 Sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 8. All cages are Rellik Cages. In a Rellik Cage digits do not repeat, and any combination of one or more digits within that cage CANNOT sum to the value in the top left.The golden lines are Nabner lines, i.e. on a golden line there may not be consecutive or repeated digits. Adjacent digits on a green line must differ by at least 4.
