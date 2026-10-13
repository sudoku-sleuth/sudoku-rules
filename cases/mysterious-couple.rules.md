---
format: open-rules
title: Mysterious couple
setter: sujoyku
source: https://tinyurl.com/4e7dzysu
case: https://sudoku-sleuth.com/cases/mysterious-couple
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki r5c9-r6c9 colour "black"
pair-1: pair r1c5-r2c5 sum 10
pair-2: pair r6c5-r7c5 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[63,64,72,73],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[45,46,54,55],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[47,56,57],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[65,66,74,75],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[7,8,16,17],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[5,6,14,15],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[25,26,34,35],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[23,24,33],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[0,9,18,19,20],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[10,11],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[1,2,3],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[36,37,38],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[29,30,31,40],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[43,52],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[67,68,77],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[71,80],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[61,62,70],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[69,78,79],"label":"Y","color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply. Digits in a killer cage do not repeat and sum to the clue in the top left. Each cage in the grid has either the total X or Y which have to be determined by the solver. Digits joined by an X sum to 10. (Not all X are given.) Digits joined by a black dot have a 1:2 ratio. (Not all dots are given.)
