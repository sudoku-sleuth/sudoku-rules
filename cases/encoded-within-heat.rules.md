---
format: open-rules
title: Encoded within heat
setter: Chip Sounder
source: https://sudokupad.app/rpxc394vp1
case: https://sudoku-sleuth.com/cases/encoded-within-heat
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r2c2-r3c3-r4c4-r5c5-r6c6-r7c6
thermo-2: thermo r6c2-r7c2-r8c2
thermo-3: thermo r8c5-r9c4-r8c3
thermo-4: thermo r3c8-r2c7-r1c6
thermo-5: thermo r9c9-r9c8-r9c7
kropki-1: kropki r2c2-r2c3 colour "white"
kropki-2: kropki r2c6-r2c7 colour "white"
kropki-3: kropki r2c8-r2c9 colour "white"
kropki-4: kropki r3c4-r3c5 colour "white"
kropki-5: kropki r3c6-r3c7 colour "white"
kropki-6: kropki r6c5-r6c6 colour "white"
kropki-7: kropki r5c4-r5c5 colour "white"
kropki-8: kropki r7c2-r7c3 colour "white"
kropki-9: kropki r9c5-r9c6 colour "white"
whispers-1: whispers r1c2-r1c3 gap 5
whispers-2: whispers r1c4-r1c5 gap 5
whispers-3: whispers r1c6-r1c7 gap 5
whispers-4: whispers r2c4-r2c5 gap 5
whispers-5: whispers r3c2-r3c3 gap 5
whispers-6: whispers r6c3-r6c4 gap 5
whispers-7: whispers r4c3-r4c4 gap 5
whispers-8: whispers r4c5-r4c6 gap 5
whispers-9: whispers r5c6-r5c7 gap 5
whispers-10: whispers r7c4-r7c5 gap 5
whispers-11: whispers r7c6-r7c7 gap 5
whispers-12: whispers r7c8-r7c9 gap 5
whispers-13: whispers r8c3-r8c4 gap 5
whispers-14: whispers r8c5-r8c6 gap 5
whispers-15: whispers r8c7-r8c8 gap 5
whispers-16: whispers r4c1-r5c1-r6c1 gap 5
little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 25
```

For an extra bit of fun, there is a hidden word puzzle in the grid and it is up to the solver to disambiguate what it says.
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a white dot are consecutive.
Adjacent digits along a green line must differ by at least 5.
Digits on a thermometer must rise from the bulb end.
Clues outside the grid give sum of the digits along the indicated diagonal, digits may repeat.
