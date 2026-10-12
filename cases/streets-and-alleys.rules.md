---
format: open-rules
title: Streets and Alleys
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/streets-and-alleys
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair-1: pair r7c1-r7c2 relation {"op":"difference","value":8}
pair-2: pair r7c2-r7c3 relation {"op":"difference","value":7}
pair-3: pair r7c3-r7c4 relation {"op":"difference","value":6}
pair-4: pair r7c4-r7c5 relation {"op":"difference","value":5}
pair-5: pair r7c5-r7c6 relation {"op":"difference","value":4}
pair-6: pair r7c6-r7c7 relation {"op":"difference","value":3}
pair-7: pair r7c7-r7c8 relation {"op":"difference","value":2}
kropki-1: kropki r7c8-r7c9 colour "white"
pair-8: pair r1c1-r1c2 relation {"op":"difference","value":3}
pair-9: pair r1c2-r1c3 relation {"op":"difference","value":3}
pair-10: pair r1c4-r1c5 relation {"op":"difference","value":3}
pair-11: pair r1c5-r1c6 relation {"op":"difference","value":3}
pair-12: pair r1c7-r1c8 relation {"op":"difference","value":3}
pair-13: pair r1c8-r1c9 relation {"op":"difference","value":3}
pair-14: pair r5c4-r5c5 relation {"op":"difference","value":3}
kropki-2: kropki r5c5-r5c6 colour "white"
kropki-3: kropki r4c7-r4c8 colour "black"
kropki-4: kropki r4c8-r4c9 colour "black"
kropki-5: kropki r4c5-r4c6 colour "black"
kropki-6: kropki r3c8-r3c9 colour "black"
kropki-7: kropki r5c1-r5c2 colour "black"
whispers-1: whispers r1c8-r2c8-r3c8-r4c8-r5c8 gap 5
whispers-2: whispers r7c8-r8c8-r9c8 gap 5
whispers-3: whispers r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 gap 5
whispers-4: whispers r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2 gap 5
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers with a white dot between them have a difference of the number in the dot. Numbers with a black dot between them are in a ratio of 2:1.
