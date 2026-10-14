---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r1c3
format: open-rules
title: Dirty Paws
setter: Sandra & Nala
source: https://sudokupad.app/9acc2f4q4m
case: https://sudoku-sleuth.com/cases/dirty-paws
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
exported: 033c4eba7b48e88a6cf52a43b8b88900
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6 stated true
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1 stated true
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2 stated true
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 stated true
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 stated true
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5 stated true
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6 stated true
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3 stated true
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6 stated true
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3 stated true
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6 stated true
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3 stated true
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6 stated true
arrow-1: arrow r2c3-r1c2 bulb ["r2c4"]
arrow-2: arrow r3c5-r3c4 bulb ["r2c4"]
arrow-3: arrow r1c4-r1c3 bulb ["r1c5"]
arrow-4: arrow r2c2-r1c1 bulb ["r3c3"]
arrow-5: arrow r3c2-r3c1-r4c1 bulb ["r3c3"]
arrow-6: arrow r6c4-r5c3 bulb ["r5c5"]
arrow-7: arrow r4c6-r5c6 bulb ["r5c5"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.722,0.278],[5.333,0.667],[5.222,0.667]],"color":"#7f532097","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.333,0.667],[5.222,0.778]],"color":"#7f532097","thickness":4.48,"rounded":true,"layer":"over"}}
```

Today Nala came from the backyard with noticeably dirty paws. Did she dig? What was she looking for? Let’s find out together!

Normal 6x6 Sudoku rules apply: Place the digits 1-6 in every row, column and box exactly once each. 

The grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Digits along an arrow must sum to the digit in the corresponding circle. Arrows can only branch from their circles. Each arrow has its own color and arrows of the same color are connected.
