---
format: open-rules
title: Hedge Maze
setter: Jobo
source: https://sudokupad.app/5a1tn1s9c0
case: https://sudoku-sleuth.com/cases/hedge-maze
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki r8c9-r9c9 colour "black"
whispers-1: whispers r1c1-r2c1-r2c2-r2c3-r2c4-r3c4 gap 5
whispers-2: whispers r1c5-r2c5-r2c6-r3c6-r3c7 gap 5
whispers-3: whispers r1c6-r1c7-r1c8-r1c9 gap 5
whispers-4: whispers r2c8-r3c8-r4c8 gap 5
whispers-5: whispers r3c8-r3c9 gap 5
whispers-6: whispers r4c9-r5c9-r5c8 gap 5
whispers-7: whispers r6c6-r6c7-r6c8-r7c8-r8c8 gap 5
whispers-8: whispers r7c8-r7c7-r8c7-r9c7 gap 5
whispers-9: whispers r8c7-r8c6-r8c5-r7c5-r6c5-r5c5-r5c6-r4c6 gap 5
whispers-10: whispers r5c5-r5c4-r4c4-r4c3-r4c2-r4c1-r3c1-r3c2 gap 5
whispers-11: whispers r5c3-r6c3-r6c2-r7c2-r7c3-r7c4-r8c4-r9c4-r9c3 gap 5
whispers-12: whispers r6c2-r6c1 gap 5
whispers-13: whispers r8c2-r8c1-r9c1 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[7.5,0.1]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,0.1]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.1,0.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.1,4.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,8.9]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[2.5,8.9]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[4.5,8.9]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.9,6.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
```

Normal sudoku rules apply.

Adjacent digits along a green line must differ by at least 5.

Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
