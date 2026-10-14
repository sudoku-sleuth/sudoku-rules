---
format: open-rules
title: Oddly Unhinged
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/oddly-unhinged
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of the board gives a house more cells than available digits; we need to check its layout.
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
    - - r1c1
      - r1c2
      - r1c3
      - r1c4
      - r1c5
      - r1c6
      - r1c7
      - r1c8
      - r1c9
      - r1c10
      - r1c11
    - - r2c1
      - r2c2
      - r2c3
      - r2c4
      - r2c5
      - r2c6
      - r2c7
      - r2c8
      - r2c9
      - r2c10
      - r2c11
    - - r3c1
      - r3c2
      - r3c3
      - r3c4
      - r3c5
      - r3c6
      - r3c7
      - r3c8
      - r3c9
      - r3c10
      - r3c11
    - - r4c1
      - r4c2
      - r4c3
      - r4c4
      - r4c5
      - r4c6
      - r4c7
      - r4c8
      - r4c9
      - r4c10
      - r4c11
    - - r5c1
      - r5c2
      - r5c3
      - r5c4
      - r5c5
      - r5c6
      - r5c7
      - r5c8
      - r5c9
      - r5c10
      - r5c11
    - - r6c1
      - r6c2
      - r6c3
      - r6c4
      - r6c5
      - r6c6
      - r6c7
      - r6c8
      - r6c9
      - r6c10
      - r6c11
    - - r7c1
      - r7c2
      - r7c3
      - r7c4
      - r7c5
      - r7c6
      - r7c7
      - r7c8
      - r7c9
      - r7c10
      - r7c11
    - - r8c1
      - r8c2
      - r8c3
      - r8c4
      - r8c5
      - r8c6
      - r8c7
      - r8c8
      - r8c9
      - r8c10
      - r8c11
    - - r9c1
      - r9c2
      - r9c3
      - r9c4
      - r9c5
      - r9c6
      - r9c7
      - r9c8
      - r9c9
      - r9c10
      - r9c11
    - - r10c1
      - r10c2
      - r10c3
      - r10c4
      - r10c5
      - r10c6
      - r10c7
      - r10c8
      - r10c9
      - r10c10
      - r10c11
    - - r11c1
      - r11c2
      - r11c3
      - r11c4
      - r11c5
      - r11c6
      - r11c7
      - r11c8
      - r11c9
      - r11c10
      - r11c11
exported: 4a95aa941e6166cef5c69318c9001dde
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10-r1c11
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10-r2c11
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10-r3c11
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10-r4c11
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10-r5c11
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10-r6c11
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10-r7c11
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10-r8c11
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10-r9c11
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10-r10c11
unique-11: unique r11c1-r11c2-r11c3-r11c4-r11c5-r11c6-r11c7-r11c8-r11c9-r11c10-r11c11
unique-12: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1-r11c1
unique-13: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2-r11c2
unique-14: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3-r11c3
unique-15: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4-r11c4
unique-16: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5-r11c5
unique-17: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6-r11c6
unique-18: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7-r11c7
unique-19: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8-r11c8
unique-20: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9-r11c9
unique-21: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10-r11c10
unique-22: unique r1c11-r2c11-r3c11-r4c11-r5c11-r6c11-r7c11-r8c11-r9c11-r10c11-r11c11
unique-23: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10-r1c11
unique-24: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10-r2c11
unique-25: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10-r3c11
unique-26: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10-r4c11
unique-27: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10-r5c11
unique-28: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10-r6c11
unique-29: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10-r7c11
unique-30: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10-r8c11
unique-31: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10-r9c11
unique-32: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10-r10c11
unique-33: unique r11c1-r11c2-r11c3-r11c4-r11c5-r11c6-r11c7-r11c8-r11c9-r11c10-r11c11
cage-1: cage r1c9-r2c9 repeats false total 13 connected true
cage-2: cage r9c3-r10c3 repeats false total 11 connected true
cage-3: cage r5c5-r5c6-r5c7 repeats false total 7 connected true
cage-4: cage r6c8-r6c9-r6c10 repeats false total 15 connected true
arrow-1: arrow r2c1-r3c2-r2c3 bulb ["r1c1"]
arrow-2: arrow r5c2-r6c3 bulb ["r4c3"]
arrow-3: arrow r10c11-r11c10-r10c9 bulb ["r11c11"]
unique-34: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1-r11c1
unique-35: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2-r11c2
unique-36: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3-r11c3
unique-37: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4-r11c4
unique-38: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5-r11c5
unique-39: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6-r11c6
unique-40: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7-r11c7
unique-41: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8-r11c8
unique-42: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9-r11c9
unique-43: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10-r11c10
unique-44: unique r1c11-r2c11-r3c11-r4c11-r5c11-r6c11-r7c11-r8c11-r9c11-r10c11-r11c11
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[-0.28,5.72],[-0.15,5.85],[-0.12,5.81],[-0.11,5.89],[-0.19,5.88],[-0.15,5.85]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.28,6.28],[3.15,6.15],[3.12,6.19],[3.11,6.11],[3.19,6.12],[3.15,6.15]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.72,4.72],[7.85,4.85],[7.88,4.81],[7.89,4.89],[7.81,4.88],[7.85,4.85]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[11.28,5.28],[11.15,5.15],[11.12,5.19],[11.11,5.11],[11.19,5.12],[11.15,5.15]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0,1],[3,1]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0,2],[6,2]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0,4],[3,4]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0,5],[3,5]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0,7],[3,7]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0,8],[3,8]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1,0],[1,9]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2,0],[2,9]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3,3],[6,3]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4,1],[4,4]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4,5],[7,5]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4,6],[7,6]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5,1],[5,7]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5,8],[8,8]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5,9],[11,9]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6,4],[6,10]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7,7],[7,10]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8,3],[11,3]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[8,4],[11,4]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[8,6],[11,6]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[8,7],[11,7]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[8,10],[11,10]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[9,2],[9,11]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[10,2],[10,11]],"color":"#000000","thickness":1.7,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,9],[3,9],[3,0]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0,3],[3,3]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0,6],[3,6]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3,1],[6,1],[6,4]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3,4],[7,4],[7,7]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4,4],[4,7],[8,7]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[5,7],[5,10],[8,10]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[11,2],[8,2],[8,11],[11,11],[11,2]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[8,5],[11,5]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[8,8],[11,8]],"color":"#000000","thickness":7.2,"rounded":true,"layer":"grid"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.36,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"7","fontSize":25.6}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.64,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"23","fontSize":25.6}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.64,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"23","fontSize":25.6}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[11.64,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"7","fontSize":25.6}}
```

Each 3x3 region contains the digits 1-9 once each and no digit repeats in any row or column.  Cells outside regions don't contain digits. 

Disjoint Set: Digits must not repeat at corresponding box positions.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

Digits along diagonals pointed to by arrows outside the grid must sum to the number listed.

The digits along each arrow must sum to the digit in the circled cell.
