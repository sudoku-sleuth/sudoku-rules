---
format: open-rules
title: Mean Quartet
setter: Marty Sears
source: https://sudokupad.app/3dc006fsed
case: https://sudoku-sleuth.com/cases/mean-quartet
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
    - 9
  regions:
    - - r1c1
      - r1c2
      - r2c1
      - r2c2
    - - r1c3
      - r1c4
      - r2c3
      - r2c4
    - - r1c5
      - r1c6
      - r2c5
      - r2c6
    - - r1c7
      - r1c8
      - r2c7
      - r2c8
    - - r3c1
      - r3c2
      - r4c1
      - r4c2
    - - r3c3
      - r3c4
      - r4c3
      - r4c4
    - - r3c5
      - r3c6
      - r4c5
      - r4c6
    - - r3c7
      - r3c8
      - r4c7
      - r4c8
    - - r5c1
      - r5c2
      - r6c1
      - r6c2
    - - r5c3
      - r5c4
      - r6c3
      - r6c4
    - - r5c5
      - r5c6
      - r6c5
      - r6c6
    - - r5c7
      - r5c8
      - r6c7
      - r6c8
    - - r7c1
      - r7c2
      - r8c1
      - r8c2
    - - r7c3
      - r7c4
      - r8c3
      - r8c4
    - - r7c5
      - r7c6
      - r8c5
      - r8c6
    - - r7c7
      - r7c8
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
unique-17: unique r1c1-r1c2-r2c1-r2c2
unique-18: unique r1c3-r1c4-r2c3-r2c4
unique-19: unique r1c5-r1c6-r2c5-r2c6
unique-20: unique r1c7-r1c8-r2c7-r2c8
unique-21: unique r3c1-r3c2-r4c1-r4c2
unique-22: unique r3c3-r3c4-r4c3-r4c4
unique-23: unique r3c5-r3c6-r4c5-r4c6
unique-24: unique r3c7-r3c8-r4c7-r4c8
unique-25: unique r5c1-r5c2-r6c1-r6c2
unique-26: unique r5c3-r5c4-r6c3-r6c4
unique-27: unique r5c5-r5c6-r6c5-r6c6
unique-28: unique r5c7-r5c8-r6c7-r6c8
unique-29: unique r7c1-r7c2-r8c1-r8c2
unique-30: unique r7c3-r7c4-r8c3-r8c4
unique-31: unique r7c5-r7c6-r8c5-r8c6
unique-32: unique r7c7-r7c8-r8c7-r8c8
whispers-1: whispers r8c4-r8c5-r8c6-r7c6-r6c5-r5c6-r5c7-r5c8-r4c8 loop false gap 5
whispers-2: whispers r1c6-r1c7 loop false gap 5
renban r7c2-r6c3-r5c4-r4c5-r3c6-r2c7
region-sum-1: region-sum r6c1-r5c1-r5c2-r4c3-r3c3-r3c4-r2c5-r2c6 segments [["r6c1","r5c1","r5c2"],["r4c3","r3c3","r3c4"],["r2c5","r2c6"]]
region-sum-2: region-sum r6c2-r7c1-r8c2-r8c3-r7c4 segments [["r6c2"],["r7c1","r8c2"],["r8c3","r7c4"]]
region-sum-3: region-sum r2c8-r3c7 segments [["r2c8"],["r3c7"]]
nabner-1: nabner r6c7-r6c8 distinct true
nabner-2: nabner r3c2-r2c2-r2c3 distinct true
nabner-3: nabner r4c1-r4c2 distinct true
nabner-4: nabner r1c4-r2c4 distinct true
nabner-5: nabner r1c1-r2c1 distinct true
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1,4],[4,4],[4,8],[8,8],[8,4],[4,4]],"color":"#000000","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1,4],[0,4],[0,8],[4,8]],"color":"#000000","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4,4],[4,0],[8,0],[8,4]],"color":"#000000","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4,0],[0,0],[0,4]],"color":"#000000","thickness":9.6,"rounded":true,"layer":"over"}}
```

For each 4x4 quadrant of the grid, choose 4 of the digits from 0-9, and use them to fill that quadrant so that no digit repeats in any marked 2x2 box. In the overall 8x8 grid, no digit may repeat in any row or column.

RENBAN: Digits on the pink line form a non-repeating consecutive sequence which can appear in any order along the line.

REGION SUM: Box borders divide a blue line into segments whose digits each have the same sum.

GERMAN WHISPER: Digits along a green line have a difference of at least 5.

NABNER: No two digits anywhere on a yellow line may be consecutive or the same.
