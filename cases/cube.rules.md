---
format: open-rules
title: Cube
setter: Jobo
source: https://sudokupad.app/4vr9o6icr5
case: https://sudoku-sleuth.com/cases/cube
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r6c5-r5c4-r4c3-r3c2-r2c3-r1c4
thermo-2: thermo r6c5-r5c6-r4c7-r3c8-r2c7-r1c6
thermo-3: thermo r6c5-r7c5-r8c5-r9c5
thermo-4: thermo r7c2-r6c2-r5c2-r4c2-r3c2
thermo-5: thermo r7c2-r8c3-r9c4
thermo-6: thermo r7c8-r6c8-r5c8-r4c8-r3c8
thermo-7: thermo r7c8-r8c7-r9c6
kropki-1: kropki r2c5-r3c5 colour "black"
kropki-2: kropki r3c5-r4c5 colour "black"
kropki-3: kropki r8c9-r9c9 colour "black"
region-sum r2c5-r3c4-r4c5-r3c6 segments [["r2c5","r3c4","r3c6"],["r4c5"]]
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end (for the avoidance of doubt, all thermos have their tips in box 2 or 8).

Box borders divide the blue line into segments with the same sum.

Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
