---
format: open-rules
title: Five of Diamonds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/jdu71u7cqz
case: https://sudoku-sleuth.com/cases/five-of-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
exported: c9b96009e7e5a31e2bdf96d3c29161db
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 14 connected true
cage-2: cage r1c8-r1c9 total 14 connected true
cage-3: cage r9c8-r9c9 total 6 connected true
cage-4: cage r9c1-r9c2 total 6 connected true
cage-5: cage r7c9-r8c9 total 14 connected true
cage-6: cage r2c9-r3c9 total 7 connected true
cage-7: cage r7c1-r8c1 total 15 connected true
cage-8: cage r2c1-r3c1 total 6 connected true
cage-9: cage r2c3-r3c3 total 10 connected true
cage-10: cage r7c7-r8c7 total 12 connected true
cage-11: cage r2c6-r2c7 total 10 connected true
cage-12: cage r5c3-r5c4 total 14 connected true
cage-13: cage r5c6-r5c7 total 15 connected true
cage-14: cage r3c5-r4c5 total 8 connected true
cage-15: cage r8c3-r8c4 total 10 connected true
cage-16: cage r6c5-r7c5 total 10 connected true
cage-17: cage r9c5-r9c6 total 9 connected true
whispers-1: whispers r2c1-r1c2-r2c3-r3c2 gap 4 loop true
whispers-2: whispers r2c7-r1c8-r2c9-r3c8 gap 4 loop true
whispers-3: whispers r8c1-r7c2-r8c3-r9c2 gap 4 loop true
whispers-4: whispers r8c7-r7c8-r8c9-r9c8 gap 4 loop true
whispers-5: whispers r5c4-r4c5-r5c6-r6c5 gap 4 loop true
```

**Standard Sudoku, Dutch Whispers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least 4.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
