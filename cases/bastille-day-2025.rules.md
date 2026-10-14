---
format: open-rules
title: Bastille Day 2025
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/krli47nkho
case: https://sudoku-sleuth.com/cases/bastille-day-2025
library: https://rules.sudoku-sleuth.com/
status: read
exported: 89c452be126cec7e1978d7291f7999cd
---

```rules
sudoku 9x9
cage-1: cage r4c6-r4c7 total 5 connected true
cage-2: cage r4c3-r4c4 total 6 connected true
cage-3: cage r7c2-r8c2 total 17 connected true
cage-4: cage r7c8-r8c8 total 16 connected true
cage-5: cage r7c6-r8c6 total 12 connected true
cage-6: cage r7c4-r8c4 total 6 connected true
cage-7: cage r5c4-r6c4 total 13 connected true
cage-8: cage r5c6-r6c6 total 11 connected true
cage-9: cage r1c3-r1c4 total 7 connected true
cage-10: cage r1c6-r1c7 total 8 connected true
cage-11: cage r8c7-r9c7 total 10 connected true
cage-12: cage r8c3-r9c3 total 10 connected true
extremum r2c2-r3c2-r4c2-r4c3-r3c3-r3c4-r2c4-r4c4-r4c5-r3c5-r3c6-r2c6-r4c6-r5c6-r5c5-r5c4-r5c3-r5c2-r3c7-r4c7-r5c7-r5c8-r4c8-r3c8-r2c8 type "max" exhaustive false
```

**Sudoku, Fortress, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Fortress cells: Shaded cells are fortress cells and must be larger than any orthogonally adjacent unshaded cell.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
