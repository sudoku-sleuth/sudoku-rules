---
format: open-rules
title: Oil and Water Mini
setter: Blobz
source: https://sudokupad.app/blobz/oil-and-water-mini
case: https://sudoku-sleuth.com/cases/oil-and-water-mini
library: https://rules.sudoku-sleuth.com/
status: read
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
exported: e5e9e017b65355e0293dd499b28a6a69
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
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
cage-1: cage r1c1-r2c1 repeats false total 3 connected true
cage-2: cage r3c1-r4c1 repeats false connected true
cage-3: cage r5c1-r5c2-r6c2-r6c3 repeats false total 16 connected true
cage-4: cage r4c4-r5c3-r5c4 repeats false total 10 connected true
cage-5: cage r5c5-r6c4-r6c5 repeats false connected true
cage-6: cage r4c6-r5c6-r6c6 repeats false total 10 connected true
cage-7: cage r1c5-r1c6-r2c5-r3c5 repeats false connected true
cage-8: cage r2c3-r2c4-r3c4 repeats false total 11 connected true
cage-9: cage r1c3-r1c4 repeats false total 6 connected true
cage-10: cage r2c2-r3c2-r4c2 repeats false connected true
layered-cage-1: layered-cage r1c1-r2c1 upper [2,4,6]
layered-cage-2: layered-cage r3c1-r4c1 upper [2,4,6]
layered-cage-3: layered-cage r5c1-r5c2-r6c2-r6c3 upper [2,4,6]
layered-cage-4: layered-cage r4c4-r5c3-r5c4 upper [2,4,6]
layered-cage-5: layered-cage r5c5-r6c4-r6c5 upper [2,4,6]
layered-cage-6: layered-cage r4c6-r5c6-r6c6 upper [2,4,6]
layered-cage-7: layered-cage r1c5-r1c6-r2c5-r3c5 upper [2,4,6]
layered-cage-8: layered-cage r2c3-r2c4-r3c4 upper [2,4,6]
layered-cage-9: layered-cage r1c3-r1c4 upper [2,4,6]
layered-cage-10: layered-cage r2c2-r3c2-r4c2 upper [2,4,6]
```

Normal 6x6 sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits in cages must sum to the small clue, if given.
