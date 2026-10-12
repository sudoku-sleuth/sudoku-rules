---
format: open-rules
title: Isobars
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vtftn0fwtv
case: https://sudoku-sleuth.com/cases/isobars
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=4 r2c2=2 r5c5=3 r6c1=8 r9c7=6
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r4c8 colour "white"
kropki-2: kropki r4c1-r4c2 colour "white"
kropki-3: kropki r7c6-r7c7 colour "white"
kropki-4: kropki r6c4-r6c5 colour "white"
kropki-5: kropki r7c3-r7c4 colour "white"
kropki-6: kropki r2c5-r2c6 colour "white"
kropki-7: kropki r1c3-r1c4 colour "white"
same-class-1: same-class r8c2-r9c3-r9c4 classes "entropy"
same-class-2: same-class r2c3-r1c4-r1c5 classes "entropy"
same-class-3: same-class r1c7-r1c8-r2c9 classes "entropy"
same-class-4: same-class r8c6-r8c7-r7c8-r6c9-r5c9 classes "entropy"
same-class-5: same-class r8c5-r8c4-r7c3-r6c2-r5c2-r4c2-r3c3 classes "entropy"
same-class-6: same-class r6c4-r5c4-r4c5 classes "entropy"
same-class-7: same-class r6c5-r5c6-r4c6 classes "entropy"
same-class-8: same-class r7c6-r6c7-r5c8-r4c8-r3c7-r2c6 classes "entropy"
same-class-9: same-class r4c4-r4c3-r5c3-r6c3-r7c4-r7c5-r6c6-r5c7-r4c7-r3c6-r3c5 classes "entropy"
same-class-10: same-class r3c5-r4c4 classes "entropy"
```

Normal sudoku constraints: every row, column, and box must contain a complete set of the digits 1-9.

Kropki pairs: cells separated by a white dot form a consecutive pairs. Not all possible dots are given.

Isobars (blue lines) have the same pressure along the entire line: either all the digits are low {1,2,3}, all the digits are middle {4, 5, 6} or all the digits are high {7, 8, 9}.
