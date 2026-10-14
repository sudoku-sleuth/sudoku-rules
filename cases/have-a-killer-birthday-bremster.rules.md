---
fog:
  initiallyLit:
    - r2c1
    - r2c2
  links:
    - trigger:
        - r1c2
      lights:
        - r2c3
        - r2c4
        - r2c5
    - trigger:
        - r2c6
      lights:
        - r3c1
    - trigger:
        - r3c1
      lights:
        - r5c2
        - r6c2
    - trigger:
        - r6c2
      lights:
        - r6c4
    - trigger:
        - r6c4
      lights:
        - r3c5
        - r3c6
    - trigger:
        - r4c2
      lights:
        - r4c1
        - r5c1
        - r6c1
    - trigger:
        - r1c1
      lights:
        - r5c6
    - trigger:
        - r5c4
      lights:
        - r1c5
        - r1c6
        - r2c6
    - trigger:
        - r1c4
      lights:
        - r3c2
        - r3c3
        - r1c1
        - r1c2
        - r1c3
        - r1c4
        - r6c5
        - r6c6
        - r3c4
        - r5c4
    - trigger:
        - r4c6
      lights:
        - r4c2
    - trigger:
        - r2c3
      lights:
        - r4c4
    - trigger:
        - r5c3
      lights:
        - r4c3
        - r5c3
        - r6c3
    - trigger:
        - r6c5
      lights:
        - r4c5
        - r4c6
        - r5c5
format: open-rules
title: Have a Killer Birthday, BremSter!
setter: Timotab
source: https://sudokupad.app/ipdvqwmtm3
case: https://sudoku-sleuth.com/cases/have-a-killer-birthday-bremster
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
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
exported: e77ab819655cc2a0e79a555cb46cda8b
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
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-15: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-16: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
cage-1: cage r2c1-r2c2 repeats false connected true
cage-2: cage r2c3-r2c4-r2c5-r2c6 repeats false connected true
cage-3: cage r5c2-r6c2 repeats false connected true
cage-4: cage r3c4-r4c4-r4c5 repeats false connected true
cage-5: cage r4c1-r4c2-r5c1 repeats false connected true
cage-6: cage r4c3-r5c3-r6c3 repeats false connected true
cage-7: cage r5c6-r6c6 repeats false connected true
renban-1: renban r2c1-r2c2-r1c2
renban-2: renban r1c5-r1c6-r2c6
renban-3: renban r2c5-r2c4-r3c4
renban-4: renban r6c4-r6c5-r6c6
renban-5: renban r3c1-r3c2-r4c2
renban-6: renban r4c2-r5c2-r5c3
renban-7: renban r5c5-r4c5-r4c6-r3c6-r3c5
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[12]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[33]}}
```

• Normal Quattroquadri rules apply: Place the digits 1-9 in each 3x3 box so they do not repeat in any box, row, or column.
• Dynamic Fog: Most of the grid is covered in fog. Placing a correct digit may do nothing, or it may clear some fog somewhere in the grid, possibly revealing other clues. No guessing is necessary. When the puzzle is complete, all fog will be cleared.
• Killer Birthday Cages: Digits in cages do not repeat, and sum to either 1 or 12. The solver must determine the sum of each cage.
• Renban: Digits on a pink line form a consecutive set of digits in any order. All renban lines move orthogonally and are 3 cells long.
