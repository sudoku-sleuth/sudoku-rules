---
format: open-rules
title: Earth, Wind and Fire Speed Run
setter: Will Power
source: https://sudokupad.app/9g5e3t7ven
case: https://sudoku-sleuth.com/cases/earth-wind-and-fire-speed-run
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 61841690563e18d8cb0e45f591888fd0
---

```rules
sudoku 9x9
kropki-1: kropki r1c6-r1c7 white
kropki-2: kropki r1c7-r1c8 white
kropki-3: kropki r8c8-r8c9 white
kropki-4: kropki r8c9-r9c9 white
kropki-5: kropki r6c2-r7c2 white
kropki-6: kropki r3c5-r3c6 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[1,2],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[3,4,10,11,12,19,27,28,36],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[9,18],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[13],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[20,21,29,30],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[37],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[63],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[72,73],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[66,74,75,76,77],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[49,56,57,58,65],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[67],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[68],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[50,51,59,60],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[70],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[69],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[61,62,71],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[78,79,80],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[52,53],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[43],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[25,26],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[8,17],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[6],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[5,7,14,15,16,22,23,24,31,33,34,35,38,39,40,44,45,46,47,48,54,55,64],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[32,41,42],"color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply. Numbers in dashed regions are either POWERS OF TWO (1,2,4,8 : EARTH), MULTIPLES OF THREE (3, 6, 9 : WIND), or NEITHER (5, 7 : FIRE). Regions each only contain one of these three elements. All orthogonal neighbors of the same element are in the same region (regions of the same element are not adjacent). The solver must determine which regions are which element. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given. Leave a comment, with your time, in the Logic Masters Germany website for this puzzle. Bonus for less than 15 minutes. Double bonus for less than 10 minutes.
