---
format: open-rules
title: Hairpins
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/x5l3tc3m3n
case: https://sudoku-sleuth.com/cases/hairpins
library: https://rules.sudoku-sleuth.com/
status: read
exported: b78421e77b2a732d33d6c1d7ef68e6e8
---

```rules
sudoku 9x9
kropki-1: kropki r5c7-r6c7 white
kropki-2: kropki r5c3-r5c4 white
kropki-3: kropki r4c4-r4c5 white
kropki-4: kropki r4c3-r4c4 white
kropki-5: kropki r6c2-r6c3 white
kropki-6: kropki r8c3-r8c4 white
kropki-7: kropki r2c5-r2c6 white
kropki-8: kropki r3c8-r3c9 white
kropki-9: kropki r5c8-r5c9 white
kropki-10: kropki r8c1-r8c2 white
kropki-11: kropki r7c6-r7c7 black
kropki-12: kropki r5c4-r5c5 black
kropki-13: kropki r5c5-r6c5 black
kropki-14: kropki r3c3-r3c4 black
kropki-15: kropki r8c7-r9c7 black
zipper-1: zipper r6c3-r5c3-r4c3-r3c3-r3c4-r4c4-r5c4-r6c4
zipper-2: zipper r4c6-r5c6-r6c6-r7c6-r7c7-r6c7-r5c7-r4c7
zipper-3: zipper r7c2-r7c3-r7c4-r7c5-r8c5-r8c4-r8c3-r8c2
zipper-4: zipper r3c8-r3c7-r3c6-r3c5-r2c5-r2c6-r2c7-r2c8
zipper-5: zipper r8c8-r8c9-r9c9-r9c8
zipper-6: zipper r2c1-r1c1-r1c2-r2c2
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all dots are necessarily given.
