---
fog:
  initiallyLit:
    - r1c1
    - r1c2
  links:
    - trigger:
        - r1c9
      lights:
        - r2c2
        - r2c3
        - r3c2
        - r3c3
    - trigger:
        - r1c3
      lights:
        - r1c3
        - r1c4
        - r1c5
        - r1c6
        - r1c7
        - r1c8
        - r2c7
        - r2c8
    - trigger:
        - r2c1
      lights:
        - r7c7
        - r7c8
        - r8c7
        - r8c8
        - r9c8
        - r9c9
    - trigger:
        - r9c7
      lights:
        - r9c5
        - r9c6
    - trigger:
        - r9c5
      lights:
        - r8c2
        - r9c2
    - trigger:
        - r7c9
      lights:
        - r4c4
        - r4c5
        - r5c4
        - r5c5
    - trigger:
        - r2c6
      lights:
        - r6c5
        - r6c6
    - trigger:
        - r3c5
      lights:
        - r4c7
        - r5c7
        - r6c7
        - r6c8
    - trigger:
        - r6c8
      lights:
        - r2c5
        - r3c5
    - trigger:
        - r2c5
      lights:
        - r5c3
        - r6c3
        - r7c3
        - r7c4
        - r7c5
    - trigger:
        - r5c3
      lights:
        - r1c9
        - r2c9
        - r3c7
        - r3c8
        - r3c9
    - trigger:
        - r6c3
      lights:
        - r4c8
        - r4c9
        - r5c8
        - r5c9
        - r6c9
    - trigger:
        - r7c3
      lights:
        - r7c9
        - r8c9
        - r9c7
    - trigger:
        - r7c4
      lights:
        - r7c6
        - r8c4
        - r8c5
        - r8c6
        - r9c4
    - trigger:
        - r7c5
      lights:
        - r8c3
        - r9c3
        - r7c1
        - r7c2
        - r8c1
        - r9c1
    - trigger:
        - r5c6
      lights:
        - r4c6
        - r5c6
        - r6c4
    - trigger:
        - r4c6
      lights:
        - r2c6
        - r3c6
        - r2c4
        - r3c4
    - trigger:
        - r5c1
      lights:
        - r4c1
        - r4c2
        - r4c3
        - r5c1
        - r5c2
        - r6c1
        - r6c2
    - trigger:
        - r6c1
      lights:
        - r2c1
        - r3c1
format: open-rules
title: Foggy birthday, James!
setter: Timotab
source: https://sudokupad.app/0u51y386jt
case: https://sudoku-sleuth.com/cases/foggy-birthday-james
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
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
exported: 1d1dfe7994e495d5263b4117132bcba7
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
cage-1: cage r1c1-r1c2 total 11 connected true
cage-2: cage r2c2-r2c3-r3c2-r3c3 total 26 connected true
cage-3: cage r1c3-r1c4 total 11 connected true
cage-4: cage r1c5-r1c6 total 11 connected true
cage-5: cage r1c7-r1c8-r2c7-r2c8 total 26 connected true
cage-6: cage r7c7-r7c8-r8c7-r8c8 total 26 connected true
cage-7: cage r9c8-r9c9 total 11 connected true
cage-8: cage r4c4-r4c5-r5c4-r5c5 total 11 connected true
cage-9: cage r6c5-r6c6 total 11 connected true
cage-10: cage r4c7-r5c7-r6c7-r6c8 total 11 connected true
cage-11: cage r5c3-r6c3-r7c3-r7c4-r7c5 total 26 connected true
kropki-1: kropki r1c1-r1c2 white
kropki-2: kropki r3c1-r3c2 white
kropki-3: kropki r9c4-r9c5 white
kropki-4: kropki r2c5-r3c5 white
kropki-5: kropki r7c4-r7c5 white
kropki-6: kropki r1c2-r1c3 black
kropki-7: kropki r9c6-r9c7 black
kropki-8: kropki r9c5-r9c6 black
kropki-9: kropki r8c2-r9c2 black
```

• Normal Sudoku rules apply.
• Dynamic Fog: Most of the grid is covered in fog. Placing a correct digit may do nothing, or it may clear some fog somewhere in the grid, possibly revealing other clues. No guessing is necessary. When the puzzle is complete, all fog will be cleared. 
• Killer cages: Digits in cages do not repeat and sum to the total in the top left corner of the cage.
• Kropki: Digits separated by a white dot are consecutive. Where digits are separated by a black dot, one is double the other. Not all dots are necessarily given.
