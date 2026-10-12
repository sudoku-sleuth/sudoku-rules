---
format: open-rules
title: The odd one out
setter: Chip Sounder
source: https://sudokupad.app/6ruk4oq1uk
case: https://sudoku-sleuth.com/cases/the-odd-one-out
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r9c3-r9c4-r9c5-r9c6 total 20 connected true
cage-2: cage r1c3-r2c3-r3c3 total 9 connected true
cage-3: cage r7c7-r8c7 total 14 connected true
cage-4: cage r4c4-r4c5-r5c5 total 15 connected true
kropki-1: kropki r6c1-r7c1 colour "black"
kropki-2: kropki r3c1-r4c1 colour "black"
kropki-3: kropki r3c4-r4c4 colour "black"
kropki-4: kropki r6c5-r6c6 colour "black"
little-killer-1: little-killer r9c1 sum 2
little-killer-2: little-killer r9c9 sum 1
little-killer-3: little-killer r1c9 sum 2
little-killer-4: little-killer r1c1 sum 1
little-killer-5: little-killer r7c1-r8c2-r9c3 sum 19
little-killer-6: little-killer r7c9-r8c8-r9c7 sum 20
little-killer-7: little-killer r1c4-r2c3-r3c2-r4c1 sum 16
numbered-room r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 digit 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,6.5],[2.5,5.5],[2.5,3.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,0.5],[1.5,1.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,8.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,6.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,5.5]],"color":"#a49595ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Clues outside the grid with an arrow are little killer clues of which sum the digits along the indicated diagonal, digits may repeat (if other rules allow).
Clues outside the grid without an arrow are numbered rooms clues of which indicate the digit which has to be placed in the Nth cell in the corresponding direction, where N is the digit placed in the first cell in that direction.
Adjacent digits along a green line must differ by at least 5. Note.. one of the whisper lines is also a palindrome and up to the solver to determine which.
Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Digits along a grey line must read the same forwards as backwards.
Which clue is the odd one out?
There is a hidden word.
