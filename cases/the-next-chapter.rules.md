---
format: open-rules
title: The next chapter
setter: Chip Sounder
source: https://sudokupad.app/yl8m18j7zu
case: https://sudoku-sleuth.com/cases/the-next-chapter
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6 total 15 connected true
cage-2: cage r2c3-r2c4 total 10 connected true
cage-3: cage r4c3-r4c4 total 14 connected true
cage-4: cage r7c3-r8c3-r9c3 total 21 connected true
cage-5: cage r7c7-r7c8-r7c9 total 21 connected true
cage-6: cage r4c8-r5c8 total 9 connected true
cage-7: cage r6c7-r6c8 total 10 connected true
kropki-1: kropki r2c1-r3c1 colour "black"
kropki-2: kropki r1c2-r1c3 colour "black"
kropki-3: kropki r3c5-r4c5 colour "black"
kropki-4: kropki r5c3-r6c3 colour "black"
kropki-5: kropki r4c6-r4c7 colour "black"
kropki-6: kropki r9c4-r9c5 colour "black"
kropki-7: kropki r3c5-r3c6 colour "white"
kropki-8: kropki r2c4-r3c4 colour "white"
whispers-1: whispers r1c3-r2c3-r3c3-r4c4-r4c5 gap 5
whispers-2: whispers r3c3-r3c2-r3c1 gap 5
whispers-3: whispers r1c7-r2c7-r3c7-r3c8-r3c9 gap 5
whispers-4: whispers r7c2-r8c2-r9c3-r9c2 gap 5
whispers-5: whispers r7c7-r8c7-r9c7 gap 5
whispers-6: whispers r5c5-r5c6 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[1.5,0.5]],"color":"#283bafff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[1.5,8.5]],"color":"#283bafff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,4.5],[5.5,3.5]],"color":"#283bafff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Adjacent digits along a green line must differ by at least 5.
Adjacent digits along a dark blue line must alternate modularity (147), (258), (369), any set of three must contain one of each.
Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
No negative constraints.
