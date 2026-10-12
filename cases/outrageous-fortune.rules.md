---
format: open-rules
title: Outrageous Fortune
setter: Timotab
source: https://sudokupad.app/27oimbc2xo
case: https://sudoku-sleuth.com/cases/outrageous-fortune
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r2c3-r2c4 bulb ["r2c1"]
arrow-2: arrow r2c6-r2c7-r3c8 bulb ["r2c5"]
arrow-3: arrow r3c9-r4c9-r4c8-r4c7 bulb ["r2c9"]
arrow-4: arrow r7c8-r8c8 bulb ["r6c9"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.1,1.9],[3.5,1.5],[3.9,1.9],[3.7,1.9]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.9,1.9],[3.9,1.7]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.3,0.9],[7.1,0.9],[7.5,0.5],[7.5,0.9]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.1,0.9],[7.1,0.7]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.1,7.9],[5.5,7.5],[5.1,7.5],[5.2,7.4]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.1,7.5],[5.2,7.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,8.1],[4.5,8.5],[4.1,8.5],[4.2,8.4]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.1,8.5],[4.2,8.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,3.9],[0.5,3.5],[0.9,3.5],[0.8,3.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.9,3.5],[0.8,3.4]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.1,3.5],[2.5,3.5],[2.5,3.9],[2.6,3.8]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,3.9],[2.4,3.8]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,6.9],[2.5,6.5],[2.9,6.5],[2.8,6.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.9,6.5],[2.8,6.4]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.9,7.5],[1.5,7.5],[1.5,7.1],[1.6,7.2]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,7.1],[1.4,7.2]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.1,1.9],[4.5,1.5],[4.9,1.5],[4.8,1.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.9,1.5],[4.8,1.4]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.5,4.1],[7.5,4.5],[7.1,4.5],[7.2,4.4]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[7.1,4.5],[7.2,4.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.1,6.5],[7.5,6.5],[7.5,6.1],[7.6,6.2]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.5,6.1],[7.4,6.2]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6.5,5.1],[6.5,5.5],[6.1,5.5],[6.2,5.4]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.1,5.5],[6.2,5.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
```

• Normal Sudoku rules apply: Place the digits 1-9 in every row, column, and  3x3 box without repetition.
• Slingshots: If a small purple arrow is present in a cell, the digit in the cell the arrow comes from appears in the grid in the direction of the arrow at a distance of N cells, where N is the digit in the arrow’s cell. (e.g. if R4C3 is 5 and R5C2 is 2, then R7C2 is also 5)
• Arrows: Digits along a grey arrow must sum to the digit in the attached circle.
