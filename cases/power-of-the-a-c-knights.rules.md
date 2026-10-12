---
format: open-rules
title: Power of the A/C Knights
setter: Tingo
source: https://tinyurl.com/poweroftheacknights
case: https://sudoku-sleuth.com/cases/power-of-the-a-c-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r4c1-r5c1 colour "white"
kropki-2: kropki r4c2-r5c2 colour "black"
kropki-3: kropki r7c6-r7c7 colour "black"
whispers-1: whispers r8c1-r8c2 gap 2
whispers-2: whispers r8c4-r7c4-r6c4 gap 2
whispers-3: whispers r7c6-r7c7-r6c7-r5c7 gap 2
whispers-4: whispers r4c1-r4c2-r5c2-r5c1-r6c1-r6c2 gap 2
whispers-5: whispers r1c5-r1c6-r1c7-r1c8-r1c9 gap 2
whispers-6: whispers r5c9-r6c8-r7c9-r8c9-r8c8-r9c7-r8c6 gap 2
pair-1: pair r1c5-r1c6 relation {"op":"sum","value":10}
pair-2: pair r5c2-r6c2 relation {"op":"sum","value":10}
pair-3: pair r5c7-r6c7 relation {"op":"sum","value":10}
```

Normal Sudoku Rules Apply
Cells separated by a knight's move (in chess) cannot contain the same digit.
Black lines are anti-consecutive lines. Adjacent digits along the line must differ in value by at least 2.
Cells joined by white dots are consecutive in value. Cells joined by black dots have values in ratio of 2:1. Not all dots are given.
Cells joined by X must sum to 10. Not all Xs are given.
Each set of cells along an anti-consecutive line represent a "knight". Each "knight" has a rank of 2,3,4,5,6 or 7. The length of the line determines the rank of the knight.  The sum of all cells along an A/C line must add up to the rank of the knight squared. E.G. The knight with the rank of 5 will have all connected cells summing to the value of 5^2 or 25.
