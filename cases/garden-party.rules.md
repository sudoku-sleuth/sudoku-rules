---
format: open-rules
title: Garden Party
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6o1vx3g4sq
case: https://sudoku-sleuth.com/cases/garden-party
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c9 total 12 connected true
cage-2: cage r1c1-r1c2 total 14 connected true
cage-3: cage r9c8-r9c9 total 14 connected true
cage-4: cage r4c8-r4c9 total 12 connected true
cage-5: cage r5c8-r5c9 total 12 connected true
cage-6: cage r8c4-r8c5 total 7 connected true
whispers-1: whispers r2c1-r1c2-r1c3-r1c4-r2c3-r3c2-r4c1-r5c1-r6c1-r5c2-r4c3-r3c4-r2c5-r1c6-r1c7-r1c8 gap 5
whispers-2: whispers r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1 gap 5
whispers-3: whispers r9c1-r8c1 gap 5
whispers-4: whispers r9c2-r9c1 gap 5
whispers-5: whispers r8c3-r7c4-r6c5-r5c6-r4c7-r3c8-r2c9 gap 5
whispers-6: whispers r4c9-r3c9-r2c9 gap 5
whispers-7: whispers r5c8-r6c7-r7c6-r8c5 gap 5
whispers-8: whispers r9c4-r9c5-r9c6 gap 5
whispers-9: whispers r8c9-r7c9-r6c9 gap 5
whispers-10: whispers r9c7-r9c6 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- German Whispers: Adjacent digits along a German Whispers line differ by at least 5.
