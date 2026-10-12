---
format: open-rules
title: Overlapping Matryoshka
setter: Timotab
source: https://sudokupad.app/omnr5ggk4o
case: https://sudoku-sleuth.com/cases/overlapping-matryoshka
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 13
  cols: 13
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
    - - r5c11
      - r5c12
      - r5c13
      - r6c11
      - r6c12
      - r6c13
      - r7c11
      - r7c12
      - r7c13
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
    - - r8c11
      - r8c12
      - r8c13
      - r9c11
      - r9c12
      - r9c13
      - r10c11
      - r10c12
      - r10c13
    - - r11c5
      - r11c6
      - r11c7
      - r12c5
      - r12c6
      - r12c7
      - r13c5
      - r13c6
      - r13c7
    - - r11c8
      - r11c9
      - r11c10
      - r12c8
      - r12c9
      - r12c10
      - r13c8
      - r13c9
      - r13c10
    - - r11c11
      - r11c12
      - r11c13
      - r12c11
      - r12c12
      - r12c13
      - r13c11
      - r13c12
      - r13c13
---

```rules
unique-1: unique r5c5-r5c6-r5c7-r5c8-r5c9-r5c10-r5c11-r5c12-r5c13
unique-2: unique r6c5-r6c6-r6c7-r6c8-r6c9-r6c10-r6c11-r6c12-r6c13
unique-3: unique r7c5-r7c6-r7c7-r7c8-r7c9-r7c10-r7c11-r7c12-r7c13
unique-4: unique r8c5-r8c6-r8c7-r8c8-r8c9-r8c10-r8c11-r8c12-r8c13
unique-5: unique r9c5-r9c6-r9c7-r9c8-r9c9-r9c10-r9c11-r9c12-r9c13
unique-6: unique r10c5-r10c6-r10c7-r10c8-r10c9-r10c10-r10c11-r10c12-r10c13
unique-7: unique r11c5-r11c6-r11c7-r11c8-r11c9-r11c10-r11c11-r11c12-r11c13
unique-8: unique r12c5-r12c6-r12c7-r12c8-r12c9-r12c10-r12c11-r12c12-r12c13
unique-9: unique r13c5-r13c6-r13c7-r13c8-r13c9-r13c10-r13c11-r13c12-r13c13
unique-10: unique r5c5-r6c5-r7c5-r8c5-r9c5-r10c5-r11c5-r12c5-r13c5
unique-11: unique r5c6-r6c6-r7c6-r8c6-r9c6-r10c6-r11c6-r12c6-r13c6
unique-12: unique r5c7-r6c7-r7c7-r8c7-r9c7-r10c7-r11c7-r12c7-r13c7
unique-13: unique r5c8-r6c8-r7c8-r8c8-r9c8-r10c8-r11c8-r12c8-r13c8
unique-14: unique r5c9-r6c9-r7c9-r8c9-r9c9-r10c9-r11c9-r12c9-r13c9
unique-15: unique r5c10-r6c10-r7c10-r8c10-r9c10-r10c10-r11c10-r12c10-r13c10
unique-16: unique r5c11-r6c11-r7c11-r8c11-r9c11-r10c11-r11c11-r12c11-r13c11
unique-17: unique r5c12-r6c12-r7c12-r8c12-r9c12-r10c12-r11c12-r12c12-r13c12
unique-18: unique r5c13-r6c13-r7c13-r8c13-r9c13-r10c13-r11c13-r12c13-r13c13
unique-19: unique r5c5-r5c6-r5c7-r6c5-r6c6-r6c7-r7c5-r7c6-r7c7
unique-20: unique r5c8-r5c9-r5c10-r6c8-r6c9-r6c10-r7c8-r7c9-r7c10
unique-21: unique r5c11-r5c12-r5c13-r6c11-r6c12-r6c13-r7c11-r7c12-r7c13
unique-22: unique r8c5-r8c6-r8c7-r9c5-r9c6-r9c7-r10c5-r10c6-r10c7
unique-23: unique r8c8-r8c9-r8c10-r9c8-r9c9-r9c10-r10c8-r10c9-r10c10
unique-24: unique r8c11-r8c12-r8c13-r9c11-r9c12-r9c13-r10c11-r10c12-r10c13
unique-25: unique r11c5-r11c6-r11c7-r12c5-r12c6-r12c7-r13c5-r13c6-r13c7
unique-26: unique r11c8-r11c9-r11c10-r12c8-r12c9-r12c10-r13c8-r13c9-r13c10
unique-27: unique r11c11-r11c12-r11c13-r12c11-r12c12-r12c13-r13c11-r13c12-r13c13
parity-cells-1: parity-cells r12c8 parity "odd"
parity-cells-2: parity-cells r9c13 parity "even"
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,12.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,12.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,12.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,12.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,11.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,10.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[11.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[11.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[11.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[12.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[12,4],[13,4],[13,3],[12,3],[12,4]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[12,4],[4,4],[4,13],[0,13],[0,12],[1,12],[1,13]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[13,3],[13,2],[12,2],[12,3],[11,3],[11,4]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[10,4],[10,3],[11,3],[11,2],[12,2],[12,1],[13,1],[13,2]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[9,4],[9,3],[10,3],[10,2],[11,2],[11,1],[12,1],[12,0],[13,0],[13,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[8,4],[8,3],[9,3],[9,2],[10,2],[10,1],[11,1],[11,0],[12,0]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[7,4],[7,3],[8,3],[8,2],[9,2],[9,1],[10,1],[10,0],[11,0]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6,4],[6,3],[7,3],[7,2],[8,2],[8,1],[9,1],[9,0],[10,0]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[5,4],[5,3],[6,3],[6,2],[7,2],[7,1],[8,1],[8,0],[9,0]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4,5],[3,5],[3,7],[4,7]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4,6],[2,6],[2,7],[3,7],[3,9],[4,9]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4,8],[2,8],[2,7],[1,7],[1,8],[2,8]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4,10],[3,10],[3,9],[2,9],[2,8]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4,11],[3,11],[3,10],[2,10],[2,9],[1,9],[1,8],[0,8],[0,11],[1,11],[1,9]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4,12],[1,12],[1,11],[2,11],[2,10],[0,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3,13],[3,11],[2,11],[2,13]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[0,12],[0,11]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[8,0],[7,0],[7,1],[6,1],[6,2],[5,2],[5,3],[4,3],[4,4],[3,4],[3,5],[2,5],[2,6],[1,6],[1,7],[0,7],[0,8]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[1,9],[0,9]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[7,0],[6,0],[6,1],[5,1],[5,2],[4,2],[4,3],[3,3],[3,4],[2,4],[2,5],[1,5],[1,6],[0,6],[0,7]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[6,0],[5,0],[5,1],[4,1],[4,2],[3,2],[3,3],[2,3],[2,4],[1,4],[1,5],[0,5],[0,6]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1],[3,1],[3,2],[2,2],[2,3],[1,3],[1,4],[0,4],[0,5]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[4,0],[3,0],[3,1],[2,1],[2,2],[1,2],[1,3],[0,3],[0,4]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[3,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,3]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[2,0],[1,0],[1,1],[0,1],[0,2]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[4,13],[4,4],[13,4]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
```

• Normal Sudoku rules apply. Place the digits 1 to 9 in every row, column, and box, without repetition.
• Russian Doll Sums: Clues outside the grid indicate that in that row or column, there exist two digits which sum to the clue, such that the digits between them also sum to the clue. 
• If there are multiple clues in a row or column, the sequences of clued digits appear in the same order as the clues. Sequences fulfilled by a clue may overlap. The order of the matching clued cells is defined by the order of the first clued cell from the clue's location for each clue, unless that is the same cell, in which case it's defined by the order of the last clued cell. Eg: Clued cells R2C2-R2C7 would come before clued cells R2C3-R2C7. Clued cells R4C1-R4C5 would come before clued cells R4C1-R4C6
• Identical clues in the same row or column cannot clue the exact same sequence of cells. 
• A digit in a cell with a grey square is even. A digit in a cell with a grey circle is odd.
