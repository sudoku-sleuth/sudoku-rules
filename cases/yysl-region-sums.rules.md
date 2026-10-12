---
format: open-rules
title: YYSL Region Sums
setter: Blobz
source: https://sudokupad.app/ux1pie03wa
case: https://sudoku-sleuth.com/cases/yysl-region-sums
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
region-sum-1: region-sum r1c2-r2c1-r3c1-r4c2 segments [["r1c2","r2c1","r3c1"],["r4c2"]]
region-sum-2: region-sum r1c3-r2c4-r3c4 segments [["r1c3"],["r2c4","r3c4"]]
region-sum-3: region-sum r1c6-r1c7-r1c8-r2c8 segments [["r1c6"],["r1c7","r1c8","r2c8"]]
region-sum-4: region-sum r3c7-r4c8-r5c9 segments [["r3c7"],["r4c8","r5c9"]]
region-sum-5: region-sum r6c9-r7c8-r7c7-r7c6-r8c6-r8c7-r8c8 segments [["r6c9"],["r7c8","r7c7"],["r7c6","r8c6"],["r8c7","r8c8"]]
region-sum-6: region-sum r6c1-r7c2 segments [["r6c1"],["r7c2"]]
region-sum-7: region-sum r8c3-r9c3-r9c4 segments [["r8c3","r9c3"],["r9c4"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[2],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[12],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[21],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[5],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[6],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[7],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[16],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[53],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[61],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[60],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[38],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[39],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[31],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[69],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[70],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[58],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[32],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[64],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[19],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[50],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[42],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[55],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[45],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[18],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[9],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[0],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[78],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply. 

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area is fully shaded or unshaded. 

Digits in caged cells indicate how many cells of the same color (shaded or unshaded) are seen orthogonally from that position, including itself. The "other" color blocks vision. 

Digits along a blue line have an equal sum N within each box it passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately. Different lines may have different values for N.
