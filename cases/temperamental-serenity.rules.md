---
format: open-rules
title: Temperamental Serenity
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/temperamental-serenity
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4 total 7 connected true
cage-2: cage r8c4-r9c4 total 7 connected true
cage-3: cage r4c1-r4c2 total 13 connected true
cage-4: cage r4c8-r4c9 total 13 connected true
cage-5: cage r5c8-r5c9 total 7 connected true
cage-6: cage r8c5-r9c5 total 13 connected true
cage-7: cage r6c1-r6c2-r6c3 total 15 connected true
cage-8: cage r1c6-r2c6-r3c6 total 15 connected true
cage-9: cage r3c3-r3c4-r4c3 total 13 connected true
cage-10: cage r8c2-r8c3 total 4 connected true
cage-11: cage r2c8-r3c8 total 16 connected true
cage-12: cage r7c8-r8c7-r8c8 total 9 connected true
cage-13: cage r1c1-r1c2-r2c1 total 22 connected true
cage-14: cage r5c5-r6c5 total 7 connected true
thermo-1: thermo r5c4-r4c4-r4c5
thermo-2: thermo r8c9-r9c9-r9c8
thermo-3: thermo r9c2-r9c1
thermo-4: thermo r2c9-r1c9
```

Normal sudoku rules apply.

Digits in a cage must sum to the number in its top left corner.  Digits may not repeat within a cage.

Digits along a thermometer must increase from from the bulb end.
