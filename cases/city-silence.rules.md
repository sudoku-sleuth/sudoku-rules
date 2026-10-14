---
format: open-rules
title: City Silence
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ki5v2qql6k
case: https://sudoku-sleuth.com/cases/city-silence
library: https://rules.sudoku-sleuth.com/
status: read
exported: 61f45774088e989bc640bff641b1b3ff
---

```rules
sudoku 9x9
whispers-1: whispers r2c2-r3c3-r2c4-r3c5-r2c6 gap 5
whispers-2: whispers r8c2-r7c3-r6c2-r5c3-r4c2 gap 5
whispers-3: whispers r8c8-r7c7-r8c6-r7c5-r8c4 gap 5
whispers-4: whispers r2c8-r3c7-r4c8-r5c7-r6c8 gap 5
whispers-5: whispers r7c4-r6c4-r5c5-r6c6 gap 5
whispers-6: whispers r4c7-r4c6-r5c5-r4c4 gap 5
skyscraper-1: skyscraper r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 visible 6
skyscraper-2: skyscraper r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 visible 5
skyscraper-3: skyscraper r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 visible 3
skyscraper-4: skyscraper r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 visible 5
skyscraper-5: skyscraper r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 visible 3
skyscraper-6: skyscraper r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 visible 5
skyscraper-7: skyscraper r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 visible 3
skyscraper-8: skyscraper r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 visible 3
```

**Sudoku, Whispers-5, Skyscrapers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whispers-5: Adjacent digits along a Whispers-5 line must differ by at least five.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
