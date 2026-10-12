---
format: open-rules
title: Four Fours
setter: Sir Moose
source: https://sudokupad.app/l1hh1hb3oe
case: https://sudoku-sleuth.com/cases/four-fours
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
    - - r5c7
      - r5c8
      - r6c7
      - r6c8
    - - r5c5
      - r5c6
      - r6c5
      - r6c6
    - - r5c3
      - r5c4
      - r6c3
      - r6c4
    - - r5c1
      - r5c2
      - r6c1
      - r6c2
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
unique-25: unique r5c7-r5c8-r6c7-r6c8
unique-26: unique r5c5-r5c6-r6c5-r6c6
unique-27: unique r5c3-r5c4-r6c3-r6c4
unique-28: unique r5c1-r5c2-r6c1-r6c2
unique-29: unique r7c1-r7c2-r8c1-r8c2
unique-30: unique r7c3-r7c4-r8c3-r8c4
unique-31: unique r7c5-r7c6-r8c5-r8c6
unique-32: unique r7c7-r7c8-r8c7-r8c8
arrow-1: arrow r8c2-r7c2 bulb ["r7c3"]
arrow-2: arrow r8c4-r7c4-r6c3-r5c3 bulb ["r8c3"]
arrow-3: arrow r4c6-r3c7-r2c8-r3c8 bulb ["r3c6"]
arrow-4: arrow r1c8-r2c7 bulb ["r1c7"]
arrow-5: arrow r2c6 bulb ["r1c7"]
whispers-1: whispers r2c1-r2c2-r3c3-r2c4 loop false gap 5
whispers-2: whispers r3c2-r4c3-r5c2 loop false gap 5
whispers-3: whispers r7c6-r8c5 loop false gap 5
whispers-4: whispers r5c8-r6c7 loop false gap 5
region-sum r6c5-r6c6-r7c7-r8c6-r6c8 segments [["r6c5","r6c6"],["r7c7"],["r8c6"],["r6c8"]]
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8,2],[8,8],[4,8],[4,0],[8,0],[8,2]],"color":"#000000","thickness":13,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8,4],[0,4],[0,0],[4,0]],"color":"#000000","thickness":13,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4,8],[0,8],[0,4]],"color":"#000000","thickness":13,"rounded":true,"layer":"over"}}
```

The puzzle grid is made up of four 4*4 sudokus. In each sudoku, enter 4 of the digits 1-9 in each row, column, and 2*2 region. Digits cannot repeat in any row or column in the 8*8 sudoku grid.

Digits on an arrow sum to the number on that arrows circle.

Digits on a green German Whisper line must differ by at least 5.

Digits on a blue region sum line have the same sum in each 2*2 box it passes through.
