---
format: open-rules
title: Snowdrops
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/snowdrops
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1
thermo-2: thermo r9c4-r8c4-r7c4-r6c4-r5c4
thermo-3: thermo r9c6-r8c6-r7c6-r6c6
thermo-4: thermo r9c9-r8c9
thermo-5: thermo r9c3-r8c3-r7c3-r6c3-r5c3-r4c3
thermo-6: thermo r9c7-r8c7-r7c7
kropki-1: kropki r5c6-r6c6 colour "white"
kropki-2: kropki r2c5-r3c5 colour "white"
kropki-3: kropki r3c6-r4c6 colour "white"
kropki-4: kropki r5c8-r6c8 colour "white"
arrow-1: arrow r2c8-r3c7 bulb ["r1c9"]
arrow-2: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-3: arrow r2c9-r3c9 bulb ["r1c9"]
```

The sun is shining but a few flakes of snow are beginning to fall, represented in this puzzle by white circles. Is the temperature dropping?  

Normal sudoku rules apply including arrow, thermo, and Kropki dot constraints. Anti-king constraint applies.
