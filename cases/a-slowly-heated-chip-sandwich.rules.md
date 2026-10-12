---
format: open-rules
title: A slowly heated Chip sandwich
setter: Chip Sounder
source: https://sudokupad.app/88d5vco19l
case: https://sudoku-sleuth.com/cases/a-slowly-heated-chip-sandwich
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r1c5 colour "white"
kropki-2: kropki r1c6-r1c7 colour "white"
kropki-3: kropki r3c3-r3c4 colour "white"
kropki-4: kropki r3c4-r3c5 colour "white"
kropki-5: kropki r3c5-r3c6 colour "white"
kropki-6: kropki r3c6-r3c7 colour "white"
kropki-7: kropki r5c4-r5c5 colour "black"
kropki-8: kropki r5c5-r5c6 colour "black"
kropki-9: kropki r7c2-r7c3 colour "black"
kropki-10: kropki r7c6-r7c7 colour "black"
whispers-1: whispers r1c3-r1c4 gap 5
whispers-2: whispers r1c5-r1c6 gap 5
whispers-3: whispers r7c3-r7c4 gap 5
whispers-4: whispers r7c5-r7c6 gap 5
whispers-5: whispers r6c9-r7c8-r8c7-r9c6-r9c5 gap 5
slow-thermo-1: slow-thermo r9c1-r8c2-r7c1-r6c2-r5c1-r4c2-r3c1-r2c2-r1c1
slow-thermo-2: slow-thermo r6c9-r5c8-r4c9-r3c8
sandwich-1: sandwich r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 20
sandwich-2: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 10
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
Adjacent digits along a green line must differ by at least 5.
Digits on a slow thermometer must never decrease from the bulb end.
Clues outside the grid sum the digits along the indicated row/column that appear between the 1 and 9.
No negative constraints.
