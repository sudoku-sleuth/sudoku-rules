---
format: open-rules
title: No logical steps found part 5..my brain hurts
setter: Chip Sounder
source: https://sudokupad.app/icv99km66q
case: https://sudoku-sleuth.com/cases/no-logical-steps-found-part-5-my-brain-hurts
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c1-r8c2-r9c1-r9c2 total 10 connected true
cage-2: cage r1c8-r1c9-r2c8-r2c9 total 10 connected true
cage-3: cage r8c6-r8c7-r9c6-r9c7 total 20 connected true
cage-4: cage r6c8-r6c9-r7c8-r7c9 total 20 connected true
cage-5: cage r6c3-r7c3 total 9 connected true
cage-6: cage r3c6-r3c7 total 9 connected true
cage-7: cage r3c1-r4c1 total 11 connected true
kropki-1: kropki r5c1-r5c2 colour "black"
kropki-2: kropki r8c4-r9c4 colour "black"
kropki-3: kropki r2c4-r3c4 colour "black"
kropki-4: kropki r3c3-r3c4 colour "white"
kropki-5: kropki r7c8-r7c9 colour "white"
whispers-1: whispers r1c5-r2c5 gap 6
whispers-2: whispers r4c8-r4c9 gap 6
little-killer-1: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 36
little-killer-2: little-killer r1c2-r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9 sum 39
little-killer-3: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 44
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[4.5,5.5],[4.5,6.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[5.5,4.5],[2.5,1.5],[2.5,0.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[7.5,6.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits along a grey line read the same forwards as backwards.
Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage.
Adjacent digits along a green line must differ by at least 6.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
Clues outside the grid sum the digits along the indicated diagonal, digits may repeat.
No negative constraints.
