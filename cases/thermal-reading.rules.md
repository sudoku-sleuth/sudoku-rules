---
format: open-rules
title: Thermal Reading
setter: Meggen033
source: https://sudokupad.app/tdb4x6ftjn
case: https://sudoku-sleuth.com/cases/thermal-reading
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2aaf0b51bac33cfb90f4f85e59606b48
---

```rules
sudoku 9x9
cage-1: cage r4c2-r4c3-r4c4 total 9 connected true
cage-2: cage r6c2-r6c3-r6c4 total 21 connected true
cage-3: cage r1c5-r1c6 total 7 connected true
cage-4: cage r2c5-r2c6 total 13 connected true
cage-5: cage r3c5-r3c6 total 13 connected true
cage-6: cage r1c9-r2c9-r3c9 total 9 connected true
cage-7: cage r7c7-r8c7-r9c7 total 21 connected true
cage-8: cage r1c1-r1c2-r2c1 total 9 connected true
cage-9: cage r8c1-r9c1-r9c2 total 9 connected true
thermo-1: thermo r4c7-r4c6-r5c6-r6c6-r6c7
thermo-2: thermo r9c6-r8c6-r8c5-r8c4
thermo-3: thermo r7c1-r7c2-r8c2-r9c3
```

Normal Sudoku rules apply

Killer Cages: The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

Thermo: Digits along each thermometer must increase starting from the bulb end.
