---
format: open-rules
title: Accuracy
setter: sujoyku
source: https://sudokupad.app/ges45vno0q
case: https://sudoku-sleuth.com/cases/accuracy
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - A source line layer still needs to be included in our reading.
  - We have only read part of the published answer so far.
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
exported: da0b11a133361627e210c3eb5d5a990f
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
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,10.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,10.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,10.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,6.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2,0],[11,0],[11,1],[10,1],[10,0]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3,0],[3,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4,0],[4,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5,0],[5,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6,0],[6,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7,0],[7,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8,0],[8,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[9,0],[9,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[11,1],[11,11],[0,11],[0,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[11,2],[10,2]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[11,3],[10,3]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0,2],[1,2]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0,3],[1,3]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0,4],[1,4]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0,5],[1,5]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0,6],[1,6]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0,7],[1,7]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0,8],[1,8]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0,9],[1,9]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[0,10],[1,10],[1,11]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[2,11],[2,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3,11],[3,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[11,4],[10,4]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[11,5],[10,5]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[11,6],[10,6]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[11,7],[10,7]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[11,8],[10,8]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[11,9],[10,9]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[11,10],[10,10],[10,11]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[9,11],[9,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[8,11],[8,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[7,11],[7,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[6,11],[6,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[5,11],[5,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[4,11],[4,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[5,7],[7,7],[7,10],[10,10],[10,7],[7,7]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[5,7],[4,7],[4,10],[7,10]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[7,7],[7,4],[10,4],[10,7]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[10,4],[10,1],[7,1],[7,4],[4,4],[4,7],[1,7],[1,10],[4,10]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[7,1],[4,1],[4,4],[1,4],[1,7]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[4,1],[1,1],[1,4]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[0.694,1.694],[0.906,1.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[0.694,3.694],[0.906,3.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[0.644,10.256],[0.856,10.044]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[3.694,10.306],[3.906,10.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[0.694,5.306],[0.906,5.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[0.694,7.306],[0.906,7.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[6.306,0.694],[6.094,0.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[8.306,0.694],[8.094,0.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[10.306,1.694],[10.094,1.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[6.306,10.306],[6.094,10.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[10.306,6.306],[10.094,6.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[10.306,8.306],[10.094,8.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 regions has to contain the digits from 1 to 9 once each.

- Diagonal Target Sums: A clue X outside the grid indicates that the digit X appears on the marked diagonal and all the digits that (seen from the clue) appear on the diagonal before reaching the first instance of the digit X must sum to X.
