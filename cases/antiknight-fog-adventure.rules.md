---
format: open-rules
title: Antiknight fog adventure
setter: Chip Sounder
source: https://sudokupad.app/u233l3i1c4
case: https://sudoku-sleuth.com/cases/antiknight-fog-adventure
library: https://rules.sudoku-sleuth.com/
status: read
exported: 930bc18c0c57ea5f97503b3763b1d682
---

```rules
sudoku 9x9
cage-1: cage r7c3-r8c3-r9c3 total 10 connected true
cage-2: cage r6c4-r6c5-r6c6 total 10 connected true
cage-3: cage r7c7-r8c7-r9c7 total 10 connected true
cage-4: cage r4c3-r4c4-r4c5 total 15 connected true
cage-5: cage r2c4-r3c4 total 4 connected true
cage-6: cage r4c8-r4c9 total 3 connected true
cage-7: cage r2c5-r2c6-r3c6 total 12 connected true
anti-knight
kropki-1: kropki r7c5-r8c5 black
kropki-2: kropki r8c5-r9c5 black
kropki-3: kropki r7c3-r8c3 black
kropki-4: kropki r6c4-r6c5 black
kropki-5: kropki r8c7-r9c7 black
kropki-6: kropki r3c3-r4c3 black
kropki-7: kropki r1c8-r1c9 black
kropki-8: kropki r8c9-r9c9 black
whispers-1: whispers r6c5-r6c6 gap 5
whispers-2: whispers r8c2-r7c3-r6c3-r5c4 gap 5
whispers-3: whispers r6c3-r5c2-r4c2 gap 5
whispers-4: whispers r8c7-r7c8-r8c9 gap 5
whispers-5: whispers r3c3-r2c4-r1c5 gap 5
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a knight's move (in chess) cannot contain the same digit.
Cells separated by a black dot has one digit double the other (1:2  ratio).
Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage.
Adjacent digits along a green line must differ by at least 5.
No negative constraints.
