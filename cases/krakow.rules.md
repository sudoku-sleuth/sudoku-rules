---
format: open-rules
title: Krakow
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uhwain0x9t
case: https://sudoku-sleuth.com/cases/krakow
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9184d434511a305618cb07c47b368365
---

```rules
sudoku 9x9
kropki-1: kropki r7c3-r8c3 white
kropki-2: kropki r4c8-r4c9 white
kropki-3: kropki r4c7-r4c8 white
kropki-4: kropki r3c5-r4c5 white
kropki-5: kropki r7c5-r8c5 white
kropki-6: kropki r7c8-r8c8 white
kropki-7: kropki r2c1-r2c2 black
kropki-8: kropki r2c3-r2c4 black
kropki-9: kropki r8c3-r9c3 black
kropki-10: kropki r4c6-r4c7 black
kropki-11: kropki r6c7-r6c8 black
kropki-12: kropki r6c5-r7c5 black
kropki-13: kropki r8c1-r9c1 black
skyscraper-1: skyscraper r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 visible 6
skyscraper-2: skyscraper r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 visible 2
skyscraper-3: skyscraper r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 visible 3
skyscraper-4: skyscraper r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 visible 6
skyscraper-5: skyscraper r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 visible 4
skyscraper-6: skyscraper r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 visible 6
skyscraper-7: skyscraper r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 visible 3
skyscraper-8: skyscraper r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 visible 4
skyscraper-9: skyscraper r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 visible 6
```

**Sudoku, Skyscraper, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
