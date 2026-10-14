---
format: open-rules
title: Arrows Point the Way
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/arrows-point-the-way
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=5 r2c8=2 r5c4=4 r5c6=6 r8c2=3 r8c8=4
exported: ff0a868add0efea81508f680dc165e94
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6 total 12 connected true
cage-2: cage r4c3-r5c3-r6c3 total 13 connected true
cage-3: cage r4c7-r5c7-r6c7 total 10 connected true
cage-4: cage r7c4-r7c5-r7c6 total 12 connected true
thermo r1c3-r1c2
arrow-1: arrow r7c6-r6c7 bulb ["r8c5"]
arrow-2: arrow r4c7-r3c6 bulb ["r5c8"]
arrow-3: arrow r3c4-r4c3 bulb ["r2c5"]
arrow-4: arrow r6c3-r7c4 bulb ["r5c2"]
pair-1: pair r4c4-r4c5 sum 10
pair-2: pair r6c4-r6c5 sum 10
little-killer-1: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 21
little-killer-2: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 20
little-killer-3: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 20
little-killer-4: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 21
```

Normal Sudoku rules apply.  Arrows- Numbers on arrows sum to the number in the arrow's circle.  Numbers on arrows can repeat, if other rules allow.  Little Killer Clues-  Numbers outside the grid indicate the sum of the digits on the indicated diagonal.  Numbers can repeat on diagonals, if other rules allow.  Killer Cages-  Numbers in cages sum to the number in the top left corner of the cage.  Numbers cannot repeat in cages.  Thermometer-Numbers on a thermometer increase from the bulb end. 
Numbers adjacent to an X sum to 10.
