---
format: open-rules
title: Every Which Way But GAS
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2iln1luzyh
case: https://sudoku-sleuth.com/cases/every-which-way-but-gas
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: dd146212833d087b50ac8b4aa897cd56
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3,4]
quadruple-2: quadruple r2c3-r2c4-r3c3-r3c4 digits [6,7,8,9]
quadruple-3: quadruple r3c6-r3c7-r4c6-r4c7 digits [1,2,3,5]
quadruple-4: quadruple r1c7-r1c8-r2c7-r2c8 digits [2,5,8]
quadruple-5: quadruple r8c7-r8c8-r9c7-r9c8 digits [3,4,7,9]
quadruple-6: quadruple r8c1-r8c2-r9c1-r9c2 digits [5,8]
quadruple-7: quadruple r7c5-r7c6-r8c5-r8c6 digits [7]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.217157287525381,0.782842712474619],[1.5,1.5],[0.5,2.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.1,0.5],[1.5,0.5],[0.5,0.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.782842712474619,3.217157287525381],[3.5,2.5],[4.5,1.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.9,3.5],[3.5,3.5],[4.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.782842712474619,3.782842712474619],[3.5,4.5],[4.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.217157287525381,3.782842712474619],[1.5,4.5],[0.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,3.9],[2.5,4.5],[2.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.1,6.5],[2.5,6.5],[1.5,6.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.782842712474619,6.782842712474619],[4.5,7.5],[5.5,8.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.9,6.5],[4.5,6.5],[5.5,6.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[6.782842712474619,6.782842712474619],[7.5,7.5],[8.5,8.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,6.1],[6.5,5.5],[6.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7.5,1.9],[7.5,2.5],[7.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
