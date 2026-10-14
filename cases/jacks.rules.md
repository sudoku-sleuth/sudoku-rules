---
format: open-rules
title: Jacks
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/jacks
library: https://rules.sudoku-sleuth.com/
status: read
exported: 637a039cc041703ab7f8d03153a1a3e5
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r2c4-r2c5 total 12 connected true
cage-2: cage r2c8-r3c8-r4c8-r5c8 total 16 connected true
cage-3: cage r8c5-r8c6-r8c7-r8c8 total 13 connected true
cage-4: cage r5c2-r6c2-r7c2-r8c2 total 19 connected true
cage-5: cage r6c3-r6c4-r7c3-r7c4 total 10 connected true
cage-6: cage r3c6-r3c7-r4c6-r4c7 total 20 connected true
cage-7: cage r3c3-r3c4-r4c3-r4c4 total 25 connected true
cage-8: cage r6c6-r6c7-r7c6-r7c7 total 28 connected true
cage-9: cage r5c3-r5c4-r5c5-r5c6-r5c7 total 21 connected true
cage-10: cage r3c5-r4c5 total 12 connected true
cage-11: cage r6c5-r7c5 total 12 connected true
thermo-1: thermo r2c2-r1c2
thermo-2: thermo r2c2-r2c1
thermo-3: thermo r2c2-r3c2
thermo-4: thermo r2c2-r2c3
thermo-5: thermo r2c4-r2c5
thermo-6: thermo r1c5-r2c5
thermo-7: thermo r2c6-r2c5
thermo-8: thermo r3c5-r2c5
thermo-9: thermo r2c8-r2c7
thermo-10: thermo r2c8-r1c8
thermo-11: thermo r2c8-r2c9
thermo-12: thermo r2c8-r3c8
thermo-13: thermo r4c8-r5c8
thermo-14: thermo r5c7-r5c8
thermo-15: thermo r5c9-r5c8
thermo-16: thermo r6c8-r5c8
thermo-17: thermo r5c5-r5c6
thermo-18: thermo r5c5-r4c5
thermo-19: thermo r5c5-r5c4
thermo-20: thermo r5c5-r6c5
thermo-21: thermo r6c2-r5c2
thermo-22: thermo r5c1-r5c2
thermo-23: thermo r4c2-r5c2
thermo-24: thermo r5c3-r5c2
thermo-25: thermo r8c2-r7c2
thermo-26: thermo r8c2-r8c1
thermo-27: thermo r8c2-r9c2
thermo-28: thermo r8c2-r8c3
thermo-29: thermo r8c4-r8c5
thermo-30: thermo r7c5-r8c5
thermo-31: thermo r8c6-r8c5
thermo-32: thermo r9c5-r8c5
thermo-33: thermo r8c8-r8c7
thermo-34: thermo r8c8-r7c8
thermo-35: thermo r8c8-r8c9
thermo-36: thermo r8c8-r9c8
```

Standard sudoku constraints: Each row, column, and box must contain a complete set of the digits 1-9.

Killer cages: Digits within a cage indicated by dashed lines cannot repeat within the cage and must sum to the number indicated in the upper left corner of the cage.

Thermometers: Digits on thermometers must increase from the bulb to the tip but do not have to be consecutive.
