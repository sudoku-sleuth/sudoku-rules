---
format: open-rules
title: New Years Firework
setter: Tingo
source: https://tinyurl.com/newyearsfireworksudoku
case: https://sudoku-sleuth.com/cases/new-years-firework
library: https://rules.sudoku-sleuth.com/
status: read
exported: b5c2cf10367910ca2b6b4433d7832d0f
---

```rules
sudoku 9x9
thermo-1: thermo r8c1-r7c1-r6c2
thermo-2: thermo r9c3-r8c3-r7c3-r6c3
thermo-3: thermo r8c5-r7c4-r6c4
thermo-4: thermo r7c8-r7c7-r6c7-r6c6
thermo-5: thermo r5c8-r4c7-r3c6
thermo-6: thermo r5c9-r4c9-r3c8-r3c7-r2c7-r2c6
whispers-1: whispers r1c3-r2c3-r3c3-r4c3-r5c3 gap 5
whispers-2: whispers r1c1-r2c2-r3c3-r4c4-r5c5 gap 5
whispers-3: whispers r1c5-r2c4-r3c3-r4c2-r5c1 gap 5
whispers-4: whispers r3c1-r3c2-r3c3-r3c4-r3c5 gap 5
pair-1: pair r3c9-r4c9 sum 5
pair-2: pair r1c4-r2c4 sum 5
pair-3: pair r2c2-r2c3 sum 5
```

Normal Sudoku Rules Apply
The green lines are Whispers lines where adjacent digits must differ by a value of at least 5.
Thermometers use normal thermometer rules - all digits must strictly increase from the bulb end.
Cells connected by V sum to 5. Not all Vs are given.
