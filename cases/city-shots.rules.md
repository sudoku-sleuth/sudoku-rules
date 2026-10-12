---
format: open-rules
title: City Shots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/city-shots
case: https://sudoku-sleuth.com/cases/city-shots
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c4=8
---

```rules
sudoku 9x9
arrow-1: arrow r1c3-r1c4-r2c4 bulb ["r1c2"]
arrow-2: arrow r2c7-r2c6-r3c6 bulb ["r2c8"]
arrow-3: arrow r3c3-r3c4-r4c4 bulb ["r3c2"]
arrow-4: arrow r4c7-r4c6-r5c6 bulb ["r4c8"]
arrow-5: arrow r6c9-r7c9-r7c8 bulb ["r5c9"]
arrow-6: arrow r6c1-r7c1-r7c2 bulb ["r5c1"]
arrow-7: arrow r9c6-r9c5-r8c5 bulb ["r9c7"]
skyscraper-1: skyscraper r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 visible 5
skyscraper-2: skyscraper r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 visible 6
skyscraper-3: skyscraper r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 visible 3
skyscraper-4: skyscraper r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 visible 4
skyscraper-5: skyscraper r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 visible 4
skyscraper-6: skyscraper r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 visible 3
skyscraper-7: skyscraper r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 visible 4
skyscraper-8: skyscraper r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 visible 2
skyscraper-9: skyscraper r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 visible 5
skyscraper-10: skyscraper r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 visible 4
```

**Sudoku, Skyscrapers, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
