---
format: open-rules
title: Tic Tac Toe, Three In A Row
setter: Tingo
source: https://tinyurl.com/yasvk7yj
case: https://sudoku-sleuth.com/cases/tic-tac-toe-three-in-a-row
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2b377f179b77dc09d1e8790bef0d64e4
---

```rules
sudoku 9x9
diagonal direction "main"
thermo r9c1-r9c2-r9c3-r8c3-r7c3-r7c2-r7c1-r8c1
kropki-1: kropki r6c2-r7c2 white
kropki-2: kropki r3c5-r4c5 white
kropki-3: kropki r8c7-r9c7 white
kropki-4: kropki r3c7-r4c7 white
between r7c6-r7c5-r7c4-r8c4-r9c4-r9c5 ends ["r8c6","r9c6"]
whispers-1: whispers r1c3-r2c2-r3c1 gap 5
whispers-2: whispers r4c6-r5c5-r6c4 gap 5
whispers-3: whispers r7c9-r8c8-r9c7 gap 5
whispers-4: whispers r3c7-r2c7-r1c7-r1c8-r1c9-r2c9-r3c9-r3c8 gap 5
whispers-5: whispers r4c3-r5c2-r6c1 gap 5
whispers-6: whispers r6c3-r5c2-r4c1 gap 5
renban-1: renban r1c4-r1c5-r1c6-r2c6-r3c6-r3c5-r3c4-r2c4
renban-2: renban r4c7-r4c8-r4c9-r5c9-r6c9-r6c8-r6c7-r5c7
pair-1: pair r8c6-r9c6 sum 10
pair-2: pair r5c3-r6c3 sum 10
pair-3: pair r6c5-r6c6 sum 10
pair-4: pair r7c5-r7c6 sum 10
pair-5: pair r1c8-r1c9 sum 10
```

Normal Sudoku Rules Apply
Values on thermometers must strictly increase from the bulb end.
Green lines are German Whisper lines. Adjacent digits along the line must differ in value by at least 5.
Pink lines are Renban lines. All digits along a Renban line are consecutive in any order.
Cells separated by Xs sum to 10. Not all Xs are given.
Cells separated by white dots are consecutive in value. Not all dots are given.
Digits along the diagonal must be 1-9 with no repeats.
Digits along the between line must be of a value between the digits in the circles.
