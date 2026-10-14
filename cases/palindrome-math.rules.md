---
format: open-rules
title: Palindrome math
setter: Chip Sounder
source: https://sudokupad.app/mwuodqxvxx
case: https://sudoku-sleuth.com/cases/palindrome-math
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1324ff58c91875c598d55f9ba2e928c8
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r5c2-r6c2-r7c2-r7c3 connected true
cage-2: cage r6c7-r6c8-r7c8-r8c6-r8c7-r8c8-r9c6 connected true
cage-3: cage r3c2-r3c3-r3c4-r3c5 total 21 connected true
cage-4: cage r2c5-r2c6-r2c7-r3c7 connected true
kropki-1: kropki r8c4-r8c5 white
kropki-2: kropki r7c2-r7c3 white
kropki-3: kropki r4c2-r5c2 white
kropki-4: kropki r8c7-r8c8 white
kropki-5: kropki r6c2-r7c2 white
kropki-6: kropki r6c7-r6c8 white
kropki-7: kropki r3c5-r3c6 white
kropki-8: kropki r5c9-r6c9 white
kropki-9: kropki r4c1-r4c2 black
kropki-10: kropki r8c3-r8c4 black
kropki-11: kropki r6c8-r7c8 black
palindrome r4c7-r5c6-r6c7-r6c8-r7c8-r8c8-r8c7-r9c6-r8c5-r8c4-r7c3-r6c2-r5c2-r4c1-r3c2-r2c2-r2c3-r2c4-r3c4-r3c5-r3c6
little-killer r1c2-r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9 sum 38
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
From either end of the grey palindrome, it will read the same (i e. row 3 column 6 and row 4 column 7 are the same digit).
Cells separated by a white dot are consecutive.
Digits in a dotted cage without repeat sum to the total in the top left corner of the cage (if given).
Cells separated by a black dot has one digit double the other (1:2 ratio).
Clues outside the grid sum the digits along the indicated diagonal, digits may repeat.
No negative constraints.
