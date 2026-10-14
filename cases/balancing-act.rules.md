---
format: open-rules
title: Balancing Act
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/owrzxgf46z
case: https://sudoku-sleuth.com/cases/balancing-act
library: https://rules.sudoku-sleuth.com/
status: read
exported: 29e98906b00ead2b87886c37800217d5
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 white
kropki-2: kropki r1c2-r1c3 black
kropki-3: kropki r1c7-r1c8 black
kropki-4: kropki r1c5-r2c5 black
kropki-5: kropki r5c5-r6c5 black
kropki-6: kropki r5c2-r6c2 black
kropki-7: kropki r5c8-r6c8 black
kropki-8: kropki r9c3-r9c4 black
kropki-9: kropki r9c6-r9c7 black
kropki-10: kropki r4c2-r4c3 black
kropki-11: kropki r4c6-r4c7 black
kropki-12: kropki r8c4-r9c4 black
zipper-1: zipper r3c1-r2c1-r1c1-r1c2-r1c3
zipper-2: zipper r1c7-r1c8-r1c9-r2c9-r3c9
zipper-3: zipper r2c5-r3c5-r4c5-r5c5
zipper-4: zipper r7c5-r8c5-r9c5
zipper-5: zipper r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2
zipper-6: zipper r9c7-r9c8-r9c9-r8c9
zipper-7: zipper r9c3-r9c2-r9c1-r8c1
zipper-8: zipper r2c8-r3c8-r4c8-r5c8
zipper-9: zipper r2c2-r3c2-r4c2-r5c2
```

** Sudoku, Zipper Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.
