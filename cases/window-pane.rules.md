---
format: open-rules
title: Window Pane
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9so76kysqx
case: https://sudoku-sleuth.com/cases/window-pane
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r1c9=6 r5c5=7 r9c1=3 r9c9=8
---

```rules
sudoku 9x9
zipper-1: zipper r3c1-r2c2-r1c3
zipper-2: zipper r1c5-r2c4-r3c3-r4c2-r5c1
zipper-3: zipper r6c9-r7c8-r8c7-r9c6
zipper-4: zipper r4c9-r5c8-r6c7-r7c6-r8c5-r9c4
zipper-5: zipper r7c1-r6c2-r5c3-r4c4-r3c5-r2c6-r1c7
zipper-6: zipper r2c9-r3c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 8
little-killer-2: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 27
little-killer-3: little-killer r6c9-r7c8-r8c7-r9c6 sum 6
little-killer-4: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 18
little-killer-5: little-killer r7c1-r6c2-r5c3-r4c4-r3c5-r2c6-r1c7 sum 32
little-killer-6: little-killer r2c9-r3c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2 sum 36
little-killer-7: little-killer r1c7-r2c8-r3c9 sum 7
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 21
```

Normal Sudoku rules apply: every row, column and 3x3 box contains a complete set of the digits 1-9.
Zipper lines: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line. 
Little killers: Clues outside the grid give the sum of the digits along the indicated diagonal.
