---
format: open-rules
title: "Name Series: Robert"
setter: Tingo
source: https://tinyurl.com/nameseriesrobertsudoku
case: https://sudoku-sleuth.com/cases/name-series-robert
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c1-r1c1-r1c2-r1c3-r2c3-r2c2-r3c3
thermo-2: thermo r1c4-r1c5-r1c6-r2c6-r3c6-r3c5-r3c4-r2c4
thermo-3: thermo r9c4-r8c4-r7c4-r7c5-r7c6-r8c6-r8c5-r9c6
whispers-1: whispers r4c2-r4c1-r5c2-r6c1-r6c2 gap 5
whispers-2: whispers r9c8-r8c8-r7c8 gap 5
whispers-3: whispers r7c9-r7c8-r7c7 gap 5
renban r1c7-r2c7-r3c7-r4c7-r4c8-r4c9-r3c9-r3c8
pair-1: pair r5c3-r5c4 sum 10
pair-2: pair r4c4-r4c5 sum 10
pair-3: pair r8c2-r8c3 sum 10
pair-4: pair r4c9-r5c9 sum 10
```

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits must differ by at least 5.
Pink lines are Renban lines. All digits on the line are consecutive in any order.
Cells joined by Xs sum to 10. Not all Xs are given.
Digits on a thermometer must strictly increase from the bulb end.
