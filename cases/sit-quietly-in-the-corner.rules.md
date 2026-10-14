---
format: open-rules
title: Sit Quietly in the Corner
setter: EPH
source: https://tinyurl.com/yc4bdr59
case: https://sudoku-sleuth.com/cases/sit-quietly-in-the-corner
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 8cf142e371d69fd120fc427e1040e111
---

```rules
sudoku 9x9
cage r9c4-r9c5-r9c6 total 17 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow r1c4-r1c5-r1c6 bulb ["r2c4"]
whispers-1: whispers r2c3-r2c2-r3c2-r3c3 gap 5
whispers-2: whispers r2c3-r3c3 gap 5
whispers-3: whispers r1c7-r1c8-r1c9-r2c9-r3c9 gap 5
whispers-4: whispers r7c7-r7c8-r8c8-r8c7 gap 5
whispers-5: whispers r7c7-r8c7 gap 5
whispers-6: whispers r7c1-r8c1-r9c1-r9c2-r9c3 gap 5
little-killer-1: little-killer r1c6-r2c7-r3c8-r4c9 sum 21
little-killer-2: little-killer r6c9-r7c8-r8c7-r9c6 sum 20
little-killer-3: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 27
little-killer-4: little-killer r6c1-r5c2-r4c3-r3c4-r2c5-r1c6 sum 27
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5],[2.5,7.5],[2.5,6.5]],"color":"#F272F2","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5]],"color":"#F272F2","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,2.5],[7.5,2.5],[7.5,1.5]],"color":"#F272F2","thickness":16,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,1.5]],"color":"#F272F2","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,1.5],[0.5,0.5],[1.5,0.5],[2.5,0.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,8.5],[8.5,8.5],[8.5,7.5],[8.5,6.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
```

Normal sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits within cages must sum to the number in the upper left corner of the cage.

Clues outside the grid show the sum of the digits on the indicated diagonal.  Digits may repeat if allowed by the other rules.

Digits on arrows must sum to the digit in the attached circle.

Each (marked) long diagonal contains no repeat digits.

Adjacent digits along a green line must differ by at least 5
.
Digits along a purple line must form a sequence of consecutive digits in any order, with no repeats.
