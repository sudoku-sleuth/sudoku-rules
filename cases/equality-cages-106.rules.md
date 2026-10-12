---
format: open-rules
title: "Equality Cages 106: Are you feeling the heat? Cool!"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/equality-cages-106
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r4c8-r4c9
equality-cage-2: equality-cage r3c1-r4c1
equality-cage-3: equality-cage r8c7-r9c5-r9c6-r9c7
equality-cage-4: equality-cage r5c2-r6c1-r6c2-r6c3
equality-cage-5: equality-cage r2c3-r3c3-r4c3-r5c3
equality-cage-6: equality-cage r2c7-r2c8
equality-cage-7: equality-cage r2c4-r2c5
thermo-1: thermo r3c9-r4c9-r5c9-r6c8-r5c7-r5c8-r4c8
thermo-2: thermo r1c2-r1c1-r2c1-r3c1-r2c2-r3c2-r4c2-r4c1
thermo-3: thermo r7c8-r8c7-r9c7-r8c6-r8c5
thermo-4: thermo r7c8-r8c7-r7c6-r7c5
thermo-5: thermo r9c2-r8c2-r8c1-r7c1-r7c2
thermo-6: thermo r1c7-r2c7-r3c7
thermo-7: thermo r1c7-r2c8
kropki-1: kropki r8c8-r9c8 colour "black"
kropki-2: kropki r7c6-r8c6 colour "black"
kropki-3: kropki r7c5-r8c5 colour "black"
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown. 

Thermometers: Digits along each thermometer must increase starting from the bulb end.
