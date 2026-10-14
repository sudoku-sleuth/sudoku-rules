---
format: open-rules
title: Diagonal Index Puzzle
setter: EPH
source: https://tinyurl.com/3r3yabp7
case: https://sudoku-sleuth.com/cases/diagonal-index-puzzle
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
exported: 9df6cd803fc4923fd44c275c01b4946f
---

```rules
sudoku 9x9
diagonal direction "anti"
whispers-1: whispers r4c6-r4c5-r4c4-r5c4 gap 5
whispers-2: whispers r5c6-r6c6-r6c5-r6c4 gap 5
whispers-3: whispers r2c3-r2c2-r3c2 gap 5
whispers-4: whispers r7c8-r8c8-r8c7 gap 5
whispers-5: whispers r5c7-r5c8-r5c9 gap 5
whispers-6: whispers r5c1-r5c2-r5c3 gap 5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Green lines are German whispers lines: consecutive digits along a line must have a difference of at least 5.

The marked diagonal must have no repeat digits.  In addition, the diagonal is an index line: a digit on the line gives the row in which the column number appears, and the column in which the row number appears.  E.g. if R1C9 were 4, then R4C9=1 and R1C4=9.
