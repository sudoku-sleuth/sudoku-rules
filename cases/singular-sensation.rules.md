---
format: open-rules
title: Singular Sensation
setter: Blobz
source: https://sudokupad.app/1jipy7xq28
case: https://sudoku-sleuth.com/cases/singular-sensation
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
  givens: r1c6=1
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
exported: ea0549c3eae2934129c4ebf70a40a641
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
cage r3c2-r4c2-r4c3 repeats false total 11 connected true
whispers-1: whispers r3c3-r2c4-r3c4-r4c4-r5c4 loop false gap 3
whispers-2: whispers r5c3-r5c4-r5c5 loop false gap 3
numbered-room-1: numbered-room r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 digit 1
numbered-room-2: numbered-room r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 digit 1
numbered-room-3: numbered-room r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 digit 1
numbered-room-4: numbered-room r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 digit 1
numbered-room-5: numbered-room r3c1-r3c2-r3c3-r3c4-r3c5-r3c6 digit 1
numbered-room-6: numbered-room r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 digit 1
```

Normal sudoku rules apply.

Whisper: Adjacent digits along the grey line must differ by at least 3.

Killer: Digits in cages must sum to the small clue in the top left corner.

Numbered rooms: clues outside the grid indicate the digit which has to be placed in the Nth cell in the corresponding direction, where N is the digit placed in the first cell in that direction.
