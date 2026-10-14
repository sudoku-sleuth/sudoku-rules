---
format: open-rules
title: Test Tube
setter: Will Power
source: https://f-puzzles.com/?id=yfm3mgbh
case: https://sudoku-sleuth.com/cases/test-tube
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0f8288d5e9d63737ce25359ba480ee13
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 14 connected true
cage-2: cage r2c7-r3c7-r3c8 total 13 connected true
cage-3: cage r7c7-r7c8-r8c7 total 20 connected true
cage-4: cage r7c2-r7c3-r8c3 total 17 connected true
thermo-1: thermo r8c9-r9c9-r9c8-r9c7-r8c8-r7c9
thermo-2: thermo r2c1-r1c1-r1c2-r1c3-r2c2-r3c1
thermo-3: thermo r4c5-r4c4-r3c3
thermo-4: thermo r5c6-r4c6-r3c7
thermo-5: thermo r6c5-r6c6-r7c7
thermo-6: thermo r5c4-r6c4-r7c3
thermo-7: thermo r7c1-r8c2-r9c3-r9c2-r9c1-r8c1
thermo-8: thermo r1c7-r2c8-r3c9-r2c9-r1c9-r1c8
pair-1: pair r6c8-r6c9 sum 10
pair-2: pair r8c8-r9c8 sum 10
pair-3: pair r1c7-r1c8 sum 10
pair-4: pair r7c1-r8c1 sum 10
pair-5: pair r2c1-r3c1 sum 10
pair-6: pair r6c2-r6c3 sum 5
pair-7: pair r3c2-r3c3 sum 5
pair-8: pair r7c1-r7c2 sum 5
```

Normal Sudoku rules apply.  Thermometers- Numbers on thermometers must increase from the bulb end.  Killer Cages- Digits inside cages must sum to the number at the top left corner of the cage.  Numbers cannot repeat in cages.  XV- Digits separated by an X sum to 10.  Digits separated by a V sum to 5.  Not all X's and V's are shown.
