---
format: open-rules
title: Go with the tide
setter: sujoyku
source: https://sudokupad.app/t7rxwdfom6
case: https://sudoku-sleuth.com/cases/go-with-the-tide
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: a295546fe15f161859720c57a71eb54a
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,5.5],[7.5,6.5],[8.5,6.5],[6.5,8.5],[6.5,7.5],[5.5,6.5],[3.5,6.5]],"color":"#1fe6e5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[1.5,0.5],[0.5,1.5],[1.5,2.5],[2.5,2.5],[2.5,3.5],[3.5,2.5],[4.5,2.5]],"color":"#1fe6e5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,4.5],[8.5,1.5],[7.5,1.5],[6.5,0.5]],"color":"#1fe6e5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[2.5,4.5],[2.5,5.5],[0.5,7.5],[1.5,8.5],[2.5,7.5]],"color":"#1fe6e5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,8.5],[3.5,8.5]],"color":"#1fe6e5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[5.5,3.5],[5.5,4.5]],"color":"#1fe6e5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,8],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,0.5],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.38,"height":0.38,"rounded":true,"fill":"#FFFFFF","stroke":"#1fe6e5ff","thickness":5.12,"angle":0}}
```

- Normal Sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Equal Split Lines: Dots divide blue lines into sements with equal sums. Digits may not repeat inside a segment. For example, a valid Equal Split Line could read 34-7-124.
