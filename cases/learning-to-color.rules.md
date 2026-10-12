---
format: open-rules
title: Learning to Color
setter: The Bard
source: https://sudokupad.app/eaxa9jznzn
case: https://sudoku-sleuth.com/cases/learning-to-color
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c2-r2c1 sum 11
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 22
little-killer-3: little-killer r2c9-r3c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2 sum 21
little-killer-4: little-killer r1c6-r2c7-r3c8-r4c9 sum 12
little-killer-5: little-killer r8c1-r9c2 sum 10
unique-1: unique r1c3-r1c4-r1c5-r2c3-r2c4-r2c5-r3c3-r3c4-r3c5
unique-2: unique r3c7-r3c8-r3c9-r4c7-r4c8-r4c9-r5c7-r5c8-r5c9
unique-3: unique r7c5-r7c6-r7c7-r8c5-r8c6-r8c7-r9c5-r9c6-r9c7
unique-4: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3-r7c1-r7c2-r7c3
clone-1: clone r1c3-r3c7-r7c5-r5c1
clone-2: clone r1c4-r3c8-r7c6-r5c2
clone-3: clone r1c5-r3c9-r7c7-r5c3
clone-4: clone r2c3-r4c7-r8c5-r6c1
clone-5: clone r2c4-r4c8-r8c6-r6c2
clone-6: clone r2c5-r4c9-r8c7-r6c3
clone-7: clone r3c3-r5c7-r9c5-r7c1
clone-8: clone r3c4-r5c8-r9c6-r7c2
clone-9: clone r3c5-r5c9-r9c7-r7c3
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.

Clone Regions: Shaded boxes act as extra regions that do not repeat digits in the given box, and also as clones where each digit is in the same position in each shaded region. 

Little Killer: Clues outside the grid with an arrow are the sum of the digits in the cells along the indicated diagonal. Digits may repeat along these diagonals if allowed by other rules.
