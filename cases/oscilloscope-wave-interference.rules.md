---
format: open-rules
title: Oscilloscope Wave Interference
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/oscilloscope-wave-interference
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r9c8-r9c9 total 10 connected true
cage-2: cage r6c8-r6c9 total 12 connected true
cage-3: cage r5c5-r5c6 total 9 connected true
cage-4: cage r6c2-r6c3 total 12 connected true
cage-5: cage r4c3-r4c4 total 11 connected true
cage-6: cage r3c1-r4c1 total 14 connected true
cage-7: cage r8c4-r8c5 total 12 connected true
whispers-1: whispers r3c5-r2c5-r3c6-r2c6-r3c7-r2c7-r3c8-r2c8-r3c9-r2c9 gap 4
whispers-2: whispers r6c9-r6c8-r6c7-r7c6-r7c5-r7c4-r6c3-r6c2-r6c1 gap 4
whispers-3: whispers r2c1-r3c1-r2c2-r3c2-r2c3-r3c3-r2c4-r3c4 gap 5
whispers-4: whispers r5c1-r5c2-r4c3-r4c4-r5c5-r5c6-r4c7-r4c8-r5c9 gap 5
quadruple-1: quadruple r7c2-r7c3-r8c2-r8c3 digits [4,5,7,9]
quadruple-2: quadruple r8c5-r8c6-r9c5-r9c6 digits [2,3,4,5]
quadruple-3: quadruple r7c8-r7c9-r8c8-r8c9 digits [2,4,5,6]
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on lines, if other rules allow. QUADRUPLES- Numbers in circles show the numbers in the four cells around the circle, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The 9 is repeated in its cage because the green line obscures the 9 in some puzzle formats.
