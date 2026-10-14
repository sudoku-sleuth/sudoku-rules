---
format: open-rules
title: Pointer YYSL
setter: Blobz
source: https://sudokupad.app/blobz/pointer-yysl
case: https://sudoku-sleuth.com/cases/pointer-yysl
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 60d9df0442d8e3ce333fea6aa52e7981
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.389,4.722],[1.5,4.833],[1.611,4.722]],"color":"#8948faff","thickness":3.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.278,1.389],[2.167,1.5],[2.278,1.611]],"color":"#8948faff","thickness":3.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.389,1.167],[1.5,1.056],[1.611,1.167]],"color":"#8948faff","thickness":3.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.389,7.833],[6.5,7.944],[6.611,7.833]],"color":"#8948faff","thickness":3.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.833,7.389],[6.944,7.5],[6.833,7.611]],"color":"#8948faff","thickness":3.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[9]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[18]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[19]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[2]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[6]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[3]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[11]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[20]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[29]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[28]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[55]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[65]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[31]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[13]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[24]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[25]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[42]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[43]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[69]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[68]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[59]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[51]}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[50]}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[71]}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[49]}}
```

Normal sudoku rules apply.

Shade cells using two colours such that each colour forms an orthogonally connected region, and no 2x2 area is a single colour.

Digits in caged cells indicate how many cells of the same colour are seen orthogonally from that position, including itself. The other colour blocks vision.

The digit in a cell with an arrow must match the count of cells of the opposite colour in the given direction. Each arrow is considered separately.
