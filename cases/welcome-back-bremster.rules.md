---
format: open-rules
title: Welcome Back, BremSter
setter: Team B (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/zbmg0fmzc5
case: https://sudoku-sleuth.com/cases/welcome-back-bremster
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2259830cbc482e00a61866a3b4958236
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3 total 9 connected true
cage-2: cage r7c6-r8c6 total 7 connected true
cage-3: cage r8c8-r8c9-r9c8 total 15 connected true
cage-4: cage r3c4-r3c5-r3c6 total 23 connected true
whispers-1: whispers r1c1-r2c1-r3c1-r2c2-r3c3-r2c3-r1c3 gap 5
whispers-2: whispers r1c6-r2c6-r3c6-r3c7-r3c8-r2c7-r1c8-r1c7 gap 5
whispers-3: whispers r4c2-r5c2-r6c2-r6c3-r6c4-r5c3-r4c4-r4c3 gap 5
whispers-4: whispers r6c6-r5c6-r5c7 gap 5
whispers-5: whispers r9c5-r9c4-r8c3-r8c4-r8c5 gap 5
whispers-6: whispers r8c5-r9c4 gap 5
whispers-7: whispers r8c6-r7c6-r7c7-r7c8-r8c8 gap 5
whispers-8: whispers r8c7-r7c7 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Cages: Digits in cages sum to the value shown in the upper left corner of the cage.
