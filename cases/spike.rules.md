---
format: open-rules
title: Spike
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7rrbhx2n2v
case: https://sudoku-sleuth.com/cases/spike
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r2c6 colour "white"
kropki-2: kropki r5c3-r5c4 colour "white"
kropki-3: kropki r5c6-r5c7 colour "white"
kropki-4: kropki r3c4-r3c5 colour "white"
kropki-5: kropki r7c8-r8c8 colour "white"
kropki-6: kropki r3c1-r4c1 colour "white"
kropki-7: kropki r1c3-r1c4 colour "white"
kropki-8: kropki r6c8-r6c9 colour "white"
kropki-9: kropki r6c9-r7c9 colour "white"
kropki-10: kropki r9c6-r9c7 colour "white"
kropki-11: kropki r7c5-r8c5 colour "black"
kropki-12: kropki r2c6-r3c6 colour "black"
kropki-13: kropki r2c4-r2c5 colour "black"
kropki-14: kropki r6c8-r7c8 colour "black"
kropki-15: kropki r7c1-r7c2 colour "black"
kropki-16: kropki r2c8-r2c9 colour "black"
kropki-17: kropki r1c7-r1c8 colour "black"
kropki-18: kropki r7c8-r7c9 colour "black"
kropki-19: kropki r8c7-r9c7 colour "black"
kropki-20: kropki r3c1-r3c2 colour "black"
zipper-1: zipper r5c1-r4c2-r3c3-r3c4-r3c5-r3c6-r3c7-r4c8-r5c9
zipper-2: zipper r4c1-r3c1-r2c2-r1c3-r1c4
zipper-3: zipper r1c6-r1c7-r2c8-r3c9-r4c9
zipper-4: zipper r6c1-r7c1-r8c2-r9c3-r9c4
zipper-5: zipper r9c6-r9c7-r8c8-r7c9-r6c9
zipper-6: zipper r7c2-r6c2-r5c3-r5c4-r5c5-r5c6-r5c7-r6c8-r7c8
zipper-7: zipper r8c4-r7c5-r8c6
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
