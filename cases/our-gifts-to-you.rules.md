---
format: open-rules
title: Our Gifts To You
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/tfemz7oacb
case: https://sudoku-sleuth.com/cases/our-gifts-to-you
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c3-r4c4-r4c5-r4c6-r5c5 total 15 connected true
cage-2: cage r3c1-r3c2-r3c3-r4c1-r4c2-r5c1-r6c1 total 28 connected true
cage-3: cage r5c2-r5c3-r5c4-r6c2-r6c3-r7c2-r7c3 total 42 connected true
cage-4: cage r5c6-r5c7-r6c6-r6c7 total 30 connected true
cage-5: cage r6c4-r6c5-r7c4-r7c5-r7c6-r8c4-r8c5-r8c6 total 39 connected true
cage-6: cage r3c7-r3c8-r4c7-r4c8-r5c8-r6c8-r7c7-r7c8 total 38 connected true
cage-7: cage r8c3-r9c3-r9c4-r9c5 total 12 connected true
cage-8: cage r4c9-r5c9-r6c9 total 15 connected true
cage-9: cage r8c7-r8c8-r9c6-r9c7-r9c8 total 24 connected true
whispers-1: whispers r2c1-r3c2-r2c3 gap 5
whispers-2: whispers r2c2-r3c2 gap 5
whispers-3: whispers r2c7-r3c8-r2c9 gap 5
whispers-4: whispers r2c8-r3c8 gap 5
whispers-5: whispers r4c3-r5c3-r4c4 gap 5
whispers-6: whispers r3c4-r4c5-r3c6 gap 4
whispers-7: whispers r3c5-r4c5 gap 4
whispers-8: whispers r5c4-r6c5-r5c6 gap 4
whispers-9: whispers r5c5-r6c5 gap 4
```

**Standard Sudoku, Cages, German Whispers, Dutch Whispers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least 5.
- Dutch Whispers: Adjacent digits along a German Whispers line must differ by at least 4.

The green bows (on the 28-cage, 38-cage, and 42-cage) are German Whispers. The orange bows (on the 15-cage and 39-cage) are Dutch Whispers.
