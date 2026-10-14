---
format: open-rules
title: Keystone Cops Pointer Arrows
setter: Will Power
source: https://sudokupad.app/qjv31o90bk
case: https://sudoku-sleuth.com/cases/keystone-cops-pointer-arrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2948f70fd589c956f24c9cd41dc97329
---

```rules
sudoku 9x9
arrow-1: arrow r5c7-r5c8-r6c7 bulb ["r4c6"]
arrow-2: arrow r8c8-r8c7-r8c6 bulb ["r7c9"]
arrow-3: arrow r9c2-r8c2-r7c2 bulb ["r8c1"]
arrow-4: arrow r7c6-r6c5-r5c4 bulb ["r8c5"]
arrow-5: arrow r3c1-r4c1-r4c2 bulb ["r3c2"]
arrow-6: arrow r2c9-r1c9-r1c8 bulb ["r3c9"]
arrow-7: arrow r2c8-r3c7 bulb ["r3c9"]
arrow-8: arrow r5c5-r4c5 bulb ["r6c6"]
arrow-9: arrow r1c3-r2c4-r3c5 bulb ["r1c2"]
arrow-10: arrow r2c3-r3c3 bulb ["r1c2"]
arrow-11: arrow r7c3-r7c4-r7c5 bulb ["r8c4"]
pair-1: pair r4c2-r4c3 sum 5
pair-2: pair r5c7-r5c8 sum 5
pair-3: pair r1c8-r2c8 sum 5
pair-4: pair r1c9-r2c9 sum 5
pair-5: pair r6c4-r6c5 sum 5
pointing-arrow-1: pointing-arrow cell "r6c7" ray ["r7c6","r8c5","r9c4"] target "source" source "r4c6"
pointing-arrow-2: pointing-arrow cell "r8c6" ray ["r8c5","r8c4","r8c3","r8c2","r8c1"] target "source" source "r7c9"
pointing-arrow-3: pointing-arrow cell "r7c2" ray ["r6c2","r5c2","r4c2","r3c2","r2c2","r1c2"] target "source" source "r8c1"
pointing-arrow-4: pointing-arrow cell "r5c4" ray ["r4c3","r3c2","r2c1"] target "source" source "r8c5"
pointing-arrow-5: pointing-arrow cell "r4c2" ray ["r4c3","r4c4","r4c5","r4c6","r4c7","r4c8","r4c9"] target "source" source "r3c2"
pointing-arrow-6: pointing-arrow cell "r1c8" ray ["r1c7","r1c6","r1c5","r1c4","r1c3","r1c2","r1c1"] target "source" source "r3c9"
pointing-arrow-7: pointing-arrow cell "r3c7" ray ["r4c6","r5c5","r6c4","r7c3","r8c2","r9c1"] target "source" source "r3c9"
pointing-arrow-8: pointing-arrow cell "r4c5" ray ["r3c5","r2c5","r1c5"] target "source" source "r6c6"
pointing-arrow-9: pointing-arrow cell "r3c5" ray ["r4c6","r5c7","r6c8","r7c9"] target "source" source "r1c2"
pointing-arrow-10: pointing-arrow cell "r3c3" ray ["r4c3","r5c3","r6c3","r7c3","r8c3","r9c3"] target "source" source "r1c2"
pointing-arrow-11: pointing-arrow cell "r7c5" ray ["r7c6","r7c7","r7c8","r7c9"] target "source" source "r8c4"
```

Thanks to LMD setter @Arbitrary and YouTube Solver @Sudoku Sleuth for introducing the new ruleset "Pointer Arrows" to the community. Normal Sudoku rules apply. POINTER ARROWS- Numbers on arrows sum to the number in the arrow's circle. Also, arrow tips point toward another cell containing the digit within the arrow's circle. The value in the arrow tip indicates the distance from the arrow tip to this cell. Numbers do not repeat on arrows. XV- Numbers with a V between them sum to 5. Not all possible V are given.
