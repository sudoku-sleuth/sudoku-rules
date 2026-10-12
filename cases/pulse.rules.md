---
format: open-rules
title: Pulse
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/e9qv0mso6p
case: https://sudoku-sleuth.com/cases/pulse
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c8-r1c9 colour "white"
kropki-2: kropki r3c1-r4c1 colour "white"
kropki-3: kropki r8c1-r9c1 colour "white"
kropki-4: kropki r9c7-r9c8 colour "white"
kropki-5: kropki r2c1-r2c2 colour "white"
kropki-6: kropki r1c3-r1c4 colour "black"
kropki-7: kropki r1c9-r2c9 colour "black"
kropki-8: kropki r1c5-r1c6 colour "black"
kropki-9: kropki r6c1-r7c1 colour "black"
kropki-10: kropki r9c1-r9c2 colour "black"
zipper-1: zipper r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
zipper-2: zipper r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9
zipper-3: zipper r9c1-r8c2-r7c2-r7c3-r6c4
zipper-4: zipper r1c9-r2c8-r3c8-r3c7-r4c6
zipper-5: zipper r2c2-r3c3-r3c4-r4c4-r5c5-r6c6-r7c6-r7c7-r8c8
```

**Sudoku, Zipper Lines, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Zipper Lines: Along Zipper lines, pairs of digits equidistant from the center of the line (marked by a small purple dot) have the same sum. 
 - Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
