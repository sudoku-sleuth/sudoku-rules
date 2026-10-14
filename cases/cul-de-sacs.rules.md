---
format: open-rules
title: Cul de Sacs
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/cul-de-sacs
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3410a007354d9ff68d98508e1ebe4434
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r4c6 white
kropki-2: kropki r7c2-r7c3 white
kropki-3: kropki r7c7-r7c8 white
kropki-4: kropki r2c7-r3c7 white
kropki-5: kropki r2c2-r3c2 white
kropki-6: kropki r1c4-r2c4 white
whispers r9c8-r9c7-r8c6-r7c6-r6c5-r7c4-r8c4-r9c3-r9c2-r8c1-r7c1-r6c2-r6c3-r5c4-r4c3-r4c2-r3c1-r2c1-r1c2-r1c3-r2c4-r3c4-r4c5-r3c6-r2c6-r1c7-r1c8-r2c9-r3c9-r4c8-r4c7-r5c6-r6c7-r6c8-r7c9 gap 5
extremum-1: extremum r1c2-r2c4-r3c9-r4c7-r6c5-r5c3-r7c1-r8c6-r9c8-r3c3-r2c6-r1c8-r6c7-r4c5-r9c1-r8c4-r7c9-r3c1-r5c8-r1c2-r1c8-r2c4-r2c6-r3c1-r3c3-r3c9-r4c5-r4c7-r5c3-r5c8-r6c5-r6c7-r7c1-r7c9-r8c4-r8c6-r9c1-r9c8 type "min" exhaustive true
extremum-2: extremum r2c1-r3c8-r5c4-r1c5-r4c2-r6c9-r8c7-r9c3-r7c6-r1c3-r3c6-r2c9-r6c2-r8c1-r7c4-r3c4-r1c7-r8c5-r9c9-r1c3-r1c5-r1c7-r2c1-r2c9-r3c4-r3c6-r3c8-r4c2-r5c4-r6c2-r6c9-r7c4-r7c6-r8c1-r8c5-r8c7-r9c3-r9c9 type "max" exhaustive true
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers may repeat on the line, if other rules allow. Numbers on Red Maximum cells are greater than ALL ADJACENT CELLS. Numbers on Blue Minimum cells are less than ALL ADJACENT CELLS. ALL POSSIBLE MAXIMUMS AND MINIMUMS ARE GIVEN. Numbers with a white dot between them are consecutive. Not all dots are given.
