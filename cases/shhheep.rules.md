---
format: open-rules
title: Shhheep
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0rv2vvfqji
case: https://sudoku-sleuth.com/cases/shhheep
library: https://rules.sudoku-sleuth.com/
status: read
exported: cfda3808bab62a0c99ea04c6b21f46f8
---

```rules
sudoku 9x9
cage-1: cage r6c1-r7c1 total 7 connected true
cage-2: cage r3c1-r4c1 total 9 connected true
cage-3: cage r3c9-r4c9 total 7 connected true
cage-4: cage r6c9-r7c9 total 9 connected true
cage-5: cage r1c3-r1c4 total 7 connected true
cage-6: cage r1c6-r1c7 total 9 connected true
cage-7: cage r9c6-r9c7 total 7 connected true
cage-8: cage r9c3-r9c4 total 10 connected true
cage-9: cage r5c1-r5c2 total 10 connected true
cage-10: cage r4c6-r4c7 total 12 connected true
whispers-1: whispers r1c4-r1c3-r2c2-r3c1-r4c1 gap 5
whispers-2: whispers r1c6-r1c7-r2c8-r3c9-r4c9 gap 5
whispers-3: whispers r6c1-r7c1-r8c2-r9c3-r9c4 gap 5
whispers-4: whispers r9c6-r9c7-r8c8-r7c9-r6c9 gap 5
whispers-5: whispers r8c4-r7c3-r6c2-r5c1-r4c2-r3c3-r2c4 gap 5
whispers-6: whispers r2c6-r3c7-r4c8-r5c9-r6c8-r7c7-r8c6 gap 5
whispers-7: whispers r2c1-r1c1-r1c2 gap 5
whispers-8: whispers r1c8-r2c9 gap 5
whispers-9: whispers r2c4-r1c4 gap 5
whispers-10: whispers r9c6-r8c6 gap 5
whispers-11: whispers r2c6-r1c6 gap 5
whispers-12: whispers r9c4-r8c4 gap 5
whispers-13: whispers r6c4-r7c5-r6c6 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
