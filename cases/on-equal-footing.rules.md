---
format: open-rules
title: On Equal Footing
setter: sujoyku
source: https://sudokupad.app/wjvnx0p3kl
case: https://sudoku-sleuth.com/cases/on-equal-footing
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: d5c4096a3ce5188e6d54c7de241ab41b
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,8.5],[5.5,8.5],[5.5,6.5],[4.5,5.5],[5.5,4.5],[4.5,3.5]],"color":"#b7d4efff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,2.5],[7.5,0.5],[8.5,0.5],[8.5,1.5],[6.5,3.5],[8.5,5.5],[8.5,6.5],[7.5,7.5],[6.5,6.5],[6.5,5.5],[5.5,5.5]],"color":"#b7d4efff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[0.5,0.5],[0.5,2.5]],"color":"#b7d4efff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,2.5],[1.5,3.5],[2.5,3.5],[2.5,4.5],[4.5,6.5],[3.5,7.5],[2.5,6.5],[1.5,6.5],[1.5,4.5]],"color":"#b7d4efff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#b7d4efff","thickness":6.4,"angle":0}}
```

- Normal Sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Equal Split Lines: Dots divide blue lines into sements with equal sums. Digits may not repeat inside a segment. For example, a valid Equal Split Line could read 19-235-46-1234.
