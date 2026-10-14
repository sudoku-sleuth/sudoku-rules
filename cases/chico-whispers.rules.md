---
format: open-rules
title: Chico Whispers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ie9trpnn25
case: https://sudoku-sleuth.com/cases/chico-whispers
library: https://rules.sudoku-sleuth.com/
status: read
exported: 83d7d86b529e5ea3dbd4628a94c84713
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 9 connected true
cage-2: cage r8c8-r8c9-r9c8 total 21 connected true
cage-3: cage r4c4-r4c5-r5c4 total 20 connected true
cage-4: cage r7c2-r7c3-r8c3 total 20 connected true
cage-5: cage r2c7-r3c7-r3c8 total 11 connected true
cage-6: cage r5c6-r6c5-r6c6 total 10 connected true
cage-7: cage r1c5-r2c5-r3c5 total 12 connected true
whispers-1: whispers r3c3-r2c3-r2c4-r3c4-r4c4-r4c3-r4c2-r3c2-r2c2 gap 5
whispers-2: whispers r7c7-r8c7-r8c6-r7c6-r6c6-r6c7-r6c8-r7c8-r8c8 gap 5
whispers-3: whispers r7c2-r7c1-r8c1-r9c1-r9c2-r9c3-r8c3 gap 5
whispers-4: whispers r2c7-r1c7-r1c8-r1c9-r2c9-r3c9-r3c8 gap 5
```

- Normal sudoku rules apply.
- German whispers: Along green German Whispers lines, adjacent digits must differ by at least 5.
- Cages: Digits in cages sum to the value shown in the upper left corner of the cage.
