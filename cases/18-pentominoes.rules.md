---
format: open-rules
title: 18 Pentominoes
setter: Blobz
source: https://sudokupad.app/8wmt9livf4
case: https://sudoku-sleuth.com/cases/18-pentominoes
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r3c9=9 r8c2=4 r9c1=5
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,8.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,8.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,4.5],[3.5,5.5],[2.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,6.5],[6.5,5.5],[7.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,2.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,0.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,2.5],[6.5,3.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"3","textColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"6","textColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"5","textColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"8","textColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"6","textColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"5","textColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"5","textColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"3","textColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"6","textColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"10","textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"9","textColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"4","textColor":"#000000"}}
```

Normal sudoku rules apply.

Place 8 different pentominoes (no repeats by reflection or rotation) in the grid such that each is completely enclosed within a box, each touches its neighbours diagonally along a grey line, and each contains digits that sum to 18. No pentominoes touch orthogonally. 

The grey lines (links) each show the sum of the two (non-repeating) digits each side of the link. All possible links are shown.

For example, r3c8 is part of the pentomino in box 3, touching r4c9 diagonally, which is part of the pentomino in box 6. The sum of these two digits is 5. Neither r3c9 nor r4c8 can be part of a pentomino.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
