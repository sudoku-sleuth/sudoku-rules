---
format: open-rules
title: Windshield Wipers
setter: sujoyku
source: https://sudokupad.app/wblgjra58i
case: https://sudoku-sleuth.com/cases/windshield-wipers
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
region-sum-1: region-sum r6c7-r7c6-r8c5-r9c4 segments [["r6c7"],["r7c6","r8c5","r9c4"]]
region-sum-2: region-sum r4c3-r3c4-r2c5-r1c6 segments [["r4c3"],["r3c4","r2c5","r1c6"]]
region-sum-3: region-sum r4c7-r5c7-r6c8-r7c8-r8c8 segments [["r4c7","r5c7","r6c8"],["r7c8","r8c8"]]
region-sum-4: region-sum r6c3-r5c3-r4c2-r3c2-r2c2 segments [["r6c3","r5c3","r4c2"],["r3c2","r2c2"]]
pair-1: pair r3c1-r4c1 sum 10
pair-2: pair r9c2-r9c3 sum 10
pair-3: pair r1c7-r1c8 sum 5
pair-4: pair r6c9-r7c9 sum 5
quadruple-1: quadruple r1c3-r1c4-r2c3-r2c4 digits [2,3,4,5]
quadruple-2: quadruple r2c6-r2c7-r3c6-r3c7 digits [4,5,6,7]
quadruple-3: quadruple r7c3-r7c4-r8c3-r8c4 digits [6,7,8,9]
quadruple-4: quadruple r8c6-r8c7-r9c6-r9c7 digits [1,2,8,9]
quadruple-5: quadruple r4c8-r4c9-r5c8-r5c9 digits [1,5,7,9]
quadruple-6: quadruple r5c1-r5c2-r6c1-r6c2 digits [2,4,6,8]
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Quadruple: Digits in a circle must appear in the four surrounding cells.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)

- XV: Digits joined by a V sum to 5. Digits joined by an X sum to 10. Not all XV are given.
