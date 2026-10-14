---
format: open-rules
title: Eight of Diamonds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2udd7mbpjv
case: https://sudoku-sleuth.com/cases/eight-of-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
exported: ccf2c03ab1f05983d937cdd1b547fe6f
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4 total 8 connected true
cage-2: cage r2c6-r2c7 total 8 connected true
cage-3: cage r3c2-r4c2 total 8 connected true
cage-4: cage r3c8-r4c8 total 7 connected true
cage-5: cage r8c3-r8c4 total 11 connected true
cage-6: cage r6c2-r7c2 total 15 connected true
cage-7: cage r5c3-r5c4 total 8 connected true
cage-8: cage r3c5-r4c5 total 8 connected true
cage-9: cage r6c5-r7c5 total 11 connected true
cage-10: cage r5c6-r5c7 total 11 connected true
cage-11: cage r6c8-r7c8 total 7 connected true
cage-12: cage r8c6-r8c7 total 8 connected true
cage-13: cage r8c9-r9c9 total 7 connected true
whispers-1: whispers r2c1-r1c2-r2c3-r3c2 gap 4 loop true
whispers-2: whispers r2c4-r1c5-r2c6-r3c5 gap 4 loop true
whispers-3: whispers r2c7-r1c8-r2c9-r3c8 gap 4 loop true
whispers-4: whispers r5c1-r4c2-r5c3-r6c2 gap 4 loop true
whispers-5: whispers r5c7-r4c8-r5c9-r6c8 gap 4 loop true
whispers-6: whispers r8c7-r7c8-r8c9-r9c8 gap 4 loop true
whispers-7: whispers r8c1-r7c2-r8c3-r9c2 gap 4 loop true
whispers-8: whispers r8c4-r7c5-r8c6-r9c5 gap 4 loop true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch whispers line differ by at least 4.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
