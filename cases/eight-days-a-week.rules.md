---
format: open-rules
title: Eight Days a Week
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ykptq2c6vx
case: https://sudoku-sleuth.com/cases/eight-days-a-week
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c3 total 8 connected true
cage-2: cage r5c1-r6c1 total 8 connected true
cage-3: cage r8c7-r9c7 total 7 connected true
cage-4: cage r4c5-r4c6 total 8 connected true
cage-5: cage r6c4-r6c5 total 7 connected true
cage-6: cage r8c1-r8c2 total 8 connected true
cage-7: cage r1c9-r2c9 total 7 connected true
cage-8: cage r1c4-r2c4 total 8 connected true
cage-9: cage r7c4-r7c5 total 7 connected true
cage-10: cage r9c3-r9c4-r9c5 total 7 connected true
whispers-1: whispers r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8 gap 5
whispers-2: whispers r1c2-r2c1-r3c1-r4c2-r3c3-r2c3 gap 5 loop true
whispers-3: whispers r7c2-r6c3-r5c3-r4c2-r5c1-r6c1 gap 5 loop true
whispers-4: whispers r5c6-r5c7-r5c8-r5c9-r6c8-r7c7-r8c7-r9c7 gap 5
```

**Normal Sudoku, German Whispers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Cages: Digits in cages sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
