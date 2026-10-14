---
format: open-rules
title: "Name Series: Grace"
setter: Tingo
source: https://tinyurl.com/ynswfrew
case: https://sudoku-sleuth.com/cases/name-series-grace
library: https://rules.sudoku-sleuth.com/
status: read
exported: 13004e0d79fa26373da03f829d20834d
---

```rules
sudoku 9x9
diagonal direction "anti"
thermo r3c5-r2c5-r1c5-r1c6-r1c7-r2c7-r2c6-r3c7
whispers-1: whispers r6c1-r5c1-r4c2-r5c3-r6c3 gap 5
whispers-2: whispers r5c2-r5c3 gap 5
whispers-3: whispers r4c6-r4c5-r4c4-r5c4-r6c4-r6c5-r6c6 gap 5
whispers-4: whispers r7c9-r7c8-r7c7-r8c8-r9c7-r9c8-r9c9 gap 5
renban r1c4-r1c3-r1c2-r2c2-r3c2-r3c3-r3c4-r2c4-r2c3
pair-1: pair r1c8-r1c9 sum 10
pair-2: pair r6c7-r7c7 sum 10
pair-3: pair r3c4-r3c5 sum 5
pair-4: pair r4c2-r5c2 sum 5
```

Normal Sudoku rules apply.
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5.
Purple lines are renban lines. All digits along a renban line are consecutive in any order.
Digits along a thermometer must increase from the bulb end.
Digits along the marked diagonal cannot repeat.
Cells connected by Vs sum to 5. Cells connected by Xs sum to 10. Not all Vs and Xs are given.
