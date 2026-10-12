---
format: open-rules
title: Drippy Zippy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vghnsm7vej
case: https://sudoku-sleuth.com/cases/drippy-zippy
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=4 r5c6=3 r8c9=7 r9c2=9
---

```rules
sudoku 9x9
zipper-1: zipper r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
zipper-2: zipper r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
zipper-3: zipper r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
zipper-4: zipper r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
zipper-5: zipper r2c1-r3c1-r4c1-r5c1-r6c1
zipper-6: zipper r2c9-r3c9-r4c9-r5c9-r6c9
zipper-7: zipper r5c7-r6c7-r7c7-r8c7-r9c7
zipper-8: zipper r5c3-r6c3-r7c3-r8c3-r9c3
zipper-9: zipper r5c4-r6c4-r7c4
```

**Sudoku, Zipper Lines**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line sum to the central digit on the line.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
