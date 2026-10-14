---
format: open-rules
title: That's An Odd Point To Make...
setter: Will Power
source: https://sudokupad.app/l0i7jle6hc
case: https://sudoku-sleuth.com/cases/that-s-an-odd-point-to-make
library: https://rules.sudoku-sleuth.com/
status: read
exported: 302362d27c318fde427709274167ff41
---

```rules
sudoku 9x9
kropki r3c2-r4c2 white
arrow-1: arrow r8c5-r8c4-r7c3 bulb ["r8c6"]
arrow-2: arrow r5c1-r4c2 bulb ["r6c2"]
arrow-3: arrow r5c9-r6c8 bulb ["r4c8"]
arrow-4: arrow r2c6-r3c7 bulb ["r1c5"]
arrow-5: arrow r1c4-r1c3-r1c2 bulb ["r2c5"]
arrow-6: arrow r5c6-r5c5-r4c5 bulb ["r4c7"]
arrow-7: arrow r8c7-r7c7 bulb ["r9c6"]
arrow-8: arrow r9c1-r9c2 bulb ["r8c2"]
arrow-9: arrow r1c2-r2c2 bulb ["r1c1"]
arrow-10: arrow r7c1-r6c1 bulb ["r7c2"]
arrow-11: arrow r9c8-r8c9-r7c9 bulb ["r8c8"]
arrow-12: arrow r6c6-r7c6-r8c5 bulb ["r5c7"]
pointing-arrow-1: pointing-arrow cell "r7c3" ray ["r6c2","r5c1"] target "source" source "r8c6"
pointing-arrow-2: pointing-arrow cell "r4c2" ray ["r3c3","r2c4","r1c5"] target "source" source "r6c2"
pointing-arrow-3: pointing-arrow cell "r6c8" ray ["r7c7","r8c6","r9c5"] target "source" source "r4c8"
pointing-arrow-4: pointing-arrow cell "r3c7" ray ["r4c8","r5c9"] target "source" source "r1c5"
pointing-arrow-5: pointing-arrow cell "r1c2" ray ["r1c1"] target "source" source "r2c5"
pointing-arrow-6: pointing-arrow cell "r4c5" ray ["r3c5","r2c5","r1c5"] target "source" source "r4c7"
pointing-arrow-7: pointing-arrow cell "r7c7" ray ["r6c7","r5c7","r4c7","r3c7","r2c7","r1c7"] target "source" source "r9c6"
pointing-arrow-8: pointing-arrow cell "r9c2" ray ["r9c3","r9c4","r9c5","r9c6","r9c7","r9c8","r9c9"] target "source" source "r8c2"
pointing-arrow-9: pointing-arrow cell "r2c2" ray ["r3c2","r4c2","r5c2","r6c2","r7c2","r8c2","r9c2"] target "source" source "r1c1"
pointing-arrow-10: pointing-arrow cell "r6c1" ray ["r5c1","r4c1","r3c1","r2c1","r1c1"] target "source" source "r7c2"
pointing-arrow-11: pointing-arrow cell "r7c9" ray ["r6c9","r5c9","r4c9","r3c9","r2c9","r1c9"] target "source" source "r8c8"
pointing-arrow-12: pointing-arrow cell "r8c5" ray ["r9c4"] target "source" source "r5c7"
```

Normal Sudoku rules apply.

POINTER ARROWS(+)- Numbers on arrows sum to the number in the arrow's circle. Also, arrow tips point toward another cell containing the same digit as the arrow's circle. The value in the arrow tip indicates the distance from the arrow tip to this cell. Numbers may repeat on arrows, if other rules allow. Arrow circles are always odd.

KROPKI PAIR- Numbers with a white dot between them are consecutive. Not all possible dots are given.
