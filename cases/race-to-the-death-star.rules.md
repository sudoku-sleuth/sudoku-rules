---
format: open-rules
title: Race to the Death Star
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/race-to-the-death-star
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: cfc435f191025a27c8af53914904b411
---

```rules
sudoku 9x9
cage r8c7-r9c7 total 3 connected true
thermo-1: thermo r2c2-r3c1-r4c1-r5c2-r5c3-r5c4-r4c5-r3c5
thermo-2: thermo r2c2-r3c1-r2c1-r1c2-r1c3-r1c4-r2c5-r3c5
thermo-3: thermo r6c7-r6c6-r6c5-r6c4
thermo-4: thermo r6c7-r6c8-r6c9
thermo-5: thermo r6c7-r5c8-r4c9
thermo-6: thermo r6c7-r7c6-r8c5
thermo-7: thermo r8c3-r9c2-r8c1
thermo-8: thermo r8c3-r7c4-r6c3
thermo-9: thermo r8c3-r7c4-r8c5
thermo-10: thermo r3c7-r4c6-r3c5
thermo-11: thermo r3c7-r4c6-r5c7
thermo-12: thermo r3c7-r2c8-r1c7
thermo-13: thermo r3c7-r2c8-r3c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
```

Numbers on thermometers increase from the bulb end. Maximum cells on thermometers are shaded pink, if required for clarity. Numbers in cages sum to the number in the top left corner of the cage.
