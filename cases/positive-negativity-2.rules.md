---
format: open-rules
title: Positive Negativity 2
setter: The Bard
source: https://sudokupad.app/wiolez58c9
case: https://sudoku-sleuth.com/cases/positive-negativity-2
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading does not yet cover the rules that change cell values.
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
exported: 0163eefb3d881ac69000dd32b1dd1e37
---

```rules

```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[16,25],"label":"16"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[74,75],"label":"2"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[27,28,29],"label":"23"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[0,1,9,10],"label":"23"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[64,65],"label":"7"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[37,38],"label":"4"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[6,15],"label":"3"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[30,39],"label":"8"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[32,33,34],"label":"16"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[59,68],"label":"1"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
```

Normal Sudoku Rules Apply. Place the digits 1-9 in each row, column, and box.

Yin Yang: shade some cells so that all shaded and unshaded cells form 2 form orthogonally connected areas such that no 2x2 area is entirely shaded or unshaded, and all the digits values in the shaded area are negative values.

Killer Cages: VALUES in cages add up to the total in the corner.

Kropki Dots: consecutive VALUES between 2 cells are indicated by a white dot, not all dots are given.
