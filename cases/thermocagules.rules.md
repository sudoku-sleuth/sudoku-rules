---
format: open-rules
title: Thermocagules
setter: Tingo
source: https://tinyurl.com/wp7utpy7
case: https://sudoku-sleuth.com/cases/thermocagules
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r3c4 total 10 connected true
cage-2: cage r4c4-r5c4 total 11 connected true
cage-3: cage r2c6-r3c6 total 11 connected true
cage-4: cage r2c7-r2c8-r3c8 total 7 connected true
cage-5: cage r3c9-r4c9-r5c9-r6c9 total 24 connected true
cage-6: cage r5c8-r6c7-r6c8 total 12 connected true
cage-7: cage r7c7-r8c7-r9c7 total 13 connected true
cage-8: cage r5c5-r5c6-r5c7-r6c5-r7c5-r8c5 total 31 connected true
cage-9: cage r6c4-r7c4-r8c3-r8c4-r9c3 total 17 connected true
cage-10: cage r6c2-r7c1-r7c2-r8c1-r9c1 total 27 connected true
```

Normal Sudoku Rules Apply
Digits in cages must sum to the total in the top left hand corner of the cage. Digits may not repeat within cages. Additionally, digits within cages increase in value starting from the bottom-left of the cage as if there is an invisible thermometer in the cage beginning at the bottom/left/bottom-left most cell of the cage. Example, the "thermo" in box 3 7-cage increases from the bottom-most cell. The "thermo" in the box1/2 10-cage starts in the left-most cell.
