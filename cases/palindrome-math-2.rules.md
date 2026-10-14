---
format: open-rules
title: Palindrome math
setter: Chip Sounder
source: https://sudokupad.app/045bfzixas
case: https://sudoku-sleuth.com/cases/palindrome-math-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6d9f83507fe1e5d8f7ec981227dd0829
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r5c2-r6c2-r7c2-r7c3 connected true
cage-2: cage r6c6-r6c7-r6c8-r7c8-r8c5-r8c6-r8c7-r8c8-r9c6 connected true
cage-3: cage r1c7-r2c5-r2c6-r2c7-r3c5 total 22 connected true
kropki-1: kropki r8c4-r8c5 white
kropki-2: kropki r7c2-r7c3 white
kropki-3: kropki r4c2-r5c2 white
kropki-4: kropki r8c7-r8c8 white
kropki-5: kropki r6c2-r7c2 white
kropki-6: kropki r6c7-r6c8 white
kropki-7: kropki r1c9-r2c9 white
kropki-8: kropki r2c5-r3c5 white
kropki-9: kropki r4c1-r4c2 black
kropki-10: kropki r8c3-r8c4 black
kropki-11: kropki r6c8-r7c8 black
kropki-12: kropki r8c6-r9c6 black
palindrome r3c5-r2c6-r1c7-r1c6-r1c5-r2c4-r1c3-r1c2-r1c1-r2c2-r3c2-r4c1-r5c2-r6c2-r7c3-r8c4-r8c5-r9c6-r8c7-r8c8-r7c8-r6c8-r6c7-r6c6-r5c6-r5c7-r4c8-r3c8-r2c9
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
From either end of the grey palindrome, it will read the same (i e. row 3 column 6 and row 4 column 7 are the same digit).
Cells separated by a white dot are consecutive.
Digits in a dotted cage without repeat sum to the total in the top left corner of the cage (if given).
Cells separated by a black dot has one digit double the other (1:2 ratio).
No negative constraints.
