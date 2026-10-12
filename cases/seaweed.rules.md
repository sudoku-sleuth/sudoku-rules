---
format: open-rules
title: Seaweed
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/seaweed
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 colour "white"
kropki-2: kropki r2c3-r3c3 colour "white"
kropki-3: kropki r5c1-r5c2 colour "white"
kropki-4: kropki r1c4-r1c5 colour "white"
whispers-1: whispers r1c3-r1c2-r2c1-r3c1-r4c2-r4c3 gap 5
whispers-2: whispers r6c6-r6c5-r7c4-r8c4-r9c5-r9c6 gap 5
whispers-3: whispers r3c9-r3c8-r4c7-r5c7-r6c8-r6c9 gap 5
whispers-4: whispers r7c9-r7c8-r8c7-r9c7 gap 5
whispers-5: whispers r2c9-r2c8-r1c7 gap 5
whispers-6: whispers r1c6-r1c5 gap 5
renban-1: renban r1c3-r2c2-r3c2-r4c3-r5c3-r6c2-r7c2-r8c3-r9c3
renban-2: renban r1c8-r2c9-r3c9-r4c8-r5c8-r6c9-r7c9-r8c8-r9c8
renban-3: renban r9c6-r8c6-r7c5-r6c6-r5c6-r4c5-r3c5-r2c6-r1c6
quadruple-1: quadruple r2c1-r2c2-r3c1-r3c2 digits [1,3,4,7]
quadruple-2: quadruple r7c4-r7c5-r8c4-r8c5 digits [1,3,7,8]
quadruple-3: quadruple r8c7-r8c8-r9c7-r9c8 digits [1,3,6,7]
quadruple-4: quadruple r4c7-r4c8-r5c7-r5c8 digits [4,5,7,9]
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers can repeat on green lines. Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers with a white dot between them are consecutive. Quadruples: Numbers in the circles are the contents of the 4 cells around them, in any order.
