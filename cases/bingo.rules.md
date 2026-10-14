---
format: open-rules
title: Bingo
setter: Jobo
source: https://sudokupad.app/jobo/bingo
case: https://sudoku-sleuth.com/cases/bingo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 4615067dda555ff80bfd4b2748978012
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [1]
quadruple-2: quadruple r2c1-r2c2-r3c1-r3c2 digits [7]
quadruple-3: quadruple r3c3-r3c4-r4c3-r4c4 digits [9]
quadruple-4: quadruple r4c4-r4c5-r5c4-r5c5 digits [8]
quadruple-5: quadruple r5c5-r5c6-r6c5-r6c6 digits [2]
quadruple-6: quadruple r6c6-r6c7-r7c6-r7c7 digits [1]
quadruple-7: quadruple r8c7-r8c8-r9c7-r9c8 digits [9]
quadruple-8: quadruple r7c8-r7c9-r8c8-r8c9 digits [3]
quadruple-9: quadruple r3c8-r3c9-r4c8-r4c9 digits [6]
quadruple-10: quadruple r2c7-r2c8-r3c7-r3c8 digits [2]
quadruple-11: quadruple r1c6-r1c7-r2c6-r2c7 digits [7]
quadruple-12: quadruple r6c1-r6c2-r7c1-r7c2 digits [4]
quadruple-13: quadruple r7c2-r7c3-r8c2-r8c3 digits [8]
quadruple-14: quadruple r8c3-r8c4-r9c3-r9c4 digits [3]
```

```drawing
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,3],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,8],"width":1.15,"height":1.15,"rounded":true,"stroke":"#f067f0ff","thickness":9.6,"angle":0}}
```

Normal sudoku rules apply.

Purple lines contain a non-repeating set of consecutive digits in any order.

Digits in a quadruple clue must appear at least once in the four surrounding cells.
