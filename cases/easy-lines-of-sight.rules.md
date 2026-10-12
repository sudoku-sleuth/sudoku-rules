---
format: open-rules
title: Easy Lines of Sight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zw4qqqpqzd
case: https://sudoku-sleuth.com/cases/easy-lines-of-sight
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
skyscraper-1: skyscraper r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 visible 5
skyscraper-2: skyscraper r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 visible 9
skyscraper-3: skyscraper r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 visible 3
skyscraper-4: skyscraper r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 visible 8
skyscraper-5: skyscraper r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 visible 2
skyscraper-6: skyscraper r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 visible 4
skyscraper-7: skyscraper r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 visible 4
skyscraper-8: skyscraper r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 visible 3
skyscraper-9: skyscraper r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 visible 6
skyscraper-10: skyscraper r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 visible 4
skyscraper-11: skyscraper r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 visible 2
skyscraper-12: skyscraper r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 visible 8
skyscraper-13: skyscraper r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 visible 3
skyscraper-14: skyscraper r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 visible 5
```

**Sudoku, Skyscrapers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
