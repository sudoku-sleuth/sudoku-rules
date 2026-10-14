---
format: open-rules
title: No logical steps found 3.. quietly doing sums
setter: Chip Sounder
source: https://sudokupad.app/oqe5o52oz9
case: https://sudoku-sleuth.com/cases/no-logical-steps-found-3-quietly-doing-sums
library: https://rules.sudoku-sleuth.com/
status: read
exported: d56b3de60adcabfee9d89c1db1f3c2a4
---

```rules
sudoku 9x9
cage-1: cage r7c8-r7c9-r8c8-r8c9 total 24 connected true
cage-2: cage r7c1-r8c1 total 3 connected true
cage-3: cage r3c8-r3c9 total 9 connected true
kropki-1: kropki r7c3-r8c3 black
kropki-2: kropki r4c1-r5c1 black
kropki-3: kropki r2c8-r2c9 black
kropki-4: kropki r7c5-r8c5 black
whispers-1: whispers r9c3-r9c4-r9c5-r9c6-r9c7 gap 5
whispers-2: whispers r1c7-r1c6-r1c5-r1c4-r1c3 gap 5
palindrome-1: palindrome r5c3-r6c3-r7c2-r8c2
palindrome-2: palindrome r5c5-r6c5-r7c4-r8c4
palindrome-3: palindrome r5c7-r6c7-r7c6-r8c6
palindrome-4: palindrome r2c7-r3c7-r4c8-r4c9
palindrome-5: palindrome r2c3-r3c3-r4c2-r4c1
palindrome-6: palindrome r3c5-r4c6
palindrome-7: palindrome r2c5-r3c4-r4c4
little-killer-1: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 46
little-killer-2: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 35
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits on a grey palindrome must read the same forwards as backwards.
Adjacent digits along a green line must differ by at least 5.
Digits in a dotted cage without repeat sum to the total given.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Clues outside the grid sum the digits along the indicated diagonal, digits may repeat.
