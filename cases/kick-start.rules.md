---
format: open-rules
title: Kick-start
setter: Will Power
source: https://sudokupad.app/sy0hhrfi12
case: https://sudoku-sleuth.com/cases/kick-start
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: f4973ab036d64822763acb4c805c2db1
---

```rules
sudoku 9x9
cage-1: cage r6c3-r7c2-r7c3-r7c4-r8c3 total 15 connected true
cage-2: cage r3c4-r3c5 total 16 connected true
arrow-1: arrow r3c2-r4c3 bulb ["r2c1"]
arrow-2: arrow r4c3-r3c4 bulb ["r5c2"]
arrow-3: arrow r3c4-r2c3 bulb ["r4c5"]
arrow-4: arrow r2c3-r3c2 bulb ["r1c4"]
arrow-5: arrow r2c7-r3c6 bulb ["r1c8"]
arrow-6: arrow r3c6-r4c7 bulb ["r2c5"]
arrow-7: arrow r4c7-r3c8 bulb ["r5c6"]
arrow-8: arrow r3c8-r2c7 bulb ["r4c9"]
arrow-9: arrow r6c3-r7c2 bulb ["r5c4"]
arrow-10: arrow r7c2-r8c3 bulb ["r6c1"]
arrow-11: arrow r8c3-r7c4 bulb ["r9c2"]
arrow-12: arrow r7c4-r6c3 bulb ["r8c5"]
arrow-13: arrow r9c7-r9c8 bulb ["r9c6"]
arrow-14: arrow r6c9-r5c9 bulb ["r7c9"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat on arrows or in cages. The cells shaded orange are the same number as one another.
