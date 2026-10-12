---
format: open-rules
title: "5: The Odd Man Out"
setter: Tingo
source: https://tinyurl.com/5theoddmanoutsudoku
case: https://sudoku-sleuth.com/cases/5-the-odd-man-out
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c3-r4c4 colour "white"
kropki-2: kropki r4c4-r4c5 colour "white"
kropki-3: kropki r7c8-r8c8 colour "white"
palindrome-1: palindrome r3c2-r2c3-r3c3-r2c4-r3c4-r4c5
palindrome-2: palindrome r4c3-r5c4
palindrome-3: palindrome r2c7-r3c8-r4c9-r5c8
palindrome-4: palindrome r5c6-r6c7-r7c8-r8c7
palindrome-5: palindrome r5c2-r6c1-r6c2-r7c2-r7c1
pair-1: pair r1c1-r1c2 relation {"op":"sum","value":10}
pair-2: pair r7c4-r8c4 relation {"op":"sum","value":10}
pair-3: pair r7c2-r7c3 relation {"op":"sum","value":5}
pair-4: pair r1c5-r2c5 relation {"op":"sum","value":5}
pair-5: pair r5c1-r6c1 relation {"op":"sum","value":5}
pair-6: pair r9c5-r9c6 relation {"op":"sum","value":5}
pair-7: pair r8c7-r9c7 relation {"op":"sum","value":5}
pair-8: pair r4c7-r5c7 relation {"op":"sum","value":5}
pair-9: pair r1c8-r2c8 relation {"op":"sum","value":5}
pair-10: pair r3c9-r4c9 relation {"op":"sum","value":5}
pair-11: pair r6c4-r6c5 relation {"op":"sum","value":5}
parity-cells-1: parity-cells r3c1-r6c3-r7c6-r1c3 parity "odd"
parity-cells-2: parity-cells r6c9 parity "even"
```

Normal Sudoku Rules Apply
Cells connected by Xs sum to 10. Cells connected by Vs sum to 5. Not all Xs or Vs are given.
Cells with gray circles contain odd digits
Cells with gray squares contain even digits
Cells separated by white dots are consecutive in value. Not all white dots are given.
Gray Lines are palindromes and must read the same both forward and backward. Additionally, palindromes contain only odd digits.
All 5s in the grid must be orthogonally adjacent to odd digits.
