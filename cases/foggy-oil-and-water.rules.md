---
fog:
  initiallyLit:
    - r4c5
    - r5c4
    - r5c5
    - r5c6
    - r6c5
format: open-rules
title: Foggy Oil and Water
setter: Blobz
source: https://sudokupad.app/blobz/foggy-oil-water
case: https://sudoku-sleuth.com/cases/foggy-oil-and-water
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 9
  cols: 9
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
  givens: r6c5=3
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
exported: 3463b7ca752d1a8f36c319c28ccc97d2
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r1c4-r1c5-r2c5 total 11 connected true
cage-2: cage r2c3-r2c4 total 10 connected true
cage-3: cage r3c2-r3c3-r4c2 total 23 connected true
cage-4: cage r1c8-r2c8-r3c8 total 15 connected true
cage-5: cage r3c9-r4c9 total 11 connected true
cage-6: cage r4c8-r5c8-r6c8-r7c7-r7c8 total 25 connected true
cage-7: cage r4c6-r4c7 total 6 connected true
cage-8: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 32 connected true
cage-9: cage r7c4-r7c5-r8c4 total 18 connected true
cage-10: cage r8c5-r9c4-r9c5 total 18 connected true
cage-11: cage r8c7-r9c7 total 14 connected true
cage-12: cage r9c1-r9c2 total 10 connected true
cage-13: cage r6c2-r7c1-r7c2-r8c1 total 24 connected true
cage-14: cage r4c3-r5c1-r5c2-r5c3-r6c1 total 21 connected true
cage-15: cage r2c6-r3c4-r3c5-r3c6-r4c4 connected true
cage-16: cage r6c6-r7c6 total 11 connected true
layered-cage-1: layered-cage r1c4-r1c5-r2c5 upper [2,4,6,8]
layered-cage-2: layered-cage r2c3-r2c4 upper [2,4,6,8]
layered-cage-3: layered-cage r3c2-r3c3-r4c2 upper [2,4,6,8]
layered-cage-4: layered-cage r1c8-r2c8-r3c8 upper [2,4,6,8]
layered-cage-5: layered-cage r3c9-r4c9 upper [2,4,6,8]
layered-cage-6: layered-cage r4c8-r5c8-r6c8-r7c7-r7c8 upper [2,4,6,8]
layered-cage-7: layered-cage r4c6-r4c7 upper [2,4,6,8]
layered-cage-8: layered-cage r4c5-r5c4-r5c5-r5c6-r6c5 upper [2,4,6,8]
layered-cage-9: layered-cage r7c4-r7c5-r8c4 upper [2,4,6,8]
layered-cage-10: layered-cage r8c5-r9c4-r9c5 upper [2,4,6,8]
layered-cage-11: layered-cage r8c7-r9c7 upper [2,4,6,8]
layered-cage-12: layered-cage r9c1-r9c2 upper [2,4,6,8]
layered-cage-13: layered-cage r6c2-r7c1-r7c2-r8c1 upper [2,4,6,8]
layered-cage-14: layered-cage r4c3-r5c1-r5c2-r5c3-r6c1 upper [2,4,6,8]
layered-cage-15: layered-cage r2c6-r3c4-r3c5-r3c6-r4c4 upper [2,4,6,8]
layered-cage-16: layered-cage r6c6-r7c6 upper [2,4,6,8]
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits in cages must sum to the small clue, if given.

The grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
