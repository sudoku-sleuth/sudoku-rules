---
format: open-rules
title: Sticks And Stones
setter: Jobo
source: https://tinyurl.com/23x2mmf6
case: https://sudoku-sleuth.com/cases/sticks-and-stones-3
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c9=1
---

```rules
sudoku 9x9
anti-knight
anti-king
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r5c5-r6c5 colour "white"
kropki-3: kropki r5c4-r5c5 colour "black"
kropki-4: kropki r5c5-r5c6 colour "black"
palindrome-1: palindrome r6c6-r7c5-r8c4
palindrome-2: palindrome r4c4-r3c5-r2c6
negative relations [{"op":"sum","value":5},{"op":"sum","value":10}] except [["r4c5","r5c5"],["r5c5","r6c5"],["r5c4","r5c5"],["r5c5","r5c6"]]
```

Normal sudoku rules apply.

Cells separated by a knight's move or a king's move cannot contain the same digit.

Any two orthogonally adjacent cells cannot sum to 5 or 10.

Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.

Grey lines are palindromes and must read the same in both directions.
