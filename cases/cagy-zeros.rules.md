---
format: open-rules
title: Cagy Zeros
setter: The Bard
source: ""
case: https://sudoku-sleuth.com/cases/cagy-zeros
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 9
  cols: 9
  symbols:
    - 0
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
exported: 2672f81395e1b83da338d4aa90e76685
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
cage-1: cage r1c1-r1c2-r1c3-r1c4 repeats false total 6 connected true
cage-2: cage r1c5-r1c6-r1c7 repeats false total 24 connected true
cage-3: cage r1c8-r1c9 repeats false total 11 connected true
cage-4: cage r2c1-r3c1-r3c2 repeats false total 23 connected true
cage-5: cage r2c4-r2c5-r2c6 repeats false total 13 connected true
cage-6: cage r3c3-r3c4 repeats false total 9 connected true
cage-7: cage r2c2-r2c3 repeats false total 10 connected true
cage-8: cage r3c5-r3c6 repeats false total 1 connected true
cage-9: cage r2c7-r2c8-r2c9-r3c9 repeats false total 7 connected true
cage-10: cage r3c7-r3c8 repeats false total 16 connected true
cage-11: cage r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 repeats false total 24 connected true
cage-12: cage r4c7-r4c8 repeats false total 4 connected true
cage-13: cage r5c7-r6c7 repeats false total 9 connected true
cage-14: cage r7c8-r8c8-r9c8 repeats false total 23 connected true
cage-15: cage r7c7-r8c7-r9c7 repeats false total 16 connected true
cage-16: cage r5c8-r6c8 repeats false total 3 connected true
cage-17: cage r6c6-r7c6 repeats false total 15 connected true
cage-18: cage r4c6-r5c6 repeats false total 2 connected true
cage-19: cage r4c4-r4c5 repeats false total 4 connected true
cage-20: cage r4c2-r5c2-r6c2 repeats false total 24 connected true
cage-21: cage r5c1-r6c1 repeats false total 6 connected true
cage-22: cage r7c1-r8c1 repeats false total 13 connected true
cage-23: cage r9c1-r9c2 repeats false total 4 connected true
cage-24: cage r8c3-r9c3 repeats false total 13 connected true
cage-25: cage r6c3-r7c3 repeats false total 1 connected true
cage-26: cage r5c3-r5c4 repeats false total 10 connected true
cage-27: cage r6c4-r7c4 repeats false total 10 connected true
cage-28: cage r6c5-r7c5 repeats false total 7 connected true
cage-29: cage r8c4-r8c5 repeats false total 9 connected true
cage-30: cage r9c4-r9c5-r9c6 repeats false total 24 connected true
cage-31: cage r7c2-r8c2 repeats false total 7 connected true
```

Extended Sudoku rules apply, place the digits 0-9 in each row, column, and box, however there will be one digit in each that does not fit. This digit can vary between rows, columns, and boxes and needs to be determined by the solver.
Killer cages: Digits in cages add up to the total in the corner.
