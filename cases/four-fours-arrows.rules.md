---
format: open-rules
title: Four Fours - Arrows
setter: Sir Moose
source: https://sudokupad.app/qmwp8wratb
case: https://sudoku-sleuth.com/cases/four-fours-arrows
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
exported: 3507d9e8256553504fc18f13586485cc
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
arrow-1: arrow r7c7-r6c7-r5c7 bulb ["r7c6"]
arrow-2: arrow r3c7-r2c8 bulb ["r3c6"]
arrow-3: arrow r4c3-r3c2 bulb ["r3c4"]
arrow-4: arrow r5c4-r5c5 bulb ["r6c3"]
negative relations [{"op":"difference","value":1}] except []
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0,4],[8,4]],"color":"#000000","thickness":14.08,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4,8],[4,0]],"color":"#000000","thickness":14.08,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[-0.125,3.875],[-0.125,8.125],[8.125,8.125],[8.125,-0.125],[-0.125,-0.125],[-0.125,3.875]],"color":"#000000","thickness":14.08,"rounded":true,"layer":"over"}}
```

Place the digits 1-8 once each in every row and column.

This sudoku grid is made up of four 4x4 sudokus, each made up from exactly four of the digits 1-8.  In each 4x4 sudoku, digits cannot repeat in anyrow, column, or 2x2 box.

Orthogonally adjacent digits cannot be consecutive.

Digits along an arrow sum to the digit in that arrow's circle.
