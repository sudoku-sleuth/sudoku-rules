---
format: open-rules
title: OMICRON SIGMA PHIst
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/omicron-sigma-phist
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: fbf0b90b0f9e848b74304dd4561fbfba
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 14 connected true
cage-2: cage r1c8-r1c9-r2c8-r2c9 total 16 connected true
cage-3: cage r8c1-r8c2-r9c1-r9c2 total 16 connected true
cage-4: cage r8c8-r8c9-r9c8-r9c9 total 14 connected true
kropki-1: kropki r2c4-r2c5 white
kropki-2: kropki r2c5-r2c6 white
kropki-3: kropki r8c5-r8c6 white
kropki-4: kropki r4c2-r5c2 white
kropki-5: kropki r5c8-r6c8 white
arrow-1: arrow r3c4-r3c5-r3c6 bulb ["r3c3"]
arrow-2: arrow r4c7-r5c7-r6c7 bulb ["r3c7"]
arrow-3: arrow r7c6-r7c5-r7c4 bulb ["r7c7"]
arrow-4: arrow r6c3-r5c3-r4c3 bulb ["r7c3"]
arrow-5: arrow r9c7-r9c8-r8c9 bulb ["r9c6"]
arrow-6: arrow r3c9-r2c9-r1c8 bulb ["r4c9"]
arrow-7: arrow r1c3-r1c2-r2c1 bulb ["r1c4"]
arrow-8: arrow r7c1-r8c1-r9c2 bulb ["r6c1"]
extremum r3c3-r1c4-r1c4-r3c3 type "max" exhaustive false
thermo-1: thermo r3c6-r3c5-r3c4-r3c3
thermo-2: thermo r6c7-r5c7-r4c7-r3c7
thermo-3: thermo r7c4-r7c5-r7c6-r7c7
thermo-4: thermo r4c3-r5c3-r6c3-r7c3
thermo-5: thermo r8c9-r9c8-r9c7-r9c6
thermo-6: thermo r1c8-r2c9-r3c9-r4c9
thermo-7: thermo r2c1-r1c2-r1c3-r1c4
thermo-8: thermo r9c2-r8c1-r7c1-r6c1
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,6.5],[8.5,7.5],[7.5,8.5]],"color":"#F75B4D","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in that arrow's circle. Numbers on arrows DECREASE as you move away from the circle, except the red arrow does not follow this rule. All arrow circles that are greater than all adjacent cells have a blue maximum marking. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Not all dots are given.
