---
format: open-rules
title: "Name Series: Brad"
setter: Tingo
source: https://tinyurl.com/nameseriesbradsudoku
case: https://sudoku-sleuth.com/cases/name-series-brad
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo r3c4-r2c4-r1c4-r1c5-r1c6-r2c6-r2c5-r3c6
kropki r6c9-r7c9 colour "white"
whispers-1: whispers r1c1-r2c1-r3c1-r4c1-r5c1 gap 5
whispers-2: whispers r1c1-r1c2-r2c3-r3c2-r4c3-r5c2 gap 5
whispers-3: whispers r6c4-r5c4-r4c5-r5c6-r6c6 gap 5
whispers-4: whispers r5c6-r5c5 gap 5
whispers-5: whispers r9c7-r8c7-r7c7-r7c8-r8c9-r9c8 gap 5
whispers-6: whispers r9c8-r9c7 gap 5
pair-1: pair r4c2-r5c2 sum 10
pair-2: pair r6c3-r7c3 sum 10
pair-3: pair r5c3-r5c4 sum 10
pair-4: pair r6c4-r6c5 sum 10
pair-5: pair r4c5-r4c6 sum 10
pair-6: pair r5c5-r5c6 sum 10
pair-7: pair r2c6-r2c7 sum 10
pair-8: pair r2c7-r3c7 sum 10
pair-9: pair r4c8-r4c9 sum 5
```

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits must differ by at least 5.
Cells joined by white dots are consecutive in value. Not all dots are given.
Cells joined by Vs sum to 5. Cells joined by Xs sum to 10. Not all Vs and Xs are given.
Digits along thermometers must strictly increase from the bulb end.
