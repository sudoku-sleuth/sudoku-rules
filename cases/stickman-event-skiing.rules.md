---
format: open-rules
title: Stickman Event (Skiing)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stickman-event-skiing
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r4c6 colour "white"
kropki-2: kropki r6c4-r6c5 colour "white"
whispers-1: whispers r5c8-r6c8-r7c8 gap 5
whispers-2: whispers r4c3-r5c2-r6c1 gap 5
whispers-3: whispers r7c8-r8c8 gap 5
whispers-4: whispers r8c9-r9c8-r9c7-r9c6-r9c5 gap 5
whispers-5: whispers r8c5-r9c4-r9c3-r9c2-r9c1 gap 5
renban-1: renban r5c8-r4c7-r3c6-r4c5-r3c5-r3c4-r4c3
renban-2: renban r9c6-r8c6-r7c6-r6c5-r5c4-r6c4-r7c4-r8c3-r9c2
renban-3: renban r1c7-r2c7-r2c8-r1c8
pair-1: pair r2c3-r3c3 sum 10
pair-2: pair r2c7-r3c7 sum 10
pair-3: pair r7c3-r8c3 sum 10
pair-4: pair r8c5-r9c5 sum 5
pair-5: pair r4c4-r4c5 sum 5
pair-6: pair r7c6-r8c6 sum 5
pair-7: pair r1c7-r1c8 sum 5
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines if other rules allow. Numbers on purple lines are a set of non-repeating, consecutive numbers, in any order. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Not all possible X, V and dots are shown. Numbers in a cage sum to the number in the top left corner of the cage.
