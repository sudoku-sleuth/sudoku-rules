---
format: open-rules
title: Disjoint Hypothermia
setter: Meggen033
source: https://sudokupad.app/437o21t01x
case: https://sudoku-sleuth.com/cases/disjoint-hypothermia
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c5-r4c5 total 14 connected true
cage-2: cage r6c5-r7c5 total 14 connected true
cage-3: cage r4c2-r5c2 total 11 connected true
cage-4: cage r4c8-r5c8 total 12 connected true
thermo-1: thermo r2c2-r2c1-r1c1-r1c2
thermo-2: thermo r2c5-r1c5
thermo-3: thermo r8c5-r9c5
thermo-4: thermo r8c8-r8c9-r9c9-r9c8
thermo-5: thermo r2c8-r2c7-r1c7-r1c8
thermo-6: thermo r8c2-r8c3-r9c2
kropki-1: kropki r1c3-r1c4 colour "white"
kropki-2: kropki r5c6-r6c6 colour "black"
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

Normal Sudoku rules apply. 

Disjoint Sets: Digits must not repeat at corresponding box positions.

Thermo: Digits along each thermometer must increase starting from the bulb end.

Kropki: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Killer Cages: The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.
