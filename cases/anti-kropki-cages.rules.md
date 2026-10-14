---
format: open-rules
title: Anti-Kropki Cages
setter: Marty Sears
source: https://sudokupad.app/jb0vawx9le
case: https://sudoku-sleuth.com/cases/anti-kropki-cages
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: b41da17c3805b93b14c2e271454548f6
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.76,"height":0.76,"rounded":true,"stroke":"#6a6a6aff","thickness":3.84,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.76,"height":0.76,"rounded":true,"stroke":"#6a6a6aff","thickness":3.84,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.76,"height":0.76,"rounded":true,"stroke":"#6a6a6aff","thickness":3.84,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.76,"height":0.76,"rounded":true,"stroke":"#6a6a6aff","thickness":3.84,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0.76,"height":0.76,"rounded":true,"stroke":"#6a6a6aff","thickness":3.84,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.76,"height":0.76,"rounded":true,"stroke":"#6a6a6aff","thickness":3.84,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.76,"height":0.76,"rounded":true,"stroke":"#6a6a6aff","thickness":3.84,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[9.25,8.75],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,8.75]],"color":"#ff8e8e58","thickness":24.32,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.875,9.125],[2.625,9.125],[9.125,9.125],[9.125,-0.125],[-0.125,-0.125],[-0.125,9.125],[2.625,9.125]],"color":"#ef7070ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[9.25,8.75],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,8.75]],"color":"#ff8e8eff","thickness":11.52,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"cage","cells":[19,20,21,28,30,31,32,41,50]}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"cage","cells":[39,40,49,58,59,60]}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"cage","cells":[29,38,46,47,48,54,55,56,57]}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"cage","cells":[14,15,23,24,25,34]}}
```

Normal sudoku rules apply.

No two digits ANYWHERE in the same cage may be consecutive, OR in a 1:2 ratio, but they may be the same.

Every cell in the grid is in a cage! (Some cages are invisible, and their shapes must be discovered.)
Cages all have at least two cells, and don't overlap. A digit in a circle indicates the size of its cage.
