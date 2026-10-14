---
format: open-rules
title: Whisper at Maximum Volume
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/whisper-at-maximum-volume
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=7
exported: bc4ca8f428bcf2d6056b1924f069e931
---

```rules
sudoku 9x9
whispers-1: whispers r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8 gap 5
whispers-2: whispers r1c6-r2c6-r3c6-r4c6-r5c6 gap 5
whispers-3: whispers r6c6-r7c6-r8c6 gap 5
whispers-4: whispers r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 gap 5
whispers-5: whispers r8c5-r9c5 gap 5
whispers-6: whispers r6c5-r7c5 gap 5
whispers-7: whispers r2c5-r3c5-r4c5 gap 5
whispers-8: whispers r1c2-r2c2 gap 5
whispers-9: whispers r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 gap 5
whispers-10: whispers r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 gap 5
whispers-11: whispers r1c9-r2c9-r3c9 gap 5
whispers-12: whispers r1c3-r2c3-r3c3 gap 5
whispers-13: whispers r4c3-r5c3-r6c3 gap 5
whispers-14: whispers r8c3-r9c3 gap 5
whispers-15: whispers r2c1-r3c1 gap 5
whispers-16: whispers r4c1-r5c1 gap 5
whispers-17: whispers r7c1-r8c1 gap 5
whispers-18: whispers r7c9-r8c9 gap 5
negative relations [{"op":"at-least","value":5}] except [["r1c8","r2c8"],["r2c8","r3c8"],["r3c8","r4c8"],["r4c8","r5c8"],["r5c8","r6c8"],["r6c8","r7c8"],["r1c6","r2c6"],["r2c6","r3c6"],["r3c6","r4c6"],["r4c6","r5c6"],["r6c6","r7c6"],["r7c6","r8c6"],["r2c4","r3c4"],["r3c4","r4c4"],["r4c4","r5c4"],["r5c4","r6c4"],["r6c4","r7c4"],["r7c4","r8c4"],["r8c4","r9c4"],["r8c5","r9c5"],["r6c5","r7c5"],["r2c5","r3c5"],["r3c5","r4c5"],["r1c2","r2c2"],["r4c2","r5c2"],["r5c2","r6c2"],["r6c2","r7c2"],["r7c2","r8c2"],["r8c2","r9c2"],["r4c7","r5c7"],["r5c7","r6c7"],["r6c7","r7c7"],["r7c7","r8c7"],["r8c7","r9c7"],["r1c9","r2c9"],["r2c9","r3c9"],["r1c3","r2c3"],["r2c3","r3c3"],["r4c3","r5c3"],["r5c3","r6c3"],["r8c3","r9c3"],["r2c1","r3c1"],["r4c1","r5c1"],["r7c1","r8c1"],["r7c9","r8c9"]] direction "vertical"
```

Normal Sudoku rules apply. German Whispers Lines- Numbers on green lines are at least 5 apart from their neighbors on the line. ALL POSSIBLE VERTICAL WHISPERS LINES ARE GIVEN.
