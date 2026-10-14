---
format: open-rules
title: City Congestion
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/q5v50bc904
case: https://sudoku-sleuth.com/cases/city-congestion
library: https://rules.sudoku-sleuth.com/
status: read
exported: b34248a37528cfcf127992ff4434ee2b
---

```rules
sudoku 9x9
quadruple-1: quadruple r2c7-r2c8-r3c7-r3c8 digits [3,4,5]
quadruple-2: quadruple r1c2-r1c3-r2c2-r2c3 digits [7,8,9]
quadruple-3: quadruple r4c1-r4c2-r5c1-r5c2 digits [9]
quadruple-4: quadruple r2c5-r2c6-r3c5-r3c6 digits [9]
quadruple-5: quadruple r7c7-r7c8-r8c7-r8c8 digits [1,2,3]
quadruple-6: quadruple r8c4-r8c5-r9c4-r9c5 digits [6,8]
quadruple-7: quadruple r7c1-r7c2-r8c1-r8c2 digits [6,7,8]
quadruple-8: quadruple r5c6-r5c7-r6c6-r6c7 digits [7,9]
quadruple-9: quadruple r4c3-r4c4-r5c3-r5c4 digits [1,8]
quadruple-10: quadruple r3c8-r3c9-r4c8-r4c9 digits [7]
quadruple-11: quadruple r1c8-r1c9-r2c8-r2c9 digits [2]
quadruple-12: quadruple r1c4-r1c5-r2c4-r2c5 digits [1,5,6]
quadruple-13: quadruple r6c5-r6c6-r7c5-r7c6 digits [5]
skyscraper-1: skyscraper r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 visible 5
skyscraper-2: skyscraper r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 visible 4
skyscraper-3: skyscraper r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 visible 3
skyscraper-4: skyscraper r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 visible 4
skyscraper-5: skyscraper r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 visible 3
skyscraper-6: skyscraper r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 visible 4
skyscraper-7: skyscraper r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 visible 2
skyscraper-8: skyscraper r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 visible 2
skyscraper-9: skyscraper r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 visible 4
skyscraper-10: skyscraper r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 visible 6
```

**Sudoku, Skyscrapers, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
