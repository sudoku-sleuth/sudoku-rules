---
format: open-rules
title: Deluge
setter: Will Power
source: https://sudokupad.app/j80403skqw
case: https://sudoku-sleuth.com/cases/deluge
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c8-r8c8 total 10 connected true
cage-2: cage r1c2-r2c2 total 10 connected true
cage-3: cage r8c9-r9c9 total 10 connected true
cage-4: cage r2c6-r3c6 total 10 connected true
cage-5: cage r4c4-r5c4 total 11 connected true
cage-6: cage r4c5-r5c5 total 11 connected true
cage-7: cage r5c6-r6c6 total 11 connected true
cage-8: cage r2c4-r3c4 total 10 connected true
cage-9: cage r9c6-r9c7 total 11 connected true
cage-10: cage r1c5-r1c6-r1c7-r1c8 total 10 connected true
cage-11: cage r8c5-r9c5 total 12 connected true
arrow-1: arrow r3c3-r4c2 bulb ["r2c4"]
arrow-2: arrow r4c4-r5c3 bulb ["r3c5"]
arrow-3: arrow r5c5-r6c4 bulb ["r4c6"]
arrow-4: arrow r6c6-r7c5 bulb ["r5c7"]
arrow-5: arrow r7c7-r8c6 bulb ["r6c8"]
arrow-6: arrow r2c2-r3c1 bulb ["r1c3"]
arrow-7: arrow r2c3-r3c2 bulb ["r1c4"]
arrow-8: arrow r3c4-r4c3 bulb ["r2c5"]
arrow-9: arrow r4c5-r5c4 bulb ["r3c6"]
arrow-10: arrow r5c6-r6c5 bulb ["r4c7"]
arrow-11: arrow r6c7-r7c6 bulb ["r5c8"]
arrow-12: arrow r7c8-r8c7 bulb ["r6c9"]
extremum r3c5-r2c4 type "max" exhaustive false
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers do not repeat on arrows.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

MAXIMUMS- Numbers in the two cells shaded gray are greater than all 4 orthogonally adjacent cells.
