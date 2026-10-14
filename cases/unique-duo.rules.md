---
format: open-rules
title: Unique Duo
setter: sujoyku
source: https://tinyurl.com/2s3j4m44
case: https://sudoku-sleuth.com/cases/unique-duo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: f661fc54f5ab5ce94ce626e9840b9377
---

```rules
sudoku 9x9
kropki r6c1-r7c1 black
pair-1: pair r7c4-r7c5 ratio 3
pair-2: pair r2c9-r3c9 sum 10
pair-3: pair r6c9-r7c9 sum 10
pair-4: pair r2c7-r3c7 sum 5
little-killer r1c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1 sum 49
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0,2,3,9,10,11],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[4,5,6,13,22],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[72,73,74,75],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[77,78,79,80],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[54,55,56,63],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[57,64,65,66],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[59,68,69],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[60,61],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[62,70,71],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[35,43,44,52],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[33,42,51],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[30,31,32],"label":"Y","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[48,49,50],"label":"X","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[28,29,37,46,47],"label":"X","color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply. Digits in a killer cage do not repeat and sum to the clue in the top left. Each cage in the grid has either the total X or Y which have to be determined by the solver. Digits joined by a V sum to 5. Digits joined by an X sum to 10. (Not all V and X are given.) Digits joined by a black dot have a 1:2 ratio. Digits joined by a 3-dot have a 1:3 ratio. (Not all dots are given.) The digits on a marked diagonal sum to the little killer clue outside the grid. (If there is no conflict with other rules, digits on the diagonal may repeat.)
