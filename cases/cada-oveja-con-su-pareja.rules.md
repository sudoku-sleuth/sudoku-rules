---
format: open-rules
title: Cada oveja con su pareja
setter: sujoyku
source: https://sudokupad.app/nx6yiu8ip0
case: https://sudoku-sleuth.com/cases/cada-oveja-con-su-pareja
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 3e037babdf2377b4e4534bff3de0ada3
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0,1,2,3],"label":"12"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[67,68,69],"label":"9"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[29,38,47],"label":"15"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[66,75,76],"label":"14"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[39,48,49,50],"label":"11"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[40,41],"label":"13"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[30],"label":"8"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[35,44,53,62,71],"label":"20","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[9,18,27,36,45],"label":"20","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[64,73,74],"label":"21","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[54,55,56,63,65,72],"label":"21","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[6,7,16],"label":"22","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[8,15,17,24,25,26],"label":"22","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[33,42,51,60],"label":"16","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[20,21,22,23],"label":"16","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[77,78,79,80],"label":"12","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[10,11],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[61,70],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[19,28,37],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[57,58,59],"label":"15","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[4,5,14],"label":"14","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[12,13],"label":"11","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[43,52],"label":"13","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[31,32],"label":"8","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. Each cage is either a killer cage or a Rellik cage (which is which has to be determined by the solver). Each cage total in the grid appears in exactly two cages. For each total one of the two cages must be a killer cage and the other one a Rellik cage. Digits in a killer cage must sum to the clue in the top left. In a Rellik cage, any combination of one or more digits CANNOT sum to the value in the top left. For example, a Rellik Cage with given value 6 cannot contain 1&2&3, 1&5, 2&4 or a single 6.
