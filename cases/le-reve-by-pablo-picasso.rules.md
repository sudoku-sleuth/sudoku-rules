---
format: open-rules
title: Le Reve by Pablo Picasso
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/le-reve-by-pablo-picasso
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r9c2-r9c3 colour "white"
kropki-2: kropki r8c2-r9c2 colour "white"
kropki-3: kropki r7c2-r8c2 colour "white"
kropki-4: kropki r3c1-r3c2 colour "black"
kropki-5: kropki r5c4-r6c4 colour "black"
whispers-1: whispers r7c8-r6c8-r5c8-r6c7-r7c6-r7c5-r8c4 gap 5
whispers-2: whispers r4c8-r3c8-r2c7-r1c6-r1c5-r1c4-r1c3-r2c2-r3c2 gap 5
whispers-3: whispers r4c6-r3c6-r3c5-r3c4-r3c3-r3c2 gap 5
whispers-4: whispers r5c3-r6c3 gap 5
whispers-5: whispers r1c4-r2c4 gap 5
renban-1: renban r8c3-r8c4-r9c5-r9c6-r9c7-r8c8-r7c8
renban-2: renban r3c2-r4c1-r5c1-r6c1-r7c2-r8c3-r9c2-r9c1
renban-3: renban r3c6-r3c7-r4c7
pair-1: pair r5c9-r6c9 relation {"op":"sum","value":5}
pair-2: pair r5c7-r5c8 relation {"op":"sum","value":5}
pair-3: pair r1c6-r1c7 relation {"op":"sum","value":5}
pair-4: pair r4c5-r4c6 relation {"op":"sum","value":5}
pair-5: pair r8c6-r8c7 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers can repeat on green lines, if other rules allow. Numbers on yellow and red lines are each a set of non-repeating, consecutive numbers, in any order. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a V between them sum to 5. Not all possible dots and V are given.
