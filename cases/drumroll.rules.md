---
format: open-rules
title: Drumroll
setter: Jobo
source: https://sudokupad.app/35qwu8izn5
case: https://sudoku-sleuth.com/cases/drumroll
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=5
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r4c4-r3c3-r2c2-r1c1
thermo-2: thermo r5c6-r4c7-r3c8-r2c9
kropki-1: kropki r7c2-r8c2 colour "white"
kropki-2: kropki r7c8-r8c8 colour "white"
whispers-1: whispers r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8 gap 5
whispers-2: whispers r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2 gap 5
region-sum-1: region-sum r6c2-r7c2-r8c2-r9c2 segments [["r6c2"],["r7c2","r8c2","r9c2"]]
region-sum-2: region-sum r6c8-r7c8-r8c8-r9c8 segments [["r6c8"],["r7c8","r8c8","r9c8"]]
region-sum-3: region-sum r6c4-r7c4-r8c5-r9c6 segments [["r6c4"],["r7c4","r8c5","r9c6"]]
region-sum-4: region-sum r6c6-r7c6-r8c5-r9c4 segments [["r6c6"],["r7c6","r8c5","r9c4"]]
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits along a blue line sum to the same value in each 3x3 box the line passes through. Crossing lines go straight and are counted as separate sums.

Adjacent digits along a green line must differ by at least 5.

Digits separated by a white dot must be consecutive. Not all dots are given.

Cells separated by a king's move cannot contain the same digit.
