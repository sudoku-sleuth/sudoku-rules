---
format: open-rules
title: Neurotic Tranquility
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/neurotic-tranquility
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2-r6c3 total 11 connected true
cage-2: cage r1c6-r2c6-r3c6 total 19 connected true
cage-3: cage r5c5-r5c6-r6c5 total 15 connected true
cage-4: cage r8c5-r9c5 total 5 connected true
cage-5: cage r5c8-r5c9 total 15 connected true
cage-6: cage r1c5-r2c5 total 10 connected true
cage-7: cage r5c1-r5c2 total 10 connected true
cage-8: cage r8c3-r9c3 total 13 connected true
cage-9: cage r3c8-r3c9 total 13 connected true
cage-10: cage r2c3-r3c2-r3c3 total 21 connected true
cage-11: cage r8c9-r9c8-r9c9 total 18 connected true
cage-12: cage r1c1-r1c2-r2c1 total 12 connected true
cage-13: cage r9c1-r9c2 total 9 connected true
cage-14: cage r1c9-r2c9 total 5 connected true
cage-15: cage r7c7-r7c8-r8c7 total 15 connected true
thermo-1: thermo r6c8-r6c7-r6c6-r7c6-r8c6
thermo-2: thermo r4c5-r5c5-r6c4
thermo-3: thermo r5c7-r4c6
thermo-4: thermo r3c5-r2c6-r1c7
```

Normal sudoku rules apply.

Digits in a cage mus sum to the number in its top left corner.  Digits may not repeat within a cage.

Digits along a thermometer must increase from the bulb end.
