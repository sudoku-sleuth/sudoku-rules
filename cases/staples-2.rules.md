---
format: open-rules
title: Staples
setter: Tingo
source: https://sudokupad.app/utd5o5vrda
case: https://sudoku-sleuth.com/cases/staples-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo r5c4-r6c5-r5c6-r4c5
kropki-1: kropki r8c2-r9c2 colour "white"
kropki-2: kropki r3c5-r4c5 colour "black"
whispers-1: whispers r1c3-r2c4-r3c3-r4c2-r3c1 gap 5
whispers-2: whispers r4c3-r4c4-r5c4-r6c4-r6c3 gap 5
whispers-3: whispers r7c1-r6c2-r7c3-r8c4-r9c3 gap 5
whispers-4: whispers r1c7-r2c6-r3c7-r4c8-r3c9 gap 5
whispers-5: whispers r4c7-r4c6-r5c6-r6c6-r6c7 gap 5
whispers-6: whispers r7c9-r6c8-r7c7-r8c6-r9c7 gap 5
pair-1: pair r6c3-r7c3 relation {"op":"sum","value":10}
pair-2: pair r3c7-r4c7 relation {"op":"sum","value":10}
pair-3: pair r3c3-r4c3 relation {"op":"sum","value":5}
pair-4: pair r6c7-r7c7 relation {"op":"sum","value":5}
```

Normal Sudoku Rules Apply
Digits along thermometers strictly increase from the bulb end.
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5.
Cells connected by V sum to 5. Cells connected by X sum to 10. Not all Xs or Vs are necessarily given.
Cells joined by white dots are consecutive in value. Cells joined by black dots have a value in a ratio of 2:1. Not all dots are necessarily given.
