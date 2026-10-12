---
format: open-rules
title: Quiet Squiggle
setter: Chip Sounder
source: https://sudokupad.app/3wovgfttse
case: https://sudoku-sleuth.com/cases/quiet-squiggle
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r4c7-r4c8-r5c7
thermo-2: thermo r6c3-r6c2-r5c3
kropki-1: kropki r5c4-r5c5 colour "white"
kropki-2: kropki r5c5-r5c6 colour "white"
kropki-3: kropki r7c7-r7c8 colour "black"
kropki-4: kropki r4c2-r4c3 colour "black"
whispers-1: whispers r9c1-r9c2-r8c2-r8c3-r7c3-r7c4-r6c4-r6c5-r7c5-r7c6-r8c6-r8c7-r8c8-r7c8-r7c9-r6c9-r6c8-r5c8-r5c9-r4c9 gap 5
whispers-2: whispers r1c9-r1c8-r2c8-r2c7-r3c7-r3c6-r4c6-r4c5-r3c5-r3c4-r2c4-r2c3-r2c2-r3c2-r3c1-r4c1-r4c2-r5c2-r5c1-r6c1 gap 5
pair-1: pair r3c2-r4c2 relation {"op":"sum","value":10}
pair-2: pair r6c8-r7c8 relation {"op":"sum","value":10}
little-killer-1: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 51
little-killer-2: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 42
```

Normal sudoku rules apply.
Adjacent digits on a green line must differ by at least 5.
Clues outside the grid sum the digits in the indicated diagonal, digits may repeat.
Digits on a thermometer must rise from the bulb end.
Cells separated by a black dot are a 1:2 ratio. 
Cells separated by a white dot are consecutive.
Cells separated by an X sum to 10.
Cells separated by a V sum to 5.
No negative constraints.
