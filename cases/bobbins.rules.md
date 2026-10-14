---
format: open-rules
title: Bobbins!
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/bobbins
library: https://rules.sudoku-sleuth.com/
status: read
exported: fb148f5addacfa0c0cf8f363fbd1b6b7
---

```rules
sudoku 9x9
kropki-1: kropki r7c4-r8c4 white
kropki-2: kropki r8c4-r9c4 white
kropki-3: kropki r2c2-r3c2 white
kropki-4: kropki r4c6-r5c6 white
kropki-5: kropki r2c8-r3c8 white
kropki-6: kropki r2c6-r2c7 white
kropki-7: kropki r2c4-r2c5 white
kropki-8: kropki r3c4-r3c5 white
kropki-9: kropki r3c3-r3c4 white
kropki-10: kropki r4c2-r4c3 white
kropki-11: kropki r4c7-r4c8 white
kropki-12: kropki r8c2-r9c2 black
kropki-13: kropki r6c2-r7c2 black
kropki-14: kropki r8c8-r9c8 black
kropki-15: kropki r4c6-r4c7 black
kropki-16: kropki r5c2-r5c3 black
kropki-17: kropki r8c4-r8c5 black
kropki-18: kropki r3c5-r3c6 black
kropki-19: kropki r4c4-r5c4 black
kropki-20: kropki r2c3-r3c3 black
kropki-21: kropki r1c7-r2c7 black
kropki-22: kropki r3c3-r4c3 black
kropki-23: kropki r4c9-r5c9 black
whispers-1: whispers r1c1-r2c2-r2c3-r2c4 gap 5
whispers-2: whispers r5c4-r6c3-r7c2 gap 5
whispers-3: whispers r4c4-r5c3-r6c2 gap 5
whispers-4: whispers r3c4-r4c3-r5c2 gap 5
whispers-5: whispers r2c4-r3c3-r4c2 gap 5
whispers-6: whispers r6c4-r7c3-r8c2 gap 5
whispers-7: whispers r8c3-r8c4-r9c5 gap 5
whispers-8: whispers r4c8-r5c7-r6c6 gap 4
whispers-9: whispers r5c8-r6c7-r7c6 gap 4
whispers-10: whispers r6c8-r7c7-r8c6-r8c7-r8c8 gap 4
renban-1: renban r2c5-r2c6-r2c7-r2c8-r3c7-r4c6
renban-2: renban r3c8-r4c7-r5c6
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on green and red lines, if other rules allow. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KROPKI PAIRS- Numbers with white dots between them ae consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are shown.
