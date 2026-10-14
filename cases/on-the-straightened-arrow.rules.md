---
format: open-rules
title: On the Straightened Arrow
setter: Marty Sears
source: https://sudokupad.app/6gskgmgmfv
case: https://sudoku-sleuth.com/cases/on-the-straightened-arrow
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 10
  cols: 10
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
    - - r2c2
      - r2c3
      - r2c4
      - r3c2
      - r3c3
      - r3c4
      - r4c2
      - r4c3
      - r4c4
    - - r2c5
      - r2c6
      - r2c7
      - r3c5
      - r3c6
      - r3c7
      - r4c5
      - r4c6
      - r4c7
    - - r2c8
      - r2c9
      - r2c10
      - r3c8
      - r3c9
      - r3c10
      - r4c8
      - r4c9
      - r4c10
    - - r5c2
      - r5c3
      - r5c4
      - r6c2
      - r6c3
      - r6c4
      - r7c2
      - r7c3
      - r7c4
    - - r5c5
      - r5c6
      - r5c7
      - r6c5
      - r6c6
      - r6c7
      - r7c5
      - r7c6
      - r7c7
    - - r5c8
      - r5c9
      - r5c10
      - r6c8
      - r6c9
      - r6c10
      - r7c8
      - r7c9
      - r7c10
    - - r8c2
      - r8c3
      - r8c4
      - r9c2
      - r9c3
      - r9c4
      - r10c2
      - r10c3
      - r10c4
    - - r8c5
      - r8c6
      - r8c7
      - r9c5
      - r9c6
      - r9c7
      - r10c5
      - r10c6
      - r10c7
    - - r8c8
      - r8c9
      - r8c10
      - r9c8
      - r9c9
      - r9c10
      - r10c8
      - r10c9
      - r10c10
exported: 5657ab8aad15e84a6ed9c623d77de60f
---

```rules
unique-1: unique r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10
unique-2: unique r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10
unique-3: unique r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10
unique-4: unique r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10
unique-5: unique r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10
unique-6: unique r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10
unique-7: unique r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10
unique-8: unique r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10
unique-9: unique r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10
unique-10: unique r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2
unique-11: unique r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3
unique-12: unique r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4
unique-13: unique r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5
unique-14: unique r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6
unique-15: unique r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7
unique-16: unique r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8
unique-17: unique r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9
unique-18: unique r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10
unique-19: unique r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4
unique-20: unique r2c5-r2c6-r2c7-r3c5-r3c6-r3c7-r4c5-r4c6-r4c7
unique-21: unique r2c8-r2c9-r2c10-r3c8-r3c9-r3c10-r4c8-r4c9-r4c10
unique-22: unique r5c2-r5c3-r5c4-r6c2-r6c3-r6c4-r7c2-r7c3-r7c4
unique-23: unique r5c5-r5c6-r5c7-r6c5-r6c6-r6c7-r7c5-r7c6-r7c7
unique-24: unique r5c8-r5c9-r5c10-r6c8-r6c9-r6c10-r7c8-r7c9-r7c10
unique-25: unique r8c2-r8c3-r8c4-r9c2-r9c3-r9c4-r10c2-r10c3-r10c4
unique-26: unique r8c5-r8c6-r8c7-r9c5-r9c6-r9c7-r10c5-r10c6-r10c7
unique-27: unique r8c8-r8c9-r8c10-r9c8-r9c9-r9c10-r10c8-r10c9-r10c10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.786,2.5],[2.214,2.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.143,5.857],[5.857,6.143]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.143,7.857],[4.857,8.143]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.786,2.5],[2.214,2.5]],"color":"#75beffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.143,5.857],[5.857,6.143]],"color":"#75beffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.143,7.857],[4.857,8.143]],"color":"#75beffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[10,1],[10,0],[9,0],[9,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[9,0],[8,0],[8,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8,0],[7,0],[7,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7,0],[6,0],[6,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6,0],[5,0],[5,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4,0],[3,0],[3,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3,0],[2,0],[2,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2,0],[1,0],[1,1],[0,1],[0,10],[1,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0,2],[1,2]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0,3],[1,3]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0,4],[1,4]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0,5],[1,5]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[0,6],[1,6]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0,7],[1,7]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0,8],[1,8]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0,9],[1,9]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[8,7],[10,7],[10,10],[7,10],[7,7],[8,7]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[10,7],[10,4],[7,4],[7,7],[1,7],[1,10],[7,10]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[10,4],[10,1],[7,1],[7,4],[4,4],[4,10]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1,7],[1,4],[4,4],[4,1],[7,1]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[1,4],[1,1],[4,1]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[9.5,0.64],[9.5,0.96]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[8.5,0.64],[8.5,0.96]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[7.5,0.64],[7.5,0.96]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[6.5,0.64],[6.5,0.96]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.5,0.64],[4.5,0.96]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3.5,0.64],[3.5,0.96]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[2.5,0.64],[2.5,0.96]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[1.5,0.64],[1.5,0.96]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[0.64,1.5],[0.96,1.5]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[0.64,2.5],[0.96,2.5]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[0.64,3.5],[0.96,3.5]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[0.64,4.5],[0.96,4.5]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[0.64,6.5],[0.96,6.5]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[0.64,7.5],[0.96,7.5]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[0.64,8.5],[0.96,8.5]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[0.64,9.5],[0.96,9.5]],"color":"#b090e5ff","thickness":3.2,"headLength":0.2,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,0.375],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"41","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.333],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"78","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.333],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"48","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.333],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"55","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.333],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"45","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.333],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"50","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.333],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"33","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.333],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"54","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.375,1.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"44","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.375,2.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"23","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.375,3.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"42","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.375,4.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"72","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.375,6.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"37","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.375,7.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"50","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.375,8.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"89","textColor":"#000000","fontSize":32.8}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.375,9.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"48","textColor":"#000000","fontSize":32.8}}
```

Normal sudoku rules apply.

Yin Yang Yong: Colour the grid red, yellow and blue, so that all cells of the same colour are orthogonally connected, and no 2x2 area is fully one colour.

A red cell's value = double its digit.
A yellow cell's value = its digit.
A blue cell's value = half its digit. 

Straightened little killers: Clues outside the grid give the total value of the indicated row or column.

Equal value lines: A blue line joins two cells with the same value.
