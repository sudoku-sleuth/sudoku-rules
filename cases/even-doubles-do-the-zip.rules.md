---
format: open-rules
title: Even Doubles Do the Zip
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0vddr2kfg5
case: https://sudoku-sleuth.com/cases/even-doubles-do-the-zip
library: https://rules.sudoku-sleuth.com/
status: read
exported: 17e8dfdded61f1d9de54c99076647550
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 black
kropki-2: kropki r1c3-r1c4 black
kropki-3: kropki r5c5-r6c5 black
zipper-1: zipper r1c5-r1c4-r2c3-r3c2-r4c2
zipper-2: zipper r2c5-r2c6-r3c7-r4c8-r5c8
zipper-3: zipper r3c5-r3c4-r4c3-r5c2-r6c2
zipper-4: zipper r4c5-r4c6-r5c7-r6c8-r7c8
zipper-5: zipper r5c5-r5c4-r6c3-r7c2-r8c2
zipper-6: zipper r6c5-r6c6-r7c7-r8c8-r9c8
zipper-7: zipper r7c5-r7c4-r8c3-r9c2
zipper-8: zipper r8c5-r8c6-r9c7
zipper-9: zipper r1c7-r2c8-r3c9-r4c9
parity-cells r1c5-r4c8-r5c8-r6c8-r7c8-r6c6-r7c5-r2c6 parity "even"
```

**Standard Sudoku, Zipper Lines, Even Cells, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
-  Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
- Ratio Dots: Digits separated by a black dot are in a 2:1 ratio. 
- Even Cells: Cells marked by grey squares contain even digits.

For more of our puzzles, visit https://missingdeck.net
