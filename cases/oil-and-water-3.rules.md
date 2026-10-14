---
format: open-rules
title: Oil and Water
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/oil-and-water-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: b888d3153b3d9f4ae2290fe399d918ce
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c1-r2c2-r2c4-r3c2-r3c3-r3c4-r3c5-r4c3-r4c4-r4c5-r4c6-r5c3-r5c6-r5c7-r5c8-r6c2-r6c3-r6c8-r6c9-r7c1-r7c2-r7c7-r7c8-r8c1-r8c5-r8c6-r8c7-r9c1-r9c5-r9c6 total 119 repeats true connected true
cage-2: cage r1c1-r1c2-r1c3-r2c3 total 25 repeats true connected true
cage-3: cage r1c5-r1c6-r2c5-r2c6-r2c7-r2c8-r3c6-r3c7-r3c8-r3c9-r4c7-r4c8-r4c9-r5c9 total 81 repeats true connected true
kropki-1: kropki r5c1-r6c1 white
kropki-2: kropki r1c2-r1c3 white
kropki-3: kropki r2c6-r2c7 white
kropki-4: kropki r2c6-r3c6 white
kropki-5: kropki r3c8-r4c8 white
kropki-6: kropki r4c7-r4c8 white
kropki-7: kropki r7c9-r8c9 white
kropki-8: kropki r6c5-r7c5 white
kropki-9: kropki r2c7-r2c8 white
kropki-10: kropki r2c1-r2c2 black
kropki-11: kropki r3c2-r3c3 black
kropki-12: kropki r1c4-r2c4 black
kropki-13: kropki r3c4-r3c5 black
kropki-14: kropki r4c3-r4c4 black
kropki-15: kropki r4c5-r4c6 black
kropki-16: kropki r5c7-r5c8 black
kropki-17: kropki r6c8-r6c9 black
kropki-18: kropki r7c7-r7c8 black
kropki-19: kropki r9c5-r9c6 black
kropki-20: kropki r8c1-r9c1 black
kropki-21: kropki r7c1-r7c2 black
kropki-22: kropki r6c2-r7c2 black
kropki-23: kropki r6c2-r6c3 black
kropki-24: kropki r4c3-r5c3 black
kropki-25: kropki r1c7-r1c8 black
kropki-26: kropki r1c8-r1c9 black
kropki-27: kropki r1c9-r2c9 black
kropki-28: kropki r3c4-r4c4 black
```

```drawing
- {"id":"drawing-82","rules":[],"visual":{"kind":"cage","cells":[6,7,8,17],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"cage","cells":[80],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"cage","cells":[39,40,48,49,50,51,56,57,58,59,64,65,66,73,74,75],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"cage","cells":[62,70,71,78,79],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"cage","cells":[18,27,28,36,37,45],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
```

Normal Sudoku rules apply. Numbers inside cages sum to the number in the top left corner of the cage, if given. Numbers may repeat in cages, if other rules allow. Black dots are between numbers that are in a ratio of 2:1. Oil cages show ALL possible black dots. White dots between numbers indicate a consecutive pair. Water cages show ALL possible white dots. All numbers are either oil or water throughout the whole puzzle. Oil numbers will only go in oil cages and water numbers will only go in water cages. The solver must determine which numbers are oil and which are water.
