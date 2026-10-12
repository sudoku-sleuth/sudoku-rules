---
format: open-rules
title: Careful On The Slopes
setter: EPH
source: https://sudokupad.app/a4bdss7ttr
case: https://sudoku-sleuth.com/cases/careful-on-the-slopes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c4 total 7 connected true
cage-2: cage r2c6-r3c6 total 8 connected true
cage-3: cage r7c4-r8c4 total 7 connected true
cage-4: cage r7c6-r8c6 total 8 connected true
cage-5: cage r4c2-r4c3 total 9 connected true
cage-6: cage r4c7-r4c8 total 13 connected true
cage-7: cage r6c2-r6c3 total 15 connected true
cage-8: cage r6c7-r6c8 total 12 connected true
arrow-1: arrow r2c2-r3c3-r4c4-r3c5 bulb ["r1c1"]
arrow-2: arrow r8c8-r7c7-r6c6-r7c5 bulb ["r9c9"]
arrow-3: arrow r1c7-r1c8-r1c9 bulb ["r1c6"]
arrow-4: arrow r9c3-r9c2-r9c1 bulb ["r9c4"]
limited-digits-1: limited-digits r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 max 3
limited-digits-2: limited-digits r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 max 3
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0,0],[9,9]],"color":"#66ffe8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#66ffe8ff","thickness":6.4,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Anti-diagonal: each of the major diagonals (marked in blue) may use only three digits.

Arrows: digits on an arrow must sum to the value in the attached circle.

Cages: digits in a cage must sum to the value in the top left corner of the cage.
