---
format: open-rules
title: Bigger Than Me
setter: Marty Sears
source: https://sudokupad.app/zpj5z93wvm
case: https://sudoku-sleuth.com/cases/bigger-than-me
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.2,5.8],[6.2,6.2],[-0.2,6.2],[-0.2,-0.2],[6.2,-0.2],[6.2,5.8]],"color":"#a2ade2ff","thickness":14.08,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0,1],[6,1]],"color":"#eaeaeaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6,2],[5,2],[5,0]],"color":"#eaeaeaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1,0],[1,4],[3,4],[3,6]],"color":"#eaeaeaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1,6],[1,4],[0,4]],"color":"#eaeaeaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3,0],[3,4],[5,4],[5,2],[3,2]],"color":"#eaeaeaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3,2],[0,2]],"color":"#eaeaeaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6,4],[5,4],[5,5],[0,5]],"color":"#eaeaeaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6,5],[5,5],[5,6]],"color":"#eaeaeaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1,3],[4,3],[4,6],[6,6],[6,3],[4,3]],"color":"#e2e2e2ff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1,3],[0,3],[0,6],[4,6]],"color":"#e2e2e2ff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4,3],[4,0],[6,0],[6,3]],"color":"#e2e2e2ff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4,0],[2,0],[2,6]],"color":"#e2e2e2ff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2,0],[0,0],[0,3]],"color":"#e2e2e2ff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#10ccffff","thickness":5.12,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#10ccffff","thickness":5.12,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#10ccffff","thickness":5.12,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#10ccffff","thickness":5.12,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#10ccffff","thickness":5.12,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#10ccffff","thickness":5.12,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#99ed16ff","thickness":5.12,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ff1010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ff1010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ff1010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ff1010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ff1010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#ff1010ff","thickness":5.12,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#99ed16ff","thickness":5.12,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#99ed16ff","thickness":5.12,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#99ed16ff","thickness":5.12,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#99ed16ff","thickness":5.12,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","stroke":"#99ed16ff","thickness":5.12,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#ff1010ff","thickness":4.48,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#ff1010ff","thickness":4.48,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#ffe010ff","thickness":4.48,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#10ccffff","thickness":4.48,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#99ed16ff","thickness":4.48,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#10ccffff","thickness":4.48,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#99ed16ff","thickness":4.48,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#99ed16ff","thickness":4.48,"angle":0}}
```

Normal 6x6 sudoku rules apply.

The digit in a coloured square indicates how many circles of that colour contain a digit bigger than itself.
