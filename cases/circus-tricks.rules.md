---
format: open-rules
title: Circus Tricks
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/circus-tricks
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6 total 8 connected true
cage-2: cage r7c4-r7c5-r7c6 total 7 connected true
thermo-1: thermo r2c9-r1c9
thermo-2: thermo r1c1-r2c1
thermo-3: thermo r9c2-r9c1
thermo-4: thermo r9c8-r9c9
kropki-1: kropki r5c8-r6c8 colour "white"
kropki-2: kropki r3c1-r4c1 colour "black"
kropki-3: kropki r3c9-r4c9 colour "black"
kropki-4: kropki r7c6-r8c6 colour "black"
kropki-5: kropki r5c6-r6c6 colour "black"
whispers-1: whispers r4c4-r3c3-r2c3-r2c4-r2c5-r2c6-r2c7-r3c7-r4c6 gap 5
whispers-2: whispers r6c4-r7c3-r8c3-r8c4-r8c5-r8c6-r8c7-r7c7-r6c6 gap 5
renban r4c5-r5c5-r6c5
nabner-1: nabner r4c1-r5c1-r6c1-r7c1-r8c1
nabner-2: nabner r4c9-r5c9-r6c9-r7c9-r8c9
```

```drawing
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5],[4.5,2.5],[4.5,3.5],[4.5,4.5],[4.5,5.5],[4.5,6.5],[4.5,7.5],[4.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal sudoku rules apply.
Digits along a green 'German Whispers' line must differ by at least 5.
Digits in a killer cage must sum to the total given.
Digits along a gold 'Nabner' line must have no 2 digits be consecutive.
Digits along a purple 'Renban' line must form a set of consecutive digits, in any order.
Digits along a circled 'Between' Line must be between the 2 digits in the circles at the ends.
Digits along a thermo must increase starting from the bulb end.
Digits seperated by a black dot must be in a 1:2 ratio. (No negative constraint)
Digits seperated by a white dot must be consecutive (No negative constraint)
