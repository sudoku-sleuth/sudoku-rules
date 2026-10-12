---
format: open-rules
title: Finale
setter: Chip Sounder
source: https://sudokupad.app/puekzw4hyt
case: https://sudoku-sleuth.com/cases/finale
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c1-r7c2 total 15 connected true
cage-2: cage r5c1-r5c2 total 15 connected true
cage-3: cage r5c8-r5c9 total 5 connected true
cage-4: cage r3c8-r3c9 total 5 connected true
cage-5: cage r4c5-r4c6 total 5 connected true
cage-6: cage r6c4-r6c5 total 15 connected true
cage-7: cage r1c4-r2c4 total 5 connected true
cage-8: cage r8c6-r9c6 total 15 connected true
cage-9: cage r3c1-r3c2 total 5 connected true
cage-10: cage r7c8-r7c9 total 15 connected true
cage-11: cage r9c3-r9c4 total 15 connected true
cage-12: cage r1c6-r1c7 total 5 connected true
cage-13: cage r9c8-r9c9 total 10 connected true
cage-14: cage r1c1-r1c2 total 10 connected true
cage-15: cage r3c3-r4c3-r5c3 total 20 connected true
cage-16: cage r5c7-r6c7-r7c7 total 9 connected true
cage-17: cage r7c4-r7c5 total 7 connected true
cage-18: cage r3c5-r3c6 total 13 connected true
cage-19: cage r6c2-r6c3 total 7 connected true
cage-20: cage r4c7-r4c8 total 13 connected true
cage-21: cage r5c4-r5c5-r5c6 total 20 connected true
kropki-1: kropki r9c7-r9c8 colour "black"
kropki-2: kropki r1c2-r1c3 colour "black"
kropki-3: kropki r6c1-r6c2 colour "black"
kropki-4: kropki r2c5-r2c6 colour "black"
kropki-5: kropki r6c5-r6c6 colour "black"
kropki-6: kropki r5c3-r5c4 colour "black"
whispers-1: whispers r7c7-r7c8 gap 5
whispers-2: whispers r4c6-r4c7 gap 5
whispers-3: whispers r2c2-r2c3 gap 5
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage without repeat, sum to the total given in the top left corner of the cage.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Adjacent digits on a green line must differ by at least 5.
