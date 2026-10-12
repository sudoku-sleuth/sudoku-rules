---
format: open-rules
title: Haunted House
setter: Tingo
source: https://tinyurl.com/5bcvrvj3
case: https://sudoku-sleuth.com/cases/haunted-house
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6-r1c7-r2c6-r3c6 total 30 connected true
cage-2: cage r4c4-r4c5-r4c6-r5c5 total 26 connected true
thermo-1: thermo r9c1-r8c1-r7c1
thermo-2: thermo r9c3-r8c3-r7c3
thermo-3: thermo r9c5-r8c5-r7c5
thermo-4: thermo r9c7-r8c7-r7c7
thermo-5: thermo r9c9-r8c9-r7c9
thermo-6: thermo r8c4-r9c4
thermo-7: thermo r8c6-r9c6
kropki-1: kropki r1c2-r2c2 colour "white"
kropki-2: kropki r1c8-r2c8 colour "white"
kropki-3: kropki r7c1-r8c1 colour "white"
kropki-4: kropki r8c1-r9c1 colour "black"
kropki-5: kropki r8c9-r9c9 colour "black"
kropki-6: kropki r7c9-r8c9 colour "black"
whispers-1: whispers r2c1-r1c2-r2c3 gap 5
whispers-2: whispers r3c2-r4c2-r5c2 gap 5
whispers-3: whispers r4c1-r4c2-r4c3 gap 5
whispers-4: whispers r4c4-r3c5-r4c6 gap 5
whispers-5: whispers r2c7-r1c8-r2c9 gap 5
whispers-6: whispers r3c8-r4c8-r5c8 gap 5
whispers-7: whispers r4c7-r4c8-r4c9 gap 5
whispers-8: whispers r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 gap 2
pair-1: pair r7c2-r7c3 relation {"op":"sum","value":10}
pair-2: pair r7c8-r7c9 relation {"op":"sum","value":10}
```

Normal Sudoku Rules Apply
Green lines are German Whisper lines. Adjacent digits along the line must differ in value by at least 5.
Purple lines are anti-consecutive lines. Adjacent digits along the line must differ in value by at least 2.
Digits along thermometers must strictly increase from the bulb end.
Cells joined by white dots are consecutive in value. Cells joined by black dots have values in a ratio of 2:1. Not all dots are given.
Cells joined by Xs sum to 10. Not all Xs are given.
Digits in cages must sum to the total in the top left hand corner of the cage. Digits may not repeat within cages.
