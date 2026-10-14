---
format: open-rules
title: Whispers in Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nekibtlhiy
case: https://sudoku-sleuth.com/cases/whispers-in-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: a6ddde4e35654b7e0c5f76e90e9080b0
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5-r4c3 total 16 connected true
cage-2: cage r3c6-r3c7-r4c7-r5c7 total 16 connected true
cage-3: cage r6c7-r7c5-r7c6-r7c7 total 16 connected true
cage-4: cage r5c3-r6c3-r7c3-r7c4 total 16 connected true
cage-5: cage r3c2-r4c2 total 11 connected true
cage-6: cage r2c3-r2c4 total 10 connected true
cage-7: cage r8c6-r8c7 total 11 connected true
cage-8: cage r6c8-r7c8 total 10 connected true
cage-9: cage r6c2-r7c2 total 12 connected true
cage-10: cage r8c3-r8c4 total 11 connected true
cage-11: cage r3c8-r4c8 total 12 connected true
cage-12: cage r2c6-r2c7 total 11 connected true
cage-13: cage r9c1-r9c2 total 12 connected true
cage-14: cage r1c1-r2c1 total 11 connected true
cage-15: cage r1c8-r1c9 total 6 connected true
cage-16: cage r8c9-r9c9 total 8 connected true
cage-17: cage r5c8-r5c9 total 13 connected true
cage-18: cage r5c1-r5c2 total 15 connected true
cage-19: cage r4c4-r4c5-r5c4 total 9 connected true
cage-20: cage r5c6-r6c5-r6c6 total 19 connected true
whispers-1: whispers r4c3-r3c3-r3c4 gap 5
whispers-2: whispers r3c6-r3c7-r4c7 gap 5
whispers-3: whispers r6c3-r7c3-r7c4 gap 5
whispers-4: whispers r7c6-r7c7-r6c7 gap 5
whispers-5: whispers r4c2-r3c2-r2c2-r2c3-r2c4 gap 5
whispers-6: whispers r8c7-r8c8 gap 5
whispers-7: whispers r7c8-r8c8 gap 5
whispers-8: whispers r8c6-r8c7 gap 5
whispers-9: whispers r5c4-r6c4 gap 5
whispers-10: whispers r4c5-r4c6 gap 5
whispers-11: whispers r8c3-r8c2 gap 5
whispers-12: whispers r1c1-r1c2 gap 5
whispers-13: whispers r1c6-r1c7 gap 5
```

**Standard Sudoku, German Whispers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
