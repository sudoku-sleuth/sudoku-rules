---
format: open-rules
title: Bars in the Windows
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zo0zkt27ax
case: https://sudoku-sleuth.com/cases/bars-in-the-windows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2 total 3 connected true
cage-2: cage r1c8-r2c8 total 4 connected true
cage-3: cage r8c8-r8c9 total 3 connected true
cage-4: cage r8c2-r9c2 total 4 connected true
cage-5: cage r1c3-r2c3 total 17 connected true
cage-6: cage r3c8-r3c9 total 16 connected true
cage-7: cage r7c1-r7c2 total 16 connected true
cage-8: cage r4c2-r5c2-r6c2 total 18 connected true
cage-9: cage r4c8-r5c8-r6c8 total 22 connected true
cage-10: cage r6c9-r7c9 total 11 connected true
cage-11: cage r7c5-r8c5 total 6 connected true
cage-12: cage r6c4-r6c5-r6c6 total 9 connected true
cage-13: cage r3c5-r4c5 total 13 connected true
cage-14: cage r3c1-r4c1 total 8 connected true
cage-15: cage r8c7-r9c7 total 17 connected true
unique-1: unique r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4
unique-2: unique r2c6-r2c7-r2c8-r3c6-r3c7-r3c8-r4c6-r4c7-r4c8
unique-3: unique r6c2-r6c3-r6c4-r7c2-r7c3-r7c4-r8c2-r8c3-r8c4
unique-4: unique r6c6-r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8
```

**Standard Sudoku, Cages, Extra Regions**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Extra Regions: Each shaded extra region contains a complete set of the digits 1 to 9.

For more of our puzzles, visit https://missingdeck.net
