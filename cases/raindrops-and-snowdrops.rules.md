---
format: open-rules
title: Raindrops and Snowdrops
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/raindrops-and-snowdrops
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1
thermo-2: thermo r9c3-r8c3-r7c3-r6c3-r5c3-r4c3
thermo-3: thermo r9c4-r8c4-r7c4-r6c4-r5c4
thermo-4: thermo r9c6-r8c6-r7c6-r6c6
thermo-5: thermo r9c7-r8c7-r7c7
thermo-6: thermo r9c9-r8c9
kropki-1: kropki r4c6-r4c7 colour "black"
kropki-2: kropki r1c5-r1c6 colour "black"
arrow-1: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-2: arrow r2c8-r3c7 bulb ["r1c9"]
arrow-3: arrow r2c9-r3c9 bulb ["r1c9"]
```

The sun is still shining but the rain is starting to fall. Our hope is that the rain will make the snowdrops grow.

Normal sudoku rules apply, including thermometers, arrows, and Kropki dots. Anti-king constraint is in effect.
