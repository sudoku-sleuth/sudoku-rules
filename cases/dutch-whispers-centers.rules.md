---
format: open-rules
title: Dutch Whispers Centers
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/dutch-whispers-centers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c5=9 r3c7=7
exported: 21b8f3286ff257c0160eb778d4a0d304
---

```rules
sudoku 9x9
kropki-1: kropki r9c8-r9c9 white
kropki-2: kropki r1c7-r1c8 white
kropki-3: kropki r7c5-r8c5 white
whispers-1: whispers r2c3-r3c3-r4c3 gap 4
whispers-2: whispers r3c2-r3c3-r3c4 gap 4
whispers-3: whispers r3c6-r4c6-r5c6 gap 4
whispers-4: whispers r4c5-r4c6-r4c7 gap 4
whispers-5: whispers r3c7-r3c8-r3c9 gap 4
whispers-6: whispers r6c7-r7c7-r8c7 gap 4
whispers-7: whispers r7c6-r7c7-r7c8 gap 4
whispers-8: whispers r4c4-r5c4-r6c4 gap 4
whispers-9: whispers r5c3-r5c4-r5c5 gap 4
whispers-10: whispers r5c2-r6c2-r7c2 gap 4
whispers-11: whispers r6c1-r6c2-r6c3 gap 4
whispers-12: whispers r8c2-r8c3-r8c4 gap 4
whispers-13: whispers r7c3-r8c3-r9c3 gap 4
whispers-14: whispers r1c5-r2c5-r3c5 gap 4
whispers-15: whispers r2c4-r2c5-r2c6 gap 4
whispers-16: whispers r4c8-r3c8 gap 4
```

Normal Sudoku rules apply. Numbers on red lines are at least 4 apart from their neighbors on the line. The 8 red line intersections contain all numbers, once each, except the number 7. Numbers with a white dot between them are consecutive. Not all possible dots are shown.
