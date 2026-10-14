---
format: open-rules
title: Half Dozen
setter: Blobz
source: https://sudokupad.app/gwact7a3av
case: https://sudoku-sleuth.com/cases/half-dozen
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
exported: 96c5b70375234a4b5506cf3389dfbc7b
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
cage-1: cage r3c6-r4c6 repeats false total 6 connected true
cage-2: cage r4c1-r5c1 repeats false total 6 connected true
cage-3: cage r4c3-r5c3 repeats false total 6 connected true
whispers-1: whispers r2c5-r1c4-r1c3-r2c2-r3c2-r4c2-r5c2-r6c3-r6c4-r5c5-r4c5-r3c4-r3c3 loop false gap 3
whispers-2: whispers r3c3-r4c2 loop false gap 3
x-sum-1: x-sum r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 6
x-sum-2: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 sum 6
x-sum-3: x-sum r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 6
```

Normal sudoku rules apply.

Whisper: Adjacent digits along the grey line must differ by at least 3.

Killer: Digits in cages must sum to the small clue in the top left corner.

X-Sum: Clues outside the grid give the sum of the first X digits placed in the corresponding direction, where X is the first digit in that row or column.
