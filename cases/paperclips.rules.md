---
format: open-rules
title: Paperclips
setter: Jobo
source: https://tinyurl.com/43zj5d3r
case: https://sudoku-sleuth.com/cases/paperclips
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c1-r8c1 colour "white"
kropki-2: kropki r7c3-r8c3 colour "white"
kropki-3: kropki r2c7-r3c7 colour "white"
kropki-4: kropki r2c9-r3c9 colour "white"
kropki-5: kropki r7c2-r8c2 colour "white"
kropki-6: kropki r6c2-r7c2 colour "white"
kropki-7: kropki r2c8-r3c8 colour "white"
kropki-8: kropki r3c8-r4c8 colour "white"
kropki-9: kropki r5c4-r5c5 colour "black"
kropki-10: kropki r5c5-r5c6 colour "black"
palindrome-1: palindrome r4c5-r5c4-r6c3-r6c2-r5c1-r4c1-r3c2-r2c3-r1c4-r1c5-r2c6-r3c5-r4c4-r3c3-r2c4
palindrome-2: palindrome r7c8-r8c7-r9c6-r9c5-r8c4-r7c4-r6c5-r5c6-r4c7-r4c8-r5c9-r6c8-r7c7-r6c6-r5c7
```

Normal sudoku rules apply.

Grey lines are palindromes and must read the same in both directions. Additionally, adjacent digits along palindromes must alternate in parity (odd/even).

Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
