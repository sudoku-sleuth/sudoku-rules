---
format: open-rules
title: Middling
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fa1pfahst4
case: https://sudoku-sleuth.com/cases/middling
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6507fca443c9e9d3d4d4d7a540304661
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 12 connected true
cage-2: cage r8c8-r8c9-r9c8-r9c9 total 12 connected true
cage-3: cage r1c8-r1c9-r2c8-r2c9 total 11 connected true
cage-4: cage r8c1-r8c2-r9c1-r9c2 total 11 connected true
cage-5: cage r4c1-r4c2 total 12 connected true
cage-6: cage r5c7-r5c8 total 13 connected true
cage-7: cage r8c6-r9c6 total 12 connected true
cage-8: cage r2c5-r3c5 total 12 connected true
cage-9: cage r6c2-r6c3 total 11 connected true
cage-10: cage r7c4-r8c4 total 11 connected true
cage-11: cage r3c4-r4c4 total 10 connected true
cage-12: cage r6c6-r6c7 total 9 connected true
region-sum-1: region-sum r2c5-r2c6-r2c7-r3c8-r4c8-r5c8 segments [["r2c5","r2c6"],["r2c7","r3c8"],["r4c8","r5c8"]]
region-sum-2: region-sum r4c1-r5c1-r6c2-r7c2-r8c3-r8c4-r9c5-r9c6 segments [["r4c1","r5c1","r6c2"],["r7c2","r8c3"],["r8c4","r9c5","r9c6"]]
region-sum-3: region-sum r8c8-r7c9-r6c9-r5c9 segments [["r8c8","r7c9"],["r6c9","r5c9"]]
region-sum-4: region-sum r1c5-r1c4-r1c3-r2c2 segments [["r1c5","r1c4"],["r1c3","r2c2"]]
region-sum-5: region-sum r5c2-r4c2-r3c1-r2c1-r1c1 segments [["r5c2","r4c2"],["r3c1","r2c1","r1c1"]]
region-sum-6: region-sum r4c3-r5c3-r6c3-r7c4-r7c5-r7c6-r6c7-r5c7-r4c7-r3c6-r3c5-r3c4 segments [["r4c3","r5c3","r6c3"],["r7c4","r7c5","r7c6"],["r6c7","r5c7","r4c7"],["r3c6","r3c5","r3c4"]]
```

**Standard Sudoku, Sum Lines, Cages

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. If a line has multiple sections within a box, these sections are summed separately.
- Cages: Digits in a cage sum to the total shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net
