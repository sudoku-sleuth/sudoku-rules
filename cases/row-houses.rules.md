---
format: open-rules
title: Row Houses
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9ygxrv951n
case: https://sudoku-sleuth.com/cases/row-houses
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r2c5 colour "white"
kropki-2: kropki r6c6-r6c7 colour "white"
kropki-3: kropki r7c2-r8c2 colour "white"
kropki-4: kropki r4c7-r5c7 colour "white"
kropki-5: kropki r4c4-r4c5 colour "white"
kropki-6: kropki r3c9-r4c9 colour "white"
kropki-7: kropki r1c6-r1c7 colour "white"
skyscraper-1: skyscraper r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 visible 3
skyscraper-2: skyscraper r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 visible 5
skyscraper-3: skyscraper r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 visible 7
skyscraper-4: skyscraper r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 visible 2
skyscraper-5: skyscraper r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 visible 6
skyscraper-6: skyscraper r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 visible 8
skyscraper-7: skyscraper r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 visible 3
skyscraper-8: skyscraper r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 visible 6
skyscraper-9: skyscraper r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 visible 4
skyscraper-10: skyscraper r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 visible 2
skyscraper-11: skyscraper r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 visible 5
skyscraper-12: skyscraper r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 visible 2
```

**Sudoku, Skyscrapers, Consecutive Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.
- Consecutive Dots: Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
