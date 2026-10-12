---
format: open-rules
title: Broken Mirrors
setter: Jobo
source: https://sudokupad.app/p8scz9vlst
case: https://sudoku-sleuth.com/cases/broken-mirrors
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 colour "black"
kropki-2: kropki r2c4-r2c5 colour "black"
kropki-3: kropki r2c9-r3c9 colour "black"
kropki-4: kropki r8c7-r9c7 colour "black"
kropki-5: kropki r9c5-r9c6 colour "black"
kropki-6: kropki r6c2-r6c3 colour "black"
kropki-7: kropki r7c2-r7c3 colour "black"
kropki-8: kropki r4c8-r4c9 colour "black"
kropki-9: kropki r3c2-r3c3 colour "white"
kropki-10: kropki r4c3-r4c4 colour "white"
kropki-11: kropki r6c8-r6c9 colour "white"
kropki-12: kropki r7c9-r8c9 colour "white"
kropki-13: kropki r1c5-r1c6 colour "white"
kropki-14: kropki r1c7-r2c7 colour "white"
palindrome-1: palindrome r1c1-r1c2-r1c3-r1c4-r2c4-r2c5-r3c5
palindrome-2: palindrome r1c8-r1c9-r2c9-r3c9-r4c9-r4c8-r5c8-r5c7-r5c6
palindrome-3: palindrome r6c5-r5c5-r4c5-r4c4-r4c3-r3c3-r3c2-r3c1-r2c1
palindrome-4: palindrome r5c4-r5c3-r5c2-r6c2-r6c3-r6c4-r7c4-r7c3-r7c2-r7c1-r8c1-r9c1-r9c2
palindrome-5: palindrome r9c4-r9c5-r9c6-r9c7-r8c7-r7c7-r7c8
palindrome-6: palindrome r6c7-r6c8-r6c9-r7c9-r8c9
palindrome-7: palindrome r3c7-r2c7-r1c7-r1c6-r1c5
```

Normal sudoku rules apply.

Grey lines are palindromes and must read the same in both directions.

Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
