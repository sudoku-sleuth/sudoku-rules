---
format: open-rules
title: City Firefly
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kjo3900vhj
case: https://sudoku-sleuth.com/cases/city-firefly
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8aed9f244c6a015a2ccf99716d14157a
---

```rules
sudoku 9x9
zipper-1: zipper r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
zipper-2: zipper r7c3-r6c3-r5c4-r4c5-r5c6-r6c7-r7c7
zipper-3: zipper r1c3-r1c4-r2c5-r1c6-r1c7
zipper-4: zipper r6c2-r7c2-r8c3-r7c4-r6c4
zipper-5: zipper r6c6-r7c6-r8c7-r7c8-r6c8
zipper-6: zipper r8c4-r9c5-r8c6
zipper-7: zipper r9c1-r9c2-r9c3
skyscraper-1: skyscraper r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 visible 3
skyscraper-2: skyscraper r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 visible 3
skyscraper-3: skyscraper r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 visible 4
skyscraper-4: skyscraper r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 visible 2
skyscraper-5: skyscraper r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 visible 3
skyscraper-6: skyscraper r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 visible 3
skyscraper-7: skyscraper r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 visible 4
skyscraper-8: skyscraper r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 visible 3
skyscraper-9: skyscraper r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 visible 2
skyscraper-10: skyscraper r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 visible 3
skyscraper-11: skyscraper r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 visible 3
```

**Sudoku, Skyscrapers, Zipper Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
