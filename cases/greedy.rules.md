---
format: open-rules
title: Greedy
setter: Marty Sears
source: https://sudokupad.app/gvyiwq78j0
case: https://sudoku-sleuth.com/cases/greedy
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
exported: a323de425855ce934ea9acdd01ac6e2f
---

```rules

```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,3.5],[7.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#fbeb00ff","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[2.5,4.5],[2.5,5.5],[0.5,5.5],[0.5,4.5]],"color":"#fbeb00ff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,2.5]],"color":"#18d300ff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,0.5]],"color":"#18d300ff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,2.5]],"color":"#18d300ff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,0.5]],"color":"#18d300ff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,6.5],[5.5,7.5],[5.5,8.5]],"color":"#18d300ff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[3.5,7.5],[4.5,8.5]],"color":"#18d300ff","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,6.5]],"color":"#18d300ff","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.3,4.3],[1.5,3.5],[1.5,4.3]],"color":"#52ffe8ff","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2,4],[1.9,3.9]],"color":"#52ffe8ff","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[4.5,3.5]],"color":"#52ffe8ff","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,6.5],[5.5,5.5]],"color":"#52ffe8ff","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,0.5],[3.3,1.3]],"color":"#52ffe8ff","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[6.5,1.5],[7.5,1.5]],"color":"#52ffe8ff","thickness":10,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,7.5],[2.5,7.5],[1.5,8.5]],"color":"#52ffe8ff","thickness":10,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,7.5],[6.5,8.5],[7.5,8.5]],"color":"#52ffe8ff","thickness":10,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5],"width":0.28,"height":0.28,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5],"width":0.28,"height":0.28,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,3.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6],"width":0.28,"height":0.28,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":0}}
```

Normal sudoku rules apply.

Every row, column and box contains one greedy cell. A greedy cell takes on the value of its digit added to the digit in the cell 180° rotationally opposite itself. Eg: if r3c3 is a greedy cell containing a 2, and r7c7 is a 6, then r3c3 has a value of (2 + 6) = 8. Each digit 1-9 appears once in a greedy cell.

German whisper: The values of adjacent cells along a green line have a difference of at least 5.

Nabner: No two values anywhere on a yellow line may be the same or consecutive.

Same difference: Any pair of adjacent values on a turquoise line has the same difference. This difference must be determined for each turquoise line.

Black kropki: Values joined by a black dot have a 1:2 ratio.

White kropki: Values joined by a white dot are consecutive.
