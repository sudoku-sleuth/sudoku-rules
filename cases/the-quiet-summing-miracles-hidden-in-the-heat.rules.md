---
format: open-rules
title: The quiet summing miracles hidden in the heat
setter: Chip Sounder
source: https://sudokupad.app/tdahmrns7i
case: https://sudoku-sleuth.com/cases/the-quiet-summing-miracles-hidden-in-the-heat
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r9c3-r8c4-r7c5-r6c6-r5c7
thermo-2: thermo r6c4-r5c4-r4c3-r3c2
thermo-3: thermo r5c3-r6c2-r7c1-r6c1
thermo-4: thermo r2c5-r3c5-r4c4
kropki-1: kropki r5c3-r5c4 colour "black"
kropki-2: kropki r5c8-r5c9 colour "black"
kropki-3: kropki r9c5-r9c6 colour "black"
kropki-4: kropki r9c6-r9c7 colour "black"
kropki-5: kropki r9c7-r9c8 colour "black"
kropki-6: kropki r3c1-r3c2 colour "white"
kropki-7: kropki r3c5-r3c6 colour "white"
kropki-8: kropki r3c6-r3c7 colour "white"
kropki-9: kropki r7c1-r7c2 colour "white"
kropki-10: kropki r7c5-r7c6 colour "white"
kropki-11: kropki r7c7-r7c8 colour "white"
kropki-12: kropki r9c1-r9c2 colour "white"
kropki-13: kropki r1c5-r1c6 colour "white"
kropki-14: kropki r1c7-r1c8 colour "white"
whispers-1: whispers r6c1-r6c2-r7c3 gap 5
whispers-2: whispers r6c4-r7c5 gap 5
whispers-3: whispers r6c8-r5c7-r4c8 gap 5
whispers-4: whispers r2c8-r3c8 gap 5
whispers-5: whispers r8c1-r9c1 gap 5
renban-1: renban r3c3-r3c4
renban-2: renban r3c8-r3c9
renban-3: renban r5c1-r5c2
renban-4: renban r5c5-r5c6
renban-5: renban r7c3-r7c4
renban-6: renban r1c1-r1c2
renban-7: renban r1c3-r1c4
region-sum-1: region-sum r7c8-r7c9-r6c8 segments [["r7c8","r7c9"],["r6c8"]]
region-sum-2: region-sum r8c5-r7c6-r8c7-r9c8 segments [["r8c5","r7c6"],["r8c7","r9c8"]]
little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 34
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Digits on a purple renban must be a set of consecutive digits in any order without repeat.
Adjacent digits along a green line must differ by at least 5.
Digits on a thermometer must rise from the bulb end.
Box borders separate a blue line into equal sums.
Clues outside the grid sum the digits along the indicated diagonal, digits may repeat.
No negative constraints.
