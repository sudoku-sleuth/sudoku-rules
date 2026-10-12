---
format: open-rules
title: Zip-line Tower
setter: EPH
source: https://sudokupad.app/qha8395w5s
case: https://sudoku-sleuth.com/cases/zip-line-tower
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r2c1 colour "white"
kropki-2: kropki r5c6-r5c7 colour "white"
kropki-3: kropki r5c3-r5c4 colour "white"
kropki-4: kropki r7c9-r8c9 colour "black"
zipper-1: zipper r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8
zipper-2: zipper r3c4-r3c5-r3c6
zipper-3: zipper r6c3-r6c4-r6c5-r6c6-r6c7
zipper-4: zipper r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9
zipper-5: zipper r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
zipper-6: zipper r1c2-r1c3-r1c4
zipper-7: zipper r1c6-r1c7-r1c8
zipper-8: zipper r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
parity-cells r7c5 parity "even"
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Magenta lines are zipper lines: digits in cells equidistant from the center of a line sum to the value of the digit in the center cell of the line.  Different shades are used to distinguish distinct lines.

A white dot separates cells with consecutive digits.
A black dot separates cells with digits in a 1:2 ratio.

A grey square denotes a cell which contains an even digit.
