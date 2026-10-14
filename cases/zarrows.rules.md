---
format: open-rules
title: Zarrows
setter: Dr Logic
source: https://sudokupad.app/xwnmlco93p
case: https://sudoku-sleuth.com/cases/zarrows
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 53c45a25a0fde5ae1d38cb9e430a9072
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki r2c8-r2c9 black
zipper-1: zipper r1c4-r1c5-r1c6
zipper-2: zipper r1c1-r1c2-r1c3
zipper-3: zipper r3c3-r2c2-r3c1-r4c2-r5c1-r6c2-r7c1-r8c2-r7c3
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,4.1],[4.5,3.5],[4.5,2.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,4.9],[4.5,5.5],[4.5,6.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.217157287525381,1.782842712474619],[0.5,2.5],[0.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.217157287525381,7.217157287525381],[0.5,6.5],[0.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.782842712474619,7.217157287525381],[8.5,6.5],[8.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.782842712474619,1.782842712474619],[8.5,2.5],[8.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
```

Normal Sudoku Rules
Normal Zipper Rules
Normal Ratio Rules
Normal Arrow Rules
Each diagonal must be a set of 1-9 (no repeats)
The sum of ALL ZIPPER CELLS is (2^n) - 1 where n is some (positive) integer.
(For clarity there are 2 zippers in row 1, each 3 cells long)
