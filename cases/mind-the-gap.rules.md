---
format: open-rules
title: Mind The Gap
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yfe09i6hpu
case: https://sudoku-sleuth.com/cases/mind-the-gap
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c8=6 r8c2=1
exported: c346b66b66fe3cff01d486656fdf0671
---

```rules
sudoku 9x9
kropki-1: kropki r5c6-r6c6 white
kropki-2: kropki r4c9-r5c9 white
zipper-1: zipper r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
zipper-2: zipper r4c3-r5c3-r6c3
zipper-3: zipper r3c4-r3c5-r3c6
zipper-4: zipper r6c5-r6c4-r5c4-r4c4-r5c5-r6c6-r5c6-r4c6-r4c5
zipper-5: zipper r7c4-r7c5-r7c6
zipper-6: zipper r6c7-r5c7-r4c7
zipper-7: zipper r8c5-r8c6-r7c7-r6c8-r5c8
zipper-8: zipper r6c2-r7c2-r8c3-r9c4-r9c5
zipper-9: zipper r2c3-r2c4-r3c3
zipper-10: zipper r7c9-r8c8-r8c9
```

**Sudoku, Zipper Lines, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
- Consecutive Pairs: Digits separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
