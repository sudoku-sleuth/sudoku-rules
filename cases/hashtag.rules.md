---
format: open-rules
title: Hashtag
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/hashtag
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c7-r8c8 colour "white"
kropki-2: kropki r1c3-r1c4 colour "white"
kropki-3: kropki r1c4-r1c5 colour "white"
kropki-4: kropki r2c2-r2c3 colour "white"
kropki-5: kropki r2c3-r2c4 colour "white"
kropki-6: kropki r2c4-r2c5 colour "white"
kropki-7: kropki r9c5-r9c6 colour "white"
kropki-8: kropki r5c9-r6c9 colour "white"
kropki-9: kropki r2c7-r2c8 colour "white"
kropki-10: kropki r6c2-r7c2 colour "white"
kropki-11: kropki r3c8-r4c8 colour "black"
kropki-12: kropki r3c2-r4c2 colour "black"
whispers-1: whispers r1c3-r2c3-r3c3-r4c3-r5c3 gap 5
whispers-2: whispers r3c5-r3c6-r3c7-r3c8-r3c9 gap 5
whispers-3: whispers r9c7-r8c7-r7c7-r6c7-r5c7 gap 5
whispers-4: whispers r7c1-r7c2-r7c3-r7c4-r7c5 gap 5
renban-1: renban r9c3-r8c3-r7c3-r6c3
renban-2: renban r3c1-r3c2-r3c3-r3c4
renban-3: renban r1c7-r2c7-r3c7-r4c7
renban-4: renban r7c9-r7c8-r7c7-r7c6
pair-1: pair r9c1-r9c2 relation {"op":"sum","value":10}
pair-2: pair r4c4-r4c5 relation {"op":"sum","value":10}
pair-3: pair r4c6-r5c6 relation {"op":"sum","value":10}
pair-4: pair r6c5-r6c6 relation {"op":"sum","value":10}
pair-5: pair r5c4-r6c4 relation {"op":"sum","value":10}
pair-6: pair r5c3-r5c4 relation {"op":"sum","value":5}
pair-7: pair r5c6-r5c7 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers on purple lines are a set of non-repeating, consecutive numbers, in any order. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all X, V and dots are given.
