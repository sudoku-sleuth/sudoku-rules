---
format: open-rules
title: Listen!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/okk8bc2znq
case: https://sudoku-sleuth.com/cases/listen
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 15 connected true
cage-2: cage r3c6-r3c7-r4c7 total 15 connected true
cage-3: cage r6c7-r7c6-r7c7 total 15 connected true
cage-4: cage r6c3-r7c3-r7c4 total 15 connected true
cage-5: cage r1c1-r1c2-r2c1 total 15 connected true
cage-6: cage r1c8-r1c9-r2c9 total 15 connected true
cage-7: cage r8c9-r9c8-r9c9 total 15 connected true
cage-8: cage r8c1-r9c1-r9c2 total 15 connected true
cage-9: cage r5c1-r6c1-r6c2 total 6 connected true
cage-10: cage r4c8-r4c9-r5c9 total 9 connected true
cage-11: cage r1c4-r1c5-r2c4 total 9 connected true
cage-12: cage r8c6-r9c5-r9c6 total 9 connected true
cage-13: cage r7c2-r8c2 total 11 connected true
cage-14: cage r2c8-r3c8 total 13 connected true
whispers-1: whispers r5c2-r4c3-r3c3-r3c4-r2c5 gap 5
whispers-2: whispers r8c5-r7c6-r7c7-r6c7-r5c8 gap 5
whispers-3: whispers r3c6-r3c7-r4c7 gap 5
whispers-4: whispers r6c3-r7c3-r7c4 gap 5
whispers-5: whispers r7c3-r8c2 gap 5
whispers-6: whispers r3c7-r2c8 gap 5
whispers-7: whispers r9c8-r9c9-r8c9 gap 5
whispers-8: whispers r2c9-r1c9-r1c8 gap 5
whispers-9: whispers r1c2-r1c1-r2c1 gap 5
whispers-10: whispers r8c1-r9c1-r9c2 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- German Whispers: Adjacent digits along a green German Whispers line must differ by at least five.
