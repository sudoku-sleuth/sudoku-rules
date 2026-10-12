---
format: open-rules
title: Juxtaposed (Kontrast)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/juxtaposed-kontrast
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=4 r2c8=3 r8c2=7 r8c8=6
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r5c4 colour "white"
kropki-2: kropki r5c6-r6c6 colour "white"
kropki-3: kropki r1c3-r2c3 colour "black"
kropki-4: kropki r8c6-r9c6 colour "black"
whispers-1: whispers r7c9-r7c8-r7c7 gap 5
whispers-2: whispers r9c9-r9c8-r9c7 gap 5
whispers-3: whispers r9c1-r8c1-r7c1 gap 5
whispers-4: whispers r9c3-r8c3-r7c3 gap 5
whispers-5: whispers r1c1-r1c2-r1c3 gap 5
whispers-6: whispers r3c1-r3c2-r3c3 gap 5
whispers-7: whispers r1c7-r2c7-r3c7 gap 5
whispers-8: whispers r1c9-r2c9-r3c9 gap 5
renban-1: renban r8c7-r8c8-r8c9-r7c7
renban-2: renban r7c2-r8c2-r9c2-r8c3
renban-3: renban r2c1-r2c2-r2c3-r3c3
renban-4: renban r1c8-r2c8-r3c8-r2c7
renban-5: renban r8c4-r8c5-r8c6-r7c6-r9c6
renban-6: renban r2c4-r2c5-r2c6-r1c4-r3c4
renban-7: renban r5c1-r4c1-r4c2-r4c3-r5c3
renban-8: renban r5c7-r6c7-r6c8-r6c9-r5c9
renban-9: renban r4c5-r4c4-r5c4-r6c4
renban-10: renban r6c5-r6c6-r5c6-r4c6
pair r5c5-r6c5 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers on purple lines are a set of non-repeating consecutive numbers, in any order. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Numbers with an X between them sum to 10. Not all dots and X are given.
