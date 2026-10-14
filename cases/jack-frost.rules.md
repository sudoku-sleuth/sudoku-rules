---
format: open-rules
title: Jack Frost
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/d9f22pf99w
case: https://sudoku-sleuth.com/cases/jack-frost
library: https://rules.sudoku-sleuth.com/
status: read
exported: e7e9512f1103bbeb62949f8fadc75bc7
---

```rules
sudoku 9x9
cage-1: cage r4c7-r5c7-r6c7 total 24 connected true
cage-2: cage r3c4-r3c5-r3c6 total 8 connected true
cage-3: cage r7c4-r7c5-r7c6 total 22 connected true
cage-4: cage r4c3-r5c3-r6c3 total 6 connected true
cage-5: cage r9c6-r9c7 total 9 connected true
cage-6: cage r9c3-r9c4 total 10 connected true
whispers-1: whispers r4c2-r3c3-r3c4-r4c3 gap 4 loop true
whispers-2: whispers r3c6-r3c7-r4c8-r4c7 gap 4 loop true
whispers-3: whispers r6c2-r6c3-r7c4-r7c3 gap 4 loop true
whispers-4: whispers r6c7-r6c8-r7c7-r7c6 gap 4 loop true
whispers-5: whispers r2c1-r1c2-r1c3-r2c2 gap 4 loop true
whispers-6: whispers r2c8-r1c7-r1c8-r2c9 gap 4 loop true
whispers-7: whispers r8c4-r9c5-r8c6-r8c5 gap 4 loop true
whispers-8: whispers r6c4-r5c5-r4c6 gap 4
whispers-9: whispers r5c1-r4c1 gap 4
whispers-10: whispers r5c8-r5c9 gap 4
whispers-11: whispers r2c4-r3c5-r2c6 gap 4
whispers-12: whispers r1c4-r1c5-r1c6 gap 4
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch whispers line differ by at least 4.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
