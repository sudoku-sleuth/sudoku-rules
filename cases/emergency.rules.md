---
format: open-rules
title: Emergency
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fyp3y3nhq2
case: https://sudoku-sleuth.com/cases/emergency
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5c95f872575dcbe103a7676692429f0e
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6 total 9 connected true
cage-2: cage r2c5-r2c6 total 9 connected true
cage-3: cage r4c5-r4c6 total 9 connected true
cage-4: cage r6c5-r6c6 total 9 connected true
cage-5: cage r7c3-r8c3 total 11 connected true
cage-6: cage r4c2-r5c2 total 11 connected true
cage-7: cage r7c5-r7c6-r7c7 total 9 connected true
cage-8: cage r9c1-r9c2 total 11 connected true
cage-9: cage r8c1-r8c2 total 11 connected true
whispers-1: whispers r4c2-r3c3-r2c4-r1c5 gap 5
whispers-2: whispers r5c2-r4c3-r3c4-r2c5 gap 5
whispers-3: whispers r6c2-r5c3-r4c4-r3c5 gap 5
whispers-4: whispers r7c2-r6c3-r5c4-r4c5 gap 5
whispers-5: whispers r8c2-r7c3-r6c4-r5c5 gap 5
whispers-6: whispers r9c2-r8c3-r7c4-r6c5 gap 5
whispers-7: whispers r6c6-r7c7-r8c8-r9c9 gap 5
whispers-8: whispers r2c6-r3c7-r4c8-r5c9 gap 5
whispers-9: whispers r1c6-r2c7-r3c8 gap 5
whispers-10: whispers r4c6-r5c7-r6c8 gap 5
```

**Standard Sudoku, German Whispers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
