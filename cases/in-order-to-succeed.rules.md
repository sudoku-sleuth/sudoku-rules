---
format: open-rules
title: In Order to Succeed
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vlqgrfsgh6
case: https://sudoku-sleuth.com/cases/in-order-to-succeed
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c7-r2c7 total 8 connected true
cage-2: cage r1c8-r2c8 total 9 connected true
cage-3: cage r1c9-r2c9 total 10 connected true
cage-4: cage r1c3-r1c4 total 15 connected true
cage-5: cage r3c5-r3c6-r4c5 total 21 connected true
cage-6: cage r4c3-r5c3-r5c4 total 22 connected true
cage-7: cage r6c2-r7c2 total 13 connected true
cage-8: cage r8c4-r9c4 total 11 connected true
cage-9: cage r8c5-r9c5 total 9 connected true
cage-10: cage r7c8-r8c8 total 13 connected true
cage-11: cage r6c6-r7c6 total 12 connected true
ordered-block-1: ordered-block r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 digits [1,6]
ordered-block-2: ordered-block r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 digits [1,2,3]
ordered-block-3: ordered-block r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 digits [8,5]
ordered-block-4: ordered-block r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 digits [3,4]
ordered-block-5: ordered-block r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 digits [4,8]
ordered-block-6: ordered-block r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 digits [4,6]
ordered-block-7: ordered-block r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 digits [7,5]
ordered-block-8: ordered-block r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 digits [3,5]
ordered-block-9: ordered-block r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 digits [1,9]
ordered-block-10: ordered-block r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 digits [2,8]
```

**Standard Sudoku, Cages**
**Ordered Blocks** 

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Ordered Blocks: Clues outside the grid indicate that the digits shown appear together in that order as a block within the row or column as seen from the clue.
- Cages: Within cages, digits may not repeat and must sum to the value shown in the upper left corner of the cage.
