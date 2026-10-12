---
fog:
  initiallyLit:
    - 18
    - 19
    - 20
    - 21
    - 26
    - 27
    - 28
    - 29
    - 34
    - 35
    - 36
    - 37
    - 42
    - 43
    - 44
    - 45
format: open-rules
title: Four Parity 4x4s
setter: Sir Moose
source: https://sudokupad.app/eib2jg1na4
case: https://sudoku-sleuth.com/cases/four-parity-4x4s
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
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8 stated true
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8 stated true
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8 stated true
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1 stated true
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2 stated true
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3 stated true
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4 stated true
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5 stated true
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6 stated true
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7 stated true
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8 stated true
unique-17: unique r1c1-r1c2-r2c1-r2c2 stated true
unique-18: unique r1c3-r1c4-r2c3-r2c4 stated true
unique-19: unique r1c5-r1c6-r2c5-r2c6 stated true
unique-20: unique r1c7-r1c8-r2c7-r2c8 stated true
unique-21: unique r3c1-r3c2-r4c1-r4c2 stated true
unique-22: unique r3c3-r3c4-r4c3-r4c4 stated true
unique-23: unique r3c5-r3c6-r4c5-r4c6 stated true
unique-24: unique r3c7-r3c8-r4c7-r4c8 stated true
unique-25: unique r5c1-r5c2-r6c1-r6c2 stated true
unique-26: unique r5c3-r5c4-r6c3-r6c4 stated true
unique-27: unique r5c5-r5c6-r6c5-r6c6 stated true
unique-28: unique r5c7-r5c8-r6c7-r6c8 stated true
unique-29: unique r7c1-r7c2-r8c1-r8c2 stated true
unique-30: unique r7c3-r7c4-r8c3-r8c4 stated true
unique-31: unique r7c5-r7c6-r8c5-r8c6 stated true
unique-32: unique r7c7-r7c8-r8c7-r8c8 stated true
kropki r4c3-r4c4 colour "black"
arrow-1: arrow r6c6-r6c5-r5c6 bulb ["r7c7"]
arrow-2: arrow r8c4-r8c5-r7c5 bulb ["r8c3"]
arrow-3: arrow r1c5-r1c4-r1c3 bulb ["r1c6"]
arrow-4: arrow r5c3-r6c2 bulb ["r6c4"]
arrow-5: arrow r4c7-r5c7 bulb ["r3c8"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0,5],[0,8],[8,8],[8,4],[4,4],[4,8]],"color":"#f66f","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[4,4],[4,0],[8,0],[8,4]],"color":"#f66f","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4,0],[0,0],[0,4]],"color":"#f66f","thickness":9.6,"rounded":true,"layer":"over"}}
```

Normal sudoku rules do not apply.

Place the digits 1-8 in each row and column with no repeats

The 8x8 sudoku is made up of 4 separate 4x4 sudoku separated in red lines.  Each 4x4 sudoku is made up of exactly 4 of the digits 1-8 placed once in each row, column, and 2x2 region.

Even digits may not be orthogonally adjacent to another even digit.

Digits along an arrow sum to the digit in that arrow's circle.

Digits separated by a black dot are in a 1:2 ratio. Not all dots are given.

The grid is partially covered by fog. Placing correct digits will clear surrounding fog.
