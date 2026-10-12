---
format: open-rules
title: The Wondering Traveler
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/the-wondering-traveler
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c9-r7c9 total 15 connected true
cage-2: cage r8c6-r9c6 total 13 connected true
cage-3: cage r6c1-r6c2-r6c3 total 16 connected true
cage-4: cage r1c2-r1c3-r1c4-r2c4 total 25 connected true
cage-5: cage r1c6-r1c7-r1c8-r2c6 total 17 connected true
cage-6: cage r7c1-r7c2 total 8 connected true
thermo r3c7-r3c8-r3c9-r4c9-r4c8-r4c7
kropki-1: kropki r7c7-r8c7 colour "white"
kropki-2: kropki r7c5-r8c5 colour "white"
kropki-3: kropki r9c1-r9c2 colour "white"
kropki-4: kropki r3c8-r3c9 colour "white"
kropki-5: kropki r3c1-r3c2 colour "black"
arrow-1: arrow r3c4-r3c5 bulb ["r4c3"]
arrow-2: arrow r6c4-r6c5 bulb ["r7c3"]
quadruple r8c3-r8c4-r9c3-r9c4 digits [6,7]
```

Normal Sudoku rules apply.

The digits along each arrow must sum to the digit in the circled cell. Digits may repeat along an arrow if permitted by other rules.

Digits along each thermometer must increase starting from the bulb end.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Circled digits where four cells meet must be present as values in those four cells.
