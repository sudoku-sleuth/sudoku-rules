---
format: open-rules
title: Matryoshka
setter: Timotab
source: https://sudokupad.app/vhjqfixwj5
case: https://sudoku-sleuth.com/cases/matryoshka
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
    - - r3c3
      - r3c4
      - r3c5
      - r4c3
      - r4c4
      - r4c5
      - r5c3
      - r5c4
      - r5c5
    - - r3c6
      - r3c7
      - r3c8
      - r4c6
      - r4c7
      - r4c8
      - r5c6
      - r5c7
      - r5c8
    - - r3c9
      - r3c10
      - r3c11
      - r4c9
      - r4c10
      - r4c11
      - r5c9
      - r5c10
      - r5c11
    - - r6c3
      - r6c4
      - r6c5
      - r7c3
      - r7c4
      - r7c5
      - r8c3
      - r8c4
      - r8c5
    - - r6c6
      - r6c7
      - r6c8
      - r7c6
      - r7c7
      - r7c8
      - r8c6
      - r8c7
      - r8c8
    - - r6c9
      - r6c10
      - r6c11
      - r7c9
      - r7c10
      - r7c11
      - r8c9
      - r8c10
      - r8c11
    - - r9c3
      - r9c4
      - r9c5
      - r10c3
      - r10c4
      - r10c5
      - r11c3
      - r11c4
      - r11c5
    - - r9c6
      - r9c7
      - r9c8
      - r10c6
      - r10c7
      - r10c8
      - r11c6
      - r11c7
      - r11c8
    - - r9c9
      - r9c10
      - r9c11
      - r10c9
      - r10c10
      - r10c11
      - r11c9
      - r11c10
      - r11c11
exported: 12a7c2d33815cad9f5c65e0d91554102
---

```rules
unique-1: unique r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10-r3c11
unique-2: unique r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10-r4c11
unique-3: unique r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10-r5c11
unique-4: unique r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10-r6c11
unique-5: unique r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10-r7c11
unique-6: unique r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10-r8c11
unique-7: unique r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10-r9c11
unique-8: unique r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10-r10c11
unique-9: unique r11c3-r11c4-r11c5-r11c6-r11c7-r11c8-r11c9-r11c10-r11c11
unique-10: unique r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3-r11c3
unique-11: unique r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4-r11c4
unique-12: unique r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5-r11c5
unique-13: unique r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6-r11c6
unique-14: unique r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7-r11c7
unique-15: unique r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8-r11c8
unique-16: unique r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9-r11c9
unique-17: unique r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10-r11c10
unique-18: unique r3c11-r4c11-r5c11-r6c11-r7c11-r8c11-r9c11-r10c11-r11c11
unique-19: unique r3c3-r3c4-r3c5-r4c3-r4c4-r4c5-r5c3-r5c4-r5c5
unique-20: unique r3c6-r3c7-r3c8-r4c6-r4c7-r4c8-r5c6-r5c7-r5c8
unique-21: unique r3c9-r3c10-r3c11-r4c9-r4c10-r4c11-r5c9-r5c10-r5c11
unique-22: unique r6c3-r6c4-r6c5-r7c3-r7c4-r7c5-r8c3-r8c4-r8c5
unique-23: unique r6c6-r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8
unique-24: unique r6c9-r6c10-r6c11-r7c9-r7c10-r7c11-r8c9-r8c10-r8c11
unique-25: unique r9c3-r9c4-r9c5-r10c3-r10c4-r10c5-r11c3-r11c4-r11c5
unique-26: unique r9c6-r9c7-r9c8-r10c6-r10c7-r10c8-r11c6-r11c7-r11c8
unique-27: unique r9c9-r9c10-r9c11-r10c9-r10c10-r10c11-r11c9-r11c10-r11c11
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2,10],[1,10],[1,11],[2,11]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1,11],[0,11],[0,10],[1,10],[1,9],[2,9]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0,10],[0,9],[1,9],[1,8],[2,8]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0,9],[0,8],[1,8],[1,7],[2,7]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0,8],[0,7],[1,7],[1,6],[2,6]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0,7],[0,6],[1,6],[1,5],[2,5]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0,6],[0,5],[1,5],[1,4],[2,4]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[1,4],[1,3],[2,3]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3],[1,2],[2,2],[2,1],[3,1],[3,2]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0,3],[0,2],[1,2],[1,1],[2,1],[2,0],[3,0],[3,1],[4,1],[4,2]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0,2],[0,1],[1,1],[1,0],[2,0]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3,0],[4,0],[4,1],[5,1],[5,2]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4,0],[5,0],[5,1],[6,1],[6,2]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5,0],[6,0],[6,1],[7,1],[7,2]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0,1],[0,0],[1,0]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6,0],[7,0],[7,1],[8,1],[8,2]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7,0],[8,0],[8,1],[9,1],[9,2]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8,0],[9,0],[9,1],[10,1],[10,2]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[9,0],[10,0],[10,1],[11,1],[11,2]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[10,0],[11,0],[11,1]],"color":"#FFFFFF","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2,11],[2,2],[11,2]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,10.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"16","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,1.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
```

• Normal Sudoku rules apply: Place the digits 1-9 in every row, column, and box, without repetition.
• Russian Doll Sums: Clues outside the grid indicate that in that row or column, there exist two digits which sum to the clue, such that the digits between them also sum to the clue. If there are multiple clues in a row or column, the sequences of clued digits appear in the same order as the clues, and those sequences do not overlap.
• [Alternate framing of Russian Doll Sums: Each outside clue represents a sandwich where the two crust digits sum to the clue and so do the filling digits. Sandwiches in the same row or column appear in the same order as the clues and do not overlap]
