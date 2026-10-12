---
format: open-rules
title: The Power Of LK Knights
setter: Tingo
source: https://tinyurl.com/thepowerofthelkknights
case: https://sudoku-sleuth.com/cases/the-power-of-lk-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r3c1-r4c1 colour "black"
kropki-2: kropki r1c2-r1c3 colour "black"
kropki-3: kropki r2c6-r3c6 colour "black"
kropki-4: kropki r2c7-r3c7 colour "black"
kropki-5: kropki r7c8-r7c9 colour "black"
kropki-6: kropki r2c5-r2c6 colour "black"
kropki-7: kropki r4c5-r5c5 colour "black"
kropki-8: kropki r9c5-r9c6 colour "black"
kropki-9: kropki r8c4-r9c4 colour "black"
kropki-10: kropki r3c7-r4c7 colour "black"
kropki-11: kropki r3c6-r3c7 colour "black"
kropki-12: kropki r2c6-r2c7 colour "black"
kropki-13: kropki r9c3-r9c4 colour "black"
kropki-14: kropki r6c8-r7c8 colour "black"
pair-1: pair r7c9-r8c9 relation {"op":"sum","value":5}
pair-2: pair r3c7-r3c8 relation {"op":"sum","value":5}
pair-3: pair r1c6-r2c6 relation {"op":"sum","value":5}
pair-4: pair r1c2-r2c2 relation {"op":"sum","value":5}
pair-5: pair r4c1-r5c1 relation {"op":"sum","value":5}
negative relations [{"op":"ratio","value":2}] except [["r3c1","r4c1"],["r1c2","r1c3"],["r2c6","r3c6"],["r2c7","r3c7"],["r7c8","r7c9"],["r2c5","r2c6"],["r4c5","r5c5"],["r9c5","r9c6"],["r8c4","r9c4"],["r3c7","r4c7"],["r3c6","r3c7"],["r2c6","r2c7"],["r9c3","r9c4"],["r6c8","r7c8"],["r7c9","r8c9"],["r3c7","r3c8"],["r1c6","r2c6"],["r1c2","r2c2"],["r4c1","r5c1"]]
little-killer-1: little-killer r8c1-r9c2 sum 16
little-killer-2: little-killer r7c1-r8c2-r9c3 sum 9
little-killer-3: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 36
little-killer-4: little-killer r9c3-r8c4-r7c5-r6c6-r5c7-r4c8-r3c9 sum 49
little-killer-5: little-killer r9c8-r8c9 sum 4
little-killer-6: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 25
little-killer-7: little-killer r1c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1 sum 64
```

Normal Sudoku Rules Apply
Cells separated by a knight's move (in chess) cannot contain the same digit.
Cells separated by black dots have values in a 2:1 ratio. All black dots are given (negative constraint).
Cells joined by V must sum to 5. Not all Vs are given.
Each set of cells along a little killer clue represent a "knight". Each "knight" has a rank of 2,3,4,5, 6, 7 or 8. Unlike other puzzles in the series, the rank of the knight is not to be determined by the solver. This is just maintained for the sake of the puzzle series. The sum of all cells along a little killer must add up to the rank of the knight squared. E.G. The knight with the rank of 5 will have all connected cells summing to the value of 5^2 or 25.
