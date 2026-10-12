---
fog:
  initiallyLit:
    - 3
    - 4
    - 5
    - 12
    - 13
    - 14
    - 21
    - 22
    - 23
format: open-rules
title: Separated in the Fog
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bps41mqn3k
case: https://sudoku-sleuth.com/cases/separated-in-the-fog
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
cage-1: cage r2c4-r3c3-r3c4 total 7 connected true
cage-2: cage r3c5-r3c6-r3c7 total 10 connected true
cage-3: cage r1c8-r2c8-r3c8 total 22 connected true
cage-4: cage r4c2-r4c3-r5c2 total 15 connected true
cage-5: cage r6c1-r6c2-r7c1 total 11 connected true
cage-6: cage r4c6-r4c7-r4c8 total 9 connected true
cage-7: cage r5c5-r5c6-r6c5 total 13 connected true
cage-8: cage r7c3-r8c3-r8c4-r8c5 total 21 connected true
cage-9: cage r8c6-r9c5-r9c6 total 9 connected true
cage-10: cage r7c7-r7c8 total 15 connected true
cage-11: cage r1c6-r2c6 total 12 connected true
cage-12: cage r1c4-r1c5 total 12 connected true
cage-13: cage r2c2-r3c2 total 14 connected true
cage-14: cage r5c3-r5c4-r6c4 total 10 connected true
nabner-1: nabner r4c3-r3c3-r2c3-r2c4 distinct true
nabner-2: nabner r1c4-r1c3-r1c2-r2c2 distinct true
nabner-3: nabner r4c2-r5c2-r6c2-r6c1 distinct true
nabner-4: nabner r4c7-r4c6-r5c6-r5c7 distinct true
nabner-5: nabner r5c5-r6c5-r7c5 distinct true
nabner-6: nabner r8c5-r8c4-r9c4 distinct true
nabner-7: nabner r7c6-r7c7-r7c8-r6c8 distinct true
nabner-8: nabner r2c7-r2c8-r2c9 distinct true
nabner-9: nabner r3c6-r3c7-r3c8-r4c8 distinct true
nabner-10: nabner r2c5-r2c6-r1c6-r1c7 distinct true
```

- Normal sudoku rules apply.
- Fog: Part of the grid is covered with fog. As correct digits are placed, the fog will clear from cells surrounding the correct digit, revealing additional clues. There is always enough information in the revealed portion of the grid to place another correct digit without guessing. Digits can be placed within the fog.
- Nabner lines: No two digits along a Nabner line can be consecutive, regardless of their position on the line. Digits may not repeat on Nabner lines.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the leftmost cell of the topmost row of the cage.
