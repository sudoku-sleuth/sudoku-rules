---
format: open-rules
title: 600 Puzzles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8k51c180kh
case: https://sudoku-sleuth.com/cases/600-puzzles
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 8 connected true
cage-2: cage r3c3-r3c4 total 7 connected true
cage-3: cage r2c6-r2c7 total 9 connected true
cage-4: cage r4c2-r4c3 total 13 connected true
cage-5: cage r6c1-r7c1 total 10 connected true
cage-6: cage r7c3-r8c3 total 12 connected true
cage-7: cage r6c6-r7c6 total 11 connected true
cage-8: cage r8c8-r9c8 total 14 connected true
whispers-1: whispers r1c3-r1c2-r2c2-r3c2-r3c3-r2c3 gap 5
whispers-2: whispers r2c3-r2c2 gap 5
whispers-3: whispers r1c5-r2c5-r3c5-r3c6-r2c6-r1c6 gap 5 loop true
whispers-4: whispers r1c8-r1c9-r2c9-r3c9-r3c8-r2c8 gap 5 loop true
whispers-5: whispers r6c1-r5c1-r4c1-r4c2-r5c2 gap 4
whispers-6: whispers r5c2-r5c1 gap 4
whispers-7: whispers r5c3-r6c3-r6c4-r5c4 gap 4
whispers-8: whispers r5c5-r5c6-r6c5-r6c6 gap 4
whispers-9: whispers r5c7-r5c8-r6c7-r6c8 gap 4
whispers-10: whispers r7c1-r8c1-r9c1-r9c2 gap 4
whispers-11: whispers r9c4-r8c3-r8c4-r8c5 gap 4
whispers-12: whispers r9c5-r9c4-r8c5 gap 4
whispers-13: whispers r7c7-r7c6-r8c6-r8c7-r9c7-r9c6 gap 4
```

**Sudoku, German whispers, Dutch whispers, cages**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net
