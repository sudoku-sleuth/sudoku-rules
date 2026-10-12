---
format: open-rules
title: 7th Avenue
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/tjzgwdsbm0
case: https://sudoku-sleuth.com/cases/7th-avenue
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c7-r4c8 total 7 connected true
cage-2: cage r6c3-r6c4 total 7 connected true
cage-3: cage r1c4-r2c4 total 7 connected true
cage-4: cage r9c7-r9c8 total 7 connected true
cage-5: cage r6c5-r6c6 total 7 connected true
skyscraper-1: skyscraper r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 visible 7
skyscraper-2: skyscraper r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 visible 7
skyscraper-3: skyscraper r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 visible 7
skyscraper-4: skyscraper r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 visible 7
skyscraper-5: skyscraper r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 visible 7
skyscraper-6: skyscraper r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 visible 7
```

**Sudoku, Skyscrapers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
