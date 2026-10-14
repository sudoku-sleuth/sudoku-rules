---
format: open-rules
title: Three at a time
setter: EPH
source: https://tinyurl.com/yckfu6xp
case: https://sudoku-sleuth.com/cases/three-at-a-time
library: https://rules.sudoku-sleuth.com/
status: read
exported: a9fd915a655c1c1559fcc09c0e60db2a
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c4-r4c4 total 8 connected true
cage-2: cage r4c6-r4c7-r4c8 total 8 connected true
cage-3: cage r6c6-r7c6-r8c6 total 8 connected true
cage-4: cage r6c2-r6c3-r6c4 total 8 connected true
cage-5: cage r3c9-r4c9-r5c9 total 7 connected true
cage-6: cage r1c3-r1c4-r1c5 total 9 connected true
cage-7: cage r5c1-r6c1-r7c1 total 10 connected true
cage-8: cage r9c5-r9c6-r9c7 total 12 connected true
cage-9: cage r8c3-r9c2-r9c3 total 10 connected true
cage-10: cage r2c1-r3c1-r3c2 total 9 connected true
cage-11: cage r1c7-r1c8-r2c7 total 14 connected true
cage-12: cage r7c8-r7c9-r8c9 total 19 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo-1: thermo r4c1-r4c2-r4c3
thermo-2: thermo r6c7-r6c8-r6c9
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.
Digits in a cage must sum to the small number at the top of the cage.
Digits along a thermometer must increase from the bulb end.
Both of the main diagonals must contain no repeated digits.
