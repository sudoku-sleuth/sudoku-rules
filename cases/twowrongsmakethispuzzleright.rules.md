---
format: open-rules
title: TwoWrongsMakeThisPuzzleRight
setter: Will Power
source: https://sudokupad.app/68e7v2h6v7
case: https://sudoku-sleuth.com/cases/twowrongsmakethispuzzleright
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r5c4=8
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r2c9 colour "white"
kropki-2: kropki r2c9-r3c9 colour "white"
kropki-3: kropki r9c2-r9c3 colour "white"
kropki-4: kropki r5c1-r6c1 colour "white"
kropki-5: kropki r8c3-r8c4 colour "white"
whispers-1: whispers r1c5-r2c4-r3c3-r4c2-r5c1 gap 4
whispers-2: whispers r5c9-r6c8-r7c7-r8c6-r9c5 gap 4
whispers-3: whispers r2c6-r3c7-r4c8 gap 4
whispers-4: whispers r5c2-r6c3-r7c4-r8c5 gap 4
whispers-5: whispers r1c4-r2c5 gap 4
pair-1: pair r9c8-r9c9 relation {"op":"sum","value":10}
pair-2: pair r1c1-r2c1 relation {"op":"sum","value":10}
pair-3: pair r2c2-r2c3 relation {"op":"sum","value":10}
pair-4: pair r1c8-r1c9 relation {"op":"sum","value":10}
pair-5: pair r4c8-r5c8 relation {"op":"sum","value":10}
sandwich-1: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 12
sandwich-2: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 35
sandwich-3: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 20
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,7.5],[4.5,6.5],[3.5,5.5],[2.5,4.5],[1.5,3.5],[0.5,2.5]],"color":"#9C9C9C","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5],[4.5,2.5],[5.5,3.5],[6.5,4.5],[7.5,5.5],[8.5,6.5]],"color":"#9C9C9C","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,4.5],[5.5,5.5],[4.5,5.5]],"color":"#9C9C9C","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,3.5],[3.5,4.5],[4.5,4.5]],"color":"#9C9C9C","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5],[3.5,8.5]],"color":"#9C9C9C","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
```

Normal Sudoku Rules apply.

SANDWICH CLUES- Numbers outside the grid are the sum of all numbers BETWEEN the 1 and 9 within that row or column.

EACH RULE BELOW HAS FIVE EXAMPLES IN THE PUZZLE. TWO EXAMPLES OF EACH RULE DO NOT CORRECTLY FOLLOW THE RULE. IF A CELL IS ON A CORRECT RULE IT IS CORRECT FOR THE OTHER RULES ALSO.

GRAY LINES- Numbers on gray lines sum to the number in the attached circle. Numbers may repeat on gray lines.

CONSECUTIVE PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.

DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines, if other rules allow. ANY neighbors not 4 or more apart make the line incorrect.

XV PAIRS- Numbers with an X between them sum to 10.
