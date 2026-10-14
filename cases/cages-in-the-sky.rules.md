---
format: open-rules
title: Cages in the Sky
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fx44egpkq8
case: https://sudoku-sleuth.com/cases/cages-in-the-sky
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5f532dc36836004b6f94839bbf866ed6
---

```rules
sudoku 9x9
cage-1: cage r2c5-r3c5-r4c5 total 12 connected true
cage-2: cage r2c1-r3c1-r4c1 total 6 connected true
cage-3: cage r2c9-r3c9-r4c9 total 7 connected true
cage-4: cage r6c6-r6c7-r7c6 total 7 connected true
cage-5: cage r6c3-r6c4-r7c4 total 6 connected true
cage-6: cage r6c1-r7c1 total 9 connected true
cage-7: cage r6c9-r7c9 total 12 connected true
cage-8: cage r9c1-r9c2-r9c3 total 21 connected true
cage-9: cage r2c3-r3c3-r4c3 total 19 connected true
cage-10: cage r5c8-r5c9 total 8 connected true
skyscraper-1: skyscraper r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 visible 3
skyscraper-2: skyscraper r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 visible 4
skyscraper-3: skyscraper r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 visible 5
skyscraper-4: skyscraper r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 visible 5
skyscraper-5: skyscraper r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 visible 3
skyscraper-6: skyscraper r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 visible 4
skyscraper-7: skyscraper r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 visible 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
