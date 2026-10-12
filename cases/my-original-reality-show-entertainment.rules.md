---
format: open-rules
title: My Original Reality Show Entertainment
setter: Chip Sounder
source: https://sudokupad.app/u3wks9egf5
case: https://sudoku-sleuth.com/cases/my-original-reality-show-entertainment
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c1-r8c2-r9c2-r9c3 total 24 connected true
cage-2: cage r8c7-r8c8 total 7 connected true
kropki-1: kropki r1c1-r1c2 colour "white"
kropki-2: kropki r1c2-r1c3 colour "white"
kropki-3: kropki r1c3-r1c4 colour "white"
kropki-4: kropki r3c1-r3c2 colour "white"
kropki-5: kropki r3c2-r3c3 colour "white"
kropki-6: kropki r3c3-r3c4 colour "white"
kropki-7: kropki r3c8-r3c9 colour "white"
kropki-8: kropki r5c7-r5c8 colour "white"
kropki-9: kropki r5c8-r5c9 colour "white"
kropki-10: kropki r7c1-r7c2 colour "white"
kropki-11: kropki r7c5-r7c6 colour "white"
kropki-12: kropki r7c6-r7c7 colour "white"
kropki-13: kropki r9c3-r9c4 colour "white"
kropki-14: kropki r9c5-r9c6 colour "white"
kropki-15: kropki r9c6-r9c7 colour "white"
kropki-16: kropki r2c7-r2c8 colour "black"
kropki-17: kropki r2c8-r2c9 colour "black"
kropki-18: kropki r6c3-r6c4 colour "black"
kropki-19: kropki r8c3-r9c3 colour "black"
kropki-20: kropki r8c7-r9c7 colour "black"
kropki-21: kropki r8c4-r8c5 colour "black"
whispers-1: whispers r1c4-r1c5 gap 5
whispers-2: whispers r1c6-r1c7 gap 5
whispers-3: whispers r1c8-r1c9 gap 5
whispers-4: whispers r5c1-r5c2 gap 5
whispers-5: whispers r5c3-r5c4 gap 5
whispers-6: whispers r5c5-r5c6 gap 5
whispers-7: whispers r9c1-r9c2 gap 5
palindrome r8c8-r7c7-r6c6-r6c5
sandwich-1: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 10
sandwich-2: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 20
sandwich-3: sandwich r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 2
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,6.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,3.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,8.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[8.5,8.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
-Clues outside the grid gives the sum the digits between the 1 and 9 in their respective row/column.
-Cells separated by a white dot are consecutive.
-Adjacent digits along a green line must differ by at least 5.
-Adjacent digits along a red line must have alternating parity.
-Cells separated by a black dot has one digit double the other (1:2 ratio).
-Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage.
-The grey line is a palindrome and must read the same forwards as backwards.
No negative constraints.
