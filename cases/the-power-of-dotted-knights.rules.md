---
format: open-rules
title: The Power Of Dotted Knights
setter: Tingo
source: https://tinyurl.com/powerofthedottedknights
case: https://sudoku-sleuth.com/cases/the-power-of-dotted-knights
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r3c8-r4c8 colour "white"
kropki-2: kropki r4c7-r4c8 colour "white"
kropki-3: kropki r4c5-r4c6 colour "white"
kropki-4: kropki r5c5-r5c6 colour "white"
kropki-5: kropki r5c5-r6c5 colour "white"
kropki-6: kropki r5c4-r6c4 colour "white"
kropki-7: kropki r4c4-r5c4 colour "white"
kropki-8: kropki r4c3-r5c3 colour "white"
kropki-9: kropki r5c2-r5c3 colour "white"
kropki-10: kropki r5c1-r5c2 colour "white"
kropki-11: kropki r4c1-r5c1 colour "white"
kropki-12: kropki r8c2-r8c3 colour "white"
kropki-13: kropki r1c7-r1c8 colour "black"
kropki-14: kropki r8c2-r9c2 colour "black"
kropki-15: kropki r8c4-r9c4 colour "black"
kropki-16: kropki r8c3-r8c4 colour "black"
kropki-17: kropki r4c4-r4c5 colour "black"
kropki-18: kropki r6c4-r6c5 colour "black"
parity-cells r8c7 parity "even"
```

Normal Sudoku Rules Apply
Cells separated by a knight's move (in chess) cannot contain the same digit.
The value of the cell with the gray square is even.
Cells separated by white dots are consecutive in value. Cells separated by black dots have values in a 2:1 ratio. Not all dots are given.
Each set of cells connected by black and/or white dots (hitherto called a 'cluster') represents a "knight". Each "knight" has a rank of 2,3,4,5 or 6. The rank of the knight must be determined by the solver. The sum of all cells in a dot cluster must add up to the rank of the knight squared. E.G. The knight with the rank of 5 will have all connected cells summing to the value of 5^2 or 25.
