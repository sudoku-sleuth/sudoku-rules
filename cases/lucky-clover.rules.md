---
format: open-rules
title: Lucky Clover
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/lucky-clover
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9f73c8369a40a4e6445758738cc52736
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r3c5 black
kropki-2: kropki r8c5-r9c5 black
kropki-3: kropki r3c5-r4c5 black
kropki-4: kropki r2c4-r3c4 black
kropki-5: kropki r2c6-r2c7 black
kropki-6: kropki r5c1-r5c2 black
palindrome-1: palindrome r4c3-r3c2-r2c2-r1c3-r1c4-r2c5-r3c5
palindrome-2: palindrome r3c6-r2c7-r2c8-r3c9-r4c9-r5c8-r5c7
palindrome-3: palindrome r6c7-r7c8-r8c8-r9c7-r9c6-r8c5-r7c5
palindrome-4: palindrome r7c4-r8c3-r8c2-r7c1-r6c1-r5c2-r5c3
palindrome-5: palindrome r2c4-r3c4-r4c5-r4c6-r4c7
palindrome-6: palindrome r8c6-r7c6-r6c5-r6c4-r6c3
```

Normal Sudoku rules apply.
ROTATIONAL SYMMETRY- Cells 180 degree rotation apart sum to 10. 
PALINDROME LINES- Cells an equal distance from both ends of a line are the same number. 
KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
