---
format: open-rules
title: Hello (Hallo) (你好)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/hello-hallo
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c9-r5c9 colour "white"
kropki-2: kropki r8c7-r9c7 colour "white"
kropki-3: kropki r5c3-r5c4 colour "white"
arrow r2c1-r3c1 bulb ["r1c2"]
whispers-1: whispers r2c7-r2c8-r2c9-r3c9-r4c8-r5c8 gap 5
whispers-2: whispers r8c7-r8c8-r7c8-r6c8-r5c8 gap 5
whispers-3: whispers r5c9-r5c8-r5c7 gap 5
whispers-4: whispers r7c6-r6c7-r5c7-r4c7 gap 5
whispers-5: whispers r7c7-r6c6-r5c6-r4c6-r3c6-r2c6 gap 5
whispers-6: whispers r3c5-r3c6-r3c7-r4c7 gap 5
renban-1: renban r4c3-r5c3-r6c3-r7c3-r8c3-r8c2
renban-2: renban r5c4-r6c4-r7c4-r8c5
renban-3: renban r5c2-r6c2-r7c2-r8c1-r4c1-r5c1-r6c1-r7c1-r9c1
renban-4: renban r2c2-r3c2-r4c2-r4c4-r3c4-r3c3
pair-1: pair r5c7-r5c8 relation {"op":"sum","value":10}
pair-2: pair r6c8-r7c8 relation {"op":"sum","value":10}
pair-3: pair r4c6-r5c6 relation {"op":"sum","value":10}
pair-4: pair r2c7-r3c7 relation {"op":"sum","value":5}
pair-5: pair r8c8-r9c8 relation {"op":"sum","value":5}
pair-6: pair r8c9-r9c9 relation {"op":"sum","value":5}
pair-7: pair r7c5-r7c6 relation {"op":"sum","value":5}
pair-8: pair r3c1-r4c1 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers can repeat on green lines. Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers on arrows sum to the number in that arrow's circle. Numbers with a V between them sum to 5. Numbers with an X between them sum to 10. Numbers with a white dot between them are consecutive. Not all possible X, V and dots are shown.
