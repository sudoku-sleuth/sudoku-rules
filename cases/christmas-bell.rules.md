---
format: open-rules
title: Christmas Bell
setter: Tingo
source: https://sudokupad.app/lz6gl2el1a
case: https://sudoku-sleuth.com/cases/christmas-bell
library: https://rules.sudoku-sleuth.com/
status: read
exported: 25ca2b2764edc9a7dd88fa8ad864127f
---

```rules
sudoku 9x9
cage-1: cage r8c3-r8c4 total 8 connected true
cage-2: cage r8c6-r8c7 total 8 connected true
thermo-1: thermo r1c5-r2c4
thermo-2: thermo r1c5-r2c5
thermo-3: thermo r1c5-r2c6
thermo-4: thermo r3c5-r4c5-r5c5-r6c5
thermo-5: thermo r7c5-r7c6-r7c7-r7c8-r7c9
thermo-6: thermo r7c5-r7c4-r7c3-r7c2-r7c1
kropki-1: kropki r8c1-r8c2 white
kropki-2: kropki r2c2-r2c3 white
kropki-3: kropki r2c7-r2c8 white
kropki-4: kropki r7c8-r7c9 white
kropki-5: kropki r8c8-r8c9 white
kropki-6: kropki r1c6-r1c7 black
whispers r7c1-r6c2-r5c2-r4c2-r3c3-r2c4-r2c5-r2c6-r3c7-r4c8-r5c8-r6c8-r7c9 gap 5
renban-1: renban r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
renban-2: renban r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
renban-3: renban r3c3-r3c4-r3c5-r3c6-r3c7
pair-1: pair r9c3-r9c4 sum 10
pair-2: pair r9c6-r9c7 sum 10
pair-3: pair r7c1-r7c2 sum 10
pair-4: pair r1c3-r1c4 sum 10
pair-5: pair r2c1-r3c1 sum 5
pair-6: pair r2c9-r3c9 sum 5
```

Merry Christmas 2024, Everyone!

Normal Sudoku Rules Apply
Digits along thermometers strictly increase from the bulb.
Purple lines (ribbon) are renban lines. All digits along a renban are consecutive in any order.
Green lines are German Whisper lines. Adjacent digits along the line must differ in value by at least 5.
Cells in cages must sum to the value in the top left corner of the cage.
Cells joined by white dots are consecutive. Cells joined by black dots have a value ratio of 2:1. Cells joined by Vs sum to 5. Cells joined by Xs sum to 10. Not all dots, Vs or Xs are given.
