---
format: open-rules
title: Six Snowdrops
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/six-snowdrops
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
kropki-1: kropki r1c2-r2c2 colour "white"
kropki-2: kropki r5c6-r6c6 colour "white"
kropki-3: kropki r2c4-r3c4 colour "white"
kropki-4: kropki r3c2-r4c2 colour "white"
kropki-5: kropki r3c8-r4c8 colour "white"
kropki-6: kropki r5c8-r6c8 colour "white"
arrow-1: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-2: arrow r2c8-r3c7 bulb ["r1c9"]
arrow-3: arrow r2c9-r3c9 bulb ["r1c9"]
```

The sun is still shining but the snow is falling faster. The snowdrops are reaching for the sky.

Normal sudoku rules apply, including thermometers, arrows, and Kropki dots. Anti-king constraint is in effect.
