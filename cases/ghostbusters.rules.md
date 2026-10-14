---
format: open-rules
title: Ghostbusters
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/ghostbusters
library: https://rules.sudoku-sleuth.com/
status: read
exported: c48685f57d34ca1abf023647f5c2de34
---

```rules
sudoku 9x9
thermo r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
kropki-1: kropki r3c3-r3c4 white
kropki-2: kropki r8c3-r8c4 white
kropki-3: kropki r8c4-r8c5 white
kropki-4: kropki r8c5-r9c5 white
kropki-5: kropki r2c3-r3c3 black
kropki-6: kropki r2c4-r3c4 black
kropki-7: kropki r4c3-r4c4 black
kropki-8: kropki r8c4-r9c4 black
kropki-9: kropki r6c6-r7c6 black
kropki-10: kropki r6c1-r7c1 black
kropki-11: kropki r7c1-r7c2 black
kropki-12: kropki r8c7-r9c7 black
whispers-1: whispers r3c1-r2c2 gap 4
whispers-2: whispers r1c4-r1c5-r1c6 gap 4
whispers-3: whispers r6c9-r7c9-r8c8 gap 4
whispers-4: whispers r9c5-r9c6 gap 4
whispers-5: whispers r9c5-r9c4-r9c3 gap 4
whispers-6: whispers r8c1-r9c2 gap 4
whispers-7: whispers r3c7-r4c6 gap 4
whispers-8: whispers r5c5-r6c4-r7c3 gap 4
whispers-9: whispers r2c6-r3c7 gap 4
whispers-10: whispers r2c6-r2c5 gap 4
whispers-11: whispers r8c5-r8c6-r7c7 gap 4
whispers-12: whispers r7c7-r6c7 gap 4
whispers-13: whispers r6c1-r7c1 gap 4
whispers-14: whispers r2c7-r3c8 gap 4
whispers-15: whispers r4c9-r5c9 gap 4
whispers-16: whispers r1c6-r2c7 gap 4
renban-1: renban r5c5-r5c4-r4c5-r3c5-r2c5-r1c4-r1c3-r2c2-r3c2
renban-2: renban r7c3-r8c4-r9c5
renban-3: renban r4c6-r4c7-r4c8-r5c9-r6c9-r6c8-r5c7
renban-4: renban r8c2-r7c2-r6c2-r4c2-r5c3-r5c2
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines, if other rules allow. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. THERMOMETER- Numbers on thermometers increase from the bulb end. KROPKI PAIRS- Numbers with white dots between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are shown.
