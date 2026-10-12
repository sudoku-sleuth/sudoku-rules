---
format: open-rules
title: The Grass is Always Greener in the Other Corners
setter: sujoyku
source: https://sudokupad.app/xnocqe9cf6
case: https://sudoku-sleuth.com/cases/the-grass-is-always-greener-in-the-other-corners
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c3-r6c3-r7c3-r7c4 total 12 connected true
cage-2: cage r3c6-r3c7-r4c7-r5c7 total 13 connected true
cage-3: cage r1c3-r2c3 total 6 connected true
cage-4: cage r8c7-r9c7 total 8 connected true
cage-5: cage r4c1-r5c1 total 14 connected true
cage-6: cage r5c9-r6c9 total 14 connected true
cage-7: cage r4c4-r4c5 total 8 connected true
cage-8: cage r6c5-r6c6 total 8 connected true
whispers-1: whispers r3c5-r3c4-r3c3-r4c3 gap 5
whispers-2: whispers r7c5-r7c6-r7c7-r6c7 gap 5
whispers-3: whispers r9c1-r8c1-r8c2-r9c2 gap 5
whispers-4: whispers r1c8-r2c8-r2c9-r1c9 gap 5
whispers-5: whispers r1c1-r2c2 gap 5
whispers-6: whispers r8c8-r9c9 gap 5
whispers-7: whispers r1c5-r1c6-r1c7 gap 5
whispers-8: whispers r9c5-r9c4-r9c3 gap 5
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage must sum to the clue in the top left.

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.
