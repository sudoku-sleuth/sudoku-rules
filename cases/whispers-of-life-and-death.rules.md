---
format: open-rules
title: Whispers of Life and Death
setter: gUBBLOR
source: https://sudokupad.app/f7bce626rl
case: https://sudoku-sleuth.com/cases/whispers-of-life-and-death
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading does not yet cover all the puzzle's stated conditions.
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
---

```rules

```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[0.5,2.5],[2.5,2.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,1.5],[4.5,2.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,0.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,5.5],[2.5,4.5],[1.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
```

"Normal" Schrödinger 6x6 rules apply. Place the digits 0-6 once each in every row, column, and box. To fit all digits, each row, column and box must have a Schrödinger cell, which contains 2 of the digits. No two Schrödinger cells are identical. The value of a Schrödinger cell is the sum of digits.

9x9 German Whispers: Adjacent VALUES along each German Whisper line must have a difference of at least 5, and may only contain VALUES 1-4 + 6-9. Both digits and values may repeat on the line.
