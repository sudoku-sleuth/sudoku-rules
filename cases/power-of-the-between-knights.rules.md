---
format: open-rules
title: Power of the Between Knights
setter: Tingo
source: https://tinyurl.com/powerofthebetweenknightssudoku
case: https://sudoku-sleuth.com/cases/power-of-the-between-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
kropki r5c8-r5c9 colour "white"
between-1: between r1c2-r1c1-r2c1 ends ["r1c3","r3c1"]
between-2: between r4c9-r5c8 ends ["r5c9","r5c7"]
between-3: between r7c5-r7c6-r8c6-r8c5 ends ["r7c4","r8c4"]
between-4: between r8c3 ends ["r7c2","r7c3"]
between-5: between r2c5-r3c4-r4c3-r5c4-r6c4 ends ["r3c6","r5c3"]
pair-1: pair r1c3-r1c4 sum 10
pair-2: pair r1c1-r1c2 sum 10
pair-3: pair r6c2-r7c2 sum 5
pair-4: pair r7c3-r8c3 sum 5
pair-5: pair r8c3-r8c4 sum 5
pair-6: pair r4c7-r5c7 sum 5
```

Normal Sudoku Rules Apply
Cells separated by a knight's move (in chess) cannot contain the same digit.
Digits along a line in a "between line" must have values between the values in the circles at the end of the line.
Cells separated by white dots are consecutive in value. Not all white dots are given.
Cells joined by V must sum to 5. Cells joined by X must sum to 10. Not all Vs or Xs are given.
Each set of cells along a between line clue represent a "knight". Each "knight" has a rank of 3,4,5,6 or 7. The length of the between line, including the terminating circles, determines the rank of the knight.  The sum of all cells along a between line, including the terminating circles, must add up to the rank of the knight squared. E.G. The knight with the rank of 5 will have all connected cells summing to the value of 5^2 or 25.
