---
format: open-rules
title: Sudoku With One Given Digit
setter: Will Power
source: https://sudokupad.app/fb3nf3hn5w
case: https://sudoku-sleuth.com/cases/sudoku-with-one-given-digit
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r4c4=4
exported: 6cadd1e347ffda4ec2328cde0729561e
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c3 white
kropki-2: kropki r4c3-r5c3 white
kropki-3: kropki r5c2-r5c3 white
kropki-4: kropki r5c7-r6c7 white
kropki-5: kropki r6c7-r6c8 white
arrow-1: arrow r5c5-r6c4-r7c3 bulb ["r5c6"]
arrow-2: arrow r5c5-r4c4-r3c3 bulb ["r6c5"]
arrow-3: arrow r5c5-r4c6-r3c7 bulb ["r5c4"]
arrow-4: arrow r5c5-r6c6-r7c7 bulb ["r4c5"]
arrow-5: arrow r2c6-r3c7 bulb ["r1c5"]
arrow-6: arrow r2c4-r3c3 bulb ["r1c5"]
arrow-7: arrow r4c8-r3c7 bulb ["r5c9"]
arrow-8: arrow r6c8-r7c7 bulb ["r5c9"]
arrow-9: arrow r8c6-r7c7 bulb ["r9c5"]
arrow-10: arrow r8c4-r7c3 bulb ["r9c5"]
arrow-11: arrow r4c2-r3c3 bulb ["r5c1"]
arrow-12: arrow r6c2-r7c3 bulb ["r5c1"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[9],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[10],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[13],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[21],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[23],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[70],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[71],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[79],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[51],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[43],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[33],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,4.5],[5.5,3.5],[6.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5],[3.5,5.5],[2.5,6.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[4.5,4.5],[3.5,3.5],[2.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[5.5,5.5],[6.5,6.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's circle. The arrows in the center box are all length 3 and follow the different colored lines. The arrows outside the center box are all length 2. Numbers may repeat on arrows, if other rules allow.

DASHED REGIONS- Numbers in dashed regions are either 3, 6, or 9.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given.
