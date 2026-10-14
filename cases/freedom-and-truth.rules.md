---
format: open-rules
title: Freedom and truth
setter: Chip Sounder
source: https://sudokupad.app/psxeqo0in4
case: https://sudoku-sleuth.com/cases/freedom-and-truth
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r6c6=1 r7c1=2
exported: a87459301cd951ce79c604dfe2d511db
---

```rules
sudoku 9x9
cage-1: cage r7c4-r8c4-r9c4 total 11 connected true
cage-2: cage r8c1-r9c1 total 4 connected true
cage-3: cage r4c2-r4c3 total 13 connected true
cage-4: cage r2c5-r2c6-r2c7-r2c8-r2c9 total 19 connected true
cage-5: cage r6c7-r6c8 total 11 connected true
kropki r1c6-r1c7 black
arrow-1: arrow r5c2-r6c2 bulb ["r4c1"]
arrow-2: arrow r5c4-r5c3-r6c3-r6c4 bulb ["r4c5"]
arrow-3: arrow r1c2-r1c3-r1c4 bulb ["r2c1"]
arrow-4: arrow r3c8 bulb ["r4c9"]
arrow-5: arrow r6c8-r7c9 bulb ["r5c7"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.01,0.01],[8.99,8.99]],"color":"#34bbe6ff","thickness":1.28,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.99,0.01],[0.01,8.99]],"color":"#34bbe6ff","thickness":1.28,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits along an arrow sum to the total given in the connected circle, digits may repeat if other rules allow.
Digits along a blue line must not repeat a digit.
Digits in a dotted cage sum to the total given in the top left corner of the cage.
Cells separated by a black dot has one digit double the other (1:2 ratio). No negative constraints.
