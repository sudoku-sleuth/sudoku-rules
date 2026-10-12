---
format: open-rules
title: Gold Arrows
setter: Marty Sears
source: https://sudokupad.app/hakyhv730s
case: https://sudoku-sleuth.com/cases/gold-arrows
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 11
  cols: 11
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
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2,10],[2,11],[11,11],[11,0],[10,0],[10,1],[11,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2,11],[1,11],[1,10],[0,10],[0,11],[1,11]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3,11],[3,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4,11],[4,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5,11],[5,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6,11],[6,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7,11],[7,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8,11],[8,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[9,11],[9,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[10,11],[10,10],[11,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[11,9],[10,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[11,8],[10,8]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[11,7],[10,7]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[11,6],[10,6]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[11,5],[10,5]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[11,4],[10,4]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[11,3],[10,3]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[11,2],[10,2]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[10,0],[9,0],[9,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0,10],[0,9],[1,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[9,0],[8,0],[8,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0,9],[0,8],[1,8]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0,8],[0,7],[1,7]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[8,0],[7,0],[7,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0,7],[0,6],[1,6]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0,6],[0,5],[1,5]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[7,0],[6,0],[6,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[1,4]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[6,0],[5,0],[5,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0,3],[0,2],[1,2]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0,2],[0,1],[1,1],[1,0],[5,0]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4,0],[4,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3,0],[3,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[2,0],[2,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[8,7],[10,7],[10,10],[7,10],[7,7],[8,7]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[10,7],[10,4],[7,4],[7,7],[4,7],[4,4],[7,4]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[7,10],[1,10],[1,7],[4,7],[4,10]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[10,4],[10,1],[7,1],[7,4]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[7,1],[4,1],[4,4],[1,4],[1,7]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[4,1],[1,1],[1,4]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[1.1,5.5],[1.9,5.5]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[9.5,5.9],[9.5,5.1]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[0.1,7.5],[0.9,7.5]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[7.5,10.9],[7.5,10.1]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[6.5,8.9],[6.5,8.1]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[7.5,5.1],[7.5,5.9]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[5.5,0.1],[5.5,0.9]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[8.5,0.1],[8.5,0.9]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[1.1,1.5],[1.9,1.5]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[10.9,2.5],[10.1,2.5]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[10.9,3.5],[10.1,3.5]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[5.5,5.9],[5.5,5.1]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[10.9,4.5],[10.1,4.5]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[10.9,6.5],[10.1,6.5]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[1.5,2.1],[1.5,2.9]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[0.1,9.5],[0.9,9.5]],"color":"#e3d700ff","thickness":9.6,"headLength":0.45,"rounded":true}}
```

Normal sudoku rules apply.

The number on a gold arrow indicates the sum of the first X digits seen in the direction of the arrow, where X is the first digit seen. None of the digits which form the sum may be consecutive. A number on an arrow outside the grid may contain one or two digits.
