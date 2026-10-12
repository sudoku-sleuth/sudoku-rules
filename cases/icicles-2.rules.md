---
format: open-rules
title: Icicles
setter: Tingo
source: https://tinyurl.com/iciclessudoku
case: https://sudoku-sleuth.com/cases/icicles-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
thermo-2: thermo r2c2-r3c2-r4c2-r5c2-r6c2
thermo-3: thermo r1c3-r2c3-r3c3
thermo-4: thermo r2c4-r3c4-r4c4-r5c4-r6c4-r7c4
thermo-5: thermo r1c5-r2c5-r3c5-r4c5-r5c5
thermo-6: thermo r2c6-r3c6-r4c6
thermo-7: thermo r1c7-r2c7-r3c7-r4c7-r5c7
thermo-8: thermo r2c8-r3c8-r4c8-r5c8-r6c8-r7c8
kropki r8c4-r9c4 colour "white"
arrow-1: arrow r6c3-r5c3 bulb ["r7c3"]
arrow-2: arrow r8c2-r7c2 bulb ["r9c2"]
arrow-3: arrow r8c6-r7c6 bulb ["r9c6"]
arrow-4: arrow r7c7-r6c7 bulb ["r8c7"]
pair r7c5-r8c5 relation {"op":"sum","value":5}
```

Normal Sudoku Rules Apply
Values on thermometers must strictly increase from the bulb end.
Digits along an arrow must sum to the value of the digit in that arrow's circle.
Cells joined by V must sum to 5. Not all Vs are given.
Cells separated by white dots are consecutive in value. Not all dots are given.
