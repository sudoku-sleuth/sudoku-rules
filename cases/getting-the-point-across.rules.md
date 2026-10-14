---
format: open-rules
title: Getting the Point Across
setter: Will Power
source: https://sudokupad.app/xz0xo85k3y
case: https://sudoku-sleuth.com/cases/getting-the-point-across
library: https://rules.sudoku-sleuth.com/
status: read
exported: b6f93f0bd88b6084f00a11848b4fc07e
---

```rules
sudoku 9x9
cage-1: cage r7c2-r8c2 total 5 connected true
cage-2: cage r3c9-r4c9 total 7 connected true
cage-3: cage r1c3-r2c3-r2c4 total 8 connected true
arrow-1: arrow r6c3-r5c4 bulb ["r7c4"]
arrow-2: arrow r2c7-r2c6 bulb ["r1c8"]
arrow-3: arrow r6c8-r7c7-r7c6 bulb ["r5c7"]
arrow-4: arrow r1c3-r2c4-r3c5 bulb ["r2c3"]
arrow-5: arrow r8c2-r7c2-r6c2 bulb ["r9c1"]
arrow-6: arrow r3c3-r4c4-r5c5 bulb ["r2c2"]
arrow-7: arrow r9c8-r9c7 bulb ["r8c8"]
arrow-8: arrow r3c9-r4c9-r4c8 bulb ["r2c9"]
arrow-9: arrow r6c5-r5c6 bulb ["r6c6"]
arrow-10: arrow r6c2-r7c1-r8c1 bulb ["r5c3"]
pointing-arrow-1: pointing-arrow cell "r5c4" ray ["r4c5","r3c6","r2c7","r1c8"] target "source" source "r7c4"
pointing-arrow-2: pointing-arrow cell "r2c6" ray ["r2c5","r2c4","r2c3","r2c2","r2c1"] target "source" source "r1c8"
pointing-arrow-3: pointing-arrow cell "r7c6" ray ["r7c5","r7c4","r7c3","r7c2","r7c1"] target "source" source "r5c7"
pointing-arrow-4: pointing-arrow cell "r3c5" ray ["r4c6","r5c7","r6c8","r7c9"] target "source" source "r2c3"
pointing-arrow-5: pointing-arrow cell "r6c2" ray ["r5c2","r4c2","r3c2","r2c2","r1c2"] target "source" source "r9c1"
pointing-arrow-6: pointing-arrow cell "r5c5" ray ["r6c6","r7c7","r8c8","r9c9"] target "source" source "r2c2"
pointing-arrow-7: pointing-arrow cell "r9c7" ray ["r9c6","r9c5","r9c4","r9c3","r9c2","r9c1"] target "source" source "r8c8"
pointing-arrow-8: pointing-arrow cell "r4c8" ray ["r4c7","r4c6","r4c5","r4c4","r4c3","r4c2","r4c1"] target "source" source "r2c9"
pointing-arrow-9: pointing-arrow cell "r5c6" ray ["r4c7","r3c8","r2c9"] target "source" source "r6c6"
pointing-arrow-10: pointing-arrow cell "r8c1" ray ["r9c1"] target "source" source "r5c3"
```

Normal Sudoku rules apply. POINTER ARROWS- Numbers on arrows sum to the number in the arrow's circle. Also, arrow tips point toward another cell containing the same digit as the arrow's circle. The value in the arrow tip indicates the distance from the arrow tip to this cell. Numbers may repeat on arrows, if other rules allow. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages.
